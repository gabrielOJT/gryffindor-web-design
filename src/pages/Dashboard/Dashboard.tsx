import { IonContent, IonItem, IonPage, IonText } from "@ionic/react";
import React from "react";
import NavigationHeader from "../../components/common/NavigationHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "../../components/common/Footer";
import ButtonTheme from "../../components/common/ButtonTheme";
import More from "./pages/More";

const Dashbaord: React.FC = () => {
  return (
    <IonPage>
      <NavigationHeader />
      <IonContent fullscreen className="ion-padding-horizontal ion-padding-top">
        <Home />

        <IonText className="ion-text-center">
          <h1>
            <q>&nbsp;Forti Animo Estote&nbsp;</q>
          </h1>
        </IonText>

        <About />
        <IonItem color={"clear"}></IonItem>
        <More />
        <Footer />
      </IonContent>
      <ButtonTheme />
    </IonPage>
  );
};

export default Dashbaord;
