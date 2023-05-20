import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TabPanel from './TablPanel'

test('renders the tab panel component', () => {
  render(
    <TabPanel
      value={0}
      index={0}
    >
      <div>Request Tab Content</div>
    </TabPanel>
  )

  const tabPanelContent = screen.getByText('Request Tab Content')
  expect(tabPanelContent).toBeInTheDocument()
})
