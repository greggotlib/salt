import { useState } from 'react'
import { Container, StyledCheckBox } from './CheckBout.style'
import { CheckBoxProps } from './types'

const Checkbox = ({ handleClick }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!checked)
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
