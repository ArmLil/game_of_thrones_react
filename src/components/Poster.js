import React from 'react';
import Parser from 'html-react-parser';
import styled from 'styled-components';

const Div = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
`;

const Form = Div.extend`
  position: relative;
  flex-direction: column;
  border: 2px solid #8181F7;
  width: 27%;
  height: 90%;
  padding: 1%;
  border-radius: 20px;
  background-color: #E3CEF6;
  box-shadow: inset 5px 5px 50px #000000;
`;

const Name = styled.h3`
  margin: 0;
	padding 2px;
	color: #7d3c98;
  font-family: serif;
  text-shadow: -5px -5px 2px #B894B2,
               -3px -3px 2px #DBC959,
               -1px -1px 2px #B28CBF;
`;

const Episode = styled.h5`
  position: absolute;
  bottom: 82%;
  margin: 0;
  padding: 2%;
  font-family: serif;
`;

const _icon = {
  margin: '0',
  padding: '5px',
  position: 'absolute',
  bottom: '41%',
  width: '80%',
  height: '40%',
  borderRadius: '20%'
};

const Data = styled.p`
  position: absolute;
  bottom: 33%;
  margin: 0;
  padding: 10px;
`;

const sum = {
  margin: '0',
  padding: '10px',
  position: 'absolute',
  bottom: '3%',
  backgroundColor: '#E3CEF6',
  width: '80%',
  height: '25%',
  overflow: 'scroll'
};

const Poster = ({ ep }) =>
  <Form>
    <Name>{ep.name}</Name>
    <Episode>Season {ep.season} (episode-{ep.number})</Episode>
    <img alt={''} src={ep.image.original} style={_icon} />
    <Data>
      Airdate {ep.airdate}(Runtime {ep.runtime})
    </Data>
    <div style={sum}>
      {Parser(ep.summary)}
    </div>
  </Form>;

export default Poster;
