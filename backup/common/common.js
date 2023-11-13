function createEl({ classList, colspan, tagName, text }) {
  const el = document.createElement(tagName);
  if (classList) {
    el.classList = classList;
  }
  if (text) {
    el.textContent = text;
  }
  return el;
}
