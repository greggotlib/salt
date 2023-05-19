import { TabPanelProps } from './types'

function TabPanel({ children, index, value }: TabPanelProps) {
  return <div>{value === index && children}</div>
}

export default TabPanel
