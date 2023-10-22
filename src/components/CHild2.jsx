import { memo } from 'react';

const Style = {
  height: '50px',
  backgroundColor: 'lightgray',
};

export const Child2 = memo(() => {
  console.log('Child2レンダリング');
  return (
    <div className="" style={Style}>
      <p>Child2</p>
    </div>
  );
});
