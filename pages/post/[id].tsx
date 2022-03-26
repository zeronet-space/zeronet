import React, { useRef, useEffect, useState } from 'react';

import { 
  Text,
  Box
} from '@chakra-ui/react'
import { globby } from 'globby'

import md_hljs from 'highlight.js'
import md_meta from 'markdown-it-meta'
import md_anchor from 'markdown-it-anchor'
import md_toc from 'markdown-it-table-of-contents'
import md_attrs from 'markdown-it-attrs'
import md_table from 'markdown-it-multimd-table'
import md_wikilinks from 'markdown-it-wikilinks'
import { html5Media } from 'markdown-it-html5-media'
import md_abbr from 'markdown-it-abbr'
import md_comment from 'markdown-it-inline-comments'
import md_footnote from 'markdown-it-footnote'
import md_ghtasks from 'markdown-it-task-lists'
import md_kbd from 'markdown-it-kbd'
import md_emoji from 'markdown-it-emoji'

import twemoji from 'twemoji'

const md = require('markdown-it')({
  html: true,
  xhtmlOut: true,
  breaks: true,
  langPrefix: 'l-',
  linkify: true,
  typographer: true,
  quotes: '“”‘’',
  highlight: function (str, lang) {
    if (lang && md_hljs.getLanguage(lang)) {
      try {
        return (
          <pre className="hljs"><code>
            {md_hljs.highlight(str, { 
              language: lang, 
              ignoreIllegals: true 
            }).value}
          </code></pre>
        );
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
})
  .use(md_meta)
  .use(md_anchor)
  .use(md_toc, {
    includeLevel: [1, 2, 3],
    listType: 'ol'
  })
  .use(md_attrs)
  .use(md_table)
  .use(md_wikilinks({}))
  .use(html5Media)
  .use(md_abbr, {
    "HTML": "Hyper Text Markup Language",
    "W3C": "World Wide Web Consortium"
  })
  .use(md_comment)
  .use(md_footnote)
  .use(md_ghtasks, {enabled: false})
  .use(md_kbd)
  .use(md_emoji);
md.linkify.set({ fuzzyEmail: false });
md.renderer.rules.emoji = function(token, idx) {
  return twemoji.parse(token[idx].content);
};

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
      <Box position='relative' mb='60px' w='100%' p='2' fontSize='16px' ref={rawRef} />
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

  let posts = (await globby("./articles/**/*.md")).map(post => {
    let document = md.render(fs.readFileSync(post, "utf-8").toString());
    if(md.meta.id.toString() === id) {
      let stat = fs.statSync(post);
      return { 
        meta: {
          ...md.meta, 
          createdAt: stat.ctime.toLocaleString("ru-RU"), 
          modifiedAt: stat.mtime.toLocaleString("ru-RU"), 
        },
        data: document,
      };
    };
  });

  let post = posts.filter(post => post !== undefined && post.meta.id.toString() === id)[0];

  return { props: { post: post } };
}
