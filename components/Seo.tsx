import Head from 'next/head';

function Seo({ title }: SeoProp) {
  return (
    <Head>
      <title>{title} | Next Movie</title>
    </Head>
  );
}

export default Seo;

type SeoProp = {
  title: string;
};
