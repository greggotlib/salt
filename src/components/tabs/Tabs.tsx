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
import { Data } from 'components/table/types'
import { updateDataDynamically } from 'utils/helpers'
import TabPanel from './tab-panel/TablPanel'
import { initialData } from './types'
import { dictionary } from 'utils/dictionary'

function BasicTabs() {
  const [value, setValue] = useState(0)
  const [data, setData] = useState<Data>(initialData)
  const [filteredData, setFilteredData] = useState<Data>(initialData)
  const { general } = dictionary
  console.log(data)
  useEffect(() => {
    setData(fetchedData)
    setFilteredData(fetchedData)
  }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleUpdateByPiiOrMasked = (
    parentField: string,
    fieldName: string,
    propery: string,
    newValue: boolean
  ) => {
    const dataType = value === 0 ? data.request : data.response
    const dataKey = value === 0 ? general.request : general.response

    const updatedData = updateDataDynamically(
      dataType,
      parentField,
      fieldName,
      propery,
      newValue
    )
    const temp = { ...data, [dataKey]: { ...updatedData } }
    setData(temp)
    setFilteredData(temp)
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
          <StyledTab label={general.request} />
          <StyledTab label={general.response} />
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
            data={filteredData.request}
            updateByPiiOrMasked={handleUpdateByPiiOrMasked}
          />
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
        >
          <Table
            data={filteredData.response}
            updateByPiiOrMasked={handleUpdateByPiiOrMasked}
          />
        </TabPanel>
      </Content>
    </Container>
  )
}
export default BasicTabs
