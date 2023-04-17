import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getLimitFileById } from '../../utils/api'
import LoadLimitFiles from './LoadLimitFiles'

type chartProp = {
    setOptions: React.Dispatch<React.SetStateAction<{
        plotOptions: {
            series: {
                lineWidth: number;
            };
        };
        title: {
            text: string;
        };

        legend: {
            layout: string;
            align: string;
            verticalAlign: string;
            alignColumns: boolean;
            itemStyle: {
                fontSize: string;
            };
            title: {
                text: string;
                style: {
                    fontSize: number;
                };
            };
            x: number;
            y: number;
        }
          
        caption: {
            text: string;
            align: string;
            style: {
                "font-size": string;
                marginTop: string;
            };
        };
        subtitle: {
            text: string;
            align: string;
            useHTML: boolean;
            x: number;
            y: number;
        };
        
        xAxis: {
            title: {
                text: string;
            };
            type: string;
            tickInterval: number;
            labels: {
                format: string;
            }
            tickPositions: any;
        };
        yAxis: {
            title: {
                text: string;
            };
            tickAmount: number | undefined;
            min: number | null;
            max: number | null;
          };
        series: {
            data: number[][];
            color: string;
            type: string;
            name: string;
            marker: {
                symbol: string;
                height: number;
                width: number;
            }
        }[];
        exporting: {
            sourceWidth: number;
            sourceHeight: number;
            allowHTML: boolean;
            filename: string;
        };
    } | undefined>>
    showLimitFile: boolean
    setShowLimitFile: React.Dispatch<React.SetStateAction<boolean>>
    limitId: number | undefined
    deleteLimit: boolean
    setdeleteLimit: React.Dispatch<React.SetStateAction<boolean>>
    setFileCount: React.Dispatch<React.SetStateAction<number>>
    setShowEditLimitFile: React.Dispatch<React.SetStateAction<boolean>>
    limitFile: {
        id: number;
        filename: string;
        name: string;
        data: string;
    } | undefined
    setLimitFile: React.Dispatch<React.SetStateAction<{
        id: number;
        filename: string;
        name: string;
        data: string;
    } | undefined>>
}

const ShowLimitFile = ({setOptions, showLimitFile, setShowLimitFile, limitId, deleteLimit, setdeleteLimit, setFileCount, setShowEditLimitFile, limitFile, setLimitFile}: chartProp) => {
    

    useEffect(() => {
        getLimitFileById(limitId!).then((limit) => {
            setLimitFile(limit)
        })
    }, [limitId!])

    
    return (
        <StyledPopup 
        style={{display: showLimitFile ? '' : 'none'}} >
          <div  className='outer-div' >
          <form>
            <div>
                <label>{limitFile?.filename}</label>
            </div>
            <div>
                <LoadLimitFiles setOptions={setOptions} limitFile={limitFile} 
                setFileCount={setFileCount} setShowLimitFile={setShowLimitFile} /> 
                <button 
                onClick={(e) => {
                    e.preventDefault()
                    setShowEditLimitFile(true)
                }}
                >Edit</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    setdeleteLimit(true)
                }} >Delete</button>
            </div>
            
            <div>
                <button onClick={(e) => {
                e.preventDefault()
                setShowLimitFile(false)
            }} >Close</button>
            </div>
          </form>
          </div>
        </StyledPopup>
        )

}

export default ShowLimitFile

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
  width: 600px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  form {
    input {
        width: 400px;
    }
    div{
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