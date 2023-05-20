import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Table from './Table'

test('renders the table component', () => {
  render(
    <Table
      data={{}}
      updateByPiiOrMasked={jest.fn()}
    />
  )

  const nameHeader = screen.getByText('Name')
  const piiHeader = screen.getByText('PII')
  const maskingHeader = screen.getByText('Masking')
  const typeHeader = screen.getByText('Type')
  expect(nameHeader).toBeInTheDocument()
  expect(piiHeader).toBeInTheDocument()
  expect(maskingHeader).toBeInTheDocument()
  expect(typeHeader).toBeInTheDocument()
})
