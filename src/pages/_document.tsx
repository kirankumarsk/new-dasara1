import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{overflow: "auto"}} suppressHydrationWarning={true}>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
