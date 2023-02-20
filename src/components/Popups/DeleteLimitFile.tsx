import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { deleteLimitFile, getLimitFileById } from '../../utils/api'

type chartProp = {
    showLimitFile: boolean
    setShowLimitFile: React.Dispatch<React.SetStateAction<boolean>>
    limitId: number | undefined
    deleteLimit: boolean
    setdeleteLimit: React.Dispatch<React.SetStateAction<boolean>>
    setlimitFileData: React.Dispatch<React.SetStateAction<{
        id: number;
        filename: string;
        name: string;
        data: string;
    }[]>>
}

const DeleteLimitFile = ({showLimitFile, setShowLimitFile, limitId, deleteLimit, setdeleteLimit, setlimitFileData}: chartProp) => {
    
    const [limitFile, setLimitFile] = useState<{
        id: number;
        filename: string;
        name: string;
        data: string;
    }>()
    const [passwordInput, setPasswordInput] = useState<string>("")
    const [hideAfterDelete, setHideAfterDelete] = useState<boolean>(false)

    useEffect(() => {
        getLimitFileById(limitId!).then((limit) => {
            setLimitFile(limit)
        })
    }, [limitId])
    
    
    return (
        <StyledPopup 
        style={{display: deleteLimit ? '' : 'none'}} >
          <div  className='outer-div' >
          <form>
            <div style={{display: hideAfterDelete ? 'none' : ''}} >
                <label>{limitFile?.filename}</label>
            </div>
            <div>
                <input style={{display: hideAfterDelete ? 'none' : ''}} type="password" placeholder="Password"
                value={passwordInput}
                onChange={(e) => {
                    setPasswordInput(e.target.value)
                }}
                />
            </div>
            <div>
                <button style={{display: hideAfterDelete ? 'none' : ''}} onClick={ async (e) => {
                    e.preventDefault()
                    
                    
                    const limit:any = await deleteLimitFile(limitId!, passwordInput!, limitFile!.filename)
                    console.log(limit);
                    
                    if (limit.status === 204){
                        setPasswordInput("")
                        setlimitFileData((currData) => {
                            let newData = [...currData!]
                            for(let i=0; i<newData.length; i++) {
                                if (newData[i].id === limitId!) {
                                    newData.splice(i, 1)
                                }
                            }
                            return newData                            
                        })
                        setHideAfterDelete(true)
                        setShowLimitFile(false)
                        setTimeout(() => {
                            setdeleteLimit(false)
                            setHideAfterDelete(false)
                            setPasswordInput("")
                        }, 2000)

                    }
                    
                    
                }} >Delete</button>
            </div>
            <h3 style={{
            display: hideAfterDelete ? '' : 'none',
            color: "red"
            
        }
            } >Deleted!</h3>
            <div>
                <button onClick={(e) => {
                e.preventDefault()
                setdeleteLimit(false)
            }} >Close</button>
            </div>
          </form>
          </div>
        </StyledPopup>
        )

}

export default DeleteLimitFile

const StyledPopup = styled.div`
background-color: #0000008d;
width: 100%;
height: 100%;
position: fixed;
left: 0;
top: 0;
.outer-div {
  background-color: #20232A;;
  border: 5px solid #16181D;
  position: fixed;
  left: 0; 
  right: 0; 
  top: 200px;
  margin-left: auto; 
  margin-right: auto; 
  width: 250px;
  margin-bottom: auto;
  padding-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  form {
    input {
        width: 100px;
    }
    div{
        margin-top: 20px;
        label {
            color: #61DAFB;
            font-weight: bold;
            font-size: 15px;
            margin-right: 10px;
        }
        button {
            background-color: #16181D;
            color: #61DAFB;
            font-weight: bold;
            margin:3px;
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