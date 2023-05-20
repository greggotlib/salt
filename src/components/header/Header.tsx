import { FontSizes, Transform } from 'components/text/types'
import {
  Container,
  Icon,
  Sub,
  Main,
  SubIconContainer,
  MainIconContainer,
  TextWrapper,
  MethodWrapper,
} from './Header.style'
import arrowLeft from 'assets/icons/arrow-left.svg'
import arrowRight from 'assets/icons/arrow-right.svg'
import { HeaderProps } from './types'
import { dictionary } from 'utils/dictionary'
import { Text } from 'components/text'

const Header = ({ api, method, path }: HeaderProps) => {
  const { header } = dictionary

  return (
    <Container data-testid="header">
      <MainIconContainer>
        <Icon src={arrowLeft} />
      </MainIconContainer>
      <TextWrapper>
        <Main>
          <MethodWrapper>
            <Text
              fontSize={FontSizes.LARGE}
              fontWeight="700"
              transform={Transform.UPPERCASE}
            >
              {method}
            </Text>
          </MethodWrapper>
          <Text
            fontSize={FontSizes.LARGE}
            fontWeight="700"
          >
            {path}
          </Text>
        </Main>
        <Sub>
          <Text
            fontWeight="600"
            color="#7D3CE9"
          >
            {header.allApis}
          </Text>
          <SubIconContainer>
            <Icon src={arrowRight} />
          </SubIconContainer>
          <Text
            fontWeight="600"
            color="#7D3CE9"
          >
            {api}
          </Text>
          <SubIconContainer>
            <Icon src={arrowRight} />
          </SubIconContainer>
          <Text>{path}</Text>
        </Sub>
      </TextWrapper>
    </Container>
  )
}

export default Header
