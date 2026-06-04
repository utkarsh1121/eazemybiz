gsap.registerPlugin(ScrollTrigger);
gsap.from("header", {
  y: -100,
  duration: 1.5,
  delay: 0.5,
});
gsap.from(".hero_content", {
  opacity: 0,
  duration: 1,
  delay: 1,
});

gsap.from(
  ".hero_cta_content div h2 ,.hero_cta_content div h1,.hero_cta_content .cta_contactus",
  {
    y: -50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.5,
    delay: 0.8,

    scrollTrigger: {
      trigger: ".hero_cta_content",
      start: "top center",
      toggleActions: "play reverse play reverse",
    },
  },
);

gsap.from(".about , .about p", {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".about",
    start: "top center",
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".brands_grid , .grid_content p", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".brands_grid",
    start: "top center",
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".grid_heading", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".grid_heading",
    start: "top center",
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".result_one.active li, .result_one.active .cta_contactus", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".result",
    start: "top center+=150",
    toggleActions: "play none none none",
  },
});

function showoptions(result) {
  const resultOne = document.querySelector(".option_one");
  const resultTwo = document.querySelector(".option_two");
  const resultThree = document.querySelector(".option_three");
  const optOne = document.querySelector(".result_one.one");
  const optTwo = document.querySelector(".result_one.two");
  const optThree = document.querySelector(".result_one.three");

  let activeOpt = null;

  if (result === "result_one") {
    resultOne.classList.add("active");
    resultTwo.classList.remove("active");
    resultThree.classList.remove("active");
    optOne.classList.add("active");
    optTwo.classList.remove("active");
    optThree.classList.remove("active");
    activeOpt = optOne;
  } else if (result === "result_two") {
    resultTwo.classList.add("active");
    resultOne.classList.remove("active");
    optTwo.classList.add("active");
    optOne.classList.remove("active");
    optThree.classList.remove("active");
    resultThree.classList.remove("active");
    activeOpt = optTwo;
  } else if (result === "result_three") {
    resultThree.classList.add("active");
    resultOne.classList.remove("active");
    resultTwo.classList.remove("active");
    optThree.classList.add("active");
    optTwo.classList.remove("active");
    optOne.classList.remove("active");
    activeOpt = optThree;
  }

  // Animate the newly shown tab items
  if (activeOpt) {
    gsap.fromTo(
      activeOpt.querySelectorAll("li, .cta_contactus"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" }
    );
  }
}
