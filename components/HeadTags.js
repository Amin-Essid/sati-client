import Head from "next/head";

export default function HeadTags({ title, description, image }) {
  return (
    <div>
      <Head>
        <meta
          name="facebook-domain-verification"
          content="dzzkbvdz3yfft10cv7fzqfg9d90yan"
        />
        <title>sati</title>
        <link rel="icon" href="/logo.png" />

        <meta
          name="google-site-verification"
          content="fXwWHNOb0HURY2FKxDTetYODAhsn3NVUQk1sThTwkzc"
        />

        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta
          name="keywords"
          content="دفتر اعداد دروس، جذاذات، دفتر تقييم، ادوات المعلم، الوسائل البيداغوجية، امتحانات، تخطيط الوحدات"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="sati.tn" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
    </div>
  );
}
