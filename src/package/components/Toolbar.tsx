import React from 'react';
import { Theme } from '../types';
import BoldIcon from './icons/Bold';
import s from './Toolbar.module.scss';

function Toolbar({ theme }: { theme: Theme }) {
  return (
    <div
      className={s.wrapper}
      style={{
        borderBottom: `1px groove ${theme.textLight}`,
      }}
    >
      <BoldIcon color={theme.text} />
    </div>
  );
}

export default Toolbar;
