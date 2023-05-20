import { ReactNode } from 'react'

export interface TextProps {
  children: ReactNode
  color?: string
  fontFamily?: string
  fontWeight?: string
  fontSize?: FontSizes
  transform?: Transform
}

export enum FontSizes {
  SMALL = '12px',
  MEDIUM = '14px',
  LARGE = '26px',
}

export enum Transform {
  CAPITALIZE = 'capitalize',
  UPPERCASE = 'uppercase',
  NONE = 'none',
}
