import React from 'react';
import { ThemeProvider } from 'styled-components';
import { select, text } from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';

import theme from '../../../src/themes/default';
import Button from '../../../src/components/atoms/button';
import GlobalStyle from '../../../src/themes/default/globalStyle';

import notes from './button.md';

const button = withMarkdownNotes(notes)(() => {
    const options = {
        default: 'default',
        primary: 'primary',
        secondary: 'secondary',
        warning: 'warning',
    };

    const defaultValue = 'primary';

    const typ = select('Types', options, defaultValue);

    const content = text('Text', 'Hi there');

    return (
        <div style={{ padding: '20px' }} className="container-fluid">
            <GlobalStyle />
            <ThemeProvider theme={theme}>
            <Button variant={typ}>{content}</Button>
            </ThemeProvider>
        </div>
    );
});

export default button;
