import React from "react"
import questionMark from "../../assets/questionMark.svg"
import arrowDown from "../../assets/arrowDown.svg"
import { Container, QuestionMark } from "./styles"


const Questions = () => {
    return (
        <Container>
            <QuestionMark src={questionMark} alt="Ponto de interrogação" style={{background: "red"}} />
            <p>Lorem ipsum dolor sit amet?</p>
            <img src={arrowDown} alt="seta para baixo, abre drop down" />
        </Container>
    )
}

export default Questions