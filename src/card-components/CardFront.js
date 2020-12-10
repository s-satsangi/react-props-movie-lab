import React, { Component } from 'react';

// {console.log(this.props.title)}
console.log("1")
export default class CardFront extends Component {
  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
