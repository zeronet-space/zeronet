import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class ZeroDocument extends Document {
  render() {
    return (
      <Html lang="ru-RU">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}