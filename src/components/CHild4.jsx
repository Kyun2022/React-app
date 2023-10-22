import { memo } from 'react';

const Style = {
  height: '200px',
  backgroundColor: 'wheat',
  padding: '8px',
};

export const Child4 = memo(() => {
  console.log('Child4レンダリング');
  return (
    <div className="" style={Style}>
      <p>Child4</p>
    </div>
  );
});
