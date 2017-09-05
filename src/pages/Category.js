import React, { Component } from 'react';
import Masonry from 'react-masonry-infinite';
import shortid from 'shortid';
import '../App.css';
import Header from '../slices/Header';


class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: false,
      elements: [
        {title:"Hotels", background:"url(images/proj1.jpg)"},
      ],
      // animate: new Animated.Value(0),
    };
  }

  colors = ['#000'];

  // heights = [200, 300, 300, 400, 400, 450];
  heights = [300];

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
                    loadMore={this.loadMore}
                >
                    {
                    this.state.elements.map(({ title, background }, i) => (
                        <div key={i} className="card" style={{ height: 300, ["backgroundImage"]: background }}>
                        <a href="#" className="nav-wrapper">
                            <h3 className="title">{title}</h3>
                        </a>
                        </div>
                    ))
                    }
                </Masonry>
                </div>
            </div>
    );
  }
}

// const Category = AnimatedWrapper(CategoryComponent);
const Category = CategoryComponent;
export default Category;