import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
   static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  } 

  render() {
    return (
      <html>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        </body>
      </html>
    )
  }
}