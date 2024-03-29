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
    setFileCount: React.Dispatch<React.SetStateAction<number>>
    showChartBool: boolean
    setShowChartBool: React.Dispatch<React.SetStateAction<boolean>>
    dataSize: number
    setDataSize: React.Dispatch<React.SetStateAction<number>>
}

export const test = () => {
    console.log("hi");
    
}

const Upload = ({setOptions, options, setFileCount, 
    showChartBool, setShowChartBool, dataSize, setDataSize,
}: chartProp) => {

    

    const readFile = async (e: any) => {
        e.preventDefault()
            
        let files = Array.from(e.target.files).map((file: any)  => {
            let reader = new FileReader();
            return new Promise(resolve => {
                reader.onload = () => resolve(reader.result);
                reader.readAsText(file);
            });
        });
        setShowChartBool(true)
        let file: any = await Promise.all(files);        
        let firstData: number[][] = []
        let secondData: number[][] = []
        let thirdData: number[][] = []

                let chartOptions: any

                chartOptions = {
                    chart: {
                        height: 600,
                        type: "scatter",
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
                        "font-size" : "20px",
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
                        
                        style: {
                            "font-size" : "20px"
                        },
                        x: 0,
                        y: 60,
                      },
                    xAxis: {                   // normal xAxis object
                        title: {text: "Frequency (Mhz)", style: {fontSize: 10}},
                        type: 'logarithmic',
                        showLastLabel: true,
                        showFirstLabel: true,
                        tickInterval: 0.1,
                        labels: {
                                format: '',
                                style: {
                                    fontSize: 7,
                                    fontWeight: "bold"
                                }
                        },
                        gridLineWidth: 1,
                        lineWidth: 1,
                        tickPositions: undefined,
                    },
                    yAxis: {
                        title: {text: "Emissions level (dBuV)", style: {fontSize: 10}},
                        gridLineWidth: 1,
                        lineWidth: 1,
                        tickAmount: undefined,
                        labels: {
                            style: {
                                fontSize: 7,
                                fontWeight: "bold"
                            }
                        }
                        

                    },
                    legend: {
                        layout: 'vertical',
                        align: 'bottom',
                        verticalAlign: 'bottom',
                        alignColumns: false,
                        itemStyle: {
                            fontSize: "12px"
                        },
                        title: {
                            text: "Keys",
                            style: {fontSize: 12}
                        },
                        x:0,
                        y:10,
                    },
                    exporting: {
                        sourceWidth: 900,
                        sourceHeight: 500,
                        allowHTML: true,
                        filename: "File Name",
                        
                    },
                    credits: {
                        text: "Cassindustries.com",
                        href: "https://www.cassindustries.com/",
                        
                      },
                    series: [{
                        data: firstData, 
                        pointStart: 1,
                        color: "purple",
                        type: 'line',
                        name: '1st',
                        marker: {
                            enabled: false,
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
                            enabled: false,
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
                            enabled: false,
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
                            enabled: false,
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
                            enabled: false,
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
                            enabled: false,
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
                    if (+file[0].split('\n')[0].split('\t')[0] < 0.010) { // check for 0.009
                        chartOptions.xAxis.tickPositions = [-2.04575749056, -2, -1.69897000434,-1.52287874528 ,
                             -1.39794000867, -1.30102999566, -1.22184874962, -1.15490195999,  -1.09691001301,
                              -1.04575749056, -1, -0.82390874094]
                        chartOptions.xAxis.labels.format = '{value:.3f}'     
                    }
                    if (+file[0].split('\n')[0].split('\t')[0] > 0.14 && +file[0].split('\n')[0].split('\t')[0] < 0.16) {
                        chartOptions.xAxis.tickPositions = [
                            -0.82390874094, -0.69897000433,
                             -0.52287874528, -0.39794000867,
                            -0.30102999566, -0.22184874961, 
                            -0.15490195998, -0.096910013, 
                            -0.04575749056, 0, 0.30102999566, 
                            0.47712125472, 0.60205999132, 
                            0.69897000433, 0.77815125038, 
                            0.84509804001, 0.90308998699, 
                            0.95424250943, 1, 
                            1.30102999566, 1.47712125472]
                        chartOptions.xAxis.labels.format = '{value:.2f}'                     
                    }
                    chartOptions.yAxis.min = Math.floor(tempMin / 10) * 10       
                    chartOptions.yAxis.max = Math.ceil(tempMax / 10) * 10 
  
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
                if (+file[0].split('\n')[0].split('\t')[0] > 0.14 && +file[0].split('\n')[0].split('\t')[0] < 0.16) {
                    chartOptions.xAxis.tickPositions = [
                        -0.82390874094, -1, -0.69897000433,
                         -0.52287874528, -0.39794000867,
                        -0.30102999566, -0.22184874961, 
                        -0.15490195998, -0.096910013, 
                        -0.04575749056, 0, 0.30102999566, 
                        0.47712125472, 0.60205999132, 
                        0.69897000433, 0.77815125038, 
                        0.84509804001, 0.90308998699, 
                        0.95424250943, 1, 
                        1.30102999566, 1.47712125472]
                    chartOptions.xAxis.labels.format = '{value:.2f}'                     
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
                if (+file[0].split('\n')[0].split('\t')[0] > 0.14 && +file[0].split('\n')[0].split('\t')[0] < 0.16) {
                    chartOptions.xAxis.tickPositions = [
                        -0.82390874094, -1, -0.69897000433,
                         -0.52287874528, -0.39794000867,
                        -0.30102999566, -0.22184874961, 
                        -0.15490195998, -0.096910013, 
                        -0.04575749056, 0, 0.30102999566, 
                        0.47712125472, 0.60205999132, 
                        0.69897000433, 0.77815125038, 
                        0.84509804001, 0.90308998699, 
                        0.95424250943, 1, 
                        1.30102999566, 1.47712125472]
                    chartOptions.xAxis.labels.format = '{value:.2f}'                     
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
            <StyledForm style={
                {
                    width: showChartBool ? '98px' : '500px',
                    height: showChartBool ? '30px' : '45px',
                    fontSize: showChartBool ? '16px' : '50px',
                    backgroundColor: showChartBool ? '' : '#282C34',
                    // paddingTop: showChartBool ? '10px' : '3px',
                }
                } 
                
                >
               <label className="upload-button" style={{display: showChartBool ? '' : 'none'}} htmlFor="filePicker" >Data Files</label>
               <label className="insert-data" style={{display: showChartBool ? 'none' : ''}} htmlFor="filePicker" >Upload Data File</label>
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
background-color: #20232A;
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;  */
/* border: 2px solid #121212; */
padding-top: 10px;


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
    /* margin-left: 10px; */
    margin-top: 3px;
    font-weight: bold;
    
    
}
.insert-data {
  border: 1px solid #61DAFB;
  border-radius: 5px;
  padding: 5px;
  padding-bottom: 10px;
  width: 450px;
 

  &:hover {
    border: 1px solid #16181D;
    background-color: #61DAFB;
  }
}
`