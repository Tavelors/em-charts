import styled from 'styled-components'
import {useState} from 'react'

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
    setFileCount: React.Dispatch<React.SetStateAction<number>>
    fileCount: number
    dataSize: number
    setDataSize: React.Dispatch<React.SetStateAction<number>>
}

const Limits = ({setOptions, options, fileCount, setFileCount, dataSize, setDataSize}: chartProp) => {

    
    // const [FirstFileData, setFirstFileData] = useState<number[][]>([])
    // const [FirstFileDataName, setFirstFileDataName] = useState<string>("")
    // const [SecondFileData, setSecondFileData] = useState<number[][]>([])
    // const [SecondFileDataName, setSecondFileDataName] = useState<string>("")
    // const [ThirdFileData, setThirdFileData] = useState<number[][]>([])
    // const [ThirdFileDataName, setThirdFileDataName] = useState<string>("")

//     const setLimitOne = (e: any) => {
//         if (e.target.checked) {
//             setOptions(() => {
//                 return {
//                     plotOptions: {series: {lineWidth: 0.5},}, // 0.009 - 0.15
//                     title: {text: options?.title.text!,},
//                     series: [{data: data?.data!, color: data?.color!},{
//                         data: [[0.009, 110], [0.05, 110],[0.05,90], [0.15,80]],
//                         color: "red", type: "line"}],                   
//                     xAxis: {title: {text: options?.xAxis.title.text!,}
//                     ,type: "logarithmic",},
//                 }
//             })
//         } else {
//             setOptions(() => {
//                 return {
//                     plotOptions: {series: {lineWidth: 0.5},},
//                     title: {text: options?.title.text!,},
//                     series: [{data: data?.data!, color: data?.color!}],                   
//                     xAxis: {title: {text: options?.xAxis.title.text!,}
//                     ,type: "logarithmic",},
//                 }
//             })
            
//         }
//     }

//     const setLimitTwo = (e: any) => {
//         if (e.target.checked) {
//             setOptions(() => {
                

//                 return {
//                     plotOptions: {series: {lineWidth: 0.5},}, // 150k Hz to 30 MHz
//                     title: {text: options?.title.text!,},
//                     series: [{data: data?.data!, color: data?.color!},{
//                         data: [[0.15, 66], [0.5, 56],[5,56], [5,60], [30, 60]],
//                         color: "red", type: "line"},{
//                         data: [[0.15, 56], [0.5, 46], [5, 46], [5,50], [30, 50]],
//                         color: "blue", type: "line"}],                   
//                     xAxis: {title: {text: options?.xAxis.title.text!,}
//                     ,type: "logarithmic",},
//                 }
//             })   
//         } else {
//             setOptions(() => {
//                 return {
//                     plotOptions: {series: {lineWidth: 0.5},},
//                     title: {text: options?.title.text!,},
//                     series: [{data: data?.data!, color: data?.color!}],                   
//                     xAxis: {title: {text: options?.xAxis.title.text!,}
//                     ,type: "logarithmic",},
//                 }
//             })
//         }
        
//     }

//     const setLimitThree = (e: any) => { // Radiated EN55032 (30 MHz to 1 GHz)
//         if (e.target.checked) {
//             setOptions(() => {
//                 return {
//                     plotOptions: {series: {lineWidth: 0.5},},
//                     title: {text: options?.title.text!,},
//                     series: [{data: data?.data!, color: data?.color!},{
//                         data: [[30, 30], [230, 30],[230, 37], [1000,37]],
//                         color: "red", type: "line"}],                   
//                     xAxis: {title: {text: options?.xAxis.title.text!,}
//                     ,type: "logarithmic",},
//                 }
//             })
//         } else {
//             setOptions(() => {
//                 return {
//                     plotOptions: {series: {lineWidth: 0.5},},
//                     title: {text: options?.title.text!,},
//                     series: [{data: data?.data!, color: data?.color!}],                   
//                     xAxis: {title: {text: options?.xAxis.title.text!,}
//                     ,type: "logarithmic",},
//                 }
//             })
            
//         }
//     }

//     const setLimitFour = (e: any) => {
//         if (e.target.checked) {
//             setOptions(() => {
//                 return {
//                     plotOptions: {series: {lineWidth: 0.5},}, // 1 GHz to 6 GHz
//                     title: {text: options?.title.text!,},
//                     series: [{data: data?.data!, color: data?.color!},{
//                         data: [[1000, 70], [3000, 70],[3000, 74], [6000,74]],
//                         color: "red", type: "line"},{
//                         data: [[1000, 50], [3000, 50],[3000, 54], [6000,54]],
//                         color: "blue", type: "line"}],                   
//                     xAxis: {title: {text: options?.xAxis.title.text!,}
//                     ,type: "logarithmic",},
//                 }
//             })
//         } else {
//             setOptions(() => {
//                 return {
//                     plotOptions: {series: {lineWidth: 0.5},},
//                     title: {text: options?.title.text!,},
//                     series: [{data: data?.data!, color: data?.color!}],                   
//                     xAxis: {title: {text: options?.xAxis.title.text!,}
//                     ,type: "logarithmic",},
//                 }
//             })
            
//         }
//     }

//     const setLimitFive = (e: any) => {
//         if (e.target.checked) {
//             setOptions(() => {
//                 return {
//                     plotOptions: {series: {lineWidth: 0.5},}, // 0.15 MHz to 30 MHz
//                     title: {text: options?.title.text!,},
//                     series: [{data: data?.data!, color: data?.color!},{
//                         data: [[0.15, 79], [0.5, 79],[0.5, 73], [30,73]],
//                         color: "red", type: "line"},{
//                         data: [[0.15, 66], [0.5, 66],[0.5, 60], [30,60]],
//                         color: "blue", type: "line"}],                   
//                     xAxis: {title: {text: options?.xAxis.title.text!,}
//                     ,type: "logarithmic",},
//                 }
//             })
//         } else {
//             setOptions(() => {
//                 return {
//                     plotOptions: {series: {lineWidth: 0.5},},
//                     title: {text: options?.title.text!,},
//                     series: [{data: data?.data!, color: data?.color!}],                   
//                     xAxis: {title: {text: options?.xAxis.title.text!,}
//                     ,type: "logarithmic",},
//                 }
//             })
            
//         }
    // }
//



    const readFile = async (e: any) => {
    e.preventDefault()
    let counter = 0;
    let firstfileData: number[][] = []
    let secondFileData: number[][] = []
    let thirdFileData: number[][] = []
        
    let files = Array.from(e.target.files).map((file: any)  => {
        let reader = new FileReader();
        return new Promise(resolve => {
            reader.onload = () => resolve(reader.result);
            reader.readAsText(file);
        });
    });
    
    let file: any = await Promise.all(files);
    let tempSplit = file[0].split('\n')
    let tempMax = +tempSplit[1].split(';')[1]
    let tempMin = +tempSplit[1].split(';')[1]


    for(let i=0; i<file.length; i++){
        for(let j=1; j<file[i].split('\n').length; j++) {
            console.log(+file[i].split('\n')[j].split(';')[1]);
            if (+file[i].split('\n')[j].split(';')[1] > tempMax && file[i].split('\n')[j].split(';')[1] !== "") {
                tempMax = +file[i].split('\n')[j].split(';')[1]
                
            }
            if (+file[i].split('\n')[j].split(';')[1] < tempMin && tempSplit[i].split(';')[1] !== "") {
                tempMin = +file[i].split('\n')[j].split(';')[1]
                
            }
        }
    }

    console.log("after set", tempMax, tempMin);
    
    

    if (file.length === 1) {  


        if (fileCount < 1) {
           
            const fileArray:string = file[0].split("\n")
            const limitName = fileArray[0]

            for(let i=1; i<fileArray.length; i++) {
                if(fileArray[i] !== "") {
                    firstfileData.push([+fileArray[i].split(';')[0], +fileArray[i].split(';')[1]])
            }
        }
       
        
        setFileCount(1)
        setOptions((currOptions) => {  
             
            let newOptions = {...currOptions!}  

            newOptions.series[3] = {
                data: firstfileData,
                color: "red", 
                type: "line",
                name: limitName,
                marker: {
                    symbol: "circle",
                    width: 20,
                    height: 20,
                }
            }
                counter++
            if (newOptions.yAxis.max! < tempMax) {
                newOptions.yAxis.max = (tempMax += 10)
            }
            if (newOptions.yAxis.min! > tempMin) {
                newOptions.yAxis.min = (tempMin -= 10)
            }
            
            return newOptions
            })
        
        } else if (fileCount === 1) {
            
            console.log("here");
            console.log(tempMax, tempMin);
            
            const fileArray:string = file[0].split("\n")
            const limitName = fileArray[0]
            for(let i=1; i<fileArray.length; i++) {
                if(fileArray[i] !== "") {
                    firstfileData.push([+fileArray[i].split(';')[0], +fileArray[i].split(';')[1]])
            }
        }
        
        setOptions((currOptions) => {  
           
            let newOptions = {...currOptions!}   
            newOptions.series[4] = {
                data: firstfileData,
                color: "blue",
                 type: "line",
                name: limitName,
                marker: {
                    symbol: "diamond",
                    width: 20,
                    height: 20,
                }
            }  
            console.log(newOptions.yAxis.max!, newOptions.yAxis.min!);
            
            if (newOptions.yAxis.max! < tempMax) {
                newOptions.yAxis.max = (tempMax += 10)
            }
            if (newOptions.yAxis.min! > tempMin) {
                newOptions.yAxis.min = (tempMin -= 10)
            }
            
            console.log(newOptions.yAxis.max!, newOptions.yAxis.min!);
            return newOptions
            })
            setFileCount(2)
        } else if (fileCount === 2) {
            const fileArray:string = file[0].split("\n")
            const limitName = fileArray[0]
            for(let i=1; i<fileArray.length; i++) {
                if(fileArray[i] !== "") {
                    firstfileData.push([+fileArray[i].split(';')[0], +fileArray[i].split(';')[1]])
            }
        }
        setFileCount(0)
        setOptions((currOptions) => {  
            
            let newOptions = {...currOptions!}   
            newOptions.series[5] = {
                data: firstfileData,
                color: "green",
                 type: "line",
                name: limitName,
                marker: {
                    symbol: "triangle-down",
                    width: 20,
                    height: 20,
                }
            }  

           

            if (newOptions.yAxis.max! < tempMax) {
                newOptions.yAxis.max = (tempMax += 10)
            }
            if (newOptions.yAxis.min! > tempMin) {
                newOptions.yAxis.min = (tempMin -= 10)
            }
            
            return newOptions
            
            })
        }
            
    } else if (file.length === 2) {
        

        const fileArray:string = file[0].split("\n")
        const secondFileArray:string = file[1].split('\n')
        const limitName = fileArray[0]
        const secondLimitName = secondFileArray[0]
        for(let i=1; i<fileArray.length; i++) {
            if(fileArray[i] !== "") {
                firstfileData.push([+fileArray[i].split(';')[0], +fileArray[i].split(';')[1]])
                secondFileData.push([+secondFileArray[i].split(';')[0], +secondFileArray[i].split(';')[1]])
            }
        }
        setFileCount(2)
        setOptions((currOptions) => {  
             
            let newOptions = {...currOptions!}
            newOptions.series[3] = {
                data: firstfileData,
                color: "red",
                type: "line",
                name: limitName,
                marker: {
                    symbol: "diamond",
                    width: 20,
                    height: 20,
                }
            }
                newOptions.series[4] = {
                data: secondFileData,
                color: "blue", 
                type: "line",
                name: secondLimitName,
                marker: {
                    symbol: "circle",
                    width: 20,
                    height: 20,
                }
            }
            if (newOptions.yAxis.max! < tempMax) {
                newOptions.yAxis.max = (tempMax += 10)
            }
            if (newOptions.yAxis.min! > tempMin) {
                newOptions.yAxis.min = (tempMin -= 10)
            }
            return newOptions
        })
    } else if (file.length === 3) {
        

        const fileArray:string = file[0].split("\n")
        const secondFileArray:string = file[1].split('\n')
        const thirdFileArray:string = file[2].split('\n')
        const limitName = fileArray[0]
        const secondLimitName = secondFileArray[0]
        const thirdLimitName = thirdFileArray[0]
        for(let i=1; i<fileArray.length; i++) {
            if(fileArray[i] !== "") {
                firstfileData.push([+fileArray[i].split(';')[0], +fileArray[i].split(';')[1]])
                secondFileData.push([+secondFileArray[i].split(';')[0], +secondFileArray[i].split(';')[1]])
                thirdFileData.push([+thirdFileArray[i].split(';')[0], +thirdFileArray[i].split(';')[1]])
            }
        }
        setFileCount(0)
        setOptions((currOptions) => {   
              
            let newOptions = {...currOptions!}
            newOptions.series[3] = {
                data: firstfileData,
                color: "red", 
                type: "line",
                name: limitName,
                marker: {
                    symbol: "square",
                    width: 20,
                    height: 20,
                }
            }
            newOptions.series[4] = {
                data: secondFileData,
                color: "blue", 
                type: "line",
                name: secondLimitName,
                marker: {
                    symbol: "triangle",
                    width: 20,
                    height: 20,
                }
            }
            newOptions.series[5] = {
                data: thirdFileData,
                color: "green", 
                type: "line",
                name: thirdLimitName,
                marker: {
                    symbol: "circle",
                    width: 20,
                    height: 20,
                }
            }
            if (newOptions.yAxis.max! < tempMax) {
                newOptions.yAxis.max = (tempMax += 10)
            }
            if (newOptions.yAxis.min! > tempMin) {
                newOptions.yAxis.min = (tempMin -= 10)
            }
            return newOptions
        })
    } else if (file.length > 3) {
        alert("No more than three Limit Files!")
    }
    
    
    
    
    

        
    }




    return (
        <StyledForm  >
               <label htmlFor="filePick" >Limit Files</label>
                 <input accept='.limit'  onChange={(e) => readFile(e)} 
                type="file" 
                multiple 
                id="filePick"
                style={{visibility: "hidden"}}
                />
            </StyledForm>
    )
}

