import React from "react";
import styled from "styled-components";
import Img from "../assets/bird_2.png";

const Section = styled.div`
    height: 100vh;
    display: flex;
    flex: 1;
    background-color: #ff548f;
    scroll-snap-align: center;
    justify-content: left;
    
`

const Logo = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex: 1;
    position: relative;
    border-radius: 90%;    
`

const LogoImg = styled.img`

    
`

const Inicio = () => {
    return (
        <Section>
            Início
            <Logo>
                <LogoImg src={Img} />
            </Logo>
            
        </Section>
    );

};

export default Inicio;