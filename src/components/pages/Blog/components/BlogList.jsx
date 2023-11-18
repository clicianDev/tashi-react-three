import React, { useState, useEffect } from "react";
import { mediumArticle } from "../../../../utils/Api";

function formatDate(inputText) {
  const inputDate = new Date(inputText);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return inputDate.toLocaleDateString(undefined, options);
}

function BlogList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(mediumArticle)
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  console.log(articles);
  return (
    <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-14">
      {articles.map((item, index) => {
        const formattedDate = formatDate(item.pubDate);
        return (
          <div className="lg:my-5 h-auto m-auto" key={index}>
            <a href={item.link} target="_blank">
              <div className="m m-auto border rounded-3xl overflow-clip w-auto h-[341px] flex justify-center bg-tashi-primary">
                <img src={item.thumbnail} alt={item.title} width={1000} />
              </div>
              <div className="my-5">
                <h3 className="font-inter text-white text-xl md:text-2xl lg:text-2xl xl:text-2xl leading-10 font-semibold ">
                  {item.title}
                </h3>
              </div>
              <div className="text-white opacity-[0.5] font-semibold text-xl">
                <span>{formattedDate}</span>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
