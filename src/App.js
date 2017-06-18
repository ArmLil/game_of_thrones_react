import React, { Component } from 'react';
import Header from './components/Header';
import Poster from './components/Poster';
import styled from 'styled-components';

const image_url_den =
  'http://static2.businessinsider.com/image/574db0acdd0895d3558b45e6-1440/game-of-thrones-dragon-daenerys-7.jpg';
const image_url_walk =
  'http://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Game-of-Thrones-White-Walkers-872713.jpg';
const back_url =
  'https://static1.squarespace.com/static/52fc05c9e4b08fc45bd99090/t/585842e629687f89dc990d44/1482179307994/';
const image_url =
  'http://i2.wp.com/tellmenothing.com/wp-content/uploads/2017/05/dDRgfwq.gif?resize=640%2C360';
const fetch_url =
  'https://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes';
const Div = styled.div`
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
justify-content: center;
align-items: center;

-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
`;

const Container = Div.extend`
  flex-direction: column;
`;

const Body = Div.extend`
  justify-content: space-around;
  flex-direction: row;
  border: 1px solid #FE9A2E;
  position: fixed;
  top:20%;
  left:0px;
  width: 100%;
  height: 85%;
	background-image: url(${back_url}) ;
`;

const Button = styled.button`
    background: Transparent;
    border-radius: 8px;
    height: 5rem;
    font-size:0.8em;
    color: black;
    &:hover {
    -moz-box-shadow: 0 0 20px #B28CBF;
    -webkit-box-shadow: 0 0 20px #B28CBF;
    box-shadow: 5px 5px 20px #B28CBF;
`;

class App extends Component {
  rightHandler = () => {
    let { i, j, k } = this.state;
    const number = this.state.episodes[i].number;
    let n = this.state.episodes.length - 1;
    if (number === '0') this.fetch();
    else {
      i = (i + 3) % n;
      j = (j + 3) % n;
      k = (k + 3) % n;
    }
    this.setState({ i, j, k, episodes: this.state.episodes });
  };

  leftHandler = () => {
    let { i, j, k } = this.state;
    const number = this.state.episodes[i].number;
    if (number === '0') this.fetch();
    else {
      if (k === 2) {
        i = 57;
        j = 58;
        k = 59;
      } else {
        i -= 3;
        j -= 3;
        k -= 3;
      }
      this.setState({ i, j, k, episodes: this.state.episodes });
    }
  };

  async fetch() {
    try {
      const req = await fetch(fetch_url);
      const data = await req.json();
      this.setState({ episodes: data._embedded.episodes });
    } catch (e) {
      console.error(e);
    }
  }

  state = {
    i: 0,
    j: 1,
    k: 2,
    episodes: [
      {
        image: {
          original: image_url_den
        },
        name: 'NAME',
        number: '0',
        season: '0',
        airdate: '2014',
        runtime: '0',
        summary: 'summary'
      },
      {
        image: {
          original: image_url
        },
        name: 'NAME',
        number: '0',
        season: '0',
        airdate: '2014',
        runtime: '0',
        summary: 'summary'
      },
      {
        image: {
          original: image_url_walk
        },
        name: 'NAME',
        number: '0',
        season: '0',
        airdate: '2014',
        runtime: '0',
        summary: 'summary'
      }
    ]
  };
  render() {
    return (
      <Container>
        <Header />
        <Body>
          <Button onClick={this.leftHandler}>
            Prev.
          </Button>
          <Poster ep={this.state.episodes[this.state.i]} />
          <Poster ep={this.state.episodes[this.state.j]} />
          <Poster ep={this.state.episodes[this.state.k]} />
          <Button onClick={this.rightHandler}>
            Next
          </Button>
        </Body>
      </Container>
    );
  }
}

export default App;
