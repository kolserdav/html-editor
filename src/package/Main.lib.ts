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

export function cleanLastDiv(current: HTMLDivElement) {
  console.log(current.innerHTML);
  if (/<\/div>(<br ?>)?$/.test(current.innerHTML)) {
    const lastDivReg = /^<div>.*<\/div>(<br ?>)?$/;
    const lastDiv = current.innerHTML.match(lastDivReg);
    let lastDivText = '';
    if (lastDiv) {
      lastDivText = lastDiv[0].replace(/^<div>/, '').replace(/<\/div>(<br ?>)?$/, '');
    }
    // eslint-disable-next-line no-param-reassign
    current.innerHTML = current.innerHTML.replace(lastDivReg, lastDivText);
    setCaret(current);
  }
}
