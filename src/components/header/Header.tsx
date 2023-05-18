import { Text } from 'components/text'
import { FontSizes, Transform } from 'components/text/types'
import { useState } from 'react'
import data from 'api/data.json'
import { Container, Icon, IconContainer } from './Header.style'
import vectorLeft from 'assets/icons/vector.svg'

const Header = () => {
  const [apiData] = useState(data)

  return (
    <Container>
      <IconContainer>
        <Icon src={vectorLeft} />
      </IconContainer>
      <Text
        label={apiData.method}
        fontSize={FontSizes.LARGE}
        fontWeight="700"
        transform={Transform.UPPERCASE}
        fontFamily="Inter"
      />
      <Text
        label={apiData.path}
        fontSize={FontSizes.LARGE}
        fontWeight="700"
        fontFamily="Inter"
      />
    </Container>
  )
}

export default Header
