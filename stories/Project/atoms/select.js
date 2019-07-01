import React from 'react';
import { ThemeProvider } from 'styled-components';
import { array  , text} from '@storybook/addon-knobs/react';
import { withMarkdownNotes } from '@storybook/addon-notes';

import theme from '../../../src/themes/default';
import Select from '../../../src/components/atoms/select';
import GlobalStyle from '../../../src/themes/default/globalStyle';

import styled from 'styled-components';

import notes from './select.md';

const Wrapper = styled.div`
  padding: 20px;
`;

const select = withMarkdownNotes(notes)(() => {


    const options = [
        { text: 'Lund', value: 'lund' },
        { text: 'Malmo', value: 'malmo' },
        { text: 'Kristianstad', value: 'kristianstad' },
      ];
      const Placeholder = text('Placeholder', 'Choose the city');
  return (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Select options={options} variant="primary" placeholder={Placeholder}/>
            </Wrapper>
        </ThemeProvider>
    </>
  );
});

export default select;
