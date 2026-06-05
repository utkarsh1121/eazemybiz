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
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".heading_container .heading", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".heading_container ",
    start: "top center",
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".faq-item", {
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.6,
  scrollTrigger: {
    trigger: ".faq-item ",
    start: "top center",
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".footer_content,.footer_content div", {
  y: 48,
  opacity: 0,
  duration: 0.2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".footer_content ",
    start: "top center",
    toggleActions: "play reverse play reverse",
  },
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".progbar_section",
    start: "top 70%",
    toggleActions: "play reverse play reverse",
  },
});

tl.from(".pline", {
  width: "0%",
  duration: 3,
  ease: "circ.in",
})

  .from(
    ".content_1.one",
    {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    },
    1,
  ) // 25%

  .from(
    ".content_1.two",
    {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    },
    1.5,
  ) // 50%

  .from(
    ".content_1.three",
    {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    },
    2,
  ) // 75%

  .from(
    ".content_1.four",
    {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    },
    2.5,
  ); // 100%

gsap.from(
  ".content_container .heading h6 , .content_container p, .content_container .cta_contactus",
  {
    y: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    delay: 0.2,
    scrollTrigger: {
      trigger: ".content_container",
      start: "top center",
      toggleActions: "play reverse play reverse",
    },
  },
);

const t2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".faq-title",
    start: "top center",
    toggleActions: "play reverse play reverse",
  },
});

t2.from(".faq-heading_fa", {
  y: -100,
  opacity: 0,
  duration: 0.8,
})
  .from(".faq-heading", {
    y: -100,
    opacity: 0,
    duration: 0.8,
  })
  .from(".faq_quemark", {
    scale: 5,
    opacity: 0,
    duration: 0.3,
    ease: "back.in(1.7)",
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
    // console.log(activeOpt)
    gsap.fromTo(
      activeOpt.querySelectorAll("li, .cta_contactus"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" },
    );
  }
}

function faqToggle(question) {
  const currentAnswer = question.nextElementSibling;
  const currentIcon = question.querySelector(".faq-icon");
  const prevQue = currentAnswer.previousElementSibling;
  const faqItem = question.querySelector(".faq-item");
  // const item= prevQue.previousElementSibling;
  // console.log(faqItem );

  document.querySelectorAll(".faq-answer").forEach((answer) => {
    if (answer !== currentAnswer) {
      answer.classList.remove("active");
    }
  });

  document.querySelectorAll(".faq-icon").forEach((icon) => {
    icon.innerHTML = "+";
  });

  currentAnswer.classList.toggle("active");

  if (currentAnswer.classList.contains("active")) {
    currentIcon.innerHTML = "×";
  } else {
    currentIcon.innerHTML = "+";
  }

  if (currentAnswer) {
    // console.log(currentAnswer)
    gsap.fromTo(
      currentAnswer.querySelectorAll("p, .faq-answer"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" },
    );
  }
  if (faqItem) {
    console.log(faqItem);
    gsap.fromTo(
      faqItem.querySelectorAll("div , span"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" },
    );
  }
}
