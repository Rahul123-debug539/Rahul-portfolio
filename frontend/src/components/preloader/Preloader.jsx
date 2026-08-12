import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const counterRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const counter = { value: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.round(counter.value)}%`;
        }

        if (progressRef.current) {
          progressRef.current.style.width = `${counter.value}%`;
        }
      },
    })
      .to(".preloader__text", {
        y: -30,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      })
      .to(
        preloaderRef.current,
        {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
        },
        "-=0.1"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader__content">
        <div className="preloader__top">
          <span>RAHUL KUMAR TIWARI</span>
          <span ref={counterRef}>0%</span>
        </div>

        <div className="preloader__line">
          <div ref={progressRef} className="preloader__progress"></div>
        </div>

        <div className="preloader__text">
          <span>LOADING EXPERIENCE</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;