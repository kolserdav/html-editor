import React, { useRef } from 'react';
import Textarea from './components/Textarea';
import Toolbar from './components/Toolbar';
import { useText } from './Main.hooks';
import s from './Main.module.scss';
import { Theme } from './types';
import { THEME_DEFAULT } from './utils/constants';

function Main({ theme = THEME_DEFAULT }: { theme?: Theme }) {
  const textAreaRef = useRef<HTMLDivElement>(null);
  const { text, setText, onClickTextArea, position } = useText({ textAreaRef });

  return (
    <div
      className={s.wrapper}
      style={{
        backgroundColor: theme.paper,
        color: theme.text,
        border: `1px groove ${theme.textLight}`,
      }}
    >
      <Toolbar theme={theme} />
      <Textarea
        ref={textAreaRef}
        theme={theme}
        text={text}
        setText={setText}
        onClickTextArea={onClickTextArea}
        position={position}
      />
    </div>
  );
}

Main.defaultProps = {
  theme: THEME_DEFAULT,
};

export default Main;
