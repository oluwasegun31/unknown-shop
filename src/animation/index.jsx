import gsap from "gsap";

export const pageAnimation1 = (pageRef) => {
  const tl = gsap.timeline();
  tl.to(pageRef.current, {
    width: 0,
    duration: 1,
    ease: "expo.in",
  });
  return tl;
};
export const pageAnimation2 = (innerpageRef) => {
  const tl = gsap.timeline();
  tl.to(innerpageRef.current, {
    width: 0,
    duration: 1,
    ease: "expo.in",
    delay: 0.1,
  });

  return tl;
};
