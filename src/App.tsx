import { Header } from 'components/header'
import { Tabs } from 'components/tabs'
import data from 'api/data.json'
import { Container } from 'App.style'

const App = () => {
  return (
    <Container data-testid="app">
      <Header {...data} />
      <Tabs fetchedData={data} />
    </Container>
  )
}

export default App
