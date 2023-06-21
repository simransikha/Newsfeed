import React, { Component } from 'react'
import NewsItem from './NewsItem'

 export class News extends Component {
 articles = [
  {
    "source": {
  "id": null,
  "name": "Radaronline.com"
  },
  "author": "Connor Surmonte",
  "title": "'Soros Hates Humanity': Elon Musk Attacks Billionaire Philanthropist George Soros During Late-night Twitter Tirade",
  "description": "Musk also compared Soros to the Jewish comic book supervillain Magneto after it was revealed Soros sold all of his stock in Tesla.",
  "url": "https://radaronline.com/p/elon-musk-attacks-george-soros-late-night-twitter-tirade/",
  "urlToImage": "https://media.radaronline.com/brand-img/rrHu3e5KK/1200x628/elon-musk-attacks-george-soros-late-night-twitter-tirade-5jpg-1684264961490.jpg",
  "publishedAt": "2023-05-16T19:45:00Z",
  "content": "Elon Musk targeted George Soros in a late-night Twitter tirade this week shortly after it was revealed the billionaire philanthropist sold all of his stock in Tesla, RadarOnline.com has learned.\r\nMus… [+2554 chars]"
  },
  {
    "source": {
  "id": null,
  "name": "CleanTechnica"
  },
  "author": "Michael Barnard",
  "title": "Clean Condo Life: Heat Pumps Are Great, But Adding Them To Condos Requires Care In Installation",
  "description": "As a resident of a condo without central air conditioning, I’ve been feeling the harsh effects of climate change, particularly during the sweltering summers. With climate change, population growth, and urbanization being the key megatrends, it’s clear that ai…",
  "url": "https://cleantechnica.com/2023/05/16/clean-condo-life-heat-pumps-are-great-but-adding-them-to-condos-requires-care-in-installation/",
  "urlToImage": "https://cleantechnica.com/files/2023/05/DALL·E-generated-image-of-a-wall-mounted-heat-pump-air-exchange-unit-blowing-cool-blue-curls-of-air-into-a-condo-living-room-digital-art-800x401.png",
  "publishedAt": "2023-05-16T19:35:30Z",
  "content": "As a resident of a condo without central air conditioning, I’ve been feeling the harsh effects of climate change, particularly during the sweltering summers. With climate change, population growth, a… [+17607 chars]"
  },

  {
    "source": {
  "id": null,
  "name": "seattlepi.com"
  },
  "author": "By KEVIN McGILL, Associated Press",
  "title": "Tesla lawyers want court to reconsider Musk tweet deemed 'threat' amid labor dispute",
  "description": "Lawyers for Tesla have asked a federal appeals court to reconsider a ruling that CEO Elon Musk unlawfully threatened employees with a loss of stock options in a 2018 Twitter post. The controversy arose during United Auto Workers’ organizing efforts at a Tesla…",
  "url": "https://www.seattlepi.com/business/article/tesla-lawyers-want-court-to-reconsider-musk-tweet-18102694.php",
  "urlToImage": "https://www.seattlepi.com/img/modules/siteheader/brand.png",
  "publishedAt": "2023-05-16T19:05:49Z",
  "content": "FILE - Elon Musk departs the Phillip Burton Federal Building and United States Court House in San Francisco, Jan. 24, 2023. Lawyers for Tesla are asking a federal appeals court to reconsider its ruli… [+2210 chars]"
  },
 ]
  constructor(){
    super();
    console.log("Hello I am constructor")
    this.state = {
     articles: this.articles,
     loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsFeed - Top Headlines</h2>

        <div className="row">    
         {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
             <NewsItem title={element.title} description={element.description} img={element.urlToImage} newsUrl={element.url}/>
           </div>

        })}
    </div>
    </div>
    )
  }
}

export default News
