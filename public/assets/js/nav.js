/* === Webflow-like nav + dropdown behavior (vanilla JS, no deps) === */
(function () {
  const nav = document.querySelector(".w-nav");
  if (!nav) return;

  const button = nav.querySelector(".menu-button.w-nav-button");
  const menu = nav.querySelector(".nav-menu.w-nav-menu");

  // Create a click-away overlay (mirrors Webflow's behavior)
  const overlay = document.createElement("div");
  overlay.className = "w-nav-overlay";
  overlay.style.display = "none";
  overlay.style.position = "absolute";
  overlay.style.top = "100%";
  overlay.style.left = "0";
  overlay.style.right = "0";
  nav.appendChild(overlay);

  const mq = window.matchMedia("(max-width: 991px)");

  const openMenu = () => {
    if (!menu) return;
    menu.setAttribute("data-nav-menu-open", "");
    button && button.classList.add("w--open");
    overlay.style.display = "block";
    document.documentElement.style.overflow = "hidden"; // lock scroll like OG
  };

  const closeMenu = () => {
    if (!menu) return;
    menu.removeAttribute("data-nav-menu-open");
    button && button.classList.remove("w--open");
    overlay.style.display = "none";
    document.documentElement.style.overflow = "";
  };

  // Toggle hamburger
  if (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (menu.hasAttribute("data-nav-menu-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Click-away to close mobile menu
  overlay.addEventListener("click", closeMenu);

  // Reset menu if we resize back to desktop
  window.addEventListener("resize", function () {
    if (!mq.matches) closeMenu();
  });

  // === Dropdowns (desktop hover, mobile tap) ===
  document.querySelectorAll(".w-dropdown").forEach(function (dd) {
    const toggle = dd.querySelector(".w-dropdown-toggle");
    const list = dd.querySelector(".w-dropdown-list");
    if (!toggle || !list) return;

    let isOpen = false;
    const setOpen = (on) => {
      isOpen = on;
      toggle.classList.toggle("w--open", on);
      list.classList.toggle("w--open", on);
      dd.classList.toggle("w--open", on);
      toggle.setAttribute("aria-expanded", on ? "true" : "false");
    };

    // Desktop: open on hover
    const desktopHoverable = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (desktopHoverable) {
      dd.addEventListener("mouseenter", () => setOpen(true));
      dd.addEventListener("mouseleave", () => setOpen(false));
    }

    // Click/tap toggles (works for both mobile and desktop)
    toggle.setAttribute("aria-haspopup", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      setOpen(!isOpen);
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (!dd.contains(e.target)) setOpen(false);
    });
  });
})();
