import styled from 'styled-components'

type chartProp = {
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
}

const LimitFileSearch = ({setSearchInput}: chartProp) => {

    return (
        <StyledDiv>
            <input placeholder='File Name' onChange={(e) =>  setSearchInput(() => e.target.value)} type="text" />
        </StyledDiv>
    )
}

export default LimitFileSearch

const StyledDiv = styled.div`
    
margin: 20px;
input {
    width: 300px;
    height: 30px;
    font-size: 20px;
    color: #61dafb;
    background-color: #16181D;
    border: 2px solid #121212
}

`