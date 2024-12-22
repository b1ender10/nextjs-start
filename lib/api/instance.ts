import axios from "axios"
import { envConfig, internalConfig } from "@/lib"

export const http = axios.create({
    baseURL: `${envConfig.apiUrl}`,
    headers: { "Content-Type": "application/json" }
})

export const httpForm = axios.create({
    baseURL: `${envConfig.apiUrl}`,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Response-Type': 'blob'
    }
})

http.interceptors.request.use(config => {
    const token = localStorage.getItem(internalConfig.authTokenKey)
    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
})

httpForm.interceptors.request.use(config => {
    const token = localStorage.getItem(internalConfig.authTokenKey)
    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
})

type Responses = { responses: { [key: number | string]: { content: Record<"application/json", unknown> } } }
type Request = { requestBody: { content: Record<"application/json", unknown> } }
type QueryParameters = { parameters: { query?: unknown } }
type PathParameters = { parameters: { path?: unknown } }

export type PTJsonResponse<T extends Responses> = T["responses"]["200"]["content"]["application/json"]
export type PTJsonRequest<T extends Request> = T["requestBody"]["content"]["application/json"]
export type PTQueryParameters<T extends QueryParameters> = T["parameters"]["query"]
export type PTPathParameters<T extends PathParameters> = T["parameters"]["path"]

