import React from "react";
import {Container} from './styles'
import Header from '../../Sections/Header'
import Home from '../../Sections/Home'
import About from '../About'
import Plans from '../../Sections/Plans'
import Feedback from '../../Sections/Feedback'
import Footer from '../../Sections/Footer'
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