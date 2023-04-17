import styled from 'styled-components'
import { useState } from 'react';
import { HexColorPicker } from "react-colorful";



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

    setDataKeysView: React.Dispatch<React.SetStateAction<boolean>>
    dataKeysView: boolean
}


const DataKeys = ({setOptions, options, dataKeysView, setDataKeysView}: chartProp) => {

    
                      // #FF5546
                  // #59885F
                  // #FFED37
    
        const handleClick = (hex:string, seriesPosition:number) => {
            setOptions((currOptions) => {
                let newOptions = {...currOptions!}
                newOptions.series[seriesPosition].color = hex
                return newOptions
            })
        }


    return (
        <StyledPopup 
        style={{display: dataKeysView ? '' : 'none'}} >
          <div  className='outer-div' >
            <div>
            <label>{"Legend Size"}</label> <input
            defaultValue={options?.legend.itemStyle.fontSize.replace(/\D/g,'')}
            onChange={(e) => {
                setOptions((currOptions:any) => {
                    let newOptions = {...currOptions}
                    newOptions.legend.itemStyle.fontSize = e.target.value
                    return newOptions
                })
            }}
            style={{width: "15px", marginRight: "5px"}} />
            </div>
            <div style={{display: options?.series[0].data.length! > 1 ? '' : 'none'}} >     
            <ul>
                <li>
                    
                </li>
                <li>
                    <label>{"Data Line"}</label>
                </li>
                <li>
                    <input 
                    defaultValue={options?.series[0].name}
                    type={"text"} 
                    onChange={(e) => {
                    setOptions((currOptions) => {
                        let newOptions = {...currOptions!}
                        newOptions.series[0].name = e.target.value
                        return newOptions
                    })
                    }} /> 
                </li>
                <li>
                    <button className='data-labels-yellow-button' onClick={() => handleClick("#FFED37", 0)} ></button>
                    <button style={{backgroundColor: 'red'}} className='data-labels-green-button' onClick={() => handleClick("red", 0)} ></button>
                    <button style={{backgroundColor: 'blue'}} className='data-labels-green-button' onClick={() => handleClick("blue", 0)} ></button>
                    <button style={{backgroundColor: 'cyan'}} className='data-labels-green-button' onClick={() => handleClick("cyan", 0)} ></button>
                    <button style={{backgroundColor: 'purple'}} className='data-labels-green-button' onClick={() => handleClick("purple", 0)} ></button>
                    <button style={{backgroundColor: 'green'}} className='data-labels-green-button' onClick={() => handleClick("green", 0)} ></button>
                    <button style={{backgroundColor: 'darkorange'}} className='data-labels-green-button' onClick={() => handleClick("darkorange", 0)} ></button>
                </li>
                <li>
                <HexColorPicker onChange={(e) => handleClick(e, 0)}  />
                </li>
            </ul>
            </div>
            

            <div style={{display: options?.series[1].data.length! > 1 ? '' : 'none'}} >     
            <ul>
                <li>
                    <label>{"Data Line"}</label>
                </li>
                <li>
                    <input 
                    defaultValue={options?.series[1].name}
                    type={"text"} 
                    onChange={(e) => {
                    setOptions((currOptions) => {
                        let newOptions = {...currOptions!}
                        newOptions.series[1].name = e.target.value
                        return newOptions
                    })
                    }} /> 
                </li>
                <li>
                    <button className='data-labels-yellow-button' onClick={() => handleClick("#FFED37", 1)} ></button>
                    <button style={{backgroundColor: 'red'}} className='data-labels-green-button' onClick={() => handleClick("red", 1)} ></button>
                    <button style={{backgroundColor: 'blue'}} className='data-labels-green-button' onClick={() => handleClick("blue", 1)} ></button>
                    <button style={{backgroundColor: 'cyan'}} className='data-labels-green-button' onClick={() => handleClick("cyan", 1)} ></button>
                    <button style={{backgroundColor: 'purple'}} className='data-labels-green-button' onClick={() => handleClick("purple", 1)} ></button>
                    <button style={{backgroundColor: 'green'}} className='data-labels-green-button' onClick={() => handleClick("green", 1)} ></button>
                    <button style={{backgroundColor: 'darkorange'}} className='data-labels-green-button' onClick={() => handleClick("darkorange", 1)} ></button>
                </li>
                <li>
                <HexColorPicker onChange={(e) => handleClick(e, 1)}  />
                </li>
            </ul>
            </div>

            <div style={{display: options?.series[2].data.length! > 1 ? '' : 'none'}} >     
            <ul>
                <li>
                    <label>{"Data Line"}</label>
                </li>
                <li>
                    <input 
                    defaultValue={options?.series[2].name}
                    type={"text"} 
                    onChange={(e) => {
                    setOptions((currOptions) => {
                        let newOptions = {...currOptions!}
                        newOptions.series[2].name = e.target.value
                        return newOptions
                    })
                    }} /> 
                </li>
                <li>
                    <button className='data-labels-yellow-button' onClick={() => handleClick("#FFED37", 2)} ></button>
                    <button style={{backgroundColor: 'red'}} className='data-labels-green-button' onClick={() => handleClick("red", 2)} ></button>
                    <button style={{backgroundColor: 'blue'}} className='data-labels-green-button' onClick={() => handleClick("blue", 2)} ></button>
                    <button style={{backgroundColor: 'cyan'}} className='data-labels-green-button' onClick={() => handleClick("cyan", 2)} ></button>
                    <button style={{backgroundColor: 'purple'}} className='data-labels-green-button' onClick={() => handleClick("purple", 2)} ></button>
                    <button style={{backgroundColor: 'green'}} className='data-labels-green-button' onClick={() => handleClick("green", 2)} ></button>
                    <button style={{backgroundColor: 'darkorange'}} className='data-labels-green-button' onClick={() => handleClick("darkorange", 2)} ></button>
                </li>
                <li>
                <HexColorPicker onChange={(e) => handleClick(e, 2)}  />
                </li>
            </ul>
            </div>
            

            <div style={{display: options?.series[3].data.length! > 1 ? '' : 'none'}} >     
            <ul>
                <li>
                    <label>{"Limit Line"}</label>
                </li>
                <li>
                    <input 
                    defaultValue={options?.series[3].name}
                    type={"text"} 
                    onChange={(e) => {
                    setOptions((currOptions) => {
                        let newOptions = {...currOptions!}
                        newOptions.series[3].name = e.target.value
                        return newOptions
                    })
                    }} /> 
                </li>
                <li>
                    <button className='data-labels-yellow-button' onClick={() => handleClick("#FFED37", 3)} ></button>
                    <button style={{backgroundColor: 'red'}} className='data-labels-green-button' onClick={() => handleClick("red", 3)} ></button>
                    <button style={{backgroundColor: 'blue'}} className='data-labels-green-button' onClick={() => handleClick("blue", 3)} ></button>
                    <button style={{backgroundColor: 'cyan'}} className='data-labels-green-button' onClick={() => handleClick("cyan", 3)} ></button>
                    <button style={{backgroundColor: 'purple'}} className='data-labels-green-button' onClick={() => handleClick("purple", 3)} ></button>
                    <button style={{backgroundColor: 'green'}} className='data-labels-green-button' onClick={() => handleClick("green", 3)} ></button>
                    <button style={{backgroundColor: 'darkorange'}} className='data-labels-green-button' onClick={() => handleClick("darkorange", 3)} ></button>
                </li>
                <li>
                <HexColorPicker onChange={(e) => handleClick(e, 3)}  />
                </li>
            </ul>
            </div>

            <div style={{display: options?.series[4].data.length! > 1 ? '' : 'none'}} >     
            <ul>
                <li>
                    <label>{"Limit Line"}</label>
                </li>
                <li>
                    <input 
                    defaultValue={options?.series[4].name}
                    type={"text"} 
                    onChange={(e) => {
                    setOptions((currOptions) => {
                        let newOptions = {...currOptions!}
                        newOptions.series[4].name = e.target.value
                        return newOptions
                    })
                    }} /> 
                </li>
                <li>
                    <button className='data-labels-yellow-button' onClick={() => handleClick("#FFED37", 4)} ></button>
                    <button style={{backgroundColor: 'red'}} className='data-labels-green-button' onClick={() => handleClick("red", 4)} ></button>
                    <button style={{backgroundColor: 'blue'}} className='data-labels-green-button' onClick={() => handleClick("blue", 4)} ></button>
                    <button style={{backgroundColor: 'cyan'}} className='data-labels-green-button' onClick={() => handleClick("cyan", 4)} ></button>
                    <button style={{backgroundColor: 'purple'}} className='data-labels-green-button' onClick={() => handleClick("purple", 4)} ></button>
                    <button style={{backgroundColor: 'green'}} className='data-labels-green-button' onClick={() => handleClick("green", 4)} ></button>
                    <button style={{backgroundColor: 'darkorange'}} className='data-labels-green-button' onClick={() => handleClick("darkorange", 4)} ></button>
                </li>
                <li>
                <HexColorPicker onChange={(e) => handleClick(e, 4)}  />
                </li>
            </ul>
            </div>

            <div style={{display: options?.series[5].data.length! > 1 ? '' : 'none'}} >     
            <ul>
                <li>
                    <label>{"Limit Line"}</label>
                </li>
                <li>
                    <input 
                    defaultValue={options?.series[5].name}
                    type={"text"} 
                    onChange={(e) => {
                    setOptions((currOptions) => {
                        let newOptions = {...currOptions!}
                        newOptions.series[5].name = e.target.value
                        return newOptions
                    })
                    }} /> 
                </li>
                <li>
                    <button className='data-labels-yellow-button' onClick={() => handleClick("#FFED37", 5)} ></button>
                    <button style={{backgroundColor: 'red'}} className='data-labels-green-button' onClick={() => handleClick("red", 5)} ></button>
                    <button style={{backgroundColor: 'blue'}} className='data-labels-green-button' onClick={() => handleClick("blue", 5)} ></button>
                    <button style={{backgroundColor: 'cyan'}} className='data-labels-green-button' onClick={() => handleClick("cyan", 5)} ></button>
                    <button style={{backgroundColor: 'purple'}} className='data-labels-green-button' onClick={() => handleClick("purple", 5)} ></button>
                    <button style={{backgroundColor: 'green'}} className='data-labels-green-button' onClick={() => handleClick("green", 5)} ></button>
                    <button style={{backgroundColor: 'darkorange'}} className='data-labels-green-button' onClick={() => handleClick("darkorange", 5)} ></button>
                </li>
                <li>
                <HexColorPicker onChange={(e) => handleClick(e, 5)}  />
                </li>
            </ul>
            </div>
            
            
            <div><button className='data-labels-close' onClick={(e) => {
                e.preventDefault()
                setDataKeysView(false)
            }} >Close</button></div>
          
          </div>
        </StyledPopup>
        )

}

