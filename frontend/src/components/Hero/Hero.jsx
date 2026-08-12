import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         HERO INTRO TIMELINE
      ========================================= */

      const heroTimeline = gsap.timeline({
        paused: true,
      });

      heroTimeline
        .fromTo(
          ".hero__eyebrow",
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          }
        )

        .fromTo(
          ".hero__title-line",
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3"
        )

        .fromTo(
          ".hero__identity",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )

        .fromTo(
          ".hero__description",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )

        .fromTo(
          ".hero__visual",
          {
            x: 40,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7"
        )

        .fromTo(
          ".hero__visual-item",
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.55"
        )

        .fromTo(
          ".hero__meta span",
          {
            y: 12,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.35"
        )

        .fromTo(
          ".hero__cta",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.25"
        )

        .fromTo(
          ".hero__scroll",
          {
            y: 15,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.2"
        )

        .fromTo(
          ".hero__index",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.4,
          },
          "-=0.25"
        );

      /* =========================================
         PLAY ON ENTER + ENTER BACK
      ========================================= */

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top 80%",

        onEnter: () => {
          heroTimeline.restart();
        },

        onEnterBack: () => {
          heroTimeline.restart();
        },
      });

      /* =========================================
         BACKGROUND GRID PARALLAX
      ========================================= */

      gsap.to(".hero__grid", {
        yPercent: 8,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* =========================================
         TITLE PARALLAX
      ========================================= */

      gsap.to(".hero__title", {
        yPercent: -16,
        opacity: 0.28,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* =========================================
         RIGHT VISUAL PARALLAX
      ========================================= */

      gsap.to(".hero__visual", {
        yPercent: -10,
        ease: "none",

        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* =========================================
         ORBIT ANIMATION
      ========================================= */

      gsap.to(".hero__orbit--one", {
        rotate: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".hero__orbit--two", {
        rotate: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      /* =========================================
         CORE PULSE
      ========================================= */

      gsap.to(".hero__core", {
        scale: 1.1,
        opacity: 0.55,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         STATUS DOT
      ========================================= */

      gsap.to(".hero__status", {
        opacity: 0.35,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* =========================================
         SCROLL LINE
      ========================================= */

      gsap.to(".hero__scroll-line", {
        scaleY: 0.35,
        transformOrigin: "top center",
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /* =========================================
     VIEW MY WORK
  ========================================= */

  const scrollToWork = () => {
    const workSection =
      document.getElementById("projects");

    if (!workSection) {
      console.warn(
        'Projects section with id="projects" was not found.'
      );

      return;
    }

    const navbarOffset = 90;

    const targetPosition =
      workSection.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={heroRef}
      className="hero"
      id="home"
    >
      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div className="hero__grid" />

      <div className="hero__noise" />

      {/* =====================================
          MAIN CONTAINER
      ===================================== */}

      <div className="hero__container">

        {/* ===================================
            EYEBROW
        =================================== */}

        <div className="hero__eyebrow">
          <span className="hero__status" />

          <span>
            AVAILABLE FOR FRONTEND & MERN
            OPPORTUNITIES
          </span>
        </div>

        {/* ===================================
            TITLE
        =================================== */}

        <h1 className="hero__title">

          <span className="hero__title-line-wrap">
            <span className="hero__title-line">
              RAHUL
            </span>
          </span>

          <span className="hero__title-line-wrap">
            <span
              className="
                hero__title-line
                hero__title-line--outline
              "
            >
              TIWARI
            </span>
          </span>

        </h1>

        {/* ===================================
            MAIN LOWER CONTENT
        =================================== */}

        <div className="hero__lower">

          {/* LEFT IDENTITY */}

          <div className="hero__identity">

            <p className="hero__subtitle-role">
              FRONTEND / MERN
              <br />
              DEVELOPER
            </p>

            <p className="hero__statement">
              I BUILD DIGITAL
              <br />
              PRODUCTS THAT ARE
              <br />
              FAST, USEFUL &
              <br />
              BUILT TO SCALE.
            </p>

            <div className="hero__availability-meta">
              <span>BASED IN INDIA</span>
              <span>OPEN TO REMOTE</span>
              <span>& FULL-TIME WORK</span>
            </div>

          </div>

          {/* CENTER DESCRIPTION */}

          <div className="hero__description">

            <span className="hero__description-label">
              (01) — WHAT I DO
            </span>

            <p>
              I build modern web experiences
              <br />
              with thoughtful interfaces,
              <br />
              smooth interactions and reliable
              <br />
              engineering.
            </p>

          </div>

        </div>

        {/* ===================================
            RIGHT TECHNICAL VISUAL
        =================================== */}

        <div className="hero__visual">

          <div className="hero__visual-header">

            <span>
              SYSTEM / 001
            </span>

            <span>
              DIGITAL PRODUCTS
            </span>

          </div>

          <div className="hero__visual-stage">

            {/* ORBIT 1 */}

            <div
              className="
                hero__orbit
                hero__orbit--one
              "
            >
              <span />
            </div>

            {/* ORBIT 2 */}

            <div
              className="
                hero__orbit
                hero__orbit--two
              "
            >
              <span />
            </div>

            {/* CENTER */}

            <div className="hero__core">
              +
            </div>

            <div className="hero__core-dot" />

          </div>

          {/* VISUAL FOOTER */}

          <div className="hero__visual-footer">

            <div className="hero__visual-stack">

              <span className="hero__visual-item">
                REACT
              </span>

              <span className="hero__visual-item">
                NODE.JS
              </span>

              <span className="hero__visual-item">
                MONGODB
              </span>

              <span className="hero__visual-item">
                GSAP
              </span>

            </div>

            <span className="hero__visual-index">
              01 / 04
            </span>

          </div>

          <span className="hero__visual-line hero__visual-line--one" />
          <span className="hero__visual-line hero__visual-line--two" />
          <span className="hero__visual-line hero__visual-line--three" />

        </div>

        {/* ===================================
            BOTTOM INFORMATION
        =================================== */}

        <div className="hero__bottom">

          {/* TECH STACK */}

          <div className="hero__meta">

            <span>REACT</span>
            <span>NODE.JS</span>
            <span>MONGODB</span>
            <span>GSAP</span>

          </div>

          {/* CTA */}

          <div className="hero__cta">

            <button
              type="button"
              className="
                hero__cta-primary
                magnetic-button
              "
              onClick={scrollToWork}
              data-cursor="work"
            >
              <span>
                VIEW MY WORK
              </span>

              <span className="hero__cta-arrow">
                ↘
              </span>
            </button>

            <a
              href="#contact"
              className="hero__cta-secondary"
              data-cursor="email"
            >
              LET'S TALK
            </a>

          </div>

        </div>

      </div>

      {/* =====================================
          SCROLL INDICATOR
      ===================================== */}

      <button
        type="button"
        className="hero__scroll"
        onClick={scrollToWork}
        data-cursor="scroll"
      >
        <span>
          SCROLL TO EXPLORE
        </span>

        <span className="hero__scroll-line" />
      </button>

      {/* =====================================
          PAGE INDEX
      ===================================== */}

      <div className="hero__index">

        <span>01</span>

        <span>/</span>

        <span>10</span>

      </div>

      {/* =====================================
          SIDE LABEL
      ===================================== */}

      <div className="hero__side-label">
        BUILD / SHIP / SCALE
      </div>

    </section>
  );
};

export default Hero;