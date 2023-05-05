import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal/Fade";

function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
          <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p><span>{description}</span></p>
            </ItemText>
            </Fade>
         
      <Buttons>
            <Fade bottom>
        <ButtonGroup>
          <LeftButton>
              {leftBtnText}
           </LeftButton>

      {rightBtnText &&
          <RightButton>
              {rightBtnText}
          </RightButton>
      }
        </ButtonGroup>
          </Fade>
          <DownArrow src ="allimages/downarrow.svg"/>
      </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
 z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("allimages/model-s.jpg");
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url("/allimages/${props.bgImage}")` }
 
    `

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index:-1;
    `
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 40px;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    
    `

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.75);
    height: 40px;
    width: 256px;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 2px;
    border-radius: 5px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 17px;
    font-weight:650;
    cousor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top:20px;
    height: 20px;
    overflow-x:hidden;
    animation: animateDown infinite 1.5s;

`
const Buttons = styled.div`


`