export default DataKeys

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
  width: 700px;
  padding-bottom: 30px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  
    div{
        margin-top: 20px;
        label {
            color: #61DAFB;
            font-weight: bold;
            margin-right: 10px;
        }
        ul {
            padding-left: 0px;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
           
            li {
                .react-colorful {
                    /* position: none;
                    display: none; */
                    /* background-color: red; */
                    border: solid 1px white;
                    margin-top: 0px;
                    width: 20px;
                    height: 20px;
                    transition:0s 2s;
                    .react-colorful__pointer {
                        background-color: 'transparent';
                        visibility: hidden;
                        display: absolute;
                        margin: 0px;
                        width: 5px;
                        height: 5px;
                    }

                    &:hover {
                        .react-colorful__pointer {
                        /* background-color: blue; */
                        visibility: visible;
                        display: absolute;
                        margin: 0px;
                        width: 5px;
                        height: 5px;
                    } 
                        transition: 0s;
                        /* position: absolute; */
                        /* margin-bottom: 0px; */
                        /* right: 50; */
                        border: 0px;
                        width: 80px;
                        height: 130px; 
                    /* position: fixed; */
                    }
                    }
                    .react-colorful__hue {
                        margin: 0px;
                        margin-bottom: 30px;
                    height: 10px;
                    }
                    .react-colorful__interactive {
                        margin: 0px;
                        
                        
                    }
                    .react-colorful__saturation {
                        margin-bottom: 0px;
                        border-bottom: 0px;
                    }
                    /* .react-colorful__pointer {
                        /* background-color: red; */
                        /* display: none;
                        margin: 0px;
                        width: 5px;
                        height: 5px;
                    } */ */
                    .outer-div {
                        margin: 0px;
                        div {
                            margin: 0px;
                        }
                    }
                button {

                    margin: 2px;
                    padding-top: 10px;
                    height: 20px;
                    width: 20px;
                    border: 0px;
                }
                
            }
        }
        
        .data-labels-yellow-button {
            background-color: #ffee37;
            margin-left: 7px;
            :active {
                filter: brightness(50%);
            }
        }
        .data-labels-green-button {
            background-color: #59885F;
            :active {
                filter: brightness(50%);
            }
        }
        
        .data-labels-close {
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

`