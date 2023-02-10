export function wrapText({ text, tag }: { text: string; tag: 'p' }) {
  const open = `<${tag}>`;
  const close = `</${tag}>`;
  return `${open}${text
    .replace(new RegExp(open, 'g'), '')
    .replace(new RegExp(close, 'g'), '')}${close}`;
}

export function setCaret(current: HTMLDivElement) {
  const selection = window.getSelection();
  if (!selection) {
    return;
  }
  const range = document.createRange();
  selection.removeAllRanges();
  range.selectNodeContents(current);
  range.collapse(false);
  selection.addRange(range);
  current.focus();
}
