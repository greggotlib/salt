import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import BasicTabs from './Tabs'

const fetchedData = {
  api: 'users',
  method: 'GET',
  path: '/api/users',
  request: {},
  response: {},
}

test('renders the tabs component', () => {
  render(<BasicTabs fetchedData={fetchedData} />)

  const tab1 = screen.getByText('request')
  const tab2 = screen.getByText('response')
  expect(tab1).toBeInTheDocument()
  expect(tab2).toBeInTheDocument()

  const searchBar = screen.getByTestId('search-bar')
  expect(searchBar).toBeInTheDocument()

  const initialTable = screen.getByRole('table')
  expect(initialTable).toBeInTheDocument()
})

test('changes the tab when clicked', () => {
  render(<BasicTabs fetchedData={fetchedData} />)

  const tab2 = screen.getByText('response')
  fireEvent.click(tab2)

  expect(tab2).toHaveAttribute('aria-selected', 'true')

  const responseTable = screen.getByRole('table')
  expect(responseTable).toBeInTheDocument()
})
