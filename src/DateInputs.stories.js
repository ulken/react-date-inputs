import React, { useState } from 'react';
import DateInputs from './index.tsx';

export default {
  title: 'DateInputs',
  component: DateInputs,
};

export const Simple = () => {
  const [value, setValue] = useState();

  return (
    <>
      <DateInputs value={value} onChange={setValue} label="Date" />
      <p>{`value: ${value}`}</p>
    </>
  );
};

// Simple.story = {
//   name: 'Simple',
//   decorators: [(storyFn) => <div>{storyFn()}</div>],
// };

export const WithInitialValue = () => {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <DateInputs value={value} onChange={setValue} label="Date" />
      <p>{`value: ${value}`}</p>
    </>
  );
};

export const Disabled = () => {
  return <DateInputs label="Date" value={null} disabled />;
};
