
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

    setRemovePeakFile: React.Dispatch<React.SetStateAction<boolean>>
    removePeakFile: boolean
}

const PeakRemoval = ({setOptions, options, removePeakFile, setRemovePeakFile}: chartProp) => {

    const [first, setFirst] = useState({
        peak: false,
        av: false,
        q: false
    })

    let tempPeakStorage:{
        data: number[][];
        color: string;
        type: string;
        name: string;
        marker: {
            symbol: string;
            height: number;
            width: number;
        }
    }[] = []
    let emptyPeakStorage:{
        data: number[][];
        color: string;
        type: string;
        name: string;
        marker: {
            symbol: string;
            height: number;
            width: number;
        }
    }[] = []
     

    
    
    return (
        <StyledPopup 
        // onClick={(e) => {
        //     e.preventDefault()
        //     setTitleView(false)
        // }} 
        style={{display: removePeakFile ? '' : 'none'}} >
          <div  className='outer-div' >
          <form  >
          <div style={{display: first.peak ? 'none' : ''}} ><label>Peak (dB)</label>
            <button onClick={(e) => {
                e.preventDefault()
                for(let i=6; i<options?.series.length!; i++) {
                    if (options?.series[i].name === "Peak (dB)") {
                        // emptyPeakStorage.push({
                        //     data: [[]],
                        //     color: "transparent", 
                        //     type: "scatter",
                        //     name: "",
                        //     marker: {
                        //         symbol: "",
                        //         height: 0,
                        //         width: 0,
                        //     }
                        // })
                        setOptions((currOptions) => {
                            let newOptions = {...currOptions!}
                            newOptions.series[i].data = []
                            newOptions.series[i].name = ""
                            newOptions.series[i].marker.symbol = ""

                            return newOptions
                        })
                    } else if (options?.series[i].name === "") {
                        emptyPeakStorage.push(options?.series[i])
                    } else {
                        tempPeakStorage.push(options?.series[i]!)
                    }
                }
                let newStorage: any[] = emptyPeakStorage.concat(tempPeakStorage)
                    setOptions((currOptions) => {
                        let newOptions = {...currOptions!}
                        let ns = newOptions.series // shorten
                        // ns[6] = newStorage[0]
                        // ns[7] = newStorage[1]
                        // ns[8] = newStorage[2]
                        return newOptions
                    })
                    setFirst((curr) => {
                        let newCurr = {...curr}
                        newCurr.peak = true
                        return newCurr
                    })
            }} >Delete</button>
            </div>
            <div style={{display: first.av ? 'none' : ''}} ><label>AV Peaks (dB)</label>
            <button onClick={(e) => {
                e.preventDefault()
                for(let i=6; i<options?.series.length!; i++) {
                    if (options?.series[i].name === "AV Peaks (dB)") {
                        // emptyPeakStorage.push({
                        //     data: [[]],
                        //     color: "transparent", 
                        //     type: "scatter",
                        //     name: "",
                        //     marker: {
                        //         symbol: "",
                        //         height: 0,
                        //         width: 0,
                        //     }
                        // })
                        setOptions((currOptions) => {
                            let newOptions = {...currOptions!}
                            newOptions.series[i].data = []
                            newOptions.series[i].name = ""
                            newOptions.series[i].marker.symbol = ""

                            return newOptions
                        })
                    } else if (options?.series[i].name === "") {
                        emptyPeakStorage.push(options?.series[i])
                    } else {
                        tempPeakStorage.push(options?.series[i]!)
                    }
                }
                let newStorage: any[] = emptyPeakStorage.concat(tempPeakStorage)
                    setOptions((currOptions) => {
                        let newOptions = {...currOptions!}
                        // let ns = newOptions.series // shorten
                        // ns[6] = newStorage[0]
                        // ns[7] = newStorage[1]
                        // ns[8] = newStorage[2]
                        
                        return newOptions
                    })
                    setFirst((curr) => {
                        let newCurr = {...curr}
                        newCurr.av = true
                        return newCurr
                    })

            }} >Delete</button>
            </div>
            
            <div style={{display: first.q ? 'none' : ''}} ><label>Q Peaks (dB)</label>
            <button onClick={(e) => {
                e.preventDefault()
                let tempData = {...options?.series}
                
                for(let i=6; i<options?.series.length!; i++) {
                    
                    if (options?.series[i].name === "Q Peaks (dB)") {
                        setOptions((currOptions) => {
                            let newOptions = {...currOptions!}
                            newOptions.series[i].data = []
                            newOptions.series[i].name = ""
                            newOptions.series[i].marker.symbol = ""

                            return newOptions
                        })
                        // emptyPeakStorage.push({
                        //     data: [[]],
                        //     color: "transparent", 
                        //     type: "scatter",
                        //     name: "",
                        //     marker: {
                        //         symbol: "",
                        //         height: 0,
                        //         width: 0,
                        //     }
                        // })
                    } else if (options?.series[i].name === "") {
                        emptyPeakStorage.push(options?.series[i])
                        
                    } else {
                        tempPeakStorage.push(options?.series[i]!)
                        
                    }
                }

                let newStorage: any[] = emptyPeakStorage.concat(tempPeakStorage)
                
                    setOptions((currOptions) => {
                        let newOptions = {...currOptions!}
                        let ns = newOptions.series // shorten
                        // console.log(newStorage[0], "NEWNEW");
                        // console.log(newStorage[1], "NEWNEW");
                        // console.log(newStorage[2], "NEWNEW");
                        
                        // ns[6] = newStorage[0]
                        // ns[7] = newStorage[1]
                        // ns[8] = newStorage[2]

                        // console.log(ns[6], "NEW---NEW");
                        // console.log(ns[7], "NEW---NEW");
                        // console.log(ns[8], "NEW---NEW");

                        return newOptions
                    })
                    setFirst((curr) => {
                        let newCurr = {...curr}
                        newCurr.q = true
                        return newCurr
                    })


            }} >Delete</button>
            </div>
            <div><button onClick={(e) => {
                e.preventDefault()
                setRemovePeakFile(false)
            }} >Close</button></div>
          </form>
          </div>
        </StyledPopup>
        )

}

export default PeakRemoval

// let tempPeak = []
// for(let j=6; j<newOptions.series.length; j++) {
//     if (newOptions.series[j].name !== "Q Peaks (dB)") {
//         tempPeak.push(newOptions.series[j])
//     } else {
//         newOptions.series.splice(j, 1)
//     }
// }
// for(let p=0; p<tempPeak.length; p++) {
//     newOptions.series.push(tempPeak[p])
// }    

const StyledPopup = styled.div`
background-color: #0000008d;
width: 100%;
height: 100%;
position: fixed;
left: 0;
top: 0;
.export {
    width: 50px;
}
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
  padding-bottom: 10px;
  margin-bottom: auto;
  /* height: 220px; */
  margin-left: auto;
  margin-right: auto;
  form {
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
}

`