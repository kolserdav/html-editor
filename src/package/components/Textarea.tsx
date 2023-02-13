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
    onInput: (e: React.FormEvent<HTMLDivElement>) => void;
    onSelect: (e: React.SyntheticEvent<HTMLDivElement, Event>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  }
>(({ theme, onInput, onSelect, onKeyDown, text }, ref) => (
  <div
    ref={ref}
    tabIndex={-1}
    onSelect={onSelect}
    onInput={onInput}
    spellCheck
    onKeyDown={onKeyDown}
    contentEditable
    className={s.wrapper}
    dangerouslySetInnerHTML={{ __html: text }}
  />
));

export default Textarea;
