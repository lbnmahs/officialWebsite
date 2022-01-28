import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { mediaQueries } from "./Themes";
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import Socials from '../subComponents/Socials'
import Intro from './Intro'

const Main = () => {

    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <MainContaimer>
            <DarkDiv click={click} />
            <Container>
                <PowerButton />
                <LogoComponent />
                <Socials />

                <Center click={click}>   
                    <img onClick = {() => handleClick()} width={click ? 80 : 200} height={click ? 80 : 200}src="/assets/svg/boatsy.svg" alt="spinner" />
                    <span>Click Here</span>
                </Center>

                <AboutMe to="/about">
                    <motion.h3
                        intial ={{
                            y: -200,
                            transition: {type: "spring", duration: 1.5, delay:1}
                        }}
                        animate ={{
                            y: 0,
                            transition: {type: "spring", duration: 1.5, delay:1}
                        }}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                    >About</motion.h3>
                </AboutMe>
                <BottomBar>
                    <Sayhello target="_blank" to={{pathname:"mailto:labanmahs2002@gmail.com"}}>
                        <motion.h3
                            intial ={{
                                y: 200,
                                transition: {type: "spring", duration: 1.5, delay:1}
                            }}
                            animate ={{
                                y: 0,
                                transition: {type: "spring", duration: 1.5, delay:1}
                            }}
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                        >Say hi</motion.h3>
                    </Sayhello>
                    <MySkills to="/skills">
                        <motion.h3
                            intial ={{
                                y: 200,
                                transition: {type: "spring", duration: 1.5, delay:1}
                            }}
                            animate ={{
                                y: 0,
                                transition: {type: "spring", duration: 1.5, delay:1}
                            }}
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                        >Skills</motion.h3>
                    </MySkills>
                </BottomBar>
                
            </Container>
            {click ? <Intro click={click} /> : null}
        </MainContaimer>
    )
}

const MainContaimer = styled.div`
    background-color: #FFF5EC;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
`

const DarkDiv = styled.div`
    background-color: #53FDCA;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index: 1;
    transition: height 0.5s ease, width 1s ease 0.5s;

    ${(props) =>
    props.click
      ? mediaQueries(50)`
            height: 50%;
            right:0;
    
            width: 100%;
            transition: width 0.5s ease, height 1s ease 0.5s;

        `
      : mediaQueries(50)`
            height: 0;
            width: 0;
    `};
`

const Container = styled.div`
    padding: 2rem;
    h3{
        color: #000;
        font-weight: 400;
        ${mediaQueries(40)`
            font-size:1.2em;

        `};

            ${mediaQueries(30)`
            font-size:1em;

        `};
    }
`

const rotate = keyframes`
    from{
        transform: rotate(0)
    }
    to{
        transform: rotate(360deg)
    }
`
const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%'};
    left: ${props => props.click ? '92%' : '50%'};
    transform: translate(-50%, -50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>:first-child{
        animation: ${rotate} infinite 3s linear;
    }
    &>:last-child{
        display: ${props => props.click ? 'none' : 'inline-block'};
        padding-top: 1rem;
    }
    @media only screen and (max-width: 50em) {
        top: ${(props) => (props.click ? "90%" : "50%")};
        left: ${(props) => (props.click ? "90%" : "50%")};
        width: ${(props) => (props.click ? "80px" : "150px")};
        height: ${(props) => (props.click ? "80px" : "150px")};
    }
    @media only screen and (max-width: 30em) {
        width: ${(props) => (props.click ? "40px" : "150px")};
        height: ${(props) => (props.click ? "40px" : "150px")};
    }
`

const AboutMe = styled(Link)`
    position: absolute;
    top: 50%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    z-index: 1;
`
const BottomBar = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`
const Sayhello = styled(Link)`
    text-decoration: none;
    z-index: 1;
`
const MySkills = styled(Link)`
    text-decoration: none;
    z-index: 1;
`

export default Main