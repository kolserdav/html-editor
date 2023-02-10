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
    // current.innerHTML = current.innerHTML.replace(/<\/?div>/g, '');

    setCaret(current);
  };

  const onSelectText = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
    const sel = window.getSelection();
    if (!sel) {
      return;
    }
    const range = sel.getRangeAt(0);
    if (!range.collapsed) {
      console.log(range.endOffset, range.startOffset);
    }
  };

  /**
   * Set position on change text
   */
  useEffect(() => {
    const { current } = textAreaRef;
    if (!current) {
      return;
    }
    const { firstElementChild } = current;
  }, [textAreaRef]);

  return { onInputText, onSelectText };
};
