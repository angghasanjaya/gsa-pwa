import React, { Component } from 'react';
import Masonry from 'react-masonry-infinite';
import shortid from 'shortid';
import '../App.css';
import Header from '../slices/Header';
import Projects from './Projects';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'


class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMore: false,
      elements: [
        {title:"Hotels", background:"url(images/proj1.jpg)"},
      ],
      project:{},
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
                  {
                    this._renderYearGroup()
                  }
                </div>
            </div>
    );
  }
  componentWillMount(){
    this.setState({projects:Projects});
  }
  _renderYearGroup(){
    return this.state.projects.map((project)=>{
      return this._renderProjectsYear(project)
    });
  }
  _renderProjectsYear({year,projects}){
    
    return (
      <div style={{marginBottom:"80px"}}>
        <h2 style={{color:"#fff", marginLeft:"62px", marginRight:"62px"}}>{year}</h2>
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
            projects.map(({slug, name},i)=>{
              let background="url(/images/"+slug+".jpg)";
              return (
                <div key={i} className="card" style={{ height: 300, backgroundImage: background, backgroundPosition:"center"}}>
                      <Link to={"/project/"+slug} className="nav-wrapper">
                        <h3 className="title">{name}</h3>
                      </Link>
                </div>
              )
            })
            }
        </Masonry>
      </div>
    )
  }
}

// const Category = AnimatedWrapper(CategoryComponent);
const Category = CategoryComponent;
export default Category;