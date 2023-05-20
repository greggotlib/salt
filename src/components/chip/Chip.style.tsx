import { Text } from 'components/text'
import styled from 'styled-components'
import { ChipStyleProps } from './types'

export const ChipContainer = styled.button<ChipStyleProps>`
  display: inline-flex;
  align-items: center;
  padding: 0px 10px;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  border-radius: 6px;
  cursor: ${({ clickable }) => (clickable === 'true' ? 'pointer' : 'default')};
  height: 25px;
  border: ${({ border, color }) =>
    border === 'true' ? `1px solid ${color}` : 'none'};
`

export const ChipText = styled(Text)`
  padding: 2px 10px;
`
