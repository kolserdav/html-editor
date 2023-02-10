/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef } from 'react';
import { CursorPosition, Theme } from '../types';
import { useWriteText } from './Textarea.hooks';
import s from './Textarea.module.scss';

const Textarea = forwardRef<
  HTMLDivElement,
  {
    theme: Theme;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    position: CursorPosition;
    onClickTextArea: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  }
>(({ theme, text, setText, position, onClickTextArea }, ref) => {
  const { onKeyDownTextArea } = useWriteText({ setText, text });

  return (
    <>
      <div
        ref={ref}
        tabIndex={-1}
        onClick={onClickTextArea}
        onKeyDown={onKeyDownTextArea}
        className={s.wrapper}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div
        className={s.cursor}
        style={{ position: 'fixed', left: position.clientX, top: position.clientY }}
      >
        |
      </div>
    </>
  );
});

export default Textarea;
