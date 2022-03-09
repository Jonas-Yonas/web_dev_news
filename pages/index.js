import { server } from "../config";
import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  // console.log(articles);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

/* Make use of our own API */
export const getStaticProps = async () => {
  // const res = await fetch(`${server}/api/articles`);   // throws an error
  const res = await fetch(`http://localhost:3000/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

/* Make use of public data as shown in the below API */
/*
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
*/
