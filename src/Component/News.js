import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component"

 class News extends React.Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 8,

  }
 static PropsTypes = {
  country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }
  constructor(props){
    super(props);
    this.state = {
     articles: [],
     loading: false,
     page: 1,
     totalResults: 0
     
    }
    document.title = this.props.category;
  }

  async updateNews(){
    const url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9dcb6e136a894b458c97bf906a896233&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles,
    totalResult: parsedData.totalResult,
  loading: false,
})

  }
 async componentDidMount(){
   this.updateNews();

  }
  handleNextClick = async()=>{

    this.setState({page: this.statepage + 1});
    this.updateNews();
  }
  handlePrevClick = async()=>{
   
    this.setState({page: this.statepage - 1});
    this.updateNews();
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  fetchMoreData = async () => {
      this.setState({page: this.state.page + 1})
      const url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9dcb6e136a894b458c97bf906a896233&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState
    ({articles:this.state.articles.concat( parsedData.articles),
    totalResult: parsedData.totalResult,
  loading: false,
    })
  };
    
  render() {
    return (
      <>
        <h2 className="text-center">NewsFeed - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4> ...Loading...</h4>}
        >
            <div className="container">
        <div className="row">    
         {this.state.articles.map((element)=>{
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

  }

export default News
