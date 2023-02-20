import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { postLimitFile } from '../../utils/api'

type chartProp = {
    setlimitFileData: React.Dispatch<React.SetStateAction<{
        id: number;
        filename: string;
        name: string;
        data: string;
    }[]>>
    createLimitData: boolean
    setCreateLimitData: React.Dispatch<React.SetStateAction<boolean>>
}
const CreateLimitData = ({createLimitData, setCreateLimitData, setlimitFileData}: chartProp) => {
const [warning, setWarning] = useState<boolean>(false)
const [submitted, setSubmitted] = useState<boolean>(false)
const [inputAmount, setinputAmount] = useState(3)
const [inputList, setInputList] = useState<any[]>([['',''], ['',''], ['','']])
const [fileNameInput, setFileNameInput] = useState<string>()
const [fileNameInputWarning, setFileNameInputWarning] = useState<boolean>(false)
const [limitTypeInput, setLimitTypeInput] = useState<string>()
const [limitTypeInputWarning, setLimitTypeInputWarning] = useState<boolean>(false)
const [passwordInput, setPasswordInput] = useState<string>()
const [passwordInputWarning, setPasswordInputWarning] = useState<boolean>(false)
const [errorMessage, setErrorMessage] = useState<string>("")

    const inputChange = (e: any, i: number, j:number) => {  
        setInputList((currList) => {
            let newList = [...currList]
            newList[i][j] = +e.target.value
            return newList
        })
        
        
    }
    
    let limitFileString = ''


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        limitFileString = ''
        let stringChecker = false
        for(let i=0; i<inputList.length; i++) {
            if (inputList[i][0] === '' && inputList[i][1] === ''){
                setWarning(true)
                stringChecker = true
                break
            }
            
            if (inputList[i][0] !== '' && inputList[i][0] !== '') {
                limitFileString += inputList[i][0].toString()
                limitFileString += ';'
                limitFileString += inputList[i][1].toString()
                limitFileString += '\n'
            }
        }
        
        
        if (!limitTypeInput) {
            setLimitTypeInputWarning(true) // check if limit type is empty then change input colour
        }
        if (!fileNameInput) {
            setFileNameInputWarning(true) // check if file name is empty then change input colour
        }
        if (!passwordInput) {
            setPasswordInputWarning(true) // check if password is empty then change input colour
        }
        if(stringChecker && limitTypeInput && fileNameInput && passwordInput) {
            console.log("contains Strings");
        } else {                                // if all inputs contain something, move on
                       
            const limit = await postLimitFile(fileNameInput!, limitTypeInput!, 
                limitFileString, passwordInput!)
                console.log(limit);
                
            setErrorMessage("")
            if (limit.response.status === 401) {
                setPasswordInputWarning(true)
                setSubmitted(false)
                setErrorMessage("Wrong Password!")
            } else {
                setPasswordInputWarning(false)
            }

            if (limit.response.status === 409) {
                setFileNameInputWarning(true)
                setSubmitted(false)
                setErrorMessage("File Name already exists!")
            }  else {
                setFileNameInputWarning(false)
            }
            
            
            if (limit.response.status === 200) {
                
                setErrorMessage("")
                setFileNameInputWarning(false)
                setPasswordInputWarning(false)
                setWarning(false)
                setSubmitted(true)
                setTimeout(() => {
                    setSubmitted(false)
                }, 3000)
                setFileNameInput("")
                setLimitTypeInput("")
                setPasswordInput("")
                setInputList([['',''], ['',''], ['','']])
                
                setlimitFileData((currData) => [...currData!, limit.data])
                

            }
            
        }

        
    }
    
    return (
        <StyledPopup 

        style={{display: createLimitData ? '' : 'none'}} >
          <div  className='outer-div' >
          <form>
          <label>Create Limit File</label>
          <div>
          <button onClick={handleSubmit} >Submit</button>
           
            <button onClick={(e) => {
                e.preventDefault()
                setCreateLimitData(false)
            }} >Close</button>
          </div>
          <>
            <h2 className='error-message' >{errorMessage}</h2>
          </>
          <>
            <h5>File Name</h5>
          </>
          <>
            <input style={{backgroundColor: fileNameInputWarning ? '#fcafae' : ''}} 
            required className='file-input' type="text" 
            placeholder={fileNameInputWarning ? "Fill me in!" : "File Name"}
            value={fileNameInput} onChange={(e) => setFileNameInput(e.target.value)}
            />
          </>
          <>
            <h5>Limit Type</h5>
          </>
          <>
            <input style={{backgroundColor: limitTypeInputWarning ? '#fcafae' : ''}} 
            className='limit-input' type="text" 
            placeholder={limitTypeInputWarning ? "Fill me in!" : "Limit Type"}
            value={limitTypeInput} onChange={(e) => setLimitTypeInput(e.target.value)}
            />
          </>
          <>
            <h5>Password</h5>
          </>
          <>
            <input style={{backgroundColor: passwordInputWarning ? '#fcafae' : ''}}
            placeholder={passwordInputWarning ? "Fill me in!" : "Password"}
            value={passwordInput}
            className='limit-input' type="password" 
            onChange={(e) => {
                setPasswordInput(e.target.value)
            }}
            />
          </>
          
          <>
            <h5>Data</h5>
          </>
            <div className='button-div' >
            <button className='plus-button' onClick={(e) => {
                e.preventDefault()
                setInputList((currList) => {
                    return [...currList, ['', '']]
                    
                })
                setinputAmount((curr) => curr! +=1)
                
            }} >+</button>
            <button className='minus-button' onClick={(e) => {
                e.preventDefault()   
                setInputList((currList) => {
                    let newList = [...currList]
                    newList.pop()
                    return newList
                })    
                setinputAmount((curr) => curr! -=1)
            }} >-</button>
            
            </div>

            <p className='warning' style={{display: warning ? '' : 'none'}} >Please Fill in all inputs!</p>
            <p className='submitted' style={{display: submitted ? '' : 'none'}} >Submitted!</p>
            <ul className='input-list' >
            {inputList.map((list, i) => {
                return (
                    <li key={`number 1 - ${i}`} >
                        <input required type="number" value={list[0]} onChange={(e) => inputChange(e, i, 0)} />
                        <input required type="number" value={list[1]} onChange={(e) => inputChange(e, i, 1)} />
                    </li>
                )
            })}
            </ul>
          </form>
          </div>
        </StyledPopup>
        )

}

