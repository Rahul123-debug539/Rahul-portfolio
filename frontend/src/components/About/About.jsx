import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

const journey = [
  {
    year: "2026",
    title: "FULL-STACK DEVELOPMENT",
    description:
      "Building production-oriented MERN applications with React, Node.js, Express and MongoDB.",
  },
  {
    year: "2026",
    title: "WEB DEVELOPMENT EXPERIENCE",
    description:
      "Working on real-world frontend and full-stack projects while improving product thinking and engineering practices.",
  },
  {
    year: "2025",
    title: "MCA",
    description:
      "Pursuing Master of Computer Applications at Galgotias University.",
  },
  {
    year: "2023",
    title: "BCA",
    description:
      "Completed Bachelor of Computer Applications and built a foundation in programming and web development.",
  },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         TOP BAR
      ========================================= */

      gsap.fromTo(
        ".about__top span",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about__top",
            start: "top 88%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* =========================================
         HEADING
      ========================================= */

      gsap.fromTo(
        ".about__heading-line span",
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about__heading",
            start: "top 78%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* =========================================
         COPY
      ========================================= */

      gsap.fromTo(
        ".about__copy",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about__copy",
            start: "top 82%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* =========================================
         STATS
      ========================================= */

      gsap.fromTo(
        ".about__stat",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about__stats",
            start: "top 82%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* =========================================
         JOURNEY ITEMS
      ========================================= */

      gsap.fromTo(
        ".journey__item",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".journey__list",
            start: "top 82%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* =========================================
         JOURNEY LINE
      ========================================= */

      gsap.fromTo(
        ".journey__line-progress",
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: ".journey__list",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      /* =========================================
         PARALLAX NUMBER
      ========================================= */

      gsap.to(".about__background-number", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about"
      id="about"
    >
      <div className="about__background-number">
        04
      </div>

      <div className="about__grid"></div>

      <div className="about__container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="about__top">
          <span>(04) — ABOUT</span>

          <span>RAHUL / PROFILE</span>
        </div>


        {/* =====================================
            MAIN ABOUT
        ===================================== */}

        <div className="about__main">

          <h2 className="about__heading">

            <span className="about__heading-line">
              <span>MORE</span>
            </span>

            <span className="about__heading-line">
              <span className="about__heading-muted">
                THAN
              </span>

              <span>&nbsp;CODE.</span>
            </span>

          </h2>


          <div className="about__copy">

            <span className="about__copy-label">
              (01) — PROFILE
            </span>

            <p className="about__lead">
              I'm Rahul Kumar Tiwari — a developer
              focused on creating modern, useful and
              scalable web experiences.
            </p>

            <p>
              I enjoy working across the frontend and
              backend, turning ideas into complete digital
              products. My focus is on writing clean code,
              building intuitive interfaces and
              continuously improving how products work.
            </p>

            <p>
              I work primarily with React, JavaScript,
              Node.js, Express and MongoDB, while
              exploring modern animation and product
              development techniques.
            </p>

            <div className="about__copy-footer">
              <span>BASED IN INDIA</span>
              <span>OPEN TO OPPORTUNITIES</span>
            </div>

          </div>

        </div>


        {/* =====================================
            STATS
        ===================================== */}

        <div className="about__stats">

          <div className="about__stat">
            <strong>01</strong>
            <span>DEVELOPER</span>
          </div>

          <div className="about__stat">
            <strong>MCA</strong>
            <span>EDUCATION</span>
          </div>

          <div className="about__stat">
            <strong>MERN</strong>
            <span>PRIMARY STACK</span>
          </div>

          <div className="about__stat">
            <strong>∞</strong>
            <span>LEARNING</span>
          </div>

        </div>


        {/* =====================================
            JOURNEY
        ===================================== */}

        <div className="journey">

          <div className="journey__header">
            <span>(05) — JOURNEY</span>
            <span>THE PATH SO FAR</span>
          </div>


          <div className="journey__intro">

            <h3>
              FROM
              <br />
              LEARNING
              <br />
              TO BUILDING.
            </h3>

            <p>
              A continuous journey through education,
              development and real-world projects.
            </p>

          </div>


          <div className="journey__list">

            <div className="journey__line">
              <div className="journey__line-progress"></div>
            </div>


            {journey.map((item) => (
              <article
                className="journey__item"
                key={`${item.year}-${item.title}`}
              >

                <div className="journey__year">
                  {item.year}
                </div>

                <div className="journey__dot"></div>

                <div className="journey__content">

                  <span className="journey__index">
                    / EXPERIENCE
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

                <span className="journey__arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;