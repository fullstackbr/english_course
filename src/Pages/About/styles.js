import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 8rem;
background: linear-gradient(161.64deg, #4F91F3 -5.09%, #2397E0 115.77%);
`;

export const Title = styled.h2`
width: 325px;
height: 110px;
left: 104px;
top: 40px;
font-family: 'Lilita One';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 55px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
`

export const TextBox = styled.div`
width: 90%;
height: 418px;
display: flex;
justify-content: center;
left: 22px;
top: 178px;
background: rgba(255, 255, 255, 0.06);
backdrop-filter: blur(5px);
border-radius: 24px;
z-index: 10;

p{
width: 90%;
font-family: 'Rubik';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 32px;
display: flex;
align-items: center;
text-align: justify;
color: #FFFFFF;
}
`

export const ImageDiv = styled.div`
display: flex;
height: 100%;
width: 100%;
`

export const RocketImage = styled.img`
height: 500px;
width: 500px;
margin-top: -26rem;
`