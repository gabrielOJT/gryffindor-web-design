import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
} from "@ionic/react";
import React from "react";
import "./More.css";

import gry from "/img/logo-gryffindor.webp";

const More: React.FC = () => {
  return (
    <>
      <IonGrid>
        <IonRow className="ion-margin-top">
          <IonCol size="12">
            <div className="flip-card" style={{ margin: "auto" }}>
              <div className="flip-card-inner">
                <div
                  className="flip-card-front logo-card"
                  style={{
                    height: "100px",
                    width: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h2 className="ion-no-margin" style={{ fontWeight: "bold" }}>
                    TRAITS
                  </h2>
                </div>
                <div className="flip-card-back">
                  <IonImg
                    src={gry}
                    alt="GRYFFINDOR"
                    class="logo-card"
                    style={{ width: "100px" }}
                  />
                </div>
              </div>
            </div>

            <div
              className="line"
              style={{
                height: "50px",
                width: "1.5px",
                margin: "auto",
              }}
            ></div>

            <IonCard className="card-more ion-padding ion-no-margin ion-margin-bottom">
              <IonCardHeader>
                <IonText className="ion-text-center" color={"dark"}>
                  <h1>What are the traits of a Gryffindor?</h1>
                </IonText>
              </IonCardHeader>
              <IonCardContent>
                <IonText color={"dark"}>
                  <p>
                    The Gryffindor house emphasised the traits of courage as
                    well as "daring, nerve, and chivalry", and thus its members
                    were generally regarded as brave, though sometimes to the
                    point of recklessness. Some Gryffindors had also been noted
                    to be short-tempered. Notably, Gryffindor house contributed
                    many members to Dumbledore's Army and the Order of the
                    Phoenix, although this may have been because the main
                    members made it a point not to associate with other houses.
                    According to Phineas Nigellus Black, members of other
                    houses, particularly Slytherin, sometimes felt that
                    Gryffindors engaged in "pointless heroics". Another
                    Slytherin, Severus Snape, considered many Gryffindors to be
                    self-righteous and arrogant, with no regard for rules.
                  </p>
                </IonText>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default More;
