import React, { Component } from 'react';
import Masonry from 'react-masonry-infinite';
import shortid from 'shortid';
import '../App.css';
import Header from '../slices/Header';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: false,
      elements: [
        {title:"Hotels", background:"url(images/proj1.jpg)", link: '/category/hotels'},
        {title:"Villas & Residences", background:"url(images/proj2.jpg)", link: '/category/villas-residences'},
        {title:"Resorts", background:"url(images/proj3.jpg)", link: '/category/resorts'},
        {title:"Commercials", background:"url(images/proj4.jpg)", link: '/category/commercials'},
        {title:"Contact Us", background:"url(images/proj5.jpg)", link: '/contact-us'},
        {title:"About Us", background:"url(images/proj6.jpg)", link: '/about-us'},
      ],
    };
  }

  colors = ['#000'];

  // heights = [200, 300, 300, 400, 400, 450];
  heights = [300];

  getRandomElement = array => array[Math.floor(Math.random() * array.length)];

  generateElements = () => [...Array(6).keys()].map(() => ({
    key: shortid.generate(),
    color: this.getRandomElement(this.colors),
    height: `${this.getRandomElement(this.heights)}px`,
  }));

  loadMore = () => setTimeout(() => this.setState(state => ({
    elements: state.elements.concat(this.generateElements()),
  })), 2500);

  render() {
    return (
      <div className="App transition-item">
        <Header />
        <div className="container">
          <Masonry
            className="masonry"
            hasMore={this.state.hasMore}
            loader={
              <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube" />
                <div className="sk-cube2 sk-cube" />
                <div className="sk-cube4 sk-cube" />
                <div className="sk-cube3 sk-cube" />
              </div>
            }
            loadMore={this.loadMore}
          >
            {
              this.state.elements.map(({ title, background, link }, i) => (
                <div key={i} className="card" style={{ height: 300, ["backgroundImage"]: background }}>
                  <Link to={link} className="nav-wrapper">
                    <h3 className="title">{title}</h3>
                  </Link>
                </div>
              ))
            }
          </Masonry>
        </div>
      </div>
    );
  }
}

export default Home;