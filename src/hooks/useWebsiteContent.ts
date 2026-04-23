import { useLanguage } from '../context/LanguageContext'
import { getWebsiteContent } from '../data/localizedContent'

export const useWebsiteContent = () => {
  const { language } = useLanguage()

  return getWebsiteContent(language)
}
