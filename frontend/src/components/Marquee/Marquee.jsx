import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Marquee.css";

const Marquee = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="marquee">
      <div ref={trackRef} className="marquee__track">
        <div className="marquee__group">
          <span>BUILD</span>
          <i>✦</i>
          <span>CREATE</span>
          <i>✦</i>
          <span>DEVELOP</span>
          <i>✦</i>
          <span>DESIGN</span>
          <i>✦</i>
        </div>

        <div className="marquee__group" aria-hidden="true">
          <span>BUILD</span>
          <i>✦</i>
          <span>CREATE</span>
          <i>✦</i>
          <span>DEVELOP</span>
          <i>✦</i>
          <span>DESIGN</span>
          <i>✦</i>
        </div>
      </div>
    </section>
  );
};

export default Marquee;