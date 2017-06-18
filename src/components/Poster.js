import React from 'react';
import Parser from 'html-react-parser';
import styled from 'styled-components';

const Div = styled.div`
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
align-items: center;

-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
`;

const Form = Div.extend`

flex-direction: column;
border: 2px solid #8181F7;
width: 380px;
height: 460px;
padding : 0px;
border-radius: 5%;
background-color: #E3CEF6;
-moz-text-shadow: inset 5px 5px 50px #000000;
-webkit-text-shadow: inset 5px 5px 50px #000000;
box-shadow: inset 5px 5px 50px #000000;
`;

const Name = styled.h4`
	color: #7d3c98;
  font-family: serif;
    -moz-text-shadow: -5px -5px 2px #B894B2,
                 -3px -3px 2px #DBC959,
                 -1px -1px 2px #B28CBF;
    -webkit-text-shadow: -5px -5px 2px #B894B2,
                 -3px -3px 2px #DBC959,
                 -1px -1px 2px #B28CBF;
    text-shadow: -5px -5px 2px #B894B2,
                 -3px -3px 2px #DBC959,
                 -1px -1px 2px #B28CBF;
`;
const Episode = styled.h5`
 font-family:serif;
`;

const _icon = {
  flexShrink: 0,
  width: 280,
  height: 190,
  borderRadius: '20%'
};

const scroll = {
  backgroundColor: '#E3CEF6',
  padding: '10px',
  width: '300px',
  height: '120px',
  overflow: 'scroll'
};

const Poster = ({ ep }) =>
  <Form>
    <Name>{ep.name}</Name>
    <Episode>
      Season {ep.season}
      (episode {ep.number})
    </Episode>
    <img alt={''} src={ep.image.original} style={_icon} />

    <p
      style={{
        fontSize: 12,
        fontFamily: 'serif'
      }}>
      {' '}Airdate {ep.airdate}(Runtime {ep.runtime})
    </p>
    <div style={scroll}>
      <p
        style={{
          fontSize: 12
        }}>
        {Parser(ep.summary)}
      </p>
    </div>
  </Form>;

export default Poster;
