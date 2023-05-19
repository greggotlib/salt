import { Fields, Request, Response } from 'components/table/types'

export const handleDeepComparison = <T>(a: T, b: T): boolean => {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true
  }
  return false
}

export const filterByTypeOrName = (
  obj: Request | Response,
  query: string,
  withPii: boolean
) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const filteredArray = value.filter(({ name, type, pii }: Fields) => {
        if (withPii) {
          return (name.includes(query) || type.includes(query)) && pii
        }
        return name.includes(query) || type.includes(query)
      })
      return [key, filteredArray]
    })
  )
}

export const updateDataDynamically = (
  data: Request | Response,
  parentField: string,
  childField: string,
  propery: string,
  value: boolean
) => {
  const index = parentField as keyof typeof data
  const parentObject = data[index]
  const updatedData = parentObject?.map((field) => {
    if (field.name === childField) {
      return { ...field, [propery]: value }
    }
    return field
  })
  return { ...data, [parentField]: updatedData }
}
