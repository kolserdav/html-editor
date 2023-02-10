import { SPECIAL_KEY_REGEX } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const checkSpecialKey = (key: string) => SPECIAL_KEY_REGEX.test(key);
