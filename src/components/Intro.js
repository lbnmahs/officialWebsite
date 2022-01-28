import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mediaQueries } from "./Themes";

const Intro = () => {
    return(
        <Box
            initial={{height:0}}
            animate={{height:'55vh'}}
            transition={{type:'spring', duration:2, delay:0}}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h2>I'm Laban.</h2>
                    <h6>I design and develop beautiful and minimalistic websites</h6>
                </Text>
            </SubBox>

            <SubBox>
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:1, delay:2}}
                >
                    <img className="pic" src="/assets/images/home.png" alt="Profile picture"/>
                </motion.div>
            </SubBox>
        </Box>
    )
}

const Box = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 40vh;
    display: flex;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    z-index: 1;
    border: 2px solid #000;
    border-radius: 0 30px 0 30px;

    ${mediaQueries(1200)`
        width: 65vw;
    `};

    ${mediaQueries(60)`
        width: 70vw;
    `};

    ${mediaQueries(50)`
        width: 50vw;
        background-size: 100% 2px;

        flex-direction:column;
        justify-content:space-between;
    
    `};

    ${mediaQueries(40)`
        width: 60vw;
        height: 60vh;
    `};

    ${mediaQueries(30)`
        width: 65vw;
    `};
    ${mediaQueries(20)`
        width: 60vw;
    `};

    @media only screen and (max-width: 50em) {
        background: none;
        border: 2px solid #000;
        background-size: 2px 100%;
        background-position: 0 0, 100% 0;
        background-repeat: no-repeat;
    }
`

const SubBox = styled.div`
    position: relative;
    width: 50%;
    display: flex;

    .pic{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 100%;
        height: auto;
    }
    ${mediaQueries(50)`
      width: 100%;
        height: 50%;
        .pic {
            width: 70%;
        }

    `};

    ${mediaQueries(40)`
        .pic {
            width: 80%;         
        }

    `};

    ${mediaQueries(30)`
        .pic {       
            width: 90%; 
        }

    `};
    ${mediaQueries(20)`
        .pic {
            width: 80%;  
        }

    `};
`

const Text = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;

    font-size: calc(1em + 1.5vw);
    h2{
        font-weight: 600;
        font-size: calc(1rem + 1.5vw);
    }
    &>:last-child{
        color: #737373;
        font-size: calc(0.2rem + 1.5vw);
        font-weight: 400;
        ${mediaQueries(40)`
            font-size: calc(0.7rem + 1vw);
        `};
    }
    ${mediaQueries(40)`
        font-size: calc(1rem + 1.5vw);
    `};
    ${mediaQueries(20)`
        padding: 1rem;
    `};
`
export default Intro