import Head from "next/head";

export default function Metatags({
  title = "BLOGIT - Post it!",
  description = "A blogging site!",
  image = "https://blog.templatetoaster.com/wp-content/uploads/2019/09/blog-sites-medium.jpg",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
