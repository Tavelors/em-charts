import axios from 'axios'
import { nextTick } from 'process'
  // HTTPS=true 
const limitApi = axios.create({
    baseURL: 'https://ops.cassindustries.com/limit_data/index.php/limits',
})

export const getLimitFiles = async () => {
    try {
        const {data} = await limitApi.get('/limits/')
        
        
        return data
    } catch (err) {
        if (err) {
            console.log(err, "ERROR");
            
        }
    }
}

// http://127.0.0.1:9812/limit
export const postLimitFile = async (fileName: string, LimitType: string, LimitData: string, passwordInput: string) => {
   try {

       const data = await limitApi.post('/limit', {
           filename: fileName,
           name: LimitType,
           data: LimitData,
           password: passwordInput
        })
        let newData:any = {...data}
        newData['response'] = {'status': data.status}
        
        return newData
    } catch (err: any) {
        console.log(err, "api error");
        let newError = {...err}
        return newError
        
    }
}

export const getLimitFileById = async (limitId: number) => {
    try {
        const {data} = await limitApi.get(`/limit/${limitId}`)
        
        return data
    } catch (err) {
        if (err) {
            console.log(err);
            
        }
    }
}

export const deleteLimitFile = async (limitId: number, passwordInput: string, oldfile: string) => {
    try {
        const config = {
            data: {
                password: passwordInput,
                oldfilename: oldfile
            }
        }
        const data = await limitApi.delete(`/limit/${limitId}`, config)

        return data
    } catch (err) {
        return err
    }
}

export const patchLimitFile = async (fileName: string, limitType: string, 
    limitData: string, passwordInput: string, limitId: number, oldfile: string) => {
        try {

            const data = await limitApi.patch(`/limit/${limitId}`, {
                filename: fileName,
                name: limitType,
                data: limitData,
                password: passwordInput,
                oldfilename: oldfile
                
            })
            let newData:any = {...data}
            newData['response'] = {'status': data.status}
            
            return newData
        } catch (err: any) {
            return err 
        }
}
