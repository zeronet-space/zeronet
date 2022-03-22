import React, { useRef, useEffect, useState } from 'react';

import { 
  Text,
  Box,
} from '@chakra-ui/react'
import { globby } from 'globby'
import mkmeta from 'marked-metadata'
import fs from 'fs'

import PageTitle from '../../components/PageTitle'
import PageSubTitle from '../../components/PageSubTitle'
import ZeroHead from '../../components/ZeroHead'

export default function PostPage({ post }) {
  const rawRef = useRef(null);
  const [rawHTML,] = useState(post.data);

  useEffect(() => {
    if (rawRef.current) {
      rawRef.current.innerHTML = rawHTML;
    }
  }, [rawRef.current, rawHTML]);

  return (
    <>
      <ZeroHead
        title={`zerønet — ${post.meta.title}`}
        description={post.meta.subtitle}
        type='article'
        url={`https://zeronet.space/post/${post.meta.id}`}
      />
      <PageTitle title={post.meta.title} />
      <PageSubTitle title={post.meta.subtitle || <b><i>Подзаголовок не указан...</i></b>} />
      <Box position='relative' w='100%' p='2' fontSize='16px' ref={rawRef} />
      <Box position='fixed' style={{
        width: '100%',
        bottom: '0'
      }}>
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
    </>
  )
}

export async function getServerSideProps(context) {
  let { id } = context.query;

  let posts = await globby("./articles/**/*.md");
  let post = posts.map(post => {
    let md = new mkmeta(post);
    md.defineTokens('#{--', '--}#');
    let meta = md.metadata(),
        data = md.markdown();
    if(meta.id == id) {
      let stat = fs.statSync(post);
      return { 
        meta: {
          ...meta, 
          createdAt: stat.ctime.toLocaleString("ru-RU"), 
          modifiedAt: stat.mtime.toLocaleString("ru-RU"), 
        }, 
        data: data 
      };
    } else {
      return;
    }
  })[0];

  return { props: { post: post } };
}
