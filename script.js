const buttons = [
  { btn: document.querySelector("#pio"), video: document.querySelector("#pio_video"), ul: document.querySelector("#ul_pio") },
  { btn: document.querySelector("#bareen"), video: document.querySelector("#bareen_video"), ul: document.querySelector("#ul_bareen") },
  { btn: document.querySelector("#misbrug"), video: document.querySelector("#misbrug_video"), ul: document.querySelector("#ul_misbrug") },
  { btn: document.querySelector("#kh"), video: document.querySelector("#kh_video"), ul: document.querySelector("#ul_kh") },
  { btn: document.querySelector("#rubber"), video: document.querySelector("#rubber_video"), ul: document.querySelector("#ul_rubber") },
];

buttons.forEach(({ video, ul }) => {
  video.classList.add("display");
  ul.classList.add("display");
});

buttons.forEach(({ btn, video, ul }) => {
  btn.addEventListener("mouseenter", () => {
    video.classList.add("visible");
    video.classList.remove("display");
    ul.classList.add("visible");
    ul.classList.remove("display");
  });

  btn.addEventListener("mouseleave", () => {
    video.classList.add("display");
    video.classList.remove("visible");
    ul.classList.add("display");
    ul.classList.remove("visible");
    video.currentTime = 0;
  });
});

const scrollElements = document.querySelectorAll(".scroll-element");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible2");
      } else {
        entry.target.classList.remove("visible2");
      }
    });
  },
  { threshold: 0.4 }
);

scrollElements.forEach((el) => observer.observe(el));

const workLink = document.querySelector("#workLink");
const workSection = document.querySelector("#work");

workLink.addEventListener("click", (e) => {
  e.preventDefault();
  workSection.scrollIntoView({ behavior: "smooth" });
});
