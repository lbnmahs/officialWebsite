import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { mediaQueries } from "../components/Themes";


const Socials = () => {
    return(
        <Icons>
            <motion.div
               initial={{transform:"scale(0)"}}
               animate={{scale:[0, 1, 1.5, 1]}}
               transition={{type:'spring', duration:1, delay:1}} 
            >
                <Link target="_blank" to={{pathname:"https://github.com/lbnmahs"}}>                   
                    <img width={30} height={30} src="/assets/svg/github.svg" alt="github" />
                </Link>
            </motion.div>

            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0, 1, 1.5, 1]}}
                transition={{type:'spring', duration:1, delay:1.2}} 
            >
                <Link target="_blank" to={{pathname:"https://www.instagram.com/lbn_mahs/"}}>
                    <img width={30} height={30} src="/assets/svg/insta.svg" alt="instagram" />
                </Link>
            </motion.div>

            <motion.div
                initial={{transform:"scale(0)"}}
                animate={{scale:[0, 1, 1.5, 1]}}
                transition={{type:'spring', duration:1, delay:1.3}} 
            >
                <Link target="_blank" to={{pathname:"https://twitter.com/LbnLcd"}}>
                    <img width={30} height={30} src="/assets/svg/twitter.svg" alt="twitter" />
                </Link>
            </motion.div>

            <Line 
            initial={{height:0}}
            animate={{height:'9rem'}}
            transition={{type:'spring', duration:1, delay:0.8}}
            />
        </Icons>
    )
}

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    &>*:not(:last-child){
        margin: 0.5rem 0;

        ${mediaQueries(20)`
            margin: 0.3rem 0;
        `};
    }

    ${mediaQueries(40)`
        left: 1rem;

        img{
            width:20px;
            height:20px
        }

    `};
`
const Line = styled(motion.span)`
    width: 2px;
    height: 9rem;
    background-color: #000;
`
export default Socials