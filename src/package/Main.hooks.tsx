import { useEffect, useState } from 'react';
import { setCaret } from './Main.lib';

// eslint-disable-next-line import/prefer-default-export
export const useText = ({ textAreaRef }: { textAreaRef: React.RefObject<HTMLDivElement> }) => {
  const onInputText = (e: React.FormEvent<HTMLDivElement>) => {
    const { current } = textAreaRef;
    if (!current) {
      return;
    }
    // TODO replace tags
    current.innerHTML = current.innerHTML.replace(/ as /g, ' <b>as</b> ');

    setCaret(current);
  };

  const onKeyDownTextarea = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Backspace') {
      const { current } = textAreaRef;
      if (!current) {
        // return;
      }
      // cleanLastDiv(current);
    }
  };

  const onSelectText = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
    const sel = window.getSelection();
    if (!sel) {
      return;
    }
    const range = sel.getRangeAt(0);
    if (!range.collapsed) {
      console.log(range);
    }
  };

  return { onInputText, onSelectText, onKeyDownTextarea };
};
