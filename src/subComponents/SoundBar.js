import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'


const SoundBar = () => {
    const ref = useRef(null);
    const[ click, setClick ] = useState(false);

    const handleClick = () => {
        setClick(!click);
        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    return(
        <Box onClick={() => handleClick()}>
            <Sound>
                <Line click={click} />
                <Line click={click} />
                <Line click={click} />
                <Line click={click} />
                <Line click={click} />
            </Sound>
            
            <audio src="/assets/audio/jojo.mp3" ref={ref} loop />
        </Box>
    )
}
const Box = styled.div`
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    z-index: 10;
    cursor: pointer;

    
`
const Sound = styled.div`
    display: flex;
    align-items: center;

    &>*:nth-child(1){
        animation-delay: 0.4s;
    }
    &>*:nth-child(2){
        animation-delay: 0.3s;
    }
    &>*:nth-child(3){
        animation-delay: 0.9s;
    }
    &>*:nth-child(4){
        animation-delay: 0.5s;
    }
    &>*:nth-child(5){
        animation-delay: 0.2s;
    }
    
`

const play = keyframes`
    0%{
        transform: scaleY(1);
    }
    50%{
        transform: scaleY(2);
    }
    100%{
        transform: scaleY(1);
    }
`
const Line = styled.div`
    background: transparent;
    border: 2px solid #000;
    border-radius: 4px;

    animation: ${play} 1s ease infinite;
    animation-play-state: ${props => props.click ? "running" : "paused"};
    height: 1rem;
    width: 3px;
    margin: 0 0.1rem;
`
export default SoundBar
