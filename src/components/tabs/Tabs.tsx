import { useEffect, useState } from 'react'
import {
  Container,
  Content,
  SearchBarContainer,
  StyledTab,
  StyledTabs,
  TabsContainer,
} from './Tabs.style'
import { SearchBar } from 'components/search-bar'
import { Table } from 'components/table'
import { Data } from 'components/table/types'
import { updateDataDynamically } from 'utils/helpers'
import TabPanel from './tab-panel/TablPanel'
import { TabsProps } from './types'
import { dictionary } from 'utils/dictionary'

function BasicTabs({ fetchedData }: TabsProps) {
  const [value, setValue] = useState(0)
  const [data, setData] = useState<Data>(fetchedData)
  const [filteredData, setFilteredData] = useState<Data>(fetchedData)
  const { general } = dictionary

  useEffect(() => {
    setData(fetchedData)
    setFilteredData(fetchedData)
  }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const getDataTypeByCurrentTab = () => {
    if (value === 0) {
      return {
        filterData: filteredData.request,
        regData: data.request,
        dataKey: general.request,
      }
    }
    return {
      filterData: filteredData.response,
      regData: data.response,
      dataKey: general.response,
    }
  }

  const handleUpdateByPiiOrMasked = (
    parentField: string,
    fieldName: string,
    propery: string,
    newValue: boolean
  ) => {
    const { filterData, regData, dataKey } = getDataTypeByCurrentTab()

    const updatedRegData = updateDataDynamically(
      regData,
      parentField,
      fieldName,
      propery,
      newValue
    )

    const updatedFilterData = updateDataDynamically(
      filterData,
      parentField,
      fieldName,
      propery,
      newValue
    )

    const newData = { ...data, [dataKey]: { ...updatedRegData } }
    const newFilteredData = {
      ...filteredData,
      [dataKey]: { ...updatedFilterData },
    }
    setData(newData)
    setFilteredData(newFilteredData)
  }

  return (
    <Container data-testid="tabs">
      <TabsContainer>
        <StyledTabs
          TabIndicatorProps={{
            style: { background: '#7d3ce9', width: '96px', height: '1px' },
          }}
          value={value}
          onChange={handleChange}
        >
          <StyledTab label={general.request} />
          <StyledTab label={general.response} />
        </StyledTabs>
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
