import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(action) {
    let newCount = count;
    switch (action) {
      case 'DEC':
        newCount--;
        break;
      case 'INC':
        newCount++;
        break;
      default:
        return;
    }
    setCount(newCount);
  }

  return (
    <div>
      <h1>Counter</h1>
      {count}
      <button onClick={() => handleClick('DEC')}>-</button>
      <button onClick={() => handleClick('INC')}>+</button>
    </div>
  );
}
