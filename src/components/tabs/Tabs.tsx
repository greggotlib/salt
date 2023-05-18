import Tabs from '@mui/material/Tabs'
import fetchedData from 'api/data.json'
import { useState } from 'react'
import {
  Container,
  Content,
  SearchBarContainer,
  StyledTab,
  TabsContainer,
} from './Tabs.style'
import { SearchBar } from 'components/search-bar'
import { Table } from 'components/table'
import { Request, Response } from 'components/table/types'

function BasicTabs() {
  const [value, setValue] = useState(0)
  const [data, setData] = useState<Request | Response>(fetchedData.request)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    if (newValue === 0) {
      setData(fetchedData.request)
    } else {
      setData(fetchedData.response)
    }
  }

  return (
    <Container>
      <TabsContainer>
        <Tabs
          TabIndicatorProps={{
            style: { background: '#7d3ce9', width: '96px', height: '1px' },
          }}
          value={value}
          onChange={handleChange}
        >
          <StyledTab label="Request" />
          <StyledTab label="Response" />
        </Tabs>
      </TabsContainer>
      <Content>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
        <Table data={data} />
      </Content>
    </Container>
  )
}
export default BasicTabs
