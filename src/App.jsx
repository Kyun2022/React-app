import { useState, memo } from 'react';
import { Child1 } from './components/CHild1';
import { Child4 } from './components/CHild4';

export const App = memo(() => {
  console.log('Appレンダリング');

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 />
      <Child4 />
    </>
  );
});