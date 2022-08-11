import { React} from "react";
import "./news.css";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import NewsArticles from "./NewsArticles";
const News = () => {
  return (
    <section id='news'>
      <NewsArticles count="4" />
      <Link to={"allnews"}>
        <Button children="View All" />
      </Link>
    </section>
  );
};

export default News;
