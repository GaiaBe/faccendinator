import { useTranslation } from "react-i18next";

const Header = () => {
  const {i18n} = useTranslation()
  const currentLang = i18n.language;
  return (
    <div className="flex justify-between items-center p-4 border-gray-100 border-2 sticky top-0 bg-white" >
      <h1 className="text-2xl font-bold text-primary">
        Faccendinator
      </h1>

      <div className="flex gap-2 text-gray-500">
        <button className={`${currentLang === 'it' && 'underline'}`} onClick={() => {i18n.changeLanguage('it'); localStorage.setItem('lang', 'it');}}>IT</button>
        |
        <button className={`${currentLang === 'en' && 'underline'}`} onClick={() => {i18n.changeLanguage('en'); localStorage.setItem('lang', 'en')}}>EN</button>
      </div>
    </div>
  )
}

export default Header