import React from "react";
import * as S from './styles'
import Header from '../../components/Header'
import airplane from '../../assets/airplane.png'
import backpack from '../../assets/backpack.png'
import spiral from '../../assets/espiral.png'
import woman from '../../assets/woman-holding-books.png'

const Home=()=>{
  return (
   <S.Container>
      <S.AirplaneDiv>
        <S.Airplane src={airplane} alt="airplane"/>
      </S.AirplaneDiv>
      <S.Title>Estude inglês em qualquer lugar</S.Title>
      <S.Button>Inscreva-se</S.Button>
      <S.FiguresDiv>
        <S.BackPack src={backpack} alt="bag"/>
        <S.Spiral src={spiral} alt="spiral"/>
      </S.FiguresDiv>
      <S.BottomBoard>
        <S.Woman src={woman} alt="Woman holding books"/>
      </S.BottomBoard>
   
   </S.Container>
  );
}

export default Home;