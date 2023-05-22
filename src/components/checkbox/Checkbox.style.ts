import styled from 'styled-components'

export const StyledCheckBox = styled.input`
  margin: 0;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  input[type='checkbox'] {
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 3px;
    border: 1px solid #d5d4d8;
    cursor: pointer;
    margin-inline-end: 6px;
    &:checked {
      background-color: #7d3ce9;
      border: 1px solid #7d3ce9;
    }

    &:checked::before {
      color: #fff;
      content: 'X';
      padding: 0 2px;
    }
  }
`
