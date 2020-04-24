import Taro from '@tarojs/taro';
import { API_HOST } from './host';
import wxLog from './wxLog';

async function request(option) {
    option.url = API_HOST + option.url;
    const { data } = await Taro.request(option);
    const logObj = {
        option,
    }
    if (data.status == 0) {
        logObj.logData = data.data;
        wxLog.info(JSON.stringify(logObj));
        return data.data
    } else {
        logObj.error = data.message;
        wxLog.error(JSON.stringify(logObj));
        throw new Error(data.message)
    }
}

export const GET = (url, data = {}) => {
    return request({ url, data })
}

export const POST = (url, data = {}) => {
    return request({ url, data, method: 'POST' })
}

export default request;