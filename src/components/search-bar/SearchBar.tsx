import React, { memo, useEffect, useState } from 'react'
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
import { CheckBox } from 'components/check-box'
import { Request, Response } from 'components/table/types'

const SearchBar = ({ handleFilterData, data }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>('')
  const [withPii, setWithPii] = useState<boolean>(false)
  const debouncedSearchText = useDebounce(searchText, 300)
  const { searchBar } = dictionary

  useEffect(() => {
    let filteredData: Request | Response[] = data

    if (!debouncedSearchText) {
      handleFilterData(data)
      return
    }

    filteredData = filterByTypeOrName(data, searchText, withPii)
    handleFilterData(filteredData)
  }, [debouncedSearchText])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  return (
    <Wrapper>
      <SearchContainer>
        <SearchInput
          placeholder={searchBar.placeholder}
          onChange={handleSearch}
          value={searchText}
        />
        <StyledSearchIcon src={searchIcon} />
      </SearchContainer>
      <PIIContainer>
        <CheckBox handleClick={setWithPii} />
        <Text
          label={searchBar.pii}
          fontSize={FontSizes.MEDIUM}
          fontWeight="400"
          color="#a1a0a3"
          fontFamily="Inter"
        />
      </PIIContainer>
      <ButtonsContainer>
        <ApplyFilters>
          <Text
            label={searchBar.applyLabel}
            fontFamily="Inter"
            color="#F5F5F5"
            fontSize={FontSizes.MEDIUM}
            fontWeight="600"
          />
        </ApplyFilters>
        <ResetFilters>
          <Text
            label={searchBar.restetLabel}
            fontFamily="Inter"
            color="#D5D4D8"
            fontSize={FontSizes.MEDIUM}
            fontWeight="600"
          />
        </ResetFilters>
      </ButtonsContainer>
    </Wrapper>
  )
}

const areEqual = (prevProp: SearchBarProps, nextProp: SearchBarProps) => {
  return handleDeepComparison('', '')
}

export default memo(SearchBar, areEqual)
