import { IonFab, IonFabButton, IonIcon, useIonRouter } from "@ionic/react";
import { moonSharp, sunnySharp } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Storage } from "@ionic/storage";

const dbStorage = new Storage();
dbStorage.create();

interface ButtonThemeProps {
  updateState?: any;
}

const ButtonTheme: React.FC<ButtonThemeProps> = ({ updateState }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const router = useLocation();

  const checkUrl = () => {
    router.pathname === "";
  };

  useEffect(() => {
    const initializeTheme = async () => {
      const selectedTheme = await dbStorage.get("theme");
      setIsDarkMode(selectedTheme);
      toggleDarkTheme(selectedTheme);
    };

    initializeTheme();
  }, []);

  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle("dark", shouldAdd);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    toggleDarkTheme(newTheme);
    dbStorage.set("theme", newTheme);
  };

  useEffect(() => {
    const initializeTheme = async () => {
      const selectedTheme = await dbStorage.get("theme");
      setIsDarkMode(selectedTheme);
    };

    initializeTheme();
  }, [checkUrl]);

  return (
    <>
      <IonFab slot="fixed" vertical="bottom" horizontal="end" color="primary">
        <IonFabButton size="small" onClick={toggleTheme} color="primary">
          <IonIcon
            icon={isDarkMode ? moonSharp : sunnySharp}
            color="light"
          ></IonIcon>
        </IonFabButton>
      </IonFab>
    </>
  );
};

export default ButtonTheme;
