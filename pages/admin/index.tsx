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
import ZeroHead from '../../components/ZeroHead'

export default function AdminIndex() {
  return (
    <>
      <ZeroHead
        title='zerønet — Админка'
        description='Ø'
        type='website'
        url='https://zeronet.space/admin'
      />
      <PageTitle title={'Админка блога'} />
      <Container maxW='container.xl' colorScheme={theme.colors.black}>
        <Text fontSize='xl'>Главная</Text>
      </Container>
    </>
  )
}