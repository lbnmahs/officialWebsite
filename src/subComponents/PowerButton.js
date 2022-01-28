import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mediaQueries } from "../components/Themes";

const PowerButton = () => {
    return(
        <Power>
            <Link to="/">
                <img width={35} height={35} src="/assets/svg/power.svg" alt="power" />
            </Link>
        </Power>
    )
}
const Power = styled.div`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);

    background-color: #FFF5EC;
    padding: 0.3rem;
    border: 1px solid #000;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #53FDCA;
        box-shadow: 0 0 7px 5px #53FDCA;
    }

    &>*:first-child{
        text-decoration: none;
        color: inherit;
    }

    ${mediaQueries(40)`
        width: 2rem;
        height: 2rem;
        img{
            width:20px;
            height:20px;
        }

    `};
`
export default PowerButton