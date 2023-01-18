import React, {Component} from "react";
import { useState } from "react";
import styled from 'styled-components'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Highcharts from 'highcharts'



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
    } | undefined
    setFileCount: React.Dispatch<React.SetStateAction<number>>
    
}



const Upload = ({setOptions, options, setFileCount}: chartProp) => {

    const [dataSize, setDataSize] = useState<number>(0)

    const readFile = async (e: any) => {
        e.preventDefault()
            
        let files = Array.from(e.target.files).map((file: any)  => {
            let reader = new FileReader();
            return new Promise(resolve => {
                reader.onload = () => resolve(reader.result);
                reader.readAsText(file);
            });
        });
    
        let file: any = await Promise.all(files);        
        let firstData: number[][] = []
        let secondData: number[][] = []
        let thirdData: number[][] = []

                let chartOptions: any

                chartOptions = {
                    chart: {
                        height: 600,
                        type: "line",
                        marginBottom: 180,
                        marginTop: 90,
                    },
                    plotOptions: {
                        series: {
                            lineWidth: 0.5, 
                        },
                    },
                    title: {text: "Conducted / Radiated Emissions (Class A/B)",
                     align: "left",
                     style: {
                        "font-size" : "40px",
                        "marginTop" : "10px"
                     },
                     y: 30,

                    },
                    caption: {
                        text: "Graph Number and description",
                        align: "center",
                        style: {
                            "font-size" : "20px"
                        },
                    },
                    subtitle: {
                        text: `Manufacturer name - Product name`, 
                        align: "left",
                        useHTML: true,
                        style: {
                            "font-size" : "20px"
                        },
                        x: 0,
                        y: 60,
                      },
                    xAxis: {                   // normal xAxis object
                        title: {text: "Frequency (Mhz)"},
                        type: 'logarithmic',
                        showLastLabel: true,
                        showFirstLabel: true,
                        tickInterval: 0.1,
                        labels: {
                                format: ''
                        },
                        tickPositions: undefined,
                    },
                    yAxis: {
                        title: {text: "Emissions level (dBuV)"},
                        

                    },
                    legend: {
                        layout: 'vertical',
                        align: 'bottom',
                        verticalAlign: 'bottom',
                        alignColumns: false,
                        title: {
                            text: "Keys",
                        },
                        x:0,
                        y:10,
                    },
                    exporting: {
                        sourceWidth: 1920,
                        sourceHeight: 1080,
                        allowHTML: true
                    },
                    series: [{
                        data: firstData, 
                        pointStart: 1,
                        color: "purple",
                        type: 'line',
                        name: '1st',
                        marker: {
                            symbol: "triangle",
                            width: 20,
                            height: 20,
                        }
                    },
                    {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "square",
                            width: 20,
                            height: 20,
                        }
                    },
                    {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "circle",
                            width: 20,
                            height: 20,
                        }
                    },
                    {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "diamond",
                            width: 20,
                            height: 20,
                        }
                    },
                    {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "triangle-down",
                            width: 20,
                            height: 20,
                        }
                    },
                    {
                        data: [[]], 
                        color: "white",
                        type: 'line',
                        name: '',
                        marker: {
                            symbol: "triangle",
                            width: 20,
                            height: 20,
                        }
                    },],
                  }
        
        if (file.length === 1) {
            if (dataSize < 1) {
                let splitFile = file[0].split('\n')
                let tempMax = +splitFile[0].split('\t')[1];
                let tempMin = +splitFile[0].split('\t')[1];
            for(let i=0; i<splitFile.length; i++) {
                if (splitFile[i] !== "") {
                    if (+splitFile[i].split('\t')[1] > tempMax) {
                        tempMax = +splitFile[i].split('\t')[1]
                    }
                    if (+splitFile[i].split('\t')[1] <  tempMin) {
                        tempMin = +splitFile[i].split('\t')[1]
                    }
                    firstData.push([+splitFile[i].split('\t')[0], +splitFile[i].split('\t')[1]])
                }  
            }
 
            setDataSize(1)
            setFileCount(0)
            setOptions(() => {
                    if (+file[0].split('\n')[0].split('\t')[0] < 0.010) {
                        chartOptions.xAxis.tickPositions = [-2.04575749056, -2, -1.69897000434,-1.52287874528 , -1.39794000867, -1.30102999566, -1.22184874962, -1.15490195999,  -1.09691001301, -1.04575749056, -1, -0.82390874094]
                        chartOptions.xAxis.labels.format = '{value:.3f}'     
                    }
                    chartOptions.yAxis.min = Math.floor(tempMin / 10) * 10       
                    chartOptions.yAxis.max = Math.ceil(tempMax / 10) * 10 
                    console.log(chartOptions.yAxis.min);
                    
                    
                    return chartOptions
                })
            } else if (dataSize === 1) {
                let splitFile = file[0].split('\n')
                for(let i=0; i<splitFile.length; i++) {
                    if (splitFile[i] !== "") {
                        secondData.push([+splitFile[i].split('\t')[0], +splitFile[i].split('\t')[1]])
                    }
                }
                 
                setDataSize(2)
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[1] = {
                        data: secondData,
                        color: "#cf8b0c",
                        type: "line",
                        name: "2nd",
                        marker: {
                            symbol: "square",
                            width: 20,
                            height: 20,
                        }
                    }
                    return newOptions
                })
            } else if (dataSize === 2) {
                    let splitFile = file[0].split('\n')
                    for(let i=0; i<splitFile.length; i++) {
                    if (splitFile[i] !== "") {
                        thirdData.push([+splitFile[i].split('\t')[0], +splitFile[i].split('\t')[1]])
                    }
                }
                setDataSize(0)
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[2] = {
                        data: thirdData,
                        color: '#418a09',
                        type: "line",
                        name: "3rd",
                        marker: {
                            symbol: "diamond",
                            width: 20,
                            height: 20,
                        }
                    }
                    return newOptions
                })
            }
        } else if (file.length === 2) {    
            if (dataSize >= 2) {    
                alert("To many files!")
            } else {
            let splitFile = file[0].split('\n')
            let secondSplitFile = file[1].split('\n')
            for(let i=0; i<splitFile.length; i++) {
                if (splitFile[i] !== "") {
                    firstData.push([+splitFile[i].split('\t')[0], +splitFile[i].split('\t')[1]])
                }               
            }
            for(let i=0; i<secondSplitFile.length; i++) {
                if (secondSplitFile[i] !== "") {
                    secondData.push([+secondSplitFile[i].split('\t')[0], +secondSplitFile[i].split('\t')[1]])
                }               
            }

            setFileCount(0)
            setDataSize(2)
            setOptions(() => {
                if (+file[0].split('\n')[0].split('\t')[0] < 0.010) {
                    chartOptions.xAxis.tickPositions = [-2.04575749056, -2, -1.69897000434,-1.52287874528 , -1.39794000867, -1.30102999566, -1.22184874962, -1.15490195999,  -1.09691001301, -1.04575749056, -1, -0.82390874094]
                    chartOptions.xAxis.labels.format = '{value:.3f}'     
                }
                    chartOptions.series[1] = {
                        data: secondData, 
                        color: "#cf8b0c",
                        type: 'line',
                        name: '2nd',
                        marker: {
                            symbol: "diamond",
                            width: 20,
                            height: 20,
                        }
                    }
                  return chartOptions
                })
            }
        } else if (file.length === 3) {
            let splitFile = file[0].split('\n')
            let secondSplitFile = file[1].split('\n')
            let thirdSplitFile = file[2].split('\n')
            
            for(let i=0; i<splitFile.length; i++) {
                if (splitFile[i] !== "") {
                    firstData.push([+splitFile[i].split('\t')[0], +splitFile[i].split('\t')[1]])
                }               
            }
            for(let i=0; i<secondSplitFile.length; i++) {
                if (secondSplitFile[i] !== "") {
                    secondData.push([+secondSplitFile[i].split('\t')[0], +secondSplitFile[i].split('\t')[1]])
                }               
            }
            for(let i=0; i<thirdSplitFile.length; i++) {
                if (thirdSplitFile[i] !== "") {
                    thirdData.push([+thirdSplitFile[i].split('\t')[0], +thirdSplitFile[i].split('\t')[1]])
                }               
            }
            setFileCount(0)
            setDataSize(0)
            setOptions(() => {
                if (+file[0].split('\n')[0].split('\t')[0] < 0.010) {
                    chartOptions.xAxis.tickPositions = [-2.04575749056, -2, -1.69897000434,-1.52287874528 , -1.39794000867, -1.30102999566, -1.22184874962, -1.15490195999,  -1.09691001301, -1.04575749056, -1, -0.82390874094]
                    chartOptions.xAxis.labels.format = '{value:.3f}'     
                }
                    chartOptions.series[1] = {
                        data: secondData, 
                        color: "#cf8b0c",
                        type: 'line',
                        name: '2nd',
                        marker: {
                            symbol: "diamond",
                            width: 20,
                            height: 20,
                        }
                    }
                    chartOptions.series[2] = {
                        data: thirdData, 
                        color: "#42f57e",
                        type: 'line',
                        name: '3rd',
                        marker: {
                            symbol: "circle",
                            width: 20,
                            height: 20,
                        }
                    }
                  return chartOptions
                })
        }
}
 
    return (
            <StyledForm  >
               <label htmlFor="filePicker" >Data<br></br>Files</label>
                 <input  onChange={(e) => readFile(e)} 
                type="file" 
                multiple 
                id="filePicker"
                style={{visibility: "hidden"}}
                />
            </StyledForm>
    )
}

export default Upload

const StyledForm = styled.form`
background-color: #16181D;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
/* border: 2px solid #121212; */
height: 40px;
width: 55px;


&:hover {
    background-color: #61DAFB;
    label {
        color:#16181D;
    }
}
:active {
    background-color: white;
}

label {
    cursor: pointer;
    margin-left: 10px;
    margin-top: 3px;
    font-weight: bold;
}
`