import React from 'react';
import styled from 'styled-components';
import cut from './cutmypic.png';

const Head = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  position: 'fixed';
  border: 2px solid #8181F7;
  background-image: url(${cut});
  padding:10px;
  overflow: hidden;

  background-position: center;
  background-size: contain;
`;

const Title = styled.div`
  margin: 0;
	color: #FFD90F;
  font-family: serif;
  white-space: nowrap;
  overflow: hidden;
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
