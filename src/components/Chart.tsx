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
import ResizeY from "./Popups/ResizeY";
import Select from 'react-select'
import styled from 'styled-components'
import DataDrop from "./DataDrop";
import quasi from '../images/quasi.png'
import peak from '../images/peak.png'
import average from '../images/average.png'
// import HC_more from 'highcharts/highcharts-more';
// HC_more(Highcharts)
require('highcharts/highcharts-more')(Highcharts)

require("highcharts/modules/exporting")(Highcharts);




export default function Chart() {

  const [editHover, setEditHover] = useState<boolean>(false)
  const [fileHover, setFileHover] = useState<boolean>(false)
  const [axisLabelView, setAxisLabelView] = useState<boolean>(false)
  const [titleView, setTitleView] = useState<boolean>(false)
  const [dataKeysView, setDataKeysView] = useState<boolean>(false)
  const [changeAxisView, setChangeAxisView] = useState<boolean>(false)
  const [showChartBool, setShowChartBool] = useState<boolean>(false)
  const [fileCount, setFileCount] = useState<number>(0)
  const [peakCount, setPeakCount] = useState<number>(0)
  const [dataSize, setDataSize] = useState<number>(0)

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


Highcharts.setOptions({
  lang: {
    numericSymbols:  []
  },
});


    const handleClickk = () => {
      console.log("here")
      let realData = [[0,3],[1,8],[2,6],[3,4],
      [4,10],[5,7],[6,3],[7,4],[8,60],[9,6],
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
                // allowOverlap: true,
                formatter: function() {
 
                }
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
            tickInterval: 0.1,
            labels: {
                format: '',
            },
            
            // formatter: function() {
                
                
            // },
            tickPositions: undefined,
            alignTicks: false,
            gridLineWidth: 1,
            lineWidth: 2,
            // startOnTick: true,
            showLastLabel: true,
            showFirstLabel: true,
            // endOnTick: true,
            crosshair: true,
            // tickPositioner: function () {
            //   this.tickPositions
            // }
            
          },
          yAxis: {
            title: {text: 'Emissions level (dBuV)'},
            max: 120,
            min: 0,
            formatter: function() {}
            // tickPositions: [0, 10, 20, 30 ,40 ,50],
            
            // tickPositioner: function () {
            //   console.log(this.tickPositions);
              
            // }
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
    <div   className="custom-chart"  >
      
      <StyledDivUpload  style={{display: showChartBool ? 'none' : ''}} className="first-upload" >
      <Upload setOptions={setOptions} options={options}
      setFileCount={setFileCount} 
      showChartBool={showChartBool} 
      setShowChartBool={setShowChartBool}
      dataSize={dataSize} 
      setDataSize={setDataSize}
      />
      </StyledDivUpload>
      <HighchartsReact 
    id="chart-test"
    highcharts={Highcharts}
    // tick={Highcharts.Tick}
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
    <ResizeY setOptions={setOptions} options={options} 
    changeAxisView={changeAxisView} setChangeAxisView={setChangeAxisView} />
    <StyledList style={{display: showChartBool ? '' : 'none'}} >
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
        <li><button onClick={() => setChangeAxisView(true)} >Change YAxis</button></li>
      </ul>
    </StyledDiv>
    </li>
    
      <li className="shortcut" >
      <DataDrop setOptions={setOptions} options={options} 
      dataSize={dataSize} setDataSize={setDataSize}
      />
      </li>
      <li>
      <StyledDivFiles onMouseEnter={() => {
      setFileHover(true)
    }} onMouseLeave={() => setFileHover(false)}  >
      Files
      
      <ul 
      onMouseEnter={() => setFileHover(true)} 
      style={{display: fileHover ? '' : 'none'}} className="main-div" >
        <li>
        <Upload setOptions={setOptions} options={options}
      setFileCount={setFileCount}
      showChartBool={showChartBool} 
      setShowChartBool={setShowChartBool}
      dataSize={dataSize} 
      setDataSize={setDataSize}
      />
        </li>
        <li>
        <Limits setOptions={setOptions} options={options} 
      fileCount={fileCount} setFileCount={setFileCount}
      dataSize={dataSize} setDataSize={setDataSize}
      />
        </li>
        <li>
        <PeakFile setOptions={setOptions} options={options} 
        peakCount={peakCount} setPeakCount={setPeakCount}
      />
        </li>
      </ul>
    </StyledDivFiles>
      </li>
      {/* <li  style={{display: ''}} className="upload" >
      <Upload setOptions={setOptions} options={options}
      setFileCount={setFileCount}
      showChartBool={showChartBool} 
      setShowChartBool={setShowChartBool}
      dataSize={dataSize} 
      setDataSize={setDataSize}
      />
      </li>
      <li className="limit" >
      <Limits setOptions={setOptions} options={options} 
      fileCount={fileCount} setFileCount={setFileCount}
      dataSize={dataSize} setDataSize={setDataSize}
      />
      </li>
      <li className="peakfile" >
      <PeakFile setOptions={setOptions} options={options} 
        peakCount={peakCount} setPeakCount={setPeakCount}
      />
      </li> */}
      <li>
        
          <button className="reset"
          onClick={() => window.location.reload()}
          >Reset</button>
          
      </li>
      <li className="arrow-max" >
        <div>
          <label className="maxlabel" >max</label>
        </div>
        <div>
        <button className="maxup" onClick={() => {
          setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.yAxis.max! += 10
            return newOptions
          })
        }} >⬆</button>
        </div>
        <div>
        <button className="maxdown" onClick={() => {
          setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.yAxis.max! -= 10
            return newOptions
          })
        }} >⬇</button>
        </div>
      </li>
      <li className="arrow-min" >
      <div>
          <label className="minlabel" >min</label>
        </div>
        <div>
        <button className="minup" onClick={() => {
          setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.yAxis.min! += 10
            return newOptions
          })
        }} >⬆</button>
        </div>
        <div>
        <button className="mindown" onClick={() => {
          setOptions((currOptions) => {
            let newOptions = {...currOptions!}
            newOptions.yAxis.min! -= 10
            return newOptions
          })
        }} >⬇</button>
        </div>
      </li>
     
    </StyledList>

    {/* <button onClick={handleClickk} >cliccc</button> */}
    </div>
  );
}

