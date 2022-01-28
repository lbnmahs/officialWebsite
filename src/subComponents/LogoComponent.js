import React from 'react'
import styled from 'styled-components'
import { LogoImg } from '../components/AllSvg'
import { mediaQueries } from '../components/Themes'

const LogoComponent = () => {
    return(
        <Logo>
            <LogoImg />
        </Logo>
    )
}

const Logo = styled.div`
    display: inline-block;
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 3;

    ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
    `};
`
export default LogoComponent