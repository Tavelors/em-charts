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

    setDataKeysView: React.Dispatch<React.SetStateAction<boolean>>
    dataKeysView: boolean
}

const DataKeys = ({setOptions, options, dataKeysView, setDataKeysView}: chartProp) => {

    
    return (
        <StyledPopup 
        // onClick={(e) => {
        //     e.preventDefault()
        //     setTitleView(false)
        // }} 
        style={{display: dataKeysView ? '' : 'none'}} >
          <div  className='outer-div' >
            {options?.series!.map((data, i) => {
                let name = "Limit"
                if (i < 3) {
                    name = "Data"
                }
                return (
                    <div key={`${data.name}${i}`} >
                    <label>{name}</label><input 
                    value={data.name} type="text"
                    onChange={(e) => {
                        setOptions((currOptions) => {
                            let newOptions = {...currOptions!}
                            newOptions.series[i].name = e.target.value
                            return newOptions
                        })
                    }}
                    />
                    </div>

                )
            })}
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