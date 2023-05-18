import styled from 'styled-components'
import { FontSizes, Transform } from './types'

export const StyledText = styled.div<{
  size: FontSizes
  transform: Transform
  weight?: string
  color?: string
  family?: string
}>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ family }) => family};
  text-transform: ${({ transform }) => transform};
  color: ${({ color }) => color};
`

export const Container = styled.div``
