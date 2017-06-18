import React from 'react';
import styled from 'styled-components';
const head_img_url =
  'http://media0-starag.startv.in/r1/thumbs/PCTV/84/8184/PCTV-8184-hd.jpg';

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

const Head = Div.extend`
  padding: 10px;
  position: fixed;
  width: 100%;
  bottom: 80%;
  height: 20%;
	background-image: url(${head_img_url});
`;

const Title = styled.div`
	color: #E0D14C;
  font-family: serif;
  font-size:20px;
    -moz-text-shadow: -10px -20px 20px #FFF991;
    -webkit-text-shadow: -10px -20px 20px #FFF991;
    text-shadow: -5px -5px 2px #B894B2,
                 -3px -3px 2px #DBC959,
                 -1px -1px 2px #B28CBF;
`;

const Header = () =>
  <Head>
    <Title>
      <h1>Game &nbsp; of &nbsp; Thrones</h1>
    </Title>
  </Head>;

export default Header;
