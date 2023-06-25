import React, { Component } from 'react'

export   class NewsItem extends Component {

  render() {
<<<<<<< HEAD
   let {title,description,imageUrl,newsUrl} = this.props;
=======
   let {title,description,img,newsUrl} = this.props;
>>>>>>> 079907584a648e0527d92e439f9bc11468f9ff03
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src = {img}
   className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
<<<<<<< HEAD
    <p className="card-text">{description}.....</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
=======
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
>>>>>>> 079907584a648e0527d92e439f9bc11468f9ff03
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