const StyledForm = styled.form `
padding-top: 10px;
background-color: #20232A;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
/* border: 2px solid #121212; */
height: 35px;
width: 98px;


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

export default Limits


 //           <div>
 //           <label>0.009 - 0.15</label>  {/* Conducted Luminaires 55015 (low range) */}
 //           <input type="checkbox" onChange={setLimitOne} /> {/* 0.009 Mhz - 0.15 Mhz */}
 //           </div>
  //          <div>
  //          <label>0.15 - 30</label> {/* Conducted AC EN55032 (150k Hz to 30 MHz)  (Class B) */}
  //          <input type="checkbox" onChange={setLimitTwo} /> {/* 0.15 Mhz - 30 Mhz */}
  //          </div>
  //          <div>
  //          <label>30 - 1000</label> {/* Radiated EN55032 (30 MHz to 1 GHz) */}
  //          <input type="checkbox" onChange={setLimitThree} /> {/* 30 Mhz - 1000 Mhz */}
  //          </div>
  //          <div>
  //          <label>1000 - 6000</label> {/* Radiated EN55032 Microwave Microwave (1 GHz to 6 GHz) */}
  //          <input type="checkbox" onChange={setLimitFour} /> {/* 1000 Mhz - 6000 Mhz */}
  //          </div>
   //         <div>
   //         <label>0.15 - 30</label> {/* Conducted AC EN55032 (150 kHz to 30 MHz)  (Class A)  */}
   //         <input type="checkbox" onChange={setLimitFive} /> {/* 0.15 Mhz - 30 Mhz */}
  //          </div>