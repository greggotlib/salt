import { Text } from 'components/text'
import styled from 'styled-components'

export const ChipContainer = styled.button<{
  color: string
  backgroundColor: string
  withBorder: boolean
  clickable: boolean
}>`
  display: inline-flex;
  align-items: center;
  padding: 0px 10px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 6px;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  height: 25px;
  border: ${({ withBorder, color }) =>
    withBorder ? `1px solid ${color}` : 'none'};
`

export const ChipText = styled(Text)`
  padding: 2px 10px;
`
