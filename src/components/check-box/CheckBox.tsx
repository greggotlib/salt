import { Container, StyledCheckBox } from './CheckBout.style'
import { CheckBoxProps } from './types'

const Checkbox = ({ handleClick, checked }: CheckBoxProps) => {
  const handleCheckboxChange = () => {
    handleClick(!checked)
  }

  return (
    <Container>
      <StyledCheckBox
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </Container>
  )
}

export default Checkbox
