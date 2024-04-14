
/**
   * Easy selector helper function
   */
const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
console.log(true)
const headerHeight = select('[data-menu]').offsetHeight;
window.addEventListener('scroll', function() {
    if (this.window.scrollY > headerHeight) {
        select('[data-menu]').classList.add('sticky');
    } else if (this.window.scrollY === 0) {
        select('[data-menu]').classList.remove('sticky');
    }
})
