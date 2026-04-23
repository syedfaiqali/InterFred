import * as React from 'react'

export type Language = 'en' | 'ar'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  isArabic: boolean
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'interfret-language'

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = React.useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    const savedLanguage = window.localStorage.getItem(STORAGE_KEY)
    return savedLanguage === 'ar' ? 'ar' : 'en'
  })

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem(STORAGE_KEY, nextLanguage)
  }, [])

  const toggleLanguage = React.useCallback(() => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }, [language, setLanguage])

  React.useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.body.classList.toggle('lang-ar', language === 'ar')
  }, [language])

  const value = React.useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      isArabic: language === 'ar',
    }),
    [language, setLanguage, toggleLanguage]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = React.useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
