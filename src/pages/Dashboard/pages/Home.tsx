import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonRow,
  IonText,
} from "@ionic/react";
import gryffindor from "../../../assets/img/logo-gryffindor.webp";
import psits from "../../../assets/img/psits-logo.jpg";

import "./Home.css";
import { arrowForwardCircleSharp } from "ionicons/icons";

const Home: React.FC = () => {
  // States for responsive modal in dekstop view and mobile view
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  window.addEventListener("resize", () => {
    setIsDesktop(window.innerWidth > 768);
  });

  return (
    <>
      <IonGrid style={{ maxHeight: "fit-content" }}>
        <IonRow className="ion-justify-content-around">
          <IonCol sizeLg="4" sizeXs="12" className="ion-margin-right">
            <IonCard mode="ios" className="logo-card">
              <IonCardContent>
                <IonImg src={gryffindor} />
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol
            sizeLg="7"
            sizeMd="12"
            sizeXs="12"
            className="ion-align-items-center"
          >
            <IonText>
              <h1
                className={
                  isDesktop ? "home-title-desktop" : "home-title-mobile"
                }
              >
                Welcome to Gryffindor House
              </h1>
              <p
                className={
                  isDesktop ? "home-quotes-desktop" : "home-quotes-mobile"
                }
              >
                <i>
                  <q>
                    &nbsp; You might belong in Gryffindor, Where dwell the brave
                    at heart, Their daring, nerve, and chivalry Set Gryffindors
                    apart. &nbsp;
                  </q>
                </i>
                <p>— Sorting Hat</p>
              </p>
              <br />
              <div className="home-caption-container">
                <p className="home-caption">
                  Established by Godric Gryffindor, this noble House is renowned
                  for its courage, chivalry, and daring spirit. Gryffindors
                  embody unwavering bravery and a fierce loyalty that inspires
                  all. From legendary heroes to trailblazing innovators,
                  Gryffindor has produced remarkable witches and wizards who
                  have shaped the magical world. Upholding profound values of
                  honor, friendship, and determination, this House continues to
                  mold the leaders of tomorrow. Discover the rich legacy and
                  glorious traditions that make Gryffindor truly exceptional.
                </p>
              </div>
            </IonText>

            <IonButton mode="ios" size="large">
              <IonIcon icon={arrowForwardCircleSharp} slot="end" />
              Explore
            </IonButton>
          </IonCol>
        </IonRow>
        <IonItem color={"clear"}></IonItem>
      </IonGrid>
    </>
  );
};

export default Home;
