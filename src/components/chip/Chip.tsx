import { FontSizes } from 'components/text/types'
import { ChipContainer, ChipText } from './Chip.style'
import { ChipProps } from './types'
import { useState } from 'react'

const Chip = ({
  parentField,
  childField,
  property,
  label,
  backgroundColor = '#FFFFFF',
  color = '#7D3CE9',
  withBorder,
  isSelected,
  clickable = true,
  updateByPiiOrMasked,
}: ChipProps) => {
  const [inverted, setInverted] = useState<boolean>(!!isSelected)

  const handleClick = () => {
    setInverted(!inverted)
    if (updateByPiiOrMasked) {
      updateByPiiOrMasked(parentField, childField, property, !inverted)
    }
  }

  return (
    <ChipContainer
      onClick={handleClick}
      color={color}
      backgroundColor={inverted ? color : backgroundColor}
      withBorder={!!withBorder}
      disabled={!clickable}
      clickable={clickable}
    >
      <ChipText
        label={label}
        fontFamily="Inter"
        fontSize={FontSizes.MEDIUM}
        color={inverted ? backgroundColor : color}
      />
    </ChipContainer>
  )
}
export default Chip
