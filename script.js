let t1 = gsap.timeline({});
t1.from("logo", 1, {
  y: -200,
  opacity: 0,
});

t1.from("nav ul li", 1, {
  y: -200,
  stagger: 0.2,
  opacity: 0,
});

t1.from(".menu", 1, {
  y: -200,
  stagger: 0.2,
  opacity: 0,
});

t1.from("elmt", 1, {
  y: -200,
  stagger: 0.2,
  opacity: 0,
});
