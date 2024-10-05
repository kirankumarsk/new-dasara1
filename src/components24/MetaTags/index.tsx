// components/MetaTags.js
import Head from 'next/head';

interface props {

    title: string,
    description: string,
    ogImage: string
}
const MetaTags = ({ title, description, ogImage }: props) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />
    <link rel="canonical" href="https://mysoredasara.gov.in" />
    <meta property="og:image:alt" content="https://imagedelivery.net/cJxV3Z5xUIYHcgsXUkFAMw/dd9d0637-3782-4d16-2bad-1c8eaac8d900/public" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="format-detection" content="telephone=no" />
  </Head>
);

export default MetaTags;

// pages/index.js (or any other page)