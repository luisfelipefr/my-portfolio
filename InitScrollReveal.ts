import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
export function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
  });
  useEffect(() => {
    sr.reveal(".delaySmallReveal", { delay: 200, reset: false });
    sr.reveal(".delayMediumReveal", { delay: 300, reset: false });
    sr.reveal(".delayLargeReveal", { delay: 400, reset: false });
    sr.reveal(".delayExtraBigReveal", { delay: 600, reset: false });
    sr.reveal(".delayExtraBigBigReveal", { delay: 700, reset: false });
    sr.reveal(".intervalCardReveal", { interval: 400, reset: false });
  }, [sr.reveal]);
}