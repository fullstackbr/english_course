import React from "react"
import { Container, ContainerTitle, Title } from "./styles"
import megaFone from "../../assets/megaFone.svg"
import Questions from "../../components/Questions"

const Faq = () => {
    return (
        <Container>
            <ContainerTitle>
                <Title>FAQ</Title>
                <img
                    src={megaFone}
                    alt="megafone"
                />
            </ContainerTitle>

            <Questions /> 
            
        </Container>
    )
}

export default Faq

