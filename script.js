const works = [
  {
    id: "pio",
    title: "01 Pio Vinbar",
    skills: ["2. Sem", "HTML", "CSS", "JavaScript", "ASTRO", "FIGMA", "Netlify", "UX Research", "Premiere Pro", "Illustrator", "Prototyping", "Branding"],
  },
  {
    id: "bareen",
    title: "02 Bareen X Fujifilm",
    skills: ["2. Sem", "HTML", "CSS", "JavaScript", "ASTRO", "FIGMA", "UX Research", "Supabase", "Premiere Pro", "Illustrator", "Content Creation", "Photoshop", "Client Pitch", "Ideation & Concept Development"],
  },
  {
    id: "misbrug",
    title: "03 Misbrugsportalen",
    skills: ["2. Sem", "HTML", "CSS", "JavaScript", "ASTRO", "FIGMA", "UX Research", "Premiere Pro", "Illustrator", "Prototyping", "Branding", "Client Pitch"],
  },
  {
    id: "kh",
    title: "04 KH Art",
    skills: ["Shopify", "META Ads", "Figma", "Adobe", "E-commerce", "Content Creation", "Graphic Design", "Branding & Visual Identity", "Project Management", "Entrepreneurship", "Customer Relations"],
  },
  {
    id: "rubber",
    title: "05 Rubberduck",
    skills: ["1. Sem", "HTML", "CSS", "JavaScript", "Filezilla", "ASTRO", "FIGMA", "Redesign", "Illustrator", "Prototyping", "Photography & Photo Editing", "Client Pitch", "Branding", "Graphic Design", "SCRUM"],
  },
];

const container = document.querySelector(".works");

works.forEach((work) => {
  // H2
  const h2 = document.createElement("h2");
  h2.id = work.id;
  h2.innerHTML = `<span class="klara">${work.title.split(" ")[0]}</span> ${work.title.substring(3)}`;

  // UL
  const ul = document.createElement("ul");
  ul.id = `ul_${work.id}`;

  work.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="kompe">${skill}</div>`;
    ul.appendChild(li);
  });

  container.appendChild(h2);
  container.appendChild(ul);
});

const buttons = [
  { btn: document.querySelector("#pio"), video: document.querySelector("#pio_video"), ul: document.querySelector("#ul_pio") },
  { btn: document.querySelector("#bareen"), video: document.querySelector("#bareen_video"), ul: document.querySelector("#ul_bareen") },
  { btn: document.querySelector("#misbrug"), video: document.querySelector("#misbrug_video"), ul: document.querySelector("#ul_misbrug") },
  { btn: document.querySelector("#kh"), video: document.querySelector("#kh_video"), ul: document.querySelector("#ul_kh") },
  { btn: document.querySelector("#rubber"), video: document.querySelector("#rubber_video"), ul: document.querySelector("#ul_rubber") },
];

if (window.innerWidth >= 1024) {
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
} else {
  buttons.forEach(({ video, ul }) => {
    video.classList.add("visible");
    ul.classList.add("visible");
  });
}

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

const aboutLink = document.querySelector("#aboutLink");
const aboutSection = document.querySelector("#about");

aboutLink.addEventListener("click", (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
