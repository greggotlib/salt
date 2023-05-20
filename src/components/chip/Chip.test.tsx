import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import Chip from './Chip'

describe('Chip component', () => {
  it('renders correctly and calls the click handler', () => {
    const parentField = 'parent'
    const childField = 'child'
    const property = 'property'
    const label = 'Example Chip'
    const backgroundColor = '#FFFFFF'
    const color = '#7D3CE9'
    const withBorder = true
    const clickable = true
    const updateByPiiOrMasked = jest.fn()

    const { getByText, getByTestId } = render(
      <Chip
        parentField={parentField}
        childField={childField}
        property={property}
        label={label}
        backgroundColor={backgroundColor}
        color={color}
        withBorder={withBorder}
        clickable={clickable}
        updateByPiiOrMasked={updateByPiiOrMasked}
      />
    )

    const labelText = getByText(label)
    expect(labelText).toBeInTheDocument()

    const chipContainer = getByTestId('chip-container')
    fireEvent.click(chipContainer)

    expect(updateByPiiOrMasked).toHaveBeenCalledWith(
      parentField,
      childField,
      property,
      true
    )
  })
})
