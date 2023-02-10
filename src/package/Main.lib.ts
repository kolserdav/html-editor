import { SPECIAL_KEY_REGEX } from './utils/constants';

export const checkSpecialKey = (key: string) => SPECIAL_KEY_REGEX.test(key);

export const wrapText = ({ text, tag }: { text: string; tag: 'p' }) => {
  const open = `<${tag}>`;
  const close = `</${tag}>`;
  return `${open}${text
    .replace(new RegExp(open, 'g'), '')
    .replace(new RegExp(close, 'g'), '')}${close}`;
};

export const cleanLastSymbol = (text: string): string => {
  const tagReg = /(<\/?|&)[a-z]+(>|;)$/;
  const tag = text.match(tagReg);
  let _text = `${text}`;
  if (tag) {
    _text = _text.replace(tagReg, '');
    return `${cleanLastSymbol(_text)}${tag[0]}`;
  }
  return _text.replace(/.$/, '');
};
