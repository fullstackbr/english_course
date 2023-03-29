import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    min-height: 100vh;
    background-image:linear-gradient(rgba(150, 201, 233, 1), rgba(79, 145, 243, 1));
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`;

export const AirplaneDiv = styled.div`
    width:100vw;
    height:200px;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    padding: 24px;
`;


export const Airplane = styled.img`
    width: 30%;
    max-width:200px;
    min-width:100px;
`;


export const Title = styled.h1`
    font-size:54px;
    color:#ffffff;
    text-align:center;
    text-shadow:1px 1px #222222;
    letter-spacing:1px;
    margin-bottom: 50px;
`;

export const Button = styled.button`
    width:300px;
    height:70px;
    max-width:70%;
    padding:12px 24px;
    border-radius:25px;
    background-image:linear-gradient(rgba(238, 97, 222, 1), rgba(184, 65, 170, 1));
    font-size:32px;
    color:#ffffff;
    text-shadow:1px 1px #222222;
`;

export const FiguresDiv = styled.div`
    width:100vw;
    height: 300px;
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    justify-content:space-between;
    padding-left: 10px;
    padding-bottom:40px;
`;

export const BackPack = styled.img`
    width: 40%;
    max-width:250px;
`;
 
export const Spiral = styled.img`
    width:50%;
    max-width:350px;
`;

export const BottomBoard = styled.div`
    width:100vw;
    height: 400px;
    z-index:5;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:center;
    border-radius: 60px;
    background-color:rgba(159, 248, 254, 0.27);
    backdrop-filter:blur(3px);
    position:relative;
    bottom:0;
    margin-top:-120px;

    @media (min-width:1020px){
        display:none;
    }
`;

export const Woman = styled.img`
    max-height:100%
`;






