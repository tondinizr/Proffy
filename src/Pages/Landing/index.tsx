import React from "react";

import Logo from "../../Assets/logo.svg";
import LandingImg from "../../Assets/landing.svg";

import StudyIcon from "../../Assets/icons/study.svg";
import GiveClassesIcon from "../../Assets/icons/give-classes.svg";
import PurpleHeartIcon from "../../Assets/icons/purple-heart.svg";

import "./styles.css";

export default function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img
          src={LandingImg}
          alt="Plataforma de Estudo"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="" className="study">
            <img src={StudyIcon} alt="Estudar" />
            Estudar
          </a>
          <a href="" className="give-classes">
            <img src={GiveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </a>{" "}
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas
          <img src={PurpleHeartIcon} alt="S2" />
        </span>
      </div>
    </div>
  );
}