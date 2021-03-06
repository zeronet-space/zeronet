import Head from 'next/head'

export default function ZeroHead({ title, description, type, url }) {
  return (
    <>
      <Head>
        <meta 
          property="og:title" 
          content={title}
        />
        <meta 
          property="og:description" 
          content={description}
        />
        <meta 
          property="og:url" 
          content={url}
        />
        <meta
          property="og:type" 
          content={type}
        />
        <meta 
          property="twitter:title" 
          content={title}
        />
        <meta 
          property="twitter:url" 
          content={url}
        />
        <meta 
          name="apple-mobile-web-app-title" 
          content={title}
        />  
        <meta 
          name="application-name" 
          content={title}
        />
        <title>{title}</title>
      </Head>
    </>
  );
}