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
            style: {
                "font-size": string;
                marginTop: string;
            };
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
    options: {
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
    } | undefined

    setChangeAxisView: React.Dispatch<React.SetStateAction<boolean>>
    changeAxisView: boolean
}



const ResizeY = ({setOptions, options, changeAxisView, setChangeAxisView}: chartProp) => {

    

   

    return (
    <StyledPopup 
    // onClick={(e) => {
    //     e.preventDefault()
    //     setAxisLabelView(false)
    // }} 
    style={{display: changeAxisView ? '' : 'none'}} >
      <div  className='outer-div' >
      <form>
        <div><label>Max</label>
        <input type={"text"} 
           defaultValue={options?.yAxis.max!} 
        //    value={options?.yAxis.title.text} 
           onChange={(e) => setOptions((curr) => {
                e.preventDefault()
                let newCurr = {...curr!}
                newCurr.yAxis.max! = +e.target.value
                return newCurr

            })} />
        </div>
        <div><label>Min</label>
        <input type={"text"} 
        defaultValue={options?.yAxis.min!}
        // value={options?.xAxis.title.text} 
        onChange={(e) => setOptions((curr) => {
            
            let newCurr = {...curr!}
            newCurr.yAxis.min! = +e.target.value
            return newCurr
        })} /></div>
        <div><button onClick={(e) => {
            e.preventDefault()
            setChangeAxisView(false)
        }} >Close</button></div>
      </form>
      </div>
    </StyledPopup>
    )
}

export default ResizeY


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