import React from 'react'
import styled from "styled-components";
import Section from "./Section"
function Home() {
  return (
    <Container>
       <Section 
       title="Model S"
       description= "View Inventory"
       backgroundImg= "model-s.jpg"
       leftBtnText="Order Now"
       rightBtnText="Demo Drive">
       </Section>

       <Section 
       title="Model Y"
       description= "View Inventory"
       backgroundImg= "model-y.jpg"
       leftBtnText="Order Now"
       rightBtnText="Demo Drive">
       </Section>

       <Section 
       title="Model X"
       description= "View Inventory"
       backgroundImg= "model-x.jpg"
       leftBtnText="Order Now"
       rightBtnText="Demo Drive">
       </Section>

       <Section 
       title="Lowest cost Solar Panels"
       description= "Money-back gurantee"
       backgroundImg= "solar-panel.jpg"
       leftBtnText="Order Now"
       rightBtnText="Learn More">
       </Section>
       
       <Section title="Solar for New Roofs"
       description= "Solar Roof Costs Less Than a new Roof Plus Solar Panels"
       backgroundImg= "solar-roof.jpg"
       leftBtnText="Order Now"
       rightBtnText="Learn More">

       </Section>
       <Section
        title="Accessories"
        description= ""
        backgroundImg= "accessories.jpg"
        leftBtnText="Order Now"
        >

       </Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    
`