import slide1 from "./Images/bf.jpg";
import slide2 from "./Images/kai.jpg";
import slide3 from "./Images/darren.jpg";
import siopaoImg from "./Images/Siopao.png";
import chowfanImg from "./Images/chaofan.jpg";
import halohaloImg from "./Images/halo.png";

const loadHomePage = () => {
  const content = document.getElementById("content");

  // ── Carousel Section ──
  const carouselSection = document.createElement("div");
  carouselSection.classList.add("carousel");

  const slides = [slide1, slide2, slide3];

  // Slides wrapper
  const slidesWrapper = document.createElement("div");
  slidesWrapper.classList.add("carousel-slides");

  slides.forEach((src, index) => {
    const slideEl = document.createElement("div");
    slideEl.classList.add("carousel-slide");
    if (index === 0) slideEl.classList.add("active");

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Slide ${index + 1}`;
    img.classList.add("carousel-img");

    slideEl.appendChild(img);
    slidesWrapper.appendChild(slideEl);
  });

  // Dots
  const dots = document.createElement("div");
  dots.classList.add("carousel-dots");

  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dots.appendChild(dot);
  });

  carouselSection.appendChild(slidesWrapper);
  carouselSection.appendChild(dots);

  // ── Carousel Logic ──
  let current = 0;
  let isAnimating = false;

  const goToSlide = (index) => {
    if (isAnimating || index === current) return;
    isAnimating = true;

    const allSlides = slidesWrapper.querySelectorAll(".carousel-slide");
    const allDots = dots.querySelectorAll(".dot");

    const prevSlide = allSlides[current];
    const nextIndex = (index + slides.length) % slides.length;
    const nextSlide = allSlides[nextIndex];

    prevSlide.classList.add("slide-exit");

    nextSlide.classList.add("slide-enter");
    nextSlide.classList.add("active");

    setTimeout(() => {
      nextSlide.classList.add("slide-enter-active");
    }, 20);

    setTimeout(() => {
      prevSlide.classList.remove("active", "slide-exit");
      nextSlide.classList.remove("slide-enter", "slide-enter-active");

      allDots[current].classList.remove("active");
      current = nextIndex;
      allDots[current].classList.add("active");

      isAnimating = false;
    }, 600);
  };

  // Auto-play every 4 seconds
  setInterval(() => goToSlide(current + 1), 4000);

  // ── Section below carousel ──
  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("section-title");
  sectionTitle.textContent = "Chowking Philippines";

  const sectionSub = document.createElement("p");
  sectionSub.classList.add("section-subtitle");
  sectionSub.textContent = "Welcome to the Philippines' #1 Chinese Fast Food Restaurant!";

  const cards = document.createElement("div");
  cards.classList.add("cards");

  const cardData = [
    {
      img: siopaoImg,
      alt: "Siopao",
      title: "Siopao & Dimsum",
      desc: "Steamed or fried, our siopao and dimsum are made fresh daily with premium fillings.",
    },
    {
      img: chowfanImg,
      alt: "Chaofan",
      title: "Noodles & Rice",
      desc: "From our famous Chowfan to warm bowls of noodle soup — comfort food at its best.",
    },
    {
      img: halohaloImg,
      alt: "Halo-Halo",
      title: "Halo-Halo",
      desc: "Cool down with Halo-Halo. The perfect pair to any meal.",
    },
  ];

  cardData.forEach(({ img, alt, title, desc }) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const iconEl = document.createElement("div");
    iconEl.classList.add("icon");

    const imgEl = document.createElement("img");
    imgEl.src = img;
    imgEl.alt = alt;
    iconEl.appendChild(imgEl);

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.textContent = desc;

    card.appendChild(iconEl);
    card.appendChild(h3);
    card.appendChild(p);
    cards.appendChild(card);
  });

  content.appendChild(carouselSection);
  content.appendChild(sectionTitle);
  content.appendChild(sectionSub);
  content.appendChild(cards);
};

export default loadHomePage;