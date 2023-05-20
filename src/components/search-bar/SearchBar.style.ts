import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 5px 10px;
  border-width: 1px 0px 1px 1px;
  border-style: solid;
  border-color: #ded8e8;
  border-radius: 6px 0px 0px 6px;
  width: 70%;
  height: 23px;
`
export const PIIContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 5px 10px;
  border: 1px solid #ded8e8;
  border-radius: 0px 6px 6px 0px;
  width: 30%;
  height: 23px;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #a1a0a3;
  order: 1;
  font-family: Inter;
  margin-inline-start: 7px;
`

export const StyledSearchIcon = styled.img`
  fill: #7d3ce9;
  width: 14px;
  height: 14px;
`

export const Wrapper = styled.div`
  display: flex;
`

export const ApplyFilters = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  width: 118px;
  height: 35px;
  background: #7d3ce9;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`

export const ResetFilters = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-block-end: 5px;
  gap: 10px;
  width: 118px;
  height: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
`

export const ButtonsContainer = styled.div`
  margin-inline-start: 10px;
`
