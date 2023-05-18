import { Header } from 'components/header'
import { Tabs } from 'components/tabs'
import { Container } from './Dashboard.style'

const dashboard = () => {
  return (
    <Container>
      <Header />
      <Tabs />
    </Container>
  )
}

export default dashboard
