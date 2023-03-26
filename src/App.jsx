import { useState } from 'react';
import './App.css';
import styled from 'styled-components'
import HomeComponent from './modules/home';

// margin was 30px 0 10px
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

margin: 20px 0 10px;
font-family: Montserrat;
`;

const Header = styled.span`
  color: teal;
  font-size: 35px;
  font-weight:bold;

`;

function App() {
   const [count, setCount] = useState(0)

  return (
    <Container>
      <Header>Expense Tracker</Header>
      <HomeComponent/>
    </Container>
  )
}

export default App
