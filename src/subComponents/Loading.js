import React from 'react'
import styled from 'styled-components'

const Loading = () => {
    return(
        <Box>
            <h1>Loading...</h1>
        </Box>
    )
}

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #FFF5EC;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Loading