import styled from 'styled-components'

export const TableContainer = styled.table`
  background: #ffffff;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  border-radius: 6px;
`

export const TableHeader = styled.thead`
  box-sizing: border-box;
  height: 50px;
  background: #ffffff;

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

export const TableHeaderCell = styled.th`
  border-bottom: 1px solid #ded8e8;
  text-align: left;
  padding-left: 61px;

  &:first-child {
    border-top-left-radius: 6px;
  }
  &:last-child {
    border-top-right-radius: 6px;
    border-right: 1px solid #ded8e8;
  }
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  box-sizing: border-box;
  gap: 10px;
  background: #ffffff;
  height: 50px;

  &:last-child td:last-child {
    border-bottom-right-radius: 6px;
  }

  &:last-child td:first-child {
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-bottom-left-radius: 6px;
  }

  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-right: 1px solid #ded8e8;
  }

  td:last-child {
    border-right: 1px solid #ded8e8;
  }

  td {
    border-bottom: 1px solid #ded8e8;
  }

  td:last-child {
    border-right: 1px solid #ded8e8;
  }

  th:first-child {
    border-left: 1px solid #ded8e8;
    padding: 0;
  }
  td:first-child {
    border-left: 1px solid #ded8e8;
  }

  th {
    border-top: solid 1px #ded8e8;
  }
`

export const TableCell = styled.td``

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
