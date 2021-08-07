import React from 'react'

const Card = ({img}) => {
    return (
        <div className="card">
          <div className="card-info">
            <h2 className="card-heading">Ready for autum collection</h2>
            <p className="card-para">Treat yourself to some of our brand new autum collection-all with the wonderful colours surrounding you</p>
            <button className="card-btn">purchase now</button>
          </div>  
          <div className="card-pic">
             <figure>
                <img src={img} alt="pic" className="card-img" />
             </figure>
          </div>
        </div>
    )
}

export default Card
