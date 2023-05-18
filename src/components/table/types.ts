export interface Data {
  api: string
  method: string
  path: string
  request: Request
  response: Response
}

export interface Request {
  urlParams?: Fields[]
  queryParams?: Fields[]
  headers?: Fields[]
  body?: Fields[]
}

export interface Fields {
  name: string
  pii: boolean
  masked: boolean
  type: string
}

export type Response = Request

export interface TableProps {
  data: Request | Response
}
