import { 
  Box, 
  Text, 
  Link 
} from '@chakra-ui/react'
import { globby } from 'globby'
import mkmeta from 'marked-metadata'
import fs from 'fs'

import theme from '../zeronet.theme'

import styles from '../styles/Home.module.scss'
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
      <Box w='100%' m='0'>
        {posts.map(post => <>
          <Box w='100%' bgColor='#979797' mb='1'>
            <Box w='100%' bgColor='#989898' p='1'>
              <Text fontSize='md'><Link href={`/post/${post.meta.id}`}>{post.meta.title}</Link></Text>
              <Box w='100%' bgColor='#898989' p='1' h='20px'>
                <Text mt='-3px'>{post.meta.subtitle || <b><i>Подзаголовок не указан...</i></b>}</Text>
              </Box>
            </Box>
            <Box w='100%' bgColor='#898989' p='1' h='20px'>
              <Text mt='-3px'><b><i>Автор статьи</i></b> {post.meta.author}</Text>
            </Box>
            <Box w='100%' bgColor='#898989' p='1' h='20px'>
              <Text mt='-3px'><b><i>Статья опубликована</i></b> {post.meta.createdAt}</Text>
            </Box>
            <Box w='100%' bgColor='#898989' p='1' h='20px'>
              <Text mt='-3px'><b><i>Последнее изменение</i></b> {post.meta.modifiedAt}</Text>
            </Box>
          </Box>
        </>)}
      </Box>
      <Box position='fixed' style={{
        width: '100%',
        bottom: '0'
      }}>
        <Box w='100%' bgColor='#898989' p='1px' pl='5px' h='20px'>
          Авторское право &copy; 2021-{new Date().getFullYear()}. Нихуя не защищено :KekW:
        </Box>
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  let posts: any = await globby("./articles/**/*.md");
  posts = posts.map(post => {
    let md = new mkmeta(post);
    md.defineTokens('#{--', '--}#');
    let meta = md.metadata(),
        data = md.markdown();
    let stat = fs.statSync(post);
    return { 
      meta: {
        ...meta, 
        createdAt: stat.ctime.toLocaleString("ru-RU"), 
        modifiedAt: stat.mtime.toLocaleString("ru-RU"), 
      }, 
      data: data 
    };
  });
  return { props: { posts: posts } };
}
