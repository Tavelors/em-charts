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

    setremoveDataAndLimit: React.Dispatch<React.SetStateAction<boolean>>
    removeDataAndLimit: boolean
    setFileCount: React.Dispatch<React.SetStateAction<number>>
    setDataSize: React.Dispatch<React.SetStateAction<number>>
}

const DataRemoval = ({setOptions, options, removeDataAndLimit, setremoveDataAndLimit, setFileCount, setDataSize}: chartProp) => {

    
    
    return (
        <StyledPopup 
        style={{display: removeDataAndLimit ? '' : 'none'}} >
          <div  className='outer-div' >
            {/* <div style={{display: options?.series[0].data.length! > 1 ? '' : 'none'}} >
            <label>{`Data Line - 1`}</label>
            <button onClick={(e) => {
                e.preventDefault()
                setDataSize((currCount) => currCount -= 1)
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[0] = {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "triangle",
                            width: 20,
                            height: 20,
                        }
                    }
                    return newOptions
                })
            }} >Delete</button>
            </div> */}
            <div style={{display: options?.series[1].data.length! > 1 ? '' : 'none'}} >
            <label>{`Data Line - 2`}</label>
            <button onClick={(e) => {
                e.preventDefault()
                setDataSize((currCount) => currCount -= 1)
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[1] = {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "square",
                            width: 20,
                            height: 20,
                        }
                    }
                    return newOptions
                })
            }} >Delete</button>
            </div>
            <div style={{display: options?.series[2].data.length! > 1 ? '' : 'none'}} >
            <label>{`Data Line - 3`}</label>
            <button onClick={(e) => {
                e.preventDefault()
                setDataSize((currCount) => currCount -= 1)
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[2] = {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "circle",
                            width: 20,
                            height: 20,
                        }
                    }
                    return newOptions
                })
            }} >Delete</button>
            </div>
            <div style={{display: options?.series[3].data.length! > 1 ? '' : 'none'}} >
            <label>{"Limit Line - 1"}</label>
            <button onClick={(e) => {
                e.preventDefault()
                setFileCount((currCount) => currCount -= 1)
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[3] = {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "diamond",
                            width: 20,
                            height: 20,
                        }
                    }
                    return newOptions
                })
            }} >Delete</button>
            </div>
            <div style={{display: options?.series[4].data.length! > 1 ? '' : 'none'}} >
            <label>{"Limit Line - 2"}</label>
            <button onClick={(e) => {
                e.preventDefault()
                setFileCount((currCount) => currCount -= 1)
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[4] = {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "triangle-down",
                            width: 20,
                            height: 20,
                        }
                    }
                    return newOptions
                })
            }} >Delete</button>
            </div>
            <div style={{display: options?.series[5].data.length! > 1 ? '' : 'none'}} >
            <label>{"Limit Line - 3"}</label>
            <button onClick={(e) => {
                e.preventDefault()
                setFileCount((currCount) => currCount -= 1)
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[5] = {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "triangle",
                            width: 20,
                            height: 20,
                        }
                    }
                    return newOptions
                })
            }} >Delete</button>
            </div>
            
            
            <div><button onClick={(e) => {
                e.preventDefault()
                setremoveDataAndLimit(false)
            }} >Close</button></div>
          
          </div>
        </StyledPopup>
        )

}

export default DataRemoval

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
  width: 400px;
  /* height: 300px; */
  margin-bottom: auto;
  padding-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  
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