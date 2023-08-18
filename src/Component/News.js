import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

 const News =(props)=> {
 const [articles,setArticles] = useState([])
 const [loading,setloading] = useState([true])
 const [page,setpage] = useState(1)
 const [totalResults,setTotalResults] = useState(0)


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
 const updateNews = async()=>{
    props.setProgress(10);
    const url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9dcb6e136a894b458c97bf906a896233&page=$state.page}&pageSize=${props.pagesize}`;
    let data = await fetch(url).catch(error=>{
      alert("No Internet"+error.message)
    });
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)


    props.setProgress(100);
  }

  useEffect( ()=> {
    document.title = props.category;
    updateNews();
  }, [])
  
  const handleNextClick = async()=>{

    setpage(page + 1)
    updateNews();
  }
 const handlePrevClick = async()=>{
   
    setpage(page - 1)
    updateNews();
  }

  const fetchMoreData = async () => {
    
      const url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9dcb6e136a894b458c97bf906a896233&page=${page+1}&pageSize=${props.pagesize}`;
      setpage( page + 1)
    let data = await fetch(url);
    let parsedData = await data.json()
   setArticles(articles.concat( parsedData.articles))
  setTotalResults(parsedData.totalResults)
   
  };
    
    return (
      <>
        <h2 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>NewsFeed - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4> ...Loading...</h4>}
        >
            <div className="container">
        <div className="row">    
         {articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
             <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
           </div>

        })}
        </div>
    </div>
    </InfiniteScroll>
    
    </>
    )
  }

  
  News.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 8,

  }
 News.PropsTypes = {
  country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }
export default News
