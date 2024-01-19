import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=69e039ee7d874f48a2bb57a43920bc03`
    axios.get(url).then((res) => {
      console.log(res.data.articles)
      setArticles(res.data.articles)
    })
  }, [category])

  return (
    <div className="container">
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {
        articles.map((news, index) => <NewsItem key={index} title={news.title}
          description={news.description} src={news.urlToImage} url={news.url} />)
      }
    </div>
  )
}

export default NewsBoard