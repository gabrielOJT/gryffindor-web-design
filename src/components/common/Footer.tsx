import {
  IonCol,
  IonFooter,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { logoFacebook, logoYoutube, logoInstagram } from "ionicons/icons";
import React from "react";

import psits from "../../assets/img/psits-logo.jpg";

import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <>
      {/* Footer section */}
      <IonFooter mode="ios">
        <IonToolbar
          color={"primary"}
          className="dark-toolbar"
          mode="ios"
          style={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            border: "2px solid white",
          }}
        >
          {/* Social media icons */}
          <IonText className="ion-text-center">
            <h1>
              <IonIcon
                className="ion-margin-horizontal footer-icon"
                icon={logoFacebook}
              />
              <IonIcon
                className="ion-margin-horizontal footer-icon"
                icon={logoYoutube}
              />
              <IonIcon
                className="ion-margin-horizontal footer-icon"
                icon={logoInstagram}
              />
            </h1>
          </IonText>
          {/* Copyright text */}
          <IonText className="ion-text-center" color={"medium"}>
            <p style={{ fontSize: "12px" }}>
              &copy; Gryffindor web 2024 by Gab
            </p>
          </IonText>
        </IonToolbar>
      </IonFooter>
    </>
  );
};

export default Footer;
