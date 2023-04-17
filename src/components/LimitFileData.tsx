import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { getLimitFiles } from '../utils/api';
import DeleteLimitFile from './Popups/DeleteLimitFile';
import ShowLimitFile from './Popups/ShowLimitFile';
import EditLimitFile from './Popups/EditLimitFile';
import LimitFileSearch from './LimitFileSearch';

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
    limitFileData: {
        id: number;
        filename: string;
        name: string;
        data: string;
    }[]
    setlimitFileData: React.Dispatch<React.SetStateAction<{
        id: number;
        filename: string;
        name: string;
        data: string;
    }[]>>
    showLimitData: boolean
    setFileCount: React.Dispatch<React.SetStateAction<number>>
    setDataSize: React.Dispatch<React.SetStateAction<number>>
}

const LimitFileData = ({setOptions, limitFileData, setlimitFileData, showLimitData, setFileCount, setDataSize}: chartProp) => {
    const [searchInput, setSearchInput] = useState<string>("")
    const [showEditLimitFile, setShowEditLimitFile] = useState<boolean>(false)
    const [limitId, setLimitId] = useState<number>()
    const [showLimitFile, setShowLimitFile] = useState<boolean>(false)
    const [deleteLimit, setdeleteLimit] = useState<boolean>(false)
    const [limitFile, setLimitFile] = useState<{
        id: number;
        filename: string;
        name: string;
        data: string;
    }>()

        useEffect(() => {        
            getLimitFiles().then((data) => {  
                 
                if (typeof data === "object") {
                    setlimitFileData(data)
                } else {
                    setlimitFileData([{
                        id: 123543456234,
                        filename: "No Data!",
                        name: "Fix your api",
                        data: "",
                    }])
                }
                 
            })

          }, [showLimitData])
          

    return (
        <StyledDiv>
            <ShowLimitFile setOptions={setOptions} showLimitFile={showLimitFile}
            setShowLimitFile={setShowLimitFile} limitId={limitId}
            deleteLimit={deleteLimit} setdeleteLimit={setdeleteLimit}
            setFileCount={setFileCount} setShowEditLimitFile={setShowEditLimitFile}
            limitFile={limitFile} setLimitFile={setLimitFile}
            />
            <DeleteLimitFile showLimitFile={showLimitFile}
            setShowLimitFile={setShowLimitFile} limitId={limitId}
            deleteLimit={deleteLimit} setdeleteLimit={setdeleteLimit}
            setlimitFileData={setlimitFileData}
            />
            
            <EditLimitFile 
            showEditLimitFile={showEditLimitFile} setShowEditLimitFile={setShowEditLimitFile}
            setlimitFileData={setlimitFileData} limitId={limitId}
            limitFile={limitFile} setLimitFile={setLimitFile}
            />
            <LimitFileSearch setSearchInput={setSearchInput}
            />
            <ul className="limit-file-ul"  style={{listStyleType: "none" }} > 
            {typeof limitFileData !== 'string' ? limitFileData?.map((data) => {   
                
                if (data.filename.toLowerCase().includes(searchInput!.toLowerCase())) {

                    return (
                        <li key={`${data.id}key`} onClick={() => {
                            setLimitId(data.id)
                            setShowLimitFile(true)
                        }} >
                        <p>{data.filename!}</p>
                        <p>{data.name!}</p>
                    </li>
                )
            } else if (searchInput!.length === 0) {
                return (
                    <li key={`${data.id}key`} onClick={() => {
                        setLimitId(data.id)
                        setShowLimitFile(true)
                    }} >
                    <p>{data.filename!}</p>
                    <p>{data.name!}</p>
                </li>
            )
            }
            }) : <div></div>}
            </ul>
        </StyledDiv>
    )
}

export default LimitFileData

const StyledDiv = styled.div`
margin-left: auto;
margin-right: auto;
text-align: center;
justify-content: center;
align-items: center;
padding-left: 50px;
padding-right: 50px;
.limit-file-ul {
    padding-left: 0px;
    
    display: inline-flex;
    /* display: flex; */
    flex-wrap: wrap;
    margin:auto;
    justify-content: center;
    li {
        background-color: #16181D;
            color: #61DAFB;
            font-weight: bold;
            font-size: 13px;
            margin:3px;
            height: 100px;
            width: 200px;
            border: 3px solid #121212;
            &:hover {
                background-color: #61DAFB;
                color: #16181D;
            }
            :active {
                background-color: white;
            }
    }
}



`