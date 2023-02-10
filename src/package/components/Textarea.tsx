/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef } from 'react';
import { Theme } from '../types';
import s from './Textarea.module.scss';

const Textarea = forwardRef<
  HTMLDivElement,
  {
    theme: Theme;
    onInput: (e: React.FormEvent<HTMLDivElement>) => void;
    onSelect: (e: React.SyntheticEvent<HTMLDivElement, Event>) => void;
  }
>(({ theme, onInput, onSelect }, ref) => (
  <div
    ref={ref}
    tabIndex={-1}
    onSelect={onSelect}
    onInput={onInput}
    contentEditable
    className={s.wrapper}
  />
));

export default Textarea;
