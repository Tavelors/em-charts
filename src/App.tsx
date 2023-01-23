import "./App.css";
import Chart from "./components/Chart";
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Chart />
      <StyledDiv>
      ‎ 
      </StyledDiv>
      
    </div>
  );
}

export default App;

const StyledDiv = styled.div`
  
background-color: #282c34;
height: 500px;
  
`