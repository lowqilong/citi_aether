import { React, useEffect, useState } from "react";
import axios from "axios";
import "./news.css";
const NewsArticles = ({ count }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const fetchNews = async () => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2f359df71a4d461ea264562f99dcf334`
      );
      setNews(data?.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setIsErr(true);
    }
  };
  useEffect(() => {
    //Runs only on the first render
    fetchNews();
  }, []);

  return (
    <section>
      <h2>Specially Curated Articles, Keeping You Up To Date</h2>
      <div className="news--container">
        {/* simple w3school loader when news API still loading */}
        <div className={loading?'loader':'loader hidden'}></div>
        {news.map((data, index) => {
          if (index < count) {
            return (
              <div key={index} className="news--wrapper">
                <img src={data.urlToImage} alt={data.title} />
                <div>
                  <h3>{data.title}</h3>

                  <a href={data.url} target="_blank">
                    
                      Read more <i className="fa-solid fa-arrow-right-long"></i>
                    
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default NewsArticles;
