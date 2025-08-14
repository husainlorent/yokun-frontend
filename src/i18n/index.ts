import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const STORAGE_KEY = 'language';

const storage = {
    get: (): string => localStorage?.getItem?.(STORAGE_KEY) ?? 'uz',
    set: (lang: string): void => localStorage?.setItem?.(STORAGE_KEY, lang)
};

const resources = {
    uz: {
        common: {
            search: "Qidiruv",
            latestNews: "Dolzarb yangiliklar",
            allNews: "Barcha yangiliklar",
            articles: "Maqolalar",
            youthDiary: "Yoshlar kundaligi",
            officialWebsite: "rasmiy veb sayti",
            developed: "Ishlab chiqilgan",
            allRightsReserved: "Barcha huquqlar himoyalangan. Ushbu veb-saytdagi ma'lumotlardan foydalanganda havola ko'rsatilishi shart.",
            home: "Asosiy",
            news: "Yangiliklar",
            readMore: "Batafsil",
            foodArticle: "ta maqola",
            similarNews: "O'xshash yangiliklar",
            backToHome: "Asosiy sahifaga qaytish",
            similarArticles: "O'xshash maqolalar",
            errorOccurred: "Xatolik yuz berdi",
            pageNotLoaded: "Sahifa yuklanmadi. Iltimos, qayta urinib ko'ring",
            reload: "Qayta yuklash",
            dataLoadError: "Ma'lumotlarni yuklashda muammo bo'ldi yoki ma'lumotlar mavjud emas",
            previous: "Oldingi",
            next: "Keyingi",
            noSimilarArticles: "O'xshash maqolalar topilmadi",
            noSimilarNews: "O'xshash yangiliklar topilmadi",
            seo: {
                homeTitle: "Bosh sahifa",
                homeDescription: "Yoshlar kundaligida eng so'nggi yangiliklar va maqolalar",
                homeOgTitle: "Yoshlar kundaligi - Bosh sahifa",
                homeOgDescription: "Yoshlar kundaligida eng so'nggi va qiziqarli yangiliklarni toping.",
                siteName: "Yoshlar kundaligi"
            },
            noArticles: "Maqolalar topilmadi",
            noArticlesInCategory: "Bu kategoriyada hozircha maqolalar mavjud emas",
        }
    },
    kr: {
        common: {
            search: "Қидирув",
            latestNews: "Долзарб янгиликлар",
            allNews: "Барча янгиликлар",
            articles: "Мақолалар",
            youthDiary: "Ёшлар кундалиги",
            officialWebsite: "расмий веб сайти",
            developed: "Ишлаб чиқилган",
            allRightsReserved: "Барча ҳуқуқлар ҳимояланган. Ушбу веб-сайтдаги маълумотлардан фойдаланганда ҳавола кўрсатилиши шарт.",
            home: "Асосий",
            news: "Янгиликлар",
            readMore: "Батафсил",
            foodArticle: "та мақола",
            similarNews: "Ўхшаш янгиликлар",
            backToHome: "Асосий саҳифага қайтиш",
            similarArticles: "Ўхшаш мақолалар",
            errorOccurred: "Хатолик юз берди",
            pageNotLoaded: "Саҳифа юкланмади. Илтимос, қайта уриниб кўринг",
            reload: "Қайта юклаш",
            dataLoadError: "Маълумотларни юклашда муаммо бўлди ёки маълумотлар мавжуд эмас",
            previous: "Олдинги",
            next: "Кейинги",
            noSimilarArticles: "Ўхшаш мақолалар топилмади",
            noSimilarNews: "Ўхшаш янгиликлар топилмади",
            seo: {
                homeTitle: "Бош саҳифа",
                homeDescription: "Ёшлар кундалигида энг сўнгги янгиликлар ва мақолалар",
                homeOgTitle: "Ёшлар кундалиги - Бош саҳифа",
                homeOgDescription: "Ёшлар кундалигида энг сўнгги ва қизиқарли янгиликларни топинг.",
                siteName: "Ёшлар кундалиги"
            },
            noArticles: "Мақолалар топилмади",
            noArticlesInCategory: "Бу категорияда ҳозирча мақолалар мавжуд эмас",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: storage.get(),
        fallbackLng: 'uz',
        interpolation: {
            escapeValue: false
        }
    });

i18n.on('languageChanged', storage.set);

export default i18n;