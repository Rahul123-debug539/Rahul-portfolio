import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;

    if (!cursor || !follower || !label) return;

    const moveCursor = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.12,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor]"
    );

    const enterElement = (event) => {
      const type =
        event.currentTarget.dataset.cursor || "view";

      label.textContent = type.toUpperCase();

      gsap.to(follower, {
        width: 90,
        height: 90,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(cursor, {
        scale: 0.4,
        duration: 0.25,
        ease: "power3.out",
      });

      gsap.to(label, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    const leaveElement = () => {
      gsap.to(follower, {
        width: 35,
        height: 35,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(cursor, {
        scale: 1,
        duration: 0.25,
        ease: "power3.out",
      });

      gsap.to(label, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", enterElement);
      element.addEventListener("mouseleave", leaveElement);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", enterElement);
        element.removeEventListener("mouseleave", leaveElement);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />

      <div ref={followerRef} className="custom-cursor-follower">
        <span ref={labelRef}>VIEW</span>
      </div>
    </>
  );
};

export default CustomCursor;