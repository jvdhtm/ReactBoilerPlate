import React from 'react';
import { ThemeProvider } from 'styled-components';
import { select, text } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';
import ToggleBox from '../../../src/components/molecules/toggleBox';

import theme from '../../../src/themes/default';
import GlobalStyle from '../../../src/themes/default/globalStyle';

import styled from 'styled-components';

import notes from './toggleBox.md';

const Wrapper = styled.div`
  padding: 20px;
`;

const Content = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  background-color: #eee;
  padding: 5px 10px;
`;

const toggleBox = withMarkdownNotes(notes)(() => {
  const inputText = text('Content Text', 'this is where stuff will go.');
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <ToggleBox label="Heading">
            <Content>{inputText}</Content>
          </ToggleBox>
        </Wrapper>
      </ThemeProvider>
    </>
  );
});

export default toggleBox;
