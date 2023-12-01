import React, { Component } from 'react'
import SliderComponent from '../components/SliderComponent'
import post1 from '../Picture/post1.webp'
import post2 from '../Picture/post2.webp'
import post3 from '../Picture/post3.webp'
import post4 from '../Picture/post4.webp'
import post5 from '../Picture/post5.webp'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BestSeller from '../components/ProductLine'

export default class Home extends Component {
  render() {
    return (
      <div>
        <SliderComponent arrImage={[post1, post2, post3, post4, post5]} />
        <div>
          <h2>Best Seller</h2>
          <BestSeller />
        </div>
      </div>
    )
  }
}
