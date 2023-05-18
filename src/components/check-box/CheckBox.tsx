import { useState } from 'react'
import { Container, StyledCheckBox } from './CheckBout.style'

const Checkbox = () => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!checked)
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
