import React from 'react';
import { ThemeProvider } from 'styled-components';
import {  boolean } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';

import theme from '../../../src/themes/default';
import List from '../../../src/components/atoms/list';
import GlobalStyle from '../../../src/themes/default/globalStyle';

import styled from 'styled-components';

import notes from './list.md';

const Wrapper = styled.div`
  padding: 20px;
`;

const list = withMarkdownNotes(notes)(() => {
    const label = 'ordered?';
    const defaultValue = false;
    const groupId = '';
    const value = boolean(label, defaultValue, groupId);
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
            <Wrapper>
            <List {...value ? "ordered":""} >
                <li>
                    item1
                </li>
                <li>
                    item2
                </li>
                <li>
                    item3
                </li>
            </List>
            </Wrapper>
            </ThemeProvider>
        </>
    );
});

export default list;