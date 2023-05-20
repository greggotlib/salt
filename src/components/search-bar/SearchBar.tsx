import React, { memo, useState } from 'react'
import {
  SearchInput,
  Wrapper,
  SearchContainer,
  StyledSearchIcon,
  PIIContainer,
  ApplyFilters,
  ButtonsContainer,
  ResetFilters,
} from './SearchBar.style'
import useDebounce from 'hooks/useDebounce'
import { filterByTypeOrName, handleDeepComparison } from 'utils/helpers'
import { SearchBarProps } from './types'
import { dictionary } from 'utils/dictionary'
import searchIcon from 'assets/icons/search-icon.svg'
import { FontSizes } from 'components/text/types'
import { Text } from 'components/text'
import { Checkbox } from 'components/checkbox'
import { Data } from 'components/table/types'

const SearchBar = ({ handleFilterData, data }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>('')
  const [withPii, setWithPii] = useState<boolean>(false)
  const debouncedSearchText = useDebounce(searchText, 300)
  const { searchBar } = dictionary

  const filterData = () => {
    let filteredData: Data = data

    if (!debouncedSearchText) {
      handleFilterData(filteredData)
      return
    }

    filteredData = filterByTypeOrName(data, searchText, withPii)
    handleFilterData(filteredData)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      filterData()
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const clearFilters = () => {
    setSearchText('')
    setWithPii(false)
    handleFilterData(data)
  }

  return (
    <Wrapper>
      <SearchContainer>
        <SearchInput
          data-testid="search-bar"
          placeholder={searchBar.placeholder}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          value={searchText}
        />
        <StyledSearchIcon src={searchIcon} />
      </SearchContainer>
      <PIIContainer>
        <Checkbox
          handleClick={setWithPii}
          checked={withPii}
        />
        <Text
          fontSize={FontSizes.MEDIUM}
          fontWeight="400"
          color="#a1a0a3"
        >
          {searchBar.pii}
        </Text>
      </PIIContainer>
      <ButtonsContainer>
        <ApplyFilters onClick={filterData}>
          <Text
            color="#F5F5F5"
            fontSize={FontSizes.MEDIUM}
            fontWeight="600"
          >
            {searchBar.applyLabel}
          </Text>
        </ApplyFilters>
        <ResetFilters onClick={clearFilters}>
          <Text
            color="#D5D4D8"
            fontSize={FontSizes.MEDIUM}
            fontWeight="600"
          >
            {searchBar.restetLabel}
          </Text>
        </ResetFilters>
      </ButtonsContainer>
    </Wrapper>
  )
}

const areEqual = (prevProp: SearchBarProps, nextProp: SearchBarProps) => {
  return handleDeepComparison(prevProp.data, nextProp.data)
}

export default memo(SearchBar, areEqual)
