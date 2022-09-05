import Head from 'next/head';

import {siteConfig} from 'config/site.config';

export interface SEOProps {
  title: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({title, description}) => {
  const {title: siteTitle, description: siteDescription, author} = siteConfig;

  const metaDescription = description ?? siteDescription;

  return (
    <Head>
      <title>
        {title} | {siteTitle}
      </title>
      <meta name="description" content={metaDescription} />

      <link rel="icon" href="/favicon.ico" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={author} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
    </Head>
  );
};

export default SEO;
