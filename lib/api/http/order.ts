import { buildQueryString } from "@/lib"
import { http, httpForm, PTJsonRequest, PTJsonResponse, PTPathParameters } from "../instance"

const FileGetPath = "/protected-download"
const tempPostPath = "/test"
export type tempSchema = any

export const getFile = (parameters: PTPathParameters<any["get"]>) => http.get<PTJsonResponse<tempSchema["get"]>>(`${FileGetPath}${buildQueryString(parameters)}`)
export const postTemp = (parameters: PTJsonRequest<any["post"]>) => http.post<PTJsonResponse<any["post"]>>(tempPostPath, parameters)

// export const patchUser = (payload: PTJsonRequest<UserPatchSchema["patch"]>) => http.patch<PTJsonResponse<UserPatchSchema["patch"]>>(`/users/`, payload)
// export const getUserById = (parameters: PTPathParameters<UserByIdSchema["get"]>) => http.get<PTJsonResponse<UserByIdSchema["get"]>>(`/users/${parameters.user_id}`)