export default CreateLimitData

const StyledPopup = styled.div`
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.error-message {
    color: red;
    font-weight: bold;
    /* text-decoration: underline; */
}
.warning {
    color: red;
    font-weight: bold;
}
.submitted {
    color: green;
    font-weight: bold;
}
.input-list {
    padding-left: 0px;
    list-style: none;
    input {
        width: 50px;
        margin: 3px;
    }
}
.file-input {
    width: 400px;
    height: 20px;
    font-size: 15px;
}
.limit-input {
    width: 400px;
    height: 20px;
    font-size: 15px;
}
h5 {
    color: #61DAFB;
    margin-top: 10px;
    margin-bottom: 5px;
}

background-color: #0000008d;
width: 100%;
height: 100%;
margin-bottom: auto;
position: fixed;
left: 0;
top: 0;
bottom: 0;
.export {
    width: 50px;
}
.outer-div {
  color: #61DAFB;
  padding-top: 10px;
  background-color: #20232A;;
  border: 5px solid #16181D;
  position: fixed;
  left: 0; 
  right: 0; 
  top: 200px;
  overflow: scroll;
  .scroll {
   width: 200px;
   height: 400px;
    background: red;
   overflow: scroll;
}
::-webkit-scrollbar {
    width: 15px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
::-webkit-scrollbar-corner {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
  width: 500px;
  height: auto;
  max-height: 700px;
  padding-bottom: 30px;
  margin-left: auto;
  margin-right: auto;

.plus-button {
    width: 30px;
    margin: 2px;
    

}
.minus-button {
    width: 30px;
    margin: 2px;
    
}

  form {
    .button-div {
    margin-top: 0px;
    }
    div{
        input {
            -webkit-appearance: none;
            width: 40px;
            margin: 5px;
        }
        margin-top: 20px;
        label {
            color: #61DAFB;
            font-weight: bold;
            margin-right: 10px;
        }
        button {
            background-color: #16181D;
            color: #61DAFB;
            font-weight: bold;
            margin: 2px;
            height: 30px;
            width: 100px;
            border: 0px;
            &:hover {
                background-color: #61DAFB;
                color: #16181D;
            }
            :active {
                background-color: white;
            }
        }
    }
  }
  
}



`
