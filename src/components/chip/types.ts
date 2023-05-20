export interface ChipProps {
  label: string
  parentField: string
  childField: string
  property: string
  color: string
  backgroundColor: string
  withBorder: boolean
  clickable: boolean
  isSelected?: boolean
  updateByPiiOrMasked?: (
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: boolean
  ) => void
}
export interface ChipStyleProps {
  color: string
  backgroundcolor: string
  border: string
  clickable: string
}
