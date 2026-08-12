import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Intro.css";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         TOP META
      ========================================= */

      gsap.fromTo(
        ".intro__top > *",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         MAIN HEADING
      ========================================= */

      gsap.fromTo(
        ".intro__heading-line",
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".intro__heading",
            start: "top 78%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         INTRO TEXT
      ========================================= */

      gsap.fromTo(
        ".intro__about",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".intro__about",
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         CAPABILITIES
      ========================================= */

      gsap.fromTo(
        ".intro__capability",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".intro__capabilities",
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         VALUES
      ========================================= */

      gsap.fromTo(
        ".intro__value",
        {
          x: 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".intro__values",
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         STATS
      ========================================= */

      gsap.fromTo(
        ".intro__stat",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".intro__stats",
            start: "top 85%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         BACKGROUND NUMBER
      ========================================= */

      gsap.to(".intro__background-number", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="intro"
      id="about"
    >
      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div
        className="intro__background-number"
        aria-hidden="true"
      >
        01
      </div>

      <div className="intro__grid" />

      <div className="intro__container">

        {/* ===================================
            HEADER
        =================================== */}

        <div className="intro__top">
          <span className="intro__label">
            (01) — INTRODUCTION
          </span>

          <span className="intro__year">
            2026
          </span>
        </div>

        {/* ===================================
            MAIN STATEMENT
        =================================== */}

        <div className="intro__hero">

          <span className="intro__eyebrow">
            A LITTLE ABOUT ME
          </span>

          <h2 className="intro__heading">

            <span className="intro__heading-line">
              I BUILD
            </span>

            <span className="intro__heading-line intro__muted">
              DIGITAL
            </span>

            <span className="intro__heading-line">
              EXPERIENCES
            </span>

            <span className="intro__heading-line">
              THAT SOLVE
            </span>

            <span className="intro__heading-line">
              REAL PROBLEMS.
            </span>

          </h2>

        </div>

        {/* ===================================
            ABOUT
        =================================== */}

        <div className="intro__about">

          <div className="intro__about-label">
            (02) — WHO I AM
          </div>

          <div className="intro__about-content">

            <p className="intro__about-main">
              I'm Rahul Kumar Tiwari, a Full-Stack
              Developer focused on building modern
              web applications with React, Node.js,
              Express and MongoDB.
            </p>

            <p className="intro__about-secondary">
              I enjoy turning ideas into responsive,
              scalable and interactive products that
              are not only visually engaging but also
              reliable under the hood.
            </p>

            <p className="intro__about-secondary">
              From designing the interface to building
              APIs and connecting databases, I like
              understanding the complete product rather
              than only one part of it.
            </p>

          </div>

        </div>

        {/* ===================================
            CAPABILITIES
        =================================== */}

        <div className="intro__section">

          <div className="intro__section-header">

            <span>
              (03) — WHAT I BUILD
            </span>

            <span>
              CAPABILITIES
            </span>

          </div>

          <div className="intro__capabilities">

            <div className="intro__capability">
              <span>01</span>

              <div>
                <h3>
                  FRONTEND DEVELOPMENT
                </h3>

                <p>
                  Responsive and interactive
                  interfaces built with React,
                  JavaScript and modern CSS.
                </p>
              </div>

              <span className="intro__arrow">
                ↗
              </span>
            </div>

            <div className="intro__capability">
              <span>02</span>

              <div>
                <h3>
                  BACKEND DEVELOPMENT
                </h3>

                <p>
                  REST APIs, authentication,
                  business logic and database
                  integration with Node.js.
                </p>
              </div>

              <span className="intro__arrow">
                ↗
              </span>
            </div>

            <div className="intro__capability">
              <span>03</span>

              <div>
                <h3>
                  FULL-STACK APPLICATIONS
                </h3>

                <p>
                  Complete web applications
                  connecting polished interfaces
                  with reliable backend systems.
                </p>
              </div>

              <span className="intro__arrow">
                ↗
              </span>
            </div>

            <div className="intro__capability">
              <span>04</span>

              <div>
                <h3>
                  INTERACTIVE EXPERIENCES
                </h3>

                <p>
                  Thoughtful motion, smooth
                  transitions and engaging
                  interactions using GSAP.
                </p>
              </div>

              <span className="intro__arrow">
                ↗
              </span>
            </div>

          </div>

        </div>

        {/* ===================================
            APPROACH
        =================================== */}

        <div className="intro__approach">

          <div className="intro__values">

            <div className="intro__section-header">
              <span>
                (04) — MY APPROACH
              </span>

              <span>
                PRINCIPLES
              </span>
            </div>

            <div className="intro__value">
              <span>01</span>

              <div>
                <strong>
                  SIMPLE BY DEFAULT
                </strong>

                <p>
                  Clear interfaces and clean
                  solutions over unnecessary
                  complexity.
                </p>
              </div>
            </div>

            <div className="intro__value">
              <span>02</span>

              <div>
                <strong>
                  BUILT TO WORK
                </strong>

                <p>
                  Good design means little if
                  the product doesn't perform
                  reliably.
                </p>
              </div>
            </div>

            <div className="intro__value">
              <span>03</span>

              <div>
                <strong>
                  DETAILS MATTER
                </strong>

                <p>
                  From the first pixel on screen
                  to the API behind it.
                </p>
              </div>
            </div>

          </div>

          {/* =================================
              STATS
          ================================= */}

          <div className="intro__stats">

            <div className="intro__stat">
              <strong>
                MERN
              </strong>

              <span>
                PRIMARY STACK
              </span>
            </div>

            <div className="intro__stat">
              <strong>
                01+
              </strong>

              <span>
                YEARS BUILDING
              </span>
            </div>

            <div className="intro__stat">
              <strong>
                10+
              </strong>

              <span>
                PROJECTS & BUILDS
              </span>
            </div>

            <div className="intro__stat">
              <strong>
                100%
              </strong>

              <span>
                LEARNING BY BUILDING
              </span>
            </div>

          </div>

        </div>

        {/* ===================================
            CLOSING STATEMENT
        =================================== */}

        <div className="intro__closing">

          <span className="intro__closing-label">
            (05) — THE IDEA
          </span>

          <p>
            I don't just want to write code.
            I want to build products people
            actually find useful.
          </p>

          <span className="intro__closing-mark">
            +
          </span>

        </div>

        {/* ===================================
            FOOTER
        =================================== */}

        <div className="intro__footer">

          <span>
            REACT / NODE / MONGODB / GSAP
          </span>

          <span>
            FROM IDEA TO PRODUCT
          </span>

        </div>

      </div>
    </section>
  );
};

export default Intro;