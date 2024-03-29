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
            };
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
    dataSize: number
    setDataSize: React.Dispatch<React.SetStateAction<number>>
}

const DataDrop = ({setOptions, options, dataSize, setDataSize}: chartProp) => {

    const [displayDrop, setDisplayDrop] = useState<Boolean>(false)

    const buttonOne = () => {
        setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.series[3].data = [[0.009, 110], [0.05, 110],[0.05,90], [0.15,80]]
            newOptions.series[3].name = "Quasi-Peak Limit"
            newOptions.series[3].color = "red"
            if (newOptions.yAxis.max! <= 110) newOptions.yAxis.max = 120
            if (newOptions.yAxis.min! >= 80) newOptions.yAxis.max = 70
            return newOptions
        })
    }
    const buttonTwo = () => {
        setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.series[3].data = [[0.15, 66], [0.5, 56],[5, 56], [5, 60], [30, 60]]
            newOptions.series[3].name = "Quasi-Peak Limit"
            newOptions.series[3].color = "red"
            newOptions.series[4].data = [[0.15, 56], [0.5, 46],[5, 46], [5, 50], [30, 50]]
            newOptions.series[4].name = "Average Peak Limit"
            newOptions.series[4].color = "blue"
            return newOptions
        })
    }
    const buttonThree = () => {
        setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.series[3].data = [[30, 30], [230, 30],[230, 37], [1000,37]]
            newOptions.series[3].name = "Quasi-Peak Limit"
            newOptions.series[3].color = "red"
            return newOptions
        })
    }
    const buttonFour = () => {
        setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.series[3].data = [[1000, 70], [3000, 70],[3000, 74], [6000, 74]]
            newOptions.series[3].name = "Peak Limit"
            newOptions.series[3].color = "red"
            newOptions.series[4].data = [[1000, 50], [3000, 50],[3000, 54], [6000, 54]]
            newOptions.series[4].name = "Average Peak Limit"
            newOptions.series[4].color = "blue"
            return newOptions
        })
    }
    const buttonFive = () => {
        setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.series[3].data = [[0.15, 79], [0.5, 79],[0.5, 73], [30, 73]]
            newOptions.series[3].name = "Quasi-Peak Limit"
            newOptions.series[3].color = "red"
            newOptions.series[4].data = [[0.15, 66], [0.5, 66],[0.5, 60], [30, 60]]
            newOptions.series[4].name = "Average Peak Limit"
            newOptions.series[4].color = "blue"
            return newOptions
        })
    }
    const buttonSix = () => {
        setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.series[3].data = [[0.15, 79], [0.5, 79],[0.5, 73], [30, 73]]
            newOptions.series[3].name = "Quasi-Peak Limit"
            newOptions.series[3].color = "red"
            newOptions.series[4].data = [[0.15, 66], [0.5, 66],[0.5, 60], [30, 60]]
            newOptions.series[4].name = "Average Peak Limit"
            newOptions.series[4].color = "blue"
            return newOptions
        })
    }

    return (
        <StyledDiv onMouseEnter={() => setDisplayDrop(true)}
        onMouseLeave={() => setDisplayDrop(false)}
        >
            Limit Data
            
            <ul 
            
            style={{display: displayDrop ? '' : 'none'}} className="main-div" >
              <li><button onClick={buttonOne} >Conducted Luminaires EN55015 (low range) (0.009 MHz to 0.15 MHz)</button></li>
              <li><button onClick={buttonTwo} >Conducted AC CISPR 16 (0.15 MHz to 30 MHz) (Class B)</button></li>
              <li><button onClick={buttonFive} >Conducted AC CISPR 16 (0.15 MHz to 30 MHz) (Class A)</button></li>
              <li><button onClick={buttonSix} >Conducted DC CISPR 16 (0.15 MHz to 30 MHz) (Class B)</button></li>
              <li><button onClick={buttonThree} >Radiated CISPR 16 (30 MHz to 1000 MHz) (Class B)</button></li>
              <li><button onClick={buttonFour} >Radiated CISPR 16 Microwave (1000 MHz to 6000 MHz) (Class B)</button></li>
            </ul>
          </StyledDiv>
    )
}

export default DataDrop

const StyledDiv = styled.div`
background-color: #16181D;
color: #61DAFB;
font-weight: bold;
height: 30px;
padding-top: 10px;
width: 200px;
margin-left: 10px;
/* margin-top: 20px; */

ul {
  margin-top: 9px;
  margin-right: 50px;
  list-style-type: none;
  padding-left: 0px;
  /* margin-right: 80%; */
  background-color: blue;
  li {
    button {
      width: 200px;
      height: 40px;
      background-color: #20232A;
      padding: 0px;
      border: 0px;
      color: #61DAFB;
      font-weight: bold;
      white-space: normal;
      font-size: 10px;
      word-wrap: break-word;
      border: 1px solid #16181D;
      transition:0.1s 0.0s;
      &:hover {
        background-color: #61DAFB;
        color: #16181D;
      }
      :active {
        background-color: white;
        transition:0s 0s;
      }
    }
  }

}


`