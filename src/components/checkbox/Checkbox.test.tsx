import { render, fireEvent, screen } from '@testing-library/react'
import Checkbox from './Checkbox'

describe('Checkbox component', () => {
  it('renders correctly and calls the click handler', () => {
    const handleClick = jest.fn()
    const checked = false

    render(
      <Checkbox
        handleClick={handleClick}
        checked={checked}
      />
    )

    const checkbox = screen.getByRole('checkbox')
    expect((checkbox as HTMLInputElement).checked).toBe(false)

    fireEvent.click(checkbox)

    expect(handleClick).toHaveBeenCalledWith(true)
  })
})
