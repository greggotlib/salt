import { Container, StyledCheckBox } from './Checkbox.style'
import { CheckBoxProps } from './types'

const Checkbox = ({ handleClick, checked }: CheckBoxProps) => {
  const handleCheckboxChange = () => {
    handleClick(!checked)
  }

  return (
    <Container>
      <StyledCheckBox
        data-testid="show-pii-only"
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </Container>
  )
}

export default Checkbox
