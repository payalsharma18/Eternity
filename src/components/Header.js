import React, { useState } from 'react'
import styled from 'styled-components'
import {Menu} from "@material-ui/icons";
import { Close } from "@material-ui/icons";
import { selectCars }   from "../features/car/carSlice";
import { useSelector } from 'react-redux';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector((selectCars) => selectCars.cars);
 
  return (
   
      <Container>
        ETERNITY
        
      <Menus>
        {cars &&
          cars.map((cars, index) => (
            <a key={index} href="#">
              {cars}
            </a>

       ) )}
        <a href='#'>Model S</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
        <a href='#'>Model 3</a>
       
      </Menus>

      <RightMenu>
        <a href='#'>Shop</a>    
        <a href='#'>Menu</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}></CustomMenu>
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrap>
          <CustomClose onClick={()=>setBurgerStatus(false)}>

          </CustomClose>
        </CloseWrap>
         {cars && cars.map((car, index) => (
         <li key={index}> <a href = "#">{car}</a></li>

       ) )}
        <li><a href='#'>Existing Inventory</a></li> 
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Demo Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Fleet</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Semi</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Commercial Energy</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Careers</a></li>
        <li><a href='#'>Events</a></li>
        <li><a href='#'>Support & Help</a></li>
        <li><a href='#'>Investor Relations</a></li>
    
      </BurgerNav>

      </Container>
     
    
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position:fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 35px;
  top: 0;
  left: 0;
  right:0;
`

const Menus = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  // margin-right:140px;
  flex: 1;


a{
  font-size: 20px;
  font-weight: 550;
  text-transform : uppercase;
  padding: 0 15px;
  flex-wrap: nowrap;

  @media(max-width: 768px) {
    display:none;
  }
}
`
const RightMenu = styled.div`
  display:flex;
  align-items: center;
 

  a{
    font-size: 20px;
    font-weight: 560;
    text-transform : uppercase;
    margin-right: 21px;
    cursor: pointer;
    flex-wrap:nowrap;
    
  }
  `

const BurgerNav = styled.div`
    overflow: scroll;
    position: fixed;
    background: white;
    top:0;
    bottom: 0;
    right:0;
    width:300px;
    z-index: 16;
    list-style:none;
    padding:20px;
    // font-size: 14px;
    // display: flex;
    // flex-diection: column;
    text-align:start;
    transition: transform 0.2s;
    transform: ${props => props.show ? 'translateX(0)' :'translateX(100%)'};
    li{
      padding:12px 0;
      border-bottom: 1px solid rgba(0,0,0, .2);
      

      a{
        font-weight:600;
        font-size:15px;
      }
    }
`



const CustomClose = styled(Close)`
cursor: pointer;

`

const CloseWrap = styled.div`
    display: flex;
    justify-content: flex-end;


`
const CustomMenu = styled(Menu)`
    cursor: pointer;
`