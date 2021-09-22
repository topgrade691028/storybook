import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, button } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
const stories = storiesOf('Storybook Knobs', module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);
// Knobs for React props
stories.add('with a button', () => (
  <button disabled={boolean('禁用', false)} >
    {text('Label', 'Hello Storybook')}
  </button>
));

// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {
  const name = text('姓名', 'Arunoda Susiripala');
  const age = number('年龄', 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
});
stories.add('一个行为', () => {
    return (<button onClick={action('button-click')}>我是行为</button>)
});