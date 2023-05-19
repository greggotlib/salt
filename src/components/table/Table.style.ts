import styled from 'styled-components'

export const TableContainer = styled.table`
  background: #ffffff;
  width: 100%;
  border: 1px solid #ded8e8;
  border-radius: 6px;
  border-collapse: collapse;
`

export const TableHeader = styled.thead`
  box-sizing: border-box;
  height: 50px;
  background: #ffffff;
  border-bottom: 1px solid #ededed;
  border-radius: 6px 6px 0px 0px;
  th {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      height: 25px;
      border-right: 1px solid #e5ddf8;
    }

    &:last-child::after {
      display: none;
    }
  }
`

export const TableHeaderCell = styled.th``

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  box-sizing: border-box;

  gap: 10px;
  background: #ffffff;
  border-bottom: 1px solid #ded8e8;
  height: 50px;
`

export const TableCell = styled.td`
  padding: 0px 15.5px;
`

export const ExpandedRow = styled.tr`
  background-color: #e5f3ff;
`

export const Divider = styled.th`
  width: 1px;
  height: 25px;
  background-color: #ededed;
  margin: 12px 0;
`
export const TableCellWrapper = styled.div`
  display: flex;
`
