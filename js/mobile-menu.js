// Mobile Menu
(() => {
  const n = document.querySelector(".mobile-menu-container"),
    o = document.querySelector(".mobile-open-menu"),
    s = document.querySelector(".mobile-close-menu"),
    r = () => {
      const e = n.querySelectorAll('a[href*="#"]'),
        t = o.getAttribute("aria-expanded") === "true" || !1;
      o.setAttribute("aria-expanded", !t), n.classList.toggle("menu-is-close");
      const c = t ? "enableBodyScroll" : "disableBodyScroll";
      if ((bodyScrollLock[c](document.body), e.length !== 1)) {
        if (!t) {
          e.forEach((i) => {
            i.addEventListener("click", r);
          });
          return;
        }
        e.forEach((i) => {
          i.removeEventListener("click", r);
        });
      }
    };
  o.addEventListener("click", r),
    s.addEventListener("click", r),
    window.matchMedia("(min-width: 375px)").addEventListener("change", (e) => {
      e.matches &&
        (n.classList.remove("menu-is-close"),
        o.setAttribute("aria-expanded", !1),
        bodyScrollLock.enableBodyScroll(document.body));
    });
})();
