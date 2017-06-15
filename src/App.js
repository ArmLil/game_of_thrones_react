import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Poster from './components/Poster';

const image_url_den = 'http://static2.businessinsider.com/image/574db0acdd0895d3558b45e6-1440/game-of-thrones-dragon-daenerys-7.jpg';
const image_url_walk = 'http://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Game-of-Thrones-White-Walkers-872713.jpg';
const back_url = 'https://static1.squarespace.com/static/52fc05c9e4b08fc45bd99090/t/585842e629687f89dc990d44/1482179307994/';
const image_url = 'http://i2.wp.com/tellmenothing.com/wp-content/uploads/2017/05/dDRgfwq.gif?resize=640%2C360';

const fetch_style = {
  justifyContent: 'center',
  borderRadius: '10%',
  border: '1px solid #900',
  backgroundColor: '#E3CEF6',
  margin: 5,
  height: 50,
  width: 30
}

const body_style = {
  display: 'flex',
  justifyContent: 'center space-around',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundImage : 'url(' + back_url + ')',
}

let data = [];
let i = 0; let j = 1; let k = 2;

class App extends Component {

  rightHandler = () => {
    if(data.length === 0)
    this.fetch();
    else{
      if(k === 59){
        i = 0; j = 1; k = 2;
      } else {
        i += 3; j += 3; k += 3;
      }
      this.setState({ episodes: data._embedded.episodes});
    }
  }

  leftHandler = () => {
    if(data.length === 0)
    this.fetch();
    else{
      if(k === 2){
        i = 57; j = 58; k = 59;
      } else {
        i -= 3; j -= 3; k -= 3;
      }
      this.setState({ episodes: data._embedded.episodes});
    }
  }

	async fetch() {
	  try {
			const req = await fetch('http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes');
	    data = await req.json();
	    console.log(data._embedded.episodes.length);
	    this.setState({ episodes: data._embedded.episodes});
	  } catch (e) {
	    console.error(e);
	  }
	};

state = {
	episodes:[{image: {original:image_url_den},
											name: 'NAME',
                      number: '0',
											season: '0',
											airdate: '2014',
											runtime: '0',
											summary: 'summary'},
						 {image: {original:image_url},
											 name: 'NAME',
                       number: '0',
											 season: '0',
											 airdate: '2014',
											 runtime: '0',
											 summary: 'summary'},
						 {image: {original:image_url_walk},
											 name: 'NAME',
                       number: '0',
											 season: '0',
											 airdate: '2014',
											 runtime: '0',
											 summary: 'summary'}]
}

  render() {
    return (
      <div className="App">
         <Header/>
	        <div style = {body_style}>
						<input style={fetch_style}
										type="button" value="<"
										onClick={this.leftHandler}
						/>

            <Poster ep = {this.state.episodes[i]}/>
      			<Poster ep = {this.state.episodes[j]}/>
      			<Poster ep = {this.state.episodes[k]}/>

            <input style={fetch_style}
										type="button" value=">"
										onClick={this.rightHandler}
						/>
        </div>
      </div>
    )
  }
}

export default App;
