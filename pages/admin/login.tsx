import { 
  Container,
  Center,
  Text,
  Box 
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import theme from '../../zeronet.theme'

import styles from '../../styles/AdminIndex.module.scss'
import PageTitle from '../../components/PageTitle'

export default function AdminLogin() {
  return (
    <>
      <PageTitle title={'Вход в учётную запись'} />
      <Container maxW='container.xl' colorScheme={theme.colors.black}>
        <Text fontSize='xl'>test</Text>
      </Container>
    </>
  )
}