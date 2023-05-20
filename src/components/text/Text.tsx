import { FontSizes, TextProps, Transform } from './types'
import { Container, StyledText } from './Text.style'

const Text = ({
  fontWeight,
  color = '#3D3D3D',
  fontFamily = 'Inter',
  transform = Transform.NONE,
  fontSize = FontSizes.SMALL,
  children,
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
        {children}
      </StyledText>
    </Container>
  )
}

export default Text
