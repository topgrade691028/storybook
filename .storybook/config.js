import { configure} from '@storybook/react';
// import { withKnobs } from '@storybook/addon-knobs';
// addDecorator(withKnobs)
function loadStories() {
  require('../src/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);