import React from 'react';
import Parser from 'html-react-parser';

const form_container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  width: 370,
  height: 450,
  padding : 5,
  border: '4px solid #8181F7',
  borderRadius: '5%',
  backgroundColor: '#E3CEF6',
  boxShadow: 'inset 5px 5px 50px #000000'
};

const _icon = {
  display: 'flex',
  padding: 10,
  width: 270,
  height: 180,
  borderRadius: '20%'
};

const Poster = ({ ep }) => (
    <div style={form_container}>
      <p style={{ fontSize: 14, color: '#FE9A2E', fontFamily: 'serif' }}>
        {ep.name}
      </p>
      <img alt={''} src={ep.image.original} style={_icon} />
      <div>
        <p style={{ fontSize: 12, fontFamily: 'serif' }}>
          {' '}Season {ep.season} (number {ep.number})
        </p>
        <p style={{ fontSize: 12, fontFamily: 'serif' }}>
          {' '}Runtime {ep.runtime}
        </p>
        <p style={{ fontSize: 12, fontFamily: 'serif' }}>
          {' '}Airdate {ep.airdate}
        </p>
        <p style={{ fontSize: 10 }}>{Parser(ep.summary)}</p>
      </div>
    </div>
  );

export default Poster;
