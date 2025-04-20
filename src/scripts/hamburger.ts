// src/scripts/hamburger.ts

export function setupHamburgerMenu() {
  const hamburger = document.getElementById(
    'hamburger-btn'
  ) as HTMLButtonElement | null;
  const navLinks = document.getElementById(
    'nav-links'
  ) as HTMLDivElement | null;

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
}
