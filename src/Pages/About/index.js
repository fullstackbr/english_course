import React from "react";
import * as S from "./styles";
import rocket from "../../assets/Blowing_rocket_3d.png";

const About = () => {
  return (
    <S.Container>
      <S.Title>Por que estudar com a gente?</S.Title>
      <S.TextBox>
        <p>
          Olá! Você já pensou em melhorar sua fluência em inglês e ampliar suas
          oportunidades pessoais e profissionais? Se sim, eu tenho a solução
          para você! Nosso curso é totalmente flexível e adaptável à sua rotina.
          Com aulas interativas e recursos personalizados.
        </p>
      </S.TextBox>
      <S.ImageDiv>
        <S.RocketImage src={rocket} />
      </S.ImageDiv>
    </S.Container>
  );
};

export default About;
