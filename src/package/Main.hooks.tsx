import { useState } from 'react';
import { CursorPosition } from './types';
import { TEXTAREA_PADDING } from './utils/constants';

// eslint-disable-next-line import/prefer-default-export
export const useText = ({ textAreaRef }: { textAreaRef: React.RefObject<HTMLDivElement> }) => {
  const [text, setText] = useState<string>('');
  const [position, setPosition] = useState<CursorPosition>({ clientX: -10, clientY: -1 });

  const onClickTextArea = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const { innerHTML } = target;
    const { current } = textAreaRef;
    if (!current) {
      return;
    }
    const { x, y, left, top } = current.getBoundingClientRect();
    const { clientX, clientY } = e;
    if (innerHTML === '') {
      setPosition({ clientX: left + TEXTAREA_PADDING, clientY: top + TEXTAREA_PADDING });
    }
  };

  return { text, setText, position, setPosition, onClickTextArea };
};
