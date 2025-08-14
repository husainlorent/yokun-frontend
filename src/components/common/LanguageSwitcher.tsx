import { useLanguage, type Language } from '@/hook/useLanguage';
import { useState, useRef, useEffect } from 'react';

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons';
  showLabels?: boolean;
}

export const LanguageSwitcher = ({ 
  variant = 'dropdown', 
  showLabels = false 
}: LanguageSwitcherProps) => {
  const { currentLang, languages, currentLanguageOption, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleLanguageChange = (lang: Language) => {
    switchLanguage(lang);
    setIsOpen(false);
  };

  if (variant === 'buttons') {
    return (
      <div className="flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
              currentLang === lang.code
                ? 'bg-midnight text-white shadow-sm'
                : 'text-gray-600 hover:text-midnight hover:bg-gray-100'
            }`}
          >
            {showLabels ? lang.label : lang.nativeLabel}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-midnight focus:ring-opacity-20 transition-colors"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{currentLanguageOption.nativeLabel}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1  bg-white border border-gray-200 rounded-md shadow-lg min-w-[120px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-3 py-2 text-sm transition-colors rounded ${
                currentLang === lang.code
                  ? 'bg-gray-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex flex-col">
                <span className="font-medium">{lang.nativeLabel}</span>
                {showLabels && (
                  <span className="text-xs opacity-75">{lang.label}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};