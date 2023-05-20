import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  it('renders correctly', () => {
    const path = '/api/users'
    const method = 'GET'
    const api = 'Users API'

    const { getByTestId } = render(
      <Header
        path={path}
        method={method}
        api={api}
      />
    )
    expect(getByTestId('header')).toBeInTheDocument()
  })
})
