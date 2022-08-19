// const bg = document.querySelector('.YsLxq-O1htCb-ZMv3u');
// const bgColor = window.getComputedStyle(bg!).backgroundColor;

function findElements(): NodeList {
  const keeps = document.querySelectorAll('.IZ65Hb-n0tgWb.RNfche');
  return keeps;
}

function hideElement(): void {
  const keeps = findElements() as unknown as HTMLElement[];
  for (const keep of keeps) {
    if (keep.classList.contains('keep-keep-hide')) {
      keep.classList.add('keep-keep-hide');
      keep!.style.opacity = '20%';
    }
  }
}

window.addEventListener('scroll', hideElement);
