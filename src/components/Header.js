import React from 'react';
import styled from 'styled-components';
import cut from './cutmypic.png';
import {ZoomIn } from 'animate-css-styled-components';

const Head = styled.div`
  margin: 0;
  padding:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  position: 'fixed';
  border: 2px solid #8181F7;
  background-image: url(${cut});

  background-position: center;
  background-size: contain;
`;

const Title = styled.div`
  margin: 0;
  padding: 2px;
	color: #FFD90F;
  font-family: serif;
  text-shadow: -5px -5px 2px #B894B2,
                -3px -3px 2px #DBC959,
                -1px -1px 2px #B28CBF;
  `;

const Header = () =>
  <Head>
    <Title>
      <ZoomIn >
      <h1>  Game &nbsp; of &nbsp; Thrones</h1>
      </ZoomIn>
    </Title>
  </Head>;

export default Header;
