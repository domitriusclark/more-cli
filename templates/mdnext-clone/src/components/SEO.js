import { NextSeo } from 'next-seo';

export default function SEO({
  title,
  description,
  twitter,
  favicon,
  ogImage,
  url,
}) {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph=
      twitter=
      favicon={favicon || ''}
    />
  );
}
