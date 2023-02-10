import { useEffect, useState } from 'react';
import { checkSpecialKey, cleanLastSymbol, wrapText } from './Main.lib';

// eslint-disable-next-line import/prefer-default-export
export const useText = ({ textAreaRef }: { textAreaRef: React.RefObject<HTMLDivElement> }) => {
  const [text, setText] = useState<string>('');

  const onKeyDownTextArea = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;
    let _key = `${key}`;
    let _text = `${text}`;
    if (checkSpecialKey(key)) {
      switch (key) {
        case 'Tab':
          _key = '&nbsp;&nbsp;&nbsp;&nbsp;';
          e.preventDefault();
          break;
        case ' ':
          _key = '&nbsp;';
          break;
        case 'Enter':
          _key = '<br>';
          break;
        case 'Backspace':
          _key = '';
          _text = cleanLastSymbol(_text);
          break;
        default:
          return;
      }
    }
    _text += _key;
    setText(wrapText({ text: _text, tag: 'p' }));
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
    if (!firstElementChild) {
      return;
    }

    const selection = window.getSelection();
    if (!selection) {
      return;
    }
    const range = selection.getRangeAt(0);
    selection.addRange(range);
    current.focus();
  }, [text, textAreaRef]);

  return { text, setText, onKeyDownTextArea };
};
