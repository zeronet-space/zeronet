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
      <PageTitle title={`(${post.meta.author}) ${post.meta.title}`} />
      <PageSubTitle title={post.meta.subtitle || <b><i>Подзаголовок не указан...</i></b>} />
      <Box w='100%' p='2' fontSize='16px' ref={rawRef} />
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
