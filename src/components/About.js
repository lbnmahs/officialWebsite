import React from 'react'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import Socials from '../subComponents/Socials'
import { mediaQueries } from "./Themes";


const About = () => {
    return(
        <Box>
            <LogoComponent />
            <PowerButton />
            <Socials />

            <Me>
                <img src="/assets/images/about.png" alt="Me again" />
            </Me>
            
            <Main>
                I am a front end developer based in Kenya. I love creating beautiful, minimalistic and top-tier websites with an awesome user experience
                <br /> <br />
                I am interested in the frontend world because I like experessing myself with it via building great projects. 
                <br /> <br />
                I love drawing, listening to music and watching movies, series and anime. I am a fun guy if you get to know me well.
            </Main>

            <Word>ABOUT</Word>
            
        </Box>
    )
}

const Box = styled.div`
    background-color: #FFF5EC;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`

const float = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }
`
const Me = styled.div`
    position: absolute;
    top: 1%;
    right: 5%;
    width: 35vw;
    animation: ${ float } 4s ease infinite;
    z-index: 4;

    img{
        width: 100%;
        height: auto;
    }
`
const Word = styled.h1`
    position: fixed;
    color: #c7c7c7;
    top: 10%;
    left: 5%;
    font-size: calc(5rem + 5vw);
    z-index: 0;
`

const Main = styled.div`
    border: 2px solid #000;
    border-radius: 0 30px 0 30px;
    padding: 2rem;
    width: 50vw;
    height: 50vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(8rem + 8vw);
    top: 12rem;
    font-style: italic;

    ${mediaQueries(40)`
        width: 60vw;
        height: 50vh;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);


    `};
    ${mediaQueries(30)`
        width: 50vw;
        height: auto;
        backdrop-filter: none;
        margin-top:2rem;

    `};

    ${mediaQueries(20)`
        padding: 1rem;
        font-size: calc(0.5rem + 1vw);
    `};
`

export default About