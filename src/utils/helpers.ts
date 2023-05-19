import { Data, Fields, Request, Response } from 'components/table/types'
import { dictionary } from './dictionary'
const { general } = dictionary

export const handleDeepComparison = <T>(a: T, b: T): boolean => {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true
  }
  return false
}

const filterData = (
  obj: Request | Response,
  query: string,
  withPII: boolean
) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const filteredArray = value.filter(({ name, type, pii }: Fields) => {
        if (withPII) {
          return (name.includes(query) || type.includes(query)) && pii
        }
        return name.includes(query) || type.includes(query)
      })
      return [key, filteredArray]
    })
  )
}

export const filterByTypeOrName = (
  data: Data,
  query: string,
  withPii: boolean
) => {
  const filteredRequest = filterData(data.request, query, withPii)
  const filteredResponse = filterData(data.response, query, withPii)
  const updateData = {
    ...data,
    [general.request]: filteredRequest,
    [general.response]: filteredResponse,
  }
  return updateData
}

export const updateDataDynamically = (
  data: Response | Request,
  parentField: string,
  fieldName: string,
  propertyName: string,
  value: boolean
) => {
  const parentObject = data[parentField as keyof typeof data]
  const updatedData = parentObject?.map((field: Fields) => {
    if (field.name === fieldName) {
      return { ...field, [propertyName]: value }
    }
    return field
  })
  return { ...data, [parentField]: updatedData }
}
