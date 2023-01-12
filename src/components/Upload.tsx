import { useState } from "react";


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
        };
        yAxis: {
            title: {
                text: string;
            };
          };
        series: {
            data: number[][];
            color: string;
            type: string;
            name: string;
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
        };
        yAxis: {
            title: {
                text: string;
            };
          };
        series: {
            data: number[][];
            color: string;
            type: string;
            name: string;
        }[];
    } | undefined
}

const Upload = ({setOptions, options}: chartProp) => {

    const [dataSize, setDataSize] = useState<number>(0)
    const readFile = async (e: any) => {
        e.preventDefault()

        // setChartData()
            
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
        if (file.length === 1) {
            if (dataSize < 1) {

                let splitFile = file[0].split('\n')
                // console.log(splitFile[splitFile.length - 1]);
            
            for(let i=0; i<splitFile.length; i++) {
                if (splitFile[i] !== "") {
                    firstData.push([+splitFile[i].split('\t')[0], +splitFile[i].split('\t')[1]])
                }
                
            }
            
            setDataSize(1)
            setOptions(() => {
                
                let newOption
                newOption = {
                    chart: {
                        height: 600,
                        type: "line",
                        marginBottom: 150,
                        marginTop: 80,
                    },
                    plotOptions: {
                        series: {
                            lineWidth: 0.5
                        }
                    },
                    title: {text: "Title", align: "left"},
                    caption: {
                        text: "Caption",
                        align: "center",
                    },
                    subtitle: {
                        text: `Subtitle`, 
                        align: "left",
                        useHTML: true,
                        x: 0,
                        y: 40,
                      },
                    
                    xAxis: {
                        title: {text: "Frequency (Mhz)"},
                        type: 'logarithmic',
                    },
                    yAxis: {
                        title: {text: "dBuV"}
                    },
                    series: [{
                        data: firstData, 
                        color: "purple",
                        type: 'line',
                        name: '1st'
                    },],
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
                    }
                  }
                  return newOption
                })
            } else if (dataSize === 1) {
                console.log("here", '2');
                
                let splitFile = file[0].split('\n')
                for(let i=0; i<splitFile.length; i++) {
                    if (splitFile[i] !== "") {
                        secondData.push([+splitFile[i].split('\t')[0], +splitFile[i].split('\t')[1]])
                    }
                }
                console.log(options?.series);
                
                setDataSize(2)
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[1] = {
                        data: secondData,
                        color: "#cf8b0c",
                        type: "line",
                        name: "2nd"
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
                setDataSize(3)
                console.log(options?.series);
                
                setOptions((currOptions) => {
                    console.log(currOptions?.series, "series");
                    
                    
                    let newOptions = {...currOptions!}
                    newOptions.series[2] = {
                        data: thirdData,
                        color: '#418a09',
                        type: "line",
                        name: "3rd"
                    }
                    return newOptions
                })
            }
        } else if (file.length === 2) {
            
            
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
            setDataSize(2)
            setOptions(() => {
                
                let newOption
                newOption = {
                    chart: {
                        height: 600,
                        type: "line",
                        marginBottom: 150,
                        marginTop: 80,
                    },
                    plotOptions: {
                        series: {
                            lineWidth: 0.5
                        }
                    },
                    title: {text: "Title", align: "left"},
                    caption: {
                        text: "Caption",
                        align: "center",
                    },
                    subtitle: {
                        text: `Subtitle`, 
                        align: "left",
                        useHTML: true,
                        x: 0,
                        y: 40,
                      },
                    
                    xAxis: {
                        title: {text: "Frequency (Mhz)"},
                        type: 'logarithmic',
                    },
                    yAxis: {
                        title: {text: "dBuV"}
                    },
                    series: [{
                        data: firstData, 
                        color: "purple",
                        type: 'line',
                        name: '1st'
                    },{
                        data: secondData, 
                        color: "#cf8b0c",
                        type: 'line',
                        name: '2nd'
                    },],
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
                    }
                  }
                  return newOption
                })
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
            setDataSize(0)
            setOptions(() => {
                
                let newOption
                newOption = {
                    chart: {
                        height: 600,
                        type: "line",
                        marginBottom: 150,
                        marginTop: 80,
                    },
                    plotOptions: {
                        series: {
                            lineWidth: 0.5
                        }
                    },
                    title: {text: "Title", align: "left"},
                    caption: {
                        text: "Caption",
                        align: "center",
                    },
                    subtitle: {
                        text: `Subtitle`, 
                        align: "left",
                        useHTML: true,
                        x: 0,
                        y: 40,
                      },
                    
                    xAxis: {
                        title: {text: "Frequency (Mhz)"},
                        type: 'logarithmic',
                    },
                    yAxis: {
                        title: {text: "dBuV"}
                    },
                    series: [{
                        data: firstData, 
                        color: "purple",
                        type: 'line',
                        name: '1st'
                    },{
                        data: secondData, 
                        color: "#cf8b0c",
                        type: 'line',
                        name: '2nd'
                    },{
                        data: thirdData, 
                        color: '#418a09',
                        type: 'line',
                        name: '3rd'
                    },],
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
                    }
                  }
                  return newOption
                })
        }

        
    }


    return (
            <form>
                <input onChange={(e) => readFile(e)} type="file" multiple />
            </form>
    )
}

export default Upload