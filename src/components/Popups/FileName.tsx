
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

    setChangeFileName: React.Dispatch<React.SetStateAction<boolean>>
    changeFileName: boolean
}

const FileName = ({setOptions, options, changeFileName, setChangeFileName}: chartProp) => {

    
    return (
        <StyledPopup 
        // onClick={(e) => {
        //     e.preventDefault()
        //     setTitleView(false)
        // }} 
        style={{display: changeFileName ? '' : 'none'}} >
          <div  className='outer-div' >
          <form>
            <div><label>File Name</label>
            <input type={"text"} 
                defaultValue={options?.exporting.filename}
                // value={options?.title.text} 
                onChange={(e) => setOptions((curr) => {
                    e.preventDefault()
                    let newCurr = {...curr!}
                    newCurr.exporting.filename = e.target.value
                    return newCurr
    
                })} />
            </div>
            <div><label>Width</label>
            <input className='export' type={"number"} 
                defaultValue={options?.exporting.sourceWidth}
                // value={options?.title.text} 
                onChange={(e) => setOptions((curr) => {
                    e.preventDefault()
                    let newCurr = {...curr!}
                    newCurr.exporting.sourceWidth = +e.target.value
                    return newCurr
    
                })} />
            </div>
            <div><label>Height</label>
            <input className='export' type={"number"} 
                defaultValue={options?.exporting.sourceHeight}
                // value={options?.title.text} 
                onChange={(e) => setOptions((curr) => {
                    e.preventDefault()
                    let newCurr = {...curr!}
                    newCurr.exporting.sourceHeight = +e.target.value
                    return newCurr
    
                })} />
            </div>
            <div><button onClick={(e) => {
                e.preventDefault()
                setChangeFileName(false)
            }} >Close</button></div>
          </form>
          </div>
        </StyledPopup>
        )

}

export default FileName

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
  padding-bottom: 30px;
  height: auto;
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