import Tabs from '@mui/material/Tabs'
import fetchedData from 'api/data.json'
import { useEffect, useState } from 'react'
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
import { updateDataDynamically } from 'utils/helpers'
import TabPanel from './tab-panel/TablPanel'

function BasicTabs() {
  const [value, setValue] = useState(0)
  const [data, setData] = useState<Request | Response>({})
  const [filteredData, setFilteredData] = useState<Request | Response>({})

  useEffect(() => {
    setData(fetchedData.request)
    setFilteredData(fetchedData.request)
  }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    if (newValue === 0) {
      setData(fetchedData.request)
      setFilteredData(fetchedData.request)
    } else {
      setData(fetchedData.response)
      setFilteredData(fetchedData.response)
    }
  }

  const handleUpdateByPiiOrMasked = (
    key: string,
    fieldName: string,
    propery: string,
    value: boolean
  ) => {
    const updatedData = updateDataDynamically(
      data,
      key,
      fieldName,
      propery,
      value
    )
    setData(updatedData)
    setFilteredData(updatedData)
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
          <SearchBar
            data={data}
            handleFilterData={setFilteredData}
          />
        </SearchBarContainer>
        <TabPanel
          value={value}
          index={0}
        >
          <Table
            data={filteredData}
            updateByPiiOrMasked={handleUpdateByPiiOrMasked}
          />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
        >
          <Table
            data={filteredData}
            updateByPiiOrMasked={handleUpdateByPiiOrMasked}
          />
        </TabPanel>
      </Content>
    </Container>
  )
}
export default BasicTabs
