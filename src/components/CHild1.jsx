import { memo } from 'react';

import { Child2 } from './CHild2';
import { Child3 } from './CHild3';

const Style = {
  height: '200px',
  backgroundColor: 'lightblue',
  padding: '8px',
};

export const Child1 = memo(() => {
  console.log('Child1レンダリング');
  return (
    <div className="" style={Style}>
      <p>Child1</p>
      <Child2 />
      <Child3 />
    </div>
  );
});
