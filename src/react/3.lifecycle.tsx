import React, { FC } from 'react';
import type { BaseReactProps } from '../utils';

export const component: FC<BaseReactProps> = (props) => {
  return (
    <div>
      <div>
        <p>Useful documentation</p>
        <a
          href="https://www.w3schools.com/react/react_lifecycle.asp"
          target="_blank"
        >
          W3 Schools
        </a>
      </div>
      <h1>React lifecycle</h1>
      <h2>Initialization</h2>
      <div>
        <h2>Mounting</h2>
        <p>
          constructor(), getDerivedStateFromProps(), render(),
          componentDidMount()
        </p>
        <p>render is always called, others are only called if defined</p>
      </div>
      <h2>Updation</h2>
      <h2>Unmounting</h2>
      <img src="https://imgs.developpaper.com/imgs/3109554976-19337515b7f385d3_articlex.png" />
    </div>
  );
};
