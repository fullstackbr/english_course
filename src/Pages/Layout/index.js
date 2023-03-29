import React from "react";
import {Container} from './styles'
import Header from '../../components/Header'
import Home from '../../Pages/Home'
import Plans from '../../Pages/Plans'
import Feedback from '../../Pages/Feedback'
import Footer from '../../components/Footer'
import WhatsappButton from "../../components/WhatsappButton";
import About from "../About";


const Layout=()=>{
  return (
    <div>
 <Container>
      <Header/>
      <Home id="home"/>
      {/* <About id="about"/>
      <Plans id="plans"/>
      <Feedback id="feedback"/>
      <Faq id="faq" />
      <Footer id="footer"/>
      <WhatsappButton /> */}
   </Container>
   <About />
    </div>
  
   
  );
}

export default Layout;