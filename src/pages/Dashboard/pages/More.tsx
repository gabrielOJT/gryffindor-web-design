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

import psits from "/img/psits-logo.jpg";

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
                  <h1 className="ion-no-margin" style={{ fontWeight: "bold" }}>
                    PSITS
                  </h1>
                </div>
                <div className="flip-card-back">
                  <IonImg
                    src={psits}
                    alt="PSITS"
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
                  <h1>What it means to be Leaders in Innovation?</h1>
                </IonText>
              </IonCardHeader>
              <IonCardContent>
                <IonText color={"dark"}>
                  <p>
                    Being leaders in innovation means being one step ahead in
                    developing new and creative ideas, products, or solutions
                    that impact greatly. It's about pushing boundaries, thinking
                    outside the box and making something new and helpful.
                    Innovation leaders take risks and accept change, knowing
                    that progress comes from exploring new areas. These leaders
                    are focused on market trends, customer needs, and
                    technological advancements, and hence they identify
                    opportunities for innovative solutions. They encourage an
                    environment for creative thinking, teamwork, and
                    experimentation, thereby empowering teams for exploring new
                    possibilities. In doing so, these innovators in leadership
                    are able to translate ideas into physical accomplishments,
                    manage resources, and realize their plans to bring their
                    innovations to the market. They understand the need to
                    protect intellectual property and to have a strategic
                    approach to commercializing and scaling their innovations.
                    What this means is the ability to be innovative requires the
                    source from where this hinges on, vision, creativity, and
                    risk-taking while ensuring the ideas actually turn into
                    realities. Ultimately, a leader's intention is that these
                    ideas create progress and shape the future in their
                    respective fields.
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
