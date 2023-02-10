/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef } from 'react';
import { Theme } from '../types';
import s from './Textarea.module.scss';

const Textarea = forwardRef<
  HTMLDivElement,
  {
    theme: Theme;
    text: string;
    onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  }
>(({ theme, text, onKeyDown }, ref) => (
  <div ref={ref} tabIndex={-1} onKeyDown={onKeyDown} contentEditable className={s.wrapper} />
));

export default Textarea;
