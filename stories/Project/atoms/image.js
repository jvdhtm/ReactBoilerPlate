import React from 'react';
import { ThemeProvider } from 'styled-components';
import {  text, number } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';

import theme from '../../../src/themes/default';
import Image from '../../../src/components/atoms/image';
import GlobalStyle from '../../../src/themes/default/globalStyle';

import styled from 'styled-components';

import notes from './image.md';

const Wrapper = styled.div`
  padding: 20px;
  width:30%;
`;

const image = withMarkdownNotes(notes)(() => {



  const imageWidth = number('width/px',150);
  const imageHeight = number('height/px',150);
  const alt = text('Alt', 'This is an image');
  const src = text('src', 'https://via.placeholder.com/150');
  return (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
        <Wrapper>
            <Image src={src} alt={alt} className="" width={imageWidth}  height={imageHeight} />
        </Wrapper>
        </ThemeProvider>
    </>
  );
});

export default image;