import React from 'react';
const back_img_url =
  'http://media0-starag.startv.in/r1/thumbs/PCTV/84/8184/PCTV-8184-hd.jpg';

const App_header = {
  display: 'flex',
  flexFlow: 'wrap',
  alignItems: 'center',
  justifyContent: 'center space-around',
  backgroundImage: 'url(' + back_img_url + ')',
  height: 100,
  padding: 20,
  color: '#FACC2E'
};

const Header = () => {
  return (
    <div style={App_header}>
      <h1 style={{ fontFamily: 'serif' }}>Game Of Thrones</h1>
    </div>
  );
};

export default Header;
