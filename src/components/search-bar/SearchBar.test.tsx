import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import SearchBar from './SearchBar'

describe('SearchBar component', () => {
  it('filters data correctly based on search text and PII checkbox', () => {
    const handleFilterData = jest.fn()
    const mockData: any = [
      {
        api: 'users',
        method: 'GET',
        path: '/api/users',
        request: {
          urlParams: [],
          queryParams: [],
          headers: [],
          body: [],
        },
        response: {
          urlParams: [],
          queryParams: [],
          headers: [],
          body: [],
        },
      },
    ]
    render(
      <SearchBar
        handleFilterData={handleFilterData}
        data={mockData}
      />
    )

    const searchInput = screen.getByPlaceholderText('Search')
    const piiCheckbox = screen.getByTestId('show-pii-only')
    expect((searchInput as HTMLInputElement).value).toBe('')
    expect((piiCheckbox as HTMLInputElement).checked).toBe(false)

    // Enter search text and click the PII checkbox
    fireEvent.change(searchInput, { target: { value: 'John' } })
    fireEvent.click(piiCheckbox)

    expect((piiCheckbox as HTMLInputElement).checked).toBe(true)
    expect(searchInput).toHaveValue('John')
  })
})
