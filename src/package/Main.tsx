import React, { useRef } from 'react';
import Textarea from './components/Textarea';
import Toolbar from './components/Toolbar';
import { useText } from './Main.hooks';
import s from './Main.module.scss';
import { Theme } from './types';
import { THEME_DEFAULT } from './utils/constants';

function Main({ theme = THEME_DEFAULT }: { theme?: Theme }) {
  const textAreaRef = useRef<HTMLDivElement>(null);
  const { onInputText, onSelectText, onKeyDownTextarea, text } = useText({ textAreaRef });

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
        text={text || ''}
        ref={textAreaRef}
        theme={theme}
        onInput={onInputText}
        onSelect={onSelectText}
        onKeyDown={onKeyDownTextarea}
      />
    </div>
  );
}

Main.defaultProps = {
  theme: THEME_DEFAULT,
};

export default Main;
