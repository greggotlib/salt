import {
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from './Table.style'
import { TableProps } from './types'

const Table = ({ data }: TableProps) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell></TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>PII</TableHeaderCell>
          <TableHeaderCell>Masking</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
        </TableRow>
      </TableHeader>
    </TableContainer>
  )
}

export default Table
