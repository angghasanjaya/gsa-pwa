import React, {Component} from 'react'
import Header from '../slices/Header';
import 'milligram';

class Project extends Component {
    render() {
        return (
            <div className="App">
                    <Header />
                <div style={propertyStyle.header}>
                    <h3 style={propertyStyle.title}>Puri Bagus Lovina</h3>
                </div>
                <div className="container" style={{color:"rgb(212, 212, 212)", fontFamily: "'Roboto Condensed', sans-serif", fontWeight:"200", paddingTop:"40px"}}>
                    <h3 style={propertyStyle.title}>Story</h3>
                    <div className="row" style={{marginBottom:"10px"}}>
                        <div className="column">
                            <img src="http://gsa-architects.com/images/puri-bagus-lovina-3.jpg" />
                        </div>
                        <div className="column">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget lorem imperdiet, cursus erat eu, commodo tellus. Mauris eros augue, tincidunt elementum odio ut, pellentesque sollicitudin nunc. Phasellus porta arcu consequat pretium ullamcorper. Nullam pellentesque nunc eu quam feugiat laoreet. Sed porttitor viverra ligula dictum placerat. Curabitur sagittis, odio eget tristique rutrum, felis leo finibus mi, vitae interdum quam purus a ligula. Fusce venenatis libero ac neque finibus, a tempus risus mattis. Mauris ornare orci sagittis vestibulum fermentum. Vivamus lacus metus, molestie hendrerit lacinia non, sollicitudin imperdiet nunc. Ut ullamcorper justo eget dolor lacinia, eget tempor quam consequat.</p>
                        </div>
                    </div>

                    <h3 style={propertyStyle.title}>Gallery</h3>
                    <div className="row">
                        <div className="column">
                            <img src="http://gsa-architects.com/images/puri-bagus-lovina-1.jpg" />                            
                        </div>
                        <div className="column">
                            <img src="http://gsa-architects.com/images/puri-bagus-lovina-2.jpg" />                            
                        </div>
                        <div className="column">
                            <img src="http://gsa-architects.com/images/puri-bagus-lovina-3.jpg" />                            
                        </div>
                        <div className="column">
                            <img src="http://gsa-architects.com/images/puri-bagus-lovina-4.jpg" />                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const propertyStyle = {
    header:{
        height:"300px",
        display:"block",
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('http://gsa-architects.com/images/puri-bagus-lovina-2.jpg')",
        // backgroundImage: 'url(http://gsa-architects.com/images/puri-bagus-lovina-2.jpg)',
        backgroundPosition:'center',
        backgroundSize:'cover',
        paddingTop: "120px",        
    },
    title:{
        fontFamily: "'Alegreya', serif",
        color: "#fff",
        
        fontWeight: 'Bold',
        display:"inline-block"
    }
}

export default Project