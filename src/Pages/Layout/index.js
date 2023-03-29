import React from "react";
import {Container} from './styles'
import Header from '../../components/Header'
import Home from '../../Pages/Home'
import About from '../About'
import Plans from '../../Pages/Plans'
import Feedback from '../../Pages/Feedback'
import Footer from '../../components/Footer'
import WhatsappButton from "../../components/WhatsappButton";

const Layout=()=>{
  return (
   <Container>
      <Header />
      <Home id="home"/>
      <About id="about"/>
      <Plans id="plans"/>
      <Feedback id="feedback"/>
      <Footer id="footer"/>
      <WhatsappButton />
   </Container>
  );
}

export default Layout;