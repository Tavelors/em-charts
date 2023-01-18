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

    setDataKeysView: React.Dispatch<React.SetStateAction<boolean>>
    dataKeysView: boolean
}

const DataKeys = ({setOptions, options, dataKeysView, setDataKeysView}: chartProp) => {

    
    
    return (
        <StyledPopup 
        style={{display: dataKeysView ? '' : 'none'}} >
          <div  className='outer-div' >
            <div style={{display: options?.series[0].data.length! > 1 ? '' : 'none'}} >
            <label>{"Data Line"}</label>
            <input 
            defaultValue={options?.series[0].name}
            type={"text"} 
            onChange={(e) => {
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[0].name = e.target.value
                    return newOptions
                })
            }} />
            </div>
            <div style={{display: options?.series[1].data.length! > 1 ? '' : 'none'}} >
            <label>{"Data Line"}</label>
            <input 
            defaultValue={options?.series[1].name}
            type={"text"} 
            onChange={(e) => {
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[1].name = e.target.value
                    return newOptions
                })
            }} />
            </div>
            <div style={{display: options?.series[2].data.length! > 1 ? '' : 'none'}} >
            <label>{"Data Line"}</label>
            <input 
            defaultValue={options?.series[2].name}
            type={"text"} 
            onChange={(e) => {
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[2].name = e.target.value
                    return newOptions
                })
            }} />
            </div>
            <div style={{display: options?.series[3].data.length! > 1 ? '' : 'none'}} >
            <label>{"Limit Line"}</label>
            <input 
            defaultValue={options?.series[3].name}
            type={"text"} 
            onChange={(e) => {
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[3].name = e.target.value
                    return newOptions
                })
            }} />
            </div>
            <div style={{display: options?.series[4].data.length! > 1 ? '' : 'none'}} >
            <label>{"Limit Line"}</label>
            <input 
            defaultValue={options?.series[4].name}
            type={"text"} 
            onChange={(e) => {
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[4].name = e.target.value
                    return newOptions
                })
            }} />
            </div>
            <div style={{display: options?.series[5].data.length! > 1 ? '' : 'none'}} >
            <label>{"Limit Line"}</label>
            <input 
            defaultValue={options?.series[5].name}
            type={"text"} 
            onChange={(e) => {
                setOptions((currOptions) => {
                    let newOptions = {...currOptions!}
                    newOptions.series[5].name = e.target.value
                    return newOptions
                })
            }} />
            </div>
            
            
            <div><button onClick={(e) => {
                e.preventDefault()
                setDataKeysView(false)
            }} >Close</button></div>
          
          </div>
        </StyledPopup>
        )

}

export default DataKeys

const StyledPopup = styled.div`
background-color: #0000008d;
width: 100%;
height: 100%;
position: absolute;
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
  height: 300px;
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