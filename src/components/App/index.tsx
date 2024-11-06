import { Switch } from "antd";
import { useTranslation } from "react-i18next";
import "./styles.css";

export const App = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;

  const toggleLanguage = () => {
    if (currentLanguage === "cs") {
      i18n.changeLanguage("en");
      console.log("čeština!");
    } else if (currentLanguage === "en") {
      i18n.changeLanguage("cs");
      console.log("angličtina!");
    }
  };

  return (
    <div className="layout">
      <h1>{t("h1")}</h1>
      <Switch onChange={toggleLanguage} />
    </div>
  );
};
