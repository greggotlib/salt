import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Text from './Text'

describe('Text', () => {
  it('renders children correctly', () => {
    const text = 'Hello, World!'
    render(<Text>{text}</Text>)
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
