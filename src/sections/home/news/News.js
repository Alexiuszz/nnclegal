import React from "react";
import NewsCard from "../../../components/cards/news-card/NewsCard";
import { Header } from "../../../components/typography.styles";
import { NewsContainer } from "./News.styles";
import { useInView } from "react-intersection-observer";

const news = [
  {
    thumb: "https://ikwueto.s3.amazonaws.com/images/News1.png",
    title: "Ikwueto Law Firm launches Corporate Division in Abuja.",
    date: "14 November 2020",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    thumb: "https://ikwueto.s3.amazonaws.com/images/News2.png",
    title: "Ikwueto Law Firm launches Corporate Division in Abuja.",
    date: "14 November 2020",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
function News() {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });
  return (
    <NewsContainer ref={ref} inView={inView}>
      <Header>Most Recent News</Header>
      <div className="newsContainer">
        {news.map((content, i) => (
          <NewsCard key={i} content={content} index={i} />
        ))}
      </div>
    </NewsContainer>
  );
}

export default News;
