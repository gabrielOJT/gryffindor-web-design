import { IonButton, IonCard, IonIcon, IonImg, IonText } from "@ionic/react";
import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import slide1 from "/img/slides/Slide1.webp";
import slide2 from "/img/slides/Slide2.webp";
import slide3 from "/img/slides/Slide3.webp";
import slide4 from "/img/slides/Slide4.webp";
import slide5 from "/img/slides/Slide5.webp";
import { chevronBackCircle, chevronForwardCircle } from "ionicons/icons";
import "./ImageSlider.css";

const ImageSlider: React.FC = () => {
  const slideImages = [
    { src: slide1, caption: "Slide 1" },
    { src: slide2, caption: "Slide 2" },
    { src: slide3, caption: "Slide 3" },
    { src: slide4, caption: "Slide 4" },
    { src: slide5, caption: "Slide 5" },
  ];

  // States for responsive modal in dekstop view and mobile view
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  window.addEventListener("resize", () => {
    setIsDesktop(window.innerWidth > 768);
  });

  const properties = {
    prevArrow: (
      <IonButton size="small" color={"clear"} shape="round">
        <IonIcon size="large" icon={chevronBackCircle} />
      </IonButton>
    ),
    nextArrow: (
      <IonButton size="small" color={"clear"} shape="round">
        <IonIcon size="large" icon={chevronForwardCircle} />
      </IonButton>
    ),
  };

  return (
    <>
      <Slide
        {...properties}
        indicators
        infinite
        canSwipe
        transitionDuration={500}
        duration={3000}
      >
        {slideImages.map((image, index) => (
          <>
            <IonCard
              key={index}
              className="card-slider"
              style={{ height: isDesktop ? "80dvh" : "auto" }}
            >
              <IonImg
                src={image.src}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <IonCard className="image-slider-caption ion-no-margin">
                <IonText className="ion-text-center">
                  <h1>&nbsp;</h1>
                </IonText>
              </IonCard>
            </IonCard>
          </>
        ))}
      </Slide>
    </>
  );
};

export default ImageSlider;
