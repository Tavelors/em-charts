
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
    // showLimitFile: boolean
    // setShowLimitFile: React.Dispatch<React.SetStateAction<boolean>>
    // limitId: number | undefined
    // deleteLimit: boolean
    // setdeleteLimit: React.Dispatch<React.SetStateAction<boolean>>
    limitFile: {
        id: number;
        filename: string;
        name: string;
        data: string;
    } | undefined
    setFileCount: React.Dispatch<React.SetStateAction<number>>
    setShowLimitFile: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadLimitFiles = ({setOptions, limitFile, setFileCount, setShowLimitFile}: chartProp) => {

    let limitDataArray: number[][] = []
    const handleLoad = (e: any) => {
        e.preventDefault()
        let tempMax:number = +limitFile?.data.split('\n')[0].split(';')[1]!
        let tempMin:number = +limitFile?.data.split('\n')[0].split(';')[1]!

        for(let i=0; i<limitFile?.data.split('\n').length!; i++) {
            if (limitFile?.data.split('\n')[i] !== "") {
                limitDataArray.push([+limitFile?.data.split('\n')[i].split(';')[0]!, +limitFile?.data.split('\n')[i].split(';')[1]!])
            } 
            if (+limitFile?.data.split('\n')[i].split(';')[1]! > tempMax && limitFile?.data.split('\n')[i] !== "") {
                tempMax = +limitFile?.data.split('\n')[i].split(';')[1]!
            }
            if (+limitFile?.data.split('\n')[i].split(';')[1]! < tempMin && limitFile?.data.split('\n')[i] !== "") {
                tempMin = +limitFile?.data.split('\n')[i].split(';')[1]!
            }
        }
        console.log(tempMin, tempMax);
        

        setFileCount((currCount) => currCount += 1)
        setOptions((currOptions) => {
            let newOptions = {...currOptions!} 
            for(let i=3; i<6; i++) {
 
                if(newOptions.series[i].name === "") {
                    let limitColour = ""
                    if (i === 3) limitColour = "red"
                    if (i === 4) limitColour = "blue"
                    if (i === 5) limitColour = "green"
                    newOptions.series[i] = {
                        data: limitDataArray,
                        color: limitColour,
                        type: "line",
                        name: limitFile?.name!,
                        marker: {
                            symbol: "triangle-down",
                            width: 20,
                            height: 20,
                        }
                    } 
                    break 
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
        setShowLimitFile(false)



    }

    return (
        <button onClick={handleLoad} >Load</button>
    )
}

export default LoadLimitFiles