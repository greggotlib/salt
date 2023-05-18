import { FontSizes, TextProps, Transform } from './types'
import { Container, StyledText } from './Text.style'

const Text = ({
  label,
  fontWeight,
  color,
  fontFamily,
  transform = Transform.NONE,
  fontSize = FontSizes.SMALL,
}: TextProps) => {
  return (
    <Container>
      <StyledText
        size={fontSize}
        transform={transform}
        weight={fontWeight}
        color={color}
        family={fontFamily}
      >
        {label}
      </StyledText>
    </Container>
  )
}

export default Text
