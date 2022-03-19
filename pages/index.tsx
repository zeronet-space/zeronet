import { 
  Container,
  Center,
  Text,
  Box 
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import theme from '../zeronet.theme'

import styles from '../styles/Home.module.scss'

export default function Home({ posts }) {
  return (
    <Container maxW='container.xl' colorScheme={theme.colors.black}>
      Тут что-то будет...<br/>
      {posts}
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://zeronet.space/api/posts');
  const posts = await res.text();

  return { props: { posts } };
}
