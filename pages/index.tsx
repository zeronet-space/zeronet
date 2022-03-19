import { 
  Container,
  Center,
  Text,
  Box 
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import theme from '../zeronet.theme'

import styles from '../styles/Home.module.scss'
import Post from '../components/Post'
import PostLink from '../components/PostLink'
import ZeroHead from '../components/ZeroHead'

export default function Home({ posts }) {
  return (
    <>
      <ZeroHead
        title='zerønet'
        description='Ø'
        type='website'
        url='https://zeronet.space/'
      />
      <Container maxW='container.xl' colorScheme={theme.colors.black}>
        Тут что-то будет...<br/>
        {JSON.parse(posts).map(post => <>
          <PostLink
            id={post.id}
            author={post.author}
            title={post.title}
            subtitle={post.subtitle}
            createdAt={post.createdAt}
          />
        </>)}
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://zeronet.space/api/posts');
  const posts = await res.text();

  return { props: { posts } };
}
