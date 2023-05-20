import { FontSizes } from 'components/text/types'
import { ChipContainer, ChipText } from './Chip.style'
import { ChipProps, ChipStyleProps } from './types'
import { useEffect, useState } from 'react'

const Chip = ({
  parentField,
  childField,
  property,
  label,
  backgroundColor,
  color,
  withBorder,
  clickable,
  isSelected = false,
  updateByPiiOrMasked,
}: ChipProps) => {
  const [inverted, setInverted] = useState<boolean>(false)

  const chipStyleProps: ChipStyleProps = {
    color: color ?? '#7D3CE9',
    backgroundcolor: inverted ? color : backgroundColor,
    border: withBorder ? 'true' : 'false',
    clickable: clickable ? 'true' : 'false',
  }

  const handleClick = () => {
    setInverted(!inverted)
    if (updateByPiiOrMasked) {
      updateByPiiOrMasked(parentField, childField, property, !inverted)
    }
  }

  useEffect(() => {
    setInverted(isSelected)
  }, [isSelected])

  return (
    <ChipContainer
      data-testid="chip-container"
      onClick={handleClick}
      {...chipStyleProps}
      disabled={!clickable}
    >
      <ChipText
        fontSize={FontSizes.MEDIUM}
        color={inverted ? backgroundColor : color}
      >
        {label}
      </ChipText>
    </ChipContainer>
  )
}
export default Chip