// #16181D
// #20232A
const StyledDivFiles = styled.div`
background-color: #16181D;
color: #61DAFB;
font-weight: bold;
height: 30px;
padding-top: 10px;
width: 100px;
margin-left: 10px;
margin-top: 20px;

ul {
  margin-top: 9px;
  list-style-type: none;
  padding-left: 0px;
  /* margin-right: 80%; */
  background-color: blue;
  li {
    width: 98px;
    border: 1px solid #121212;
  
    .upload {
background-color: #16181D;
color: #61DAFB;
margin-left: 10px;
margin-top: 20px;
margin-right: 10px;
height: 30px;
width: 90px;
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
  }

}


`

const StyledDivUpload = styled.div `
/* background-color: #16181D; */
display: flex;
color: #61dafb;
font-size: 15px;
justify-content: center;
/* position: absolute; */
text-align: center;
/* left: 50%; */
margin-left: auto;
margin-right: auto;
margin-top: 100px;
/* margin-left: auto; */
height: 200px;
/* width: 200px; */

`

const StyledList = styled.ul`
.reset {
  background-color: #16181D;
color: #61DAFB;
font-size: 16px;
/* padding-bottom: 10px; */
padding-right: 5px;
font-weight: bold;
margin-left: 10px;
margin-top: 20px;
height: 40px;
width: 70px;
border: 0px;
&:hover {
    background-color: #61DAFB;
    color:#16181D;
}
:active {
    background-color: white;
}
}

.arrow-max {
  margin-top: 6px;
}
.arrow-min {
  margin-top: 6px;
}

display: flex;
padding-inline-start: 0px;
list-style-type: none;
background-color: #282C34;
padding-bottom: 10px;
.upload {
background-color: #16181D;
color: #61DAFB;
margin-left: 10px;
margin-top: 20px;
margin-right: 10px;
height: 30px;
width: 50px;
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
.maxlabel {
color: #61DAFB;
font-size: 10px;
margin-left: 8px;
}
.minlabel {
color: #61DAFB;
font-size: 10px;
margin-left: 8px;
}
.maxup {
background-color: #16181D;
color: #61DAFB;
font-size: 10px;
padding-bottom: 10px;
padding-right: 5px;
display: table-cell; 
vertical-align: middle;
font-weight: bold;
margin-left: 10px;
margin-top: 0px;
height: 18px;
width: 35px;
border: 0px;
&:hover {
    background-color: #61DAFB;
    color:#16181D;
}
:active {
    background-color: white;
}
}
.maxdown {
background-color: #16181D;
color: #61DAFB;
font-size: 10px;
padding-bottom: 10px;
padding-right: 5px;
display: table-cell; 
vertical-align: middle;
font-weight: bold;
margin-left: 10px;
margin-top: 4px;
height: 18px;
width: 35px;
border: 0px;
&:hover {
    background-color: #61DAFB;
    color:#16181D;
}
:active {
    background-color: white;
}
}
.minup {
background-color: #16181D;
color: #61DAFB;
font-size: 10px;
padding-bottom: 10px;
padding-right: 5px;
display: table-cell; 
vertical-align: middle;
font-weight: bold;
margin-left: 10px;
margin-top: 0px;
height: 18px;
width: 35px;
border: 0px;
&:hover {
    background-color: #61DAFB;
    color:#16181D;
}
:active {
    background-color: white;
}
}
.mindown {
background-color: #16181D;
color: #61DAFB;
font-size: 10px;
padding-bottom: 10px;
padding-right: 5px;
display: table-cell; 
vertical-align: middle;
font-weight: bold;
margin-left: 10px;
margin-top: 4px;
height: 18px;
width: 35px;
border: 0px;
&:hover {
    background-color: #61DAFB;
    color:#16181D;
}
:active {
    background-color: white;
}
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
  margin-top: 9px;
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