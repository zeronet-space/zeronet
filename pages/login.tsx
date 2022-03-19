import { 
  Container,
  Center,
  Text,
  Box 
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import theme from '../zeronet.theme'

import styles from '../styles/AdminLogin.module.scss'
import PageTitle from '../components/PageTitle'
import ZeroHead from '../components/ZeroHead'

export default function AdminLogin() {
  return (
    <>
      <ZeroHead
        title='zerønet — Вход в учётную запись'
        description='Ø'
        type='website'
        url='https://zeronet.space/login'
      />
      <PageTitle title={'Вход в учётную запись'} />
      <Container maxW='container.xl' colorScheme={theme.colors.black}>
        <Text fontSize='xl'>test</Text>
      </Container>
    </>
  )
}