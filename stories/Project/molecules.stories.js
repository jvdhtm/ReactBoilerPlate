import React from 'react';

import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';

import { projectName } from './projectConfig';

// Import your stories here
import toggleBox from './molecules/toggleBox';

const stories = storiesOf(`${projectName()}|Molecules`, module);

stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories
  // Add your stories here by using .add
  // You wont need the call back when importing them,
  // just declare the component
  .add('Toggle Box', toggleBox);
