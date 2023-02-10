import { checkSpecialKey } from '../utils/lib';

// eslint-disable-next-line import/prefer-default-export
export const useWriteText = ({
  setText,
  text,
}: {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onKeyDownTextArea = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;
    let _key = `${key}`;
    if (checkSpecialKey(key)) {
      switch (key) {
        case 'Tab':
          _key = '&nbsp;&nbsp;&nbsp;&nbsp;';
          e.preventDefault();
          break;
        case ' ':
          _key = '&nbsp;';
          break;
        default:
          return;
      }
    }
    let _text = `${text}`;
    _text += _key;
    setText(_text);
  };

  return { onKeyDownTextArea };
};
