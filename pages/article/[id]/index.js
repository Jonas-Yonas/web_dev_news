import React from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import Meta from "../../../components/Meta";

const article = ({ articleItem }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  //   return <div>This is article {id}</div>;

  return (
    <>
      <Meta title={articleItem.title} description={articleItem.excerpt} />
      <h1>{articleItem.title}</h1>
      <p>{articleItem.body}</p>
      <br />
      <Link href="/">
        <a className="btn-back">Go Back</a>
      </Link>

      <style jsx>
        {`
          .btn-back {
            color: ${"#668cff"};
            font-weight: ${500};
          }
        `}
      </style>
    </>
  );
};

/*
  Fetching data from our own API
*/
export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/articles/${context.params.id}`
  );

  const articleItem = await res.json();

  return {
    props: {
      articleItem,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/articles`);

  const articles = await res.json();

  const ids = articles.map((articleItem) => articleItem.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

/* 
  Fetching data from public API
*/

// Option 1 for fetching data
/*
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const articleItem = await res.json();

  return {
    props: {
      articleItem,
    },
  };
};
*/

// Option 2 for fetching data
// This approach is much faster and useful for static websites.
/*
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const articleItem = await res.json();

  return {
    props: {
      articleItem,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((articleItem) => articleItem.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
*/

export default article;
