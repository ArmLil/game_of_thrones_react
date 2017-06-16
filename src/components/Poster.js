import React from 'react';
import Parser from 'html-react-parser';

const form_container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: 380,
  height: 450,
  padding : 5,
  border: '4px solid #8181F7',
  borderRadius: '5%',
  backgroundColor: '#E3CEF6',
  boxShadow: 'inset 5px 5px 50px #000000'
};

const _icon = {
  width: 280,
  height: 190,
  borderRadius: '20%'
};
const scroll = {
    backgroundColor: '#E3CEF6',
    width: '300px',
    height: '140px',
    overflow: 'scroll'
}


const Poster = ({ ep }) => (
    <div style={form_container}>

      <h1 style={{ fontSize: 14, color: '#7d3c98', fontFamily: 'serif'}}>
        {ep.name}
      </h1>


        <p style={{ fontSize: 12, fontFamily: 'serif' }}>
          {' '}Season {ep.season} (number {ep.number})
        </p>
        <img alt={''} src={ep.image.original} style={_icon} />

                <p style={{ fontSize: 12, fontFamily: 'serif' }}>
                  {' '}Airdate {ep.airdate}(Runtime {ep.runtime})
                </p>

        <div style = {scroll}>
          <p style={{ fontSize: 12 }}>{Parser(ep.summary)}</p>
        </div>


    </div>
  );

export default Poster;
