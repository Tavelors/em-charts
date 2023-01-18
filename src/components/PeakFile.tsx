import styled from 'styled-components'
import quasi from '../images/quasi.png'
import peak from '../images/peak.png'
import average from '../images/average.png'
import { useEffect } from 'react'

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
    peakCount: number
    setPeakCount: React.Dispatch<React.SetStateAction<number>>
}


const PeakFile = ({setOptions, options, peakCount, setPeakCount}: chartProp) => {

    
    
    const readFile = async (e: any) => {

    e.preventDefault()
    let averagePeak:number[][] = []
    let quasiPeak:number[][] = []
    let posPeak:number[][] = []
        
    let files = Array.from(e.target.files).map((file: any)  => {
        let reader = new FileReader();
        return new Promise(resolve => {
            reader.onload = () => resolve(reader.result);
            reader.readAsText(file);
        });
    });

    let file: any = await Promise.all(files);

    
    let fileSplit = file[0].split('\n')
    for(let i=0; i<fileSplit.length; i++) {
        if (fileSplit[i] !== "") {
            console.log(fileSplit[i].split('\t'));
            
            if (fileSplit[i].includes("PEAK POS")) {
                posPeak.push([+fileSplit[i].split('\t')[0], +fileSplit[i].split('\t')[1]])
            } else if (fileSplit[i].includes("QP")) {
                quasiPeak.push([+fileSplit[i].split('\t')[0], +fileSplit[i].split('\t')[1]])
            } else if (fileSplit[i].includes("AVERAGE")) {
                averagePeak.push([+fileSplit[i].split('\t')[0], +fileSplit[i].split('\t')[1]])
            }
            
            
            
        }
    }

    if (peakCount < 1) {

    
    if (peak.length > 0) {
        setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.series.push({
                marker: {
                    symbol: `url(${peak})`,
                    height: 20,
                    width: 20,
                  },
                data: posPeak,
                color: "white", 
                type: "scatter",
                name: "Peak (dB)",     
        })
            return currOptions
        })
        setPeakCount(1)
    }
    if (averagePeak.length > 0) {
        setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.series.push({
                marker: {
                    symbol: `url(${average})`,
                    height: 20,
                    width: 20,
                    
                  },
                data: averagePeak,
                color: "white", 
                type: "scatter",
                name: "AV Peaks (dB)",     
        })
            return currOptions
        })
        setPeakCount(1)
    }
    if (quasiPeak.length > 0) {
        
        setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.series.push({
                marker: {
                    symbol: `url(${quasi})`,
                    height: 20,
                    width: 20,
                  },
                data: quasiPeak,
                color: "white", 
                type: "scatter",
                name: "Q Peaks (dB)",     
        })
            return currOptions
        })
        setPeakCount(1)
    }
    
    }
    }



    return (
        <StyledForm  >
        <label htmlFor="peakFile" >Peak<br></br>File</label>
        <input  onChange={(e) => readFile(e)} 
        type="file" 
        multiple 
        id="peakFile"
        style={{visibility: "hidden"}}
        />
        </StyledForm>
    )
}


export default PeakFile

const StyledForm = styled.form `

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