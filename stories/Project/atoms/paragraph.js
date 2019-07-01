import React from 'react';
import { ThemeProvider } from 'styled-components';
import {  text } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';

import theme from '../../../src/themes/default';
import Paragraph from '../../../src/components/atoms/paragraph';
import GlobalStyle from '../../../src/themes/default/globalStyle';

import styled from 'styled-components';

import notes from './paragraph.md';

const Wrapper = styled.div`
  padding: 20px;
`;

const list = withMarkdownNotes(notes)(() => {
    const content = text('Text', 'This is a paragraph, go nuts');
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
            <Wrapper>
            <Paragraph  >
                {content}
            </Paragraph>
            </Wrapper>
            </ThemeProvider>
        </>
    );
});

export default list;