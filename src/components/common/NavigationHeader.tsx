import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonImg,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import {
  homeOutline,
  homeSharp,
  mailOutline,
  mailSharp,
  schoolOutline,
  schoolSharp,
} from "ionicons/icons";

import logo from "../../assets/img/logo.png";

import "./NavigationHeader.css";

const NavigationHeader: React.FC = () => {
  return (
    <>
      <IonHeader mode="md">
        <IonToolbar color="primary" className="dark-toolbar">
          <IonImg
            src={logo}
            style={{ width: "70px", height: "60px" }}
            slot="start"
          />
          <IonText slot="start" class="logo-name ion-hide-md-down">
            GRYFFINDOR
          </IonText>
          <IonButtons slot="end">
            <IonButton className="nav-button">
              <IonIcon icon={homeOutline} slot="start" />
              Home
            </IonButton>
            <IonButton className="nav-button">
              <IonIcon icon={schoolOutline} slot="start" />
              About
            </IonButton>
            <IonButton className="nav-button">
              <IonIcon icon={mailOutline} slot="start" />
              Contact
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default NavigationHeader;
