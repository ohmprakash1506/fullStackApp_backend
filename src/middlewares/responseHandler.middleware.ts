import { ApiServiceRespone } from "../@types/apiServiceResponse";

const logError = (error :any) => {
    console.error(error)
}

const returnError = (statusCode: number, message: string) => {
    const response: ApiServiceRespone = {
        statusCode,
        response: {
            status: false,
            code: statusCode,
            message
        }
    }
}

const retrunSuccess = (statusCode: number, message: string, data?: [] | object) => {
    const response: ApiServiceRespone = {
        statusCode,
        response: {
            status: true,
            code: statusCode,
            message,
            data,
        }
    }
}

export default{
    retrunSuccess,
    returnError,
    logError
}