import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { queryClient } from '@/utils/queryClient';

export type Language = 'uz' | 'kr';

export interface LanguageOption {
    code: Language;
    label: string;
    nativeLabel: string;
}

export const LANGUAGES: LanguageOption[] = [
    { code: 'uz', label: 'Uzbek Latin', nativeLabel: "O'zbek" },
    { code: 'kr', label: 'Uzbek Cyrillic', nativeLabel: 'Ўзбек' }
];

export const useLanguage = () => {
    const { i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const currentLang = (i18n.language || 'uz') as Language;
    const isKyrillic = currentLang === 'kr';

    const getCurrentLanguageOption = (): LanguageOption => {
        return LANGUAGES.find(lang => lang.code === currentLang) || LANGUAGES[0];
    };

    const switchLanguage = async (newLang: Language) => {
        if (newLang === currentLang) return;
        try {
            queryClient.clear();
            queryClient.invalidateQueries();
            const currentPath = location.pathname;
            let newPath: string;

            if (newLang === 'kr') {
                newPath = currentPath.startsWith('/kr') ? currentPath : '/kr' + currentPath;
            } else {
                newPath = currentPath.startsWith('/kr')
                    ? currentPath.replace('/kr', '') || '/'
                    : currentPath;
            }

            await i18n.changeLanguage(newLang);
            navigate(newPath);
        } catch (error) {
            console.error('Error switching language:', error);
        }
    };

    return {
        currentLang,
        isKyrillic,
        languages: LANGUAGES,
        currentLanguageOption: getCurrentLanguageOption(),
        switchLanguage
    };
};