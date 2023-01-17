//Chart.tsx

import HighchartsReact from "highcharts-react-official";
import Highcharts, { getOptions } from "highcharts";
import React, {useState, useEffect} from "react";
import { config } from "process";
import Upload from "./Upload";
import Limits from './Limits';
import PeakFile from './PeakFile'
import AxisLabel from "./Popups/AxisLabel";
import Title from "./Popups/Title";
import DataKeys from "./Popups/DataKeys";
import Select from 'react-select'
import styled from 'styled-components'
import DataDrop from "./DataDrop";
import quasi from '../images/quasi.png'
import peak from '../images/peak.png'
import average from '../images/average.png'
require("highcharts/modules/exporting")(Highcharts);



export default function Chart() {

  const [editHover, setEditHover] = useState<boolean>(false)
  const [axisLabelView, setAxisLabelView] = useState<boolean>(false)
  const [titleView, setTitleView] = useState<boolean>(false)
  const [dataKeysView, setDataKeysView] = useState<boolean>(false)
  const [fileCount, setFileCount] = useState(0)
  const [peakCount, setPeakCount] = useState(0)

  const [options, setOptions] = useState<{
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
    };
    yAxis: {
      title: {
          text: string;
      };
    };
    caption: {
      text: string;
      align: string;
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
}>()





    const handleClickk = () => {
      console.log("here")
      let realData = [[0,3],[1,8],[2,6],[3,4],
      [4,10],[5,7],[6,3],[7,4],[8,8],[9,6],
      [10,1],[11,4],[12,9],
    
    ]
      setOptions(() => {
        let option
        option = {
          chart: {
            height: 600,
            type: 'scatter',
            marginBottom: 180,
            marginTop: 90
          },
          plotOptions: {
            series: {
              lineWidth: 0.5,
              dataLabels: {
                enabled: true,
                allowOverlap: true,
                // formatter: function() {
                //   let first = realData[0]
                //   let last = realData[realData.length - 1]
                //   // if (real)
                //   console.log(first.y);
                  
                  
                // }
              },
            }
          },
          title: {text: `Conducted Emissions - Low Range`, 
          align: "left", 
          useHTML: false,
          
        },
          caption: {
            text: "Graph 2 - Background scan",
            align: "center",
          },
          
          credits: {
            text: "Cassindustries.com",
            href: "https://www.cassindustries.com/",
            
          },
          subtitle: {
            text: `Contained Air Solutions Ltd- CAS Class 2 Robotic Enclosure`, 
            align: "left",
            useHTML: false,
            x: 0,
            y: 40,
          },
          
        series: [{data: realData, color: "#10c053", 
          description: "Data", 
          name: "Peak Recorded Emissions",
          type: "line",
          marker: {
            symbol: "triangle",
            width: 20,
            height: 20,
          }
        },
        {data: [[]], color: "#ffffff", 
          description: "Data", 
          name: "fake",
          type: "line",
          marker: {
            symbol: "circle",
            width: 20,
            height: 20,
        }
        },{data: [[]], color: "#ffffff", 
          description: "Data", 
          name: "fake",
          type: "line",
          marker: {
            symbol: "circle",
            width: 20,
            height: 20,
        }
        },{data: [[]], color: "#ffffff", 
          description: "Data", 
          name: "fake",
          type: "line",
          marker: {
            symbol: "circle",
            width: 20,
            height: 20,
        }
        },{data: [[]], color: "#ffffff", 
          description: "Data", 
          name: "fake",
          type: "line",
          marker: {
            symbol: "circle",
            width: 20,
            height: 20,
        }
        },{data: [[]], color: "#ffffff", 
          description: "Data", 
          name: "fake",
          type: "line",
          marker: {
            symbol: "circle",
            width: 20,
            height: 20,
        }
        },
  //       {
  //         type: "scatter",
  //         data: [[0,4],[1,7],[2,5],[3,8],
  //         [4,10],[5,7],[6,3],[7,4],[8,8],[9,6],
  //         [10,1],[11,4],[12,9]], color: "red", 
  //       description: "Data", 
  //       name: "",
  //       lineWidth: 0,
  //       marker: {
  //         radius: 10,
  //         symbol: `url(${quasi})`,
  //         height: 20,
  //         width: 20,
  //         lineWidth: 0.5,
        
  //       }
  //     },
  //     {
  //       type: "scatter",
  //       data: [[0,1],[1,9],[2,3],[3,8],
  //       [4,10],[5,7],[6,3],[7,4],[8,8],[9,6],
  //       [10,1],[11,4],[12,9]], color: "red", 
  //     description: "Data", 
  //     name: "",
  //     lineWidth: 0,
  //     marker: {
  //       symbol: `url(${average})`,
  //       height: 20,
  //       width: 20,
  //     }
  //   },
  //   {
  //     type: "scatter",
  //     data: [[0,8],[1,6],[2,11],[3,8],
  //     [4,10],[5,7],[6,3],[7,4],[8,8],[9,6],
  //     [10,1],[11,4],[12,9]], color: "red", 
  //   description: "Data", 
  //   name: "",
  //   lineWidth: 0,
  //   marker: {
  //     radius: 0.1,
  //     symbol: `url(${peak})`,
  //     height: 20,
  //     width: 20,
  //     lineWidth: 0.5,
  //     lineColor: '#f00101'
  //   }
  // },
],
          labels: {
            items:[
              {
                htmt: "<h1>datadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatadatatadatadata</h1>",
                style: {
                  left: "100px",
                  top: "-50px"
                  
                }
              }
            ],
            style: {"color": "#940e0e", "position": "absolute"},
          },
          xAxis: { 
            title: {text: 'Frequency (MHz)'}, 
            type: 'logarithmic',
            // tickInterval: 0.2,
            alignTicks: false,
            gridLineWidth: 1,
            lineWidth: 2,
            // startOnTick: true,
            showLastLabel: true,
            showFirstLabel: true,
            // endOnTick: true,
            crosshair: true,
            
          },
          yAxis: {
            title: {text: 'Emissions level (dBuV)'}
          },
          buttons: [{
            text: "button",
            theme: {
              'stroke-width': 1,
              stroke: 'silver',
              r: 0,
              states: {
                  hover: {
                      fill: '#a4edba'
                  },
                  select: {
                      stroke: '#039',
                      fill: '#a4edba'
                  }
              }
          }
          }],
          legend: {
            layout: 'vertical',
            align: 'bottom',
            verticalAlign: 'bottom',
            alignColumns: false,
            title: {
              text: "Keys",
            },
            // width: 50,
            x:0,
            y:10
          },
          
          exporting: {
            sourceWidth: 1920,
            sourceHeight: 1080,
            allowHTML: true
          }
          
        }
        
        return option
      })
     
      }
    
      


        

  return (
    <div className="custom-chart"  >
      
      <button>update</button>
      <HighchartsReact 
    id="chart-test"
    highcharts={Highcharts}
    options={options}
    containerProps={{ style: { height: "100%" } }}
    redraw={false}
    Ref="chart"
    />
    <AxisLabel setOptions={setOptions} options={options} 
    axisLabelView={axisLabelView} setAxisLabelView={setAxisLabelView} />
    <Title setOptions={setOptions} options={options}
    titleView={titleView} setTitleView={setTitleView} />
    <DataKeys setOptions={setOptions} options={options}
    dataKeysView={dataKeysView} setDataKeysView={setDataKeysView} />
    
    <StyledList>
      <li>
        <StyledDiv onMouseEnter={() => {
      setEditHover(true)
    }} onMouseLeave={() => setEditHover(false)}  >
      Edit Chart
      
      <ul 
      onMouseEnter={() => setEditHover(true)} 
      style={{display: editHover ? '' : 'none'}} className="main-div" >
        <li><button onClick={() => setTitleView(true)} >Title</button></li>
        <li><button onClick={() => setDataKeysView(true)} >Data Labels</button></li>
        <li><button onClick={() => setAxisLabelView(true)} >Axis Labels</button></li>
        <li><button>Fourth</button></li>
      </ul>
    </StyledDiv>
    </li>
      <li className="shortcut" >
      <DataDrop setOptions={setOptions} options={options}  />
      </li>
      <li className="upload" >
      <Upload setOptions={setOptions} options={options}
       setFileCount={setFileCount}
      />
      </li>
      <li className="limit" >
      <Limits setOptions={setOptions} options={options} 
        fileCount={fileCount} setFileCount={setFileCount}
      />
      </li>
      <li className="peakfile" >
      <PeakFile setOptions={setOptions} options={options} 
        peakCount={peakCount} setPeakCount={setPeakCount}
      />
      </li>
    </StyledList>
    
  
   
      
      
    {/* <button onClick={handleClick} >click</button> */}
    <button onClick={handleClickk} >cliccc</button>
    {/* <Upload setOptions={setOptions} options={options} />
    <Limits setOptions={setOptions} options={options} /> */}
    </div>
  );
}

// #16181D
// #20232A

const StyledList = styled.ul`
  
display: flex;
padding-inline-start: 0px;
list-style-type: none;

.upload {
background-color: #16181D;
color: #61DAFB;
margin-left: 10px;
margin-top: 20px;
height: 36px;
}
.limit {
background-color: #16181D;
color: #61DAFB;
margin-left: 10px;
margin-top: 20px;
height: 36px;
}
.peakfile {
background-color: #16181D;
color: #61DAFB;
margin-left: 10px;
margin-top: 20px;
height: 36px;
}


`
const StyledDiv = styled.div`
background-color: #16181D;
color: #61DAFB;
font-weight: bold;
height: 30px;
padding-top: 10px;
width: 100px;
margin-left: 30px;
margin-top: 20px;

ul {
  margin-top: 11px;
  list-style-type: none;
  padding-left: 0px;
  /* margin-right: 80%; */
  background-color: blue;
  li {
    button {
      width: 100%;
      height: 30px;
      background-color: #20232A;
      padding: 0px;
      border: 0px;
      color: #61DAFB;
      font-weight: bold;
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