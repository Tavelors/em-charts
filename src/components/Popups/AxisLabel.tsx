import { useState } from 'react';
import styled from 'styled-components'

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
        caption: {
            text: string;
            align: string;
        };
        yAxis: {
            title: {
                text: string;
            };
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
    options: {
        plotOptions: {
            series: {
                lineWidth: number;
            };
        };
        title: {
            text: string;
        };
        caption: {
            text: string;
            align: string;
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
    } | undefined

    setAxisLabelView: React.Dispatch<React.SetStateAction<boolean>>
    axisLabelView: boolean
}



const AxisLabel = ({setOptions, options, axisLabelView, setAxisLabelView}: chartProp) => {

    

   

    return (
    <StyledPopup 
    // onClick={(e) => {
    //     e.preventDefault()
    //     setAxisLabelView(false)
    // }} 
    style={{display: axisLabelView ? '' : 'none'}} >
      <div  className='outer-div' >
      <form>
        <div><label>Y Axis</label>
        <input type={"text"} 
           defaultValue={options?.yAxis.title.text} 
        //    value={options?.yAxis.title.text} 
           onChange={(e) => setOptions((curr) => {
                e.preventDefault()
                let newCurr = {...curr!}
                newCurr.yAxis.title.text = e.target.value
                return newCurr

            })} />
        </div>
        <div><label>X Axis</label>
        <input type={"text"} 
        defaultValue={options?.xAxis.title.text}
        // value={options?.xAxis.title.text} 
        onChange={(e) => setOptions((curr) => {
            
            let newCurr = {...curr!}
            newCurr.xAxis.title.text = e.target.value
            return newCurr
        })} /></div>
        <div><button onClick={(e) => {
            e.preventDefault()
            setAxisLabelView(false)
        }} >Close</button></div>
      </form>
      </div>
    </StyledPopup>
    )
}

export default AxisLabel


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
  width: 300px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  form {
    div{
        margin-top: 30px;
        label {
            color: #61DAFB;
            font-weight: bold;
            margin-right: 10px;
        }
        button {
            background-color: #16181D;
            color: #61DAFB;
            font-weight: bold;
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
  /* display: none; */

`