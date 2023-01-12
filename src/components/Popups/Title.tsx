
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

    setTitleView: React.Dispatch<React.SetStateAction<boolean>>
    titleView: boolean
}

const Title = ({setOptions, options, titleView, setTitleView}: chartProp) => {

    
    return (
        <StyledPopup 
        // onClick={(e) => {
        //     e.preventDefault()
        //     setTitleView(false)
        // }} 
        style={{display: titleView ? '' : 'none'}} >
          <div  className='outer-div' >
          <form>
            <div><label>Test Type</label>
            <input type={"text"} 
                value={options?.title.text} onChange={(e) => setOptions((curr) => {
                    let newCurr = {...curr!}
                    newCurr.title.text = e.target.value
                    return newCurr
    
                })} />
            </div>
            <div><label>EUT Description</label>
            <input type={"text"} 
            value={options?.subtitle.text} onChange={(e) => setOptions((curr) => {
                let newCurr = {...curr!}
                newCurr.subtitle.text = e.target.value
                return newCurr
            })} /></div>
            <div><label>Graph Information</label>
            <input type={"text"} 
            value={options?.caption.text} onChange={(e) => setOptions((curr) => {
                let newCurr = {...curr!}
                // newCurr. = e.target.value
                return newCurr
            })} /></div>
            <div><button onClick={(e) => {
                e.preventDefault()
                setTitleView(false)
            }} >Close</button></div>
          </form>
          </div>
        </StyledPopup>
        )

}

export default Title

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
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  form {
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
}

`