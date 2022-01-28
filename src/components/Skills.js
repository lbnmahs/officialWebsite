import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from "./Themes";
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import Socials from '../subComponents/Socials'


const Skills = () => {
    return(
        <Box>

            <LogoComponent/>
            <Socials />
            <PowerButton />

            <Main>
                <Title>
                    <img width={40} height={40} src="/assets/svg/uiux.svg" alt="" />
                    UI&UX Designer
                </Title>
                <Description>
                    I love and enjoy creating design which speaks to the viewer. Minimal, clean and appealing to the eye.
                </Description>
                <Description>
                    <strong>I design: </strong><p> Websites, Webapps and Mobile apps</p>
                </Description>
                <Description>
                    <strong>Tools: </strong><p> Figma, Adobe XD, Miro</p>
                </Description>
            </Main>

            <Main>
                <Title>
                    <img width={40} height={40} src="/assets/svg/dev.svg" alt="" />
                    FrontEnd Developer
                </Title>
                <Description>
                    I value new ideas for the businesses or brands that I am creating for. I enjoy working with whatever is put on my plate 
                </Description>
                <Description>
                    <strong>Skills: </strong><p> Html, Css, Js, React Js, Next Js, Python, Firebase</p>
                </Description>
                <Description>
                    <strong>Tools: </strong><p> VS Code, Github, Git</p>
                </Description>
            </Main>

            
            <Word>SKILLS</Word>

        </Box>
    )
}

const Box = styled.div`
    background-color: #FFF5EC;
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    ${mediaQueries(50)`
        flex-direction:column;  
        padding:8rem 0;
        height:auto;
        &>*:nth-child(5){
            margin-top:5rem;
        }
           
    `};
    ${mediaQueries(30)`
           
        &>*:nth-child(5){
            margin-top:4rem;
        }
           
    `};
`
const Main = styled.div`
    background-color: #FFF5EC;
    color: #000;
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    border: 2px solid #000;
    border-radius: 0;
    transition: 0.5s;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &:hover{
        border-radius: 50px 0 50px 0;
        background-color: #53FDCA;
        margin-top: -10px;
        
    }

    ${mediaQueries(60)`
        height: 55vh;
        margin: 40px 0;
    `};

    ${mediaQueries(50)`
        width: 50vw;
        height: max-content;
        margin: 40px 0;

    `};
`
const Word = styled.h1`
    position: fixed;
    color: #c7c7c7;
    top: 80%;
    right: 30%;
    font-size: calc(5rem + 5vw);
    z-index: 0;
`
const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);

    &>:first-child{
        margin-left: 1rem;
    }

    ${mediaQueries(60)`
        font-size:calc(0.8em + 1vw);
    `};

    ${mediaQueries(50)`
        font-size:calc(1em + 2vw);
        margin-bottom:1rem;
    `};

    ${mediaQueries(30)`
        font-size:calc(1em + 1vw);
    `};
    ${mediaQueries(25)`
        font-size:calc(0.8em + 1vw);
        img{
            width:30px;
            height:30px;
        }
    `};
`
const Description = styled.div`
    color: #000;
    padding: 0.5rem 0;
    font-size: calc(0.5em + 1vw);

    strong{
        margin-bottom: 1rem;
    }
    p{
        margin-left: 2rem;
    }

    ${mediaQueries(50)`
        font-size: calc(0.8em + 1vw);
    `};

    ${mediaQueries(30)`
        font-size:calc(0.7em + 1vw);
    `};

    ${mediaQueries(25)`
        font-size:calc(0.5em + 1vw);
    `};
`

export default Skills