// Menu mobile
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Fermer le menu quand on clique un lien
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Année auto
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Lightbox galerie
const galleryImages = document.querySelectorAll(".gallery .media img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  if (lightboxCaption) lightboxCaption.textContent = alt || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

galleryImages.forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src, img.alt));
});

if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    // fermer si on clique le fond (pas l'image)
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// Validation légère du formulaire (sans bloquer le mailto)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    const email = form.querySelector('input[type="email"]');
    if (email && !email.value.includes("@")) {
      e.preventDefault();
      alert("Veuillez entrer une adresse email valide.");
    }
  });
}
