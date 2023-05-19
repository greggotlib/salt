import { Request, Response } from 'components/table/types'

export interface SearchBarProps {
  handleFilterData: (arg0: Request | Response) => void
  data: Request | Response
}
