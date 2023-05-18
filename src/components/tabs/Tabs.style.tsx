import styled from 'styled-components'
import Tab from '@mui/material/Tab'

export const TabsContainer = styled.div`
  border-bottom: 1px solid #ded8e8;
`

export const Container = styled.div``

export const StyledTab = styled(Tab)`
  &.MuiTab-root {
    font-size: 14px;
    line-height: 21px;
    text-transform: capitalize;
    font-weight: 400;
    color: #3d3d3d;
    width: 96px;
    &.Mui-selected {
      color: #7d3ce9;
      font-weight: 600;
    }
  }
`

export const Content = styled.div`
  background-color: #f5f5f5;
  padding: 20px 23px 10px 20px;
`

export const SearchBarContainer = styled.div`
  margin-block-end: 40px;
`
