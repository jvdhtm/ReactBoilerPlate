import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';

import { projectName } from './projectConfig';

import button from './atoms/button';
import heading from './atoms/heading';
import select from './atoms/select';
import image from './atoms/image';
import list from './atoms/list';
import icon from './atoms/icon';
import paragraph from './atoms/paragraph';

const stories = storiesOf(`${projectName()}|Atoms`, module);

stories.addDecorator(withKnobs);
stories.addDecorator(checkA11y);

stories
.add('Button', button)
.add('Heading', heading)
.add('Select', select)
.add('Image', image)
.add('List', list)
.add('Icon', icon)
.add('paragraph', paragraph)
;
