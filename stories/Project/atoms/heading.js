import React from 'react';
import { ThemeProvider } from 'styled-components';
import { select, text } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';

import theme from '../../../src/themes/default';
import H from '../../../src/components/atoms/h';
import GlobalStyle from '../../../src/themes/default/globalStyle';

import styled from 'styled-components';

import notes from './heading.md';

const Wrapper = styled.div`
  padding: 20px;
`;

const heading = withMarkdownNotes(notes)(() => {
  const options = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
  };

  const defaultValue = 1;

  const types = select('Types', options, defaultValue);

  const content = text('Text', 'This is a heading, go nuts');

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <H level={types}>{content}</H>
        </Wrapper>
      </ThemeProvider>
    </>
  );
});

export default heading;
