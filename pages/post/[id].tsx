import { useRouter } from 'next/router'

import { 
  Text,
  Box,
} from '@chakra-ui/react'

import PageTitle from '../../components/PageTitle'
import PageSubTitle from '../../components/PageSubTitle'
import ZeroHead from '../../components/ZeroHead'

export default function PostPage({ post }) {
  return (
    <>
      <ZeroHead
        title={`zerønet — ${post.title}`}
        description={post.subtitle}
        type='article'
        url={`https://zeronet.space/post/${post.id}`}
      />
      <PageTitle title={`(${post.author}) ${post.title}`} />
      <PageSubTitle title={post.subtitle} />
      <Box w='100%' p='2'>
        {post.content}
      </Box>
    </>
  )
}

export async function getServerSideProps(context) {
  let { id } = context.query;

  let res = await fetch('https://zeronet.space/api/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id: id})
  });
  let posts = await res.json();
  let post = posts[0];

  return { props: { post } };
}
