import { Fields } from '../types'

export interface ExpandableRowProps {
  data: Fields[]
  mainField: string
  updateByPiiOrMasked: (
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: boolean
  ) => void
}
