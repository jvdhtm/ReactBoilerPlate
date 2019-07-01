import React from 'react';
import { ThemeProvider } from 'styled-components';
import { text } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';

import theme from '../../../src/themes/default';
import Icon from '../../../src/components/atoms/icon';
import GlobalStyle from '../../../src/themes/default/globalStyle';
import Spritemap from '../../../src/themes/default/Spritemap';

import styled from 'styled-components';

import notes from './icon.md';

const Wrapper = styled.div`
  padding: 20px;
`;

const icon = withMarkdownNotes(notes)(() => {
    const icon = text('Icon', 'add');
    return (
        <>
            <GlobalStyle />
            <Spritemap />
            <ThemeProvider theme={theme}>
            <Wrapper>
            <Icon icon={icon} ></Icon>
            </Wrapper>
            </ThemeProvider>
        </>
    );
});

export default icon;