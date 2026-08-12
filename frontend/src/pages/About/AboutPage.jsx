import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutPage.css";

gsap.registerPlugin(ScrollTrigger);

const stack = [
  {
    number: "01",
    title: "FRONTEND",
    items: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Vite",
      "GSAP",
    ],
  },
  {
    number: "02",
    title: "BACKEND",
    items: [
      "Node.js",
      "Express",
      "REST API",
      "JWT",
      "Authentication",
    ],
  },
  {
    number: "03",
    title: "DATABASE",
    items: [
      "MongoDB",
      "Mongoose",
      "CRUD",
      "Data Modeling",
    ],
  },
  {
    number: "04",
    title: "TOOLS",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "MongoDB Compass",
      "Cloudinary",
      "Vercel",
      "Render",
    ],
  },
];

const journey = [
  {
    year: "2026",
    title: "FULL-STACK DEVELOPMENT",
    description:
      "Building production-oriented MERN applications and working across frontend, backend, APIs and databases.",
  },
  {
    year: "2026",
    title: "REAL-WORLD PROJECTS",
    description:
      "Working on practical products such as learning platforms, dashboards and full-stack web applications.",
  },
  {
    year: "2025",
    title: "MASTER OF COMPUTER APPLICATIONS",
    description:
      "Pursuing MCA at Galgotias University with a focus on computer science and software development.",
  },
  {
    year: "2023",
    title: "BACHELOR OF COMPUTER APPLICATIONS",
    description:
      "Completed BCA and developed a strong foundation in programming, databases and web development.",
  },
];

const AboutPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         HERO
      ========================================= */

      const heroTimeline = gsap.timeline();

      heroTimeline
        .fromTo(
          ".about-page__eyebrow",
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
          ".about-page__hero-line span",
          {
            yPercent: 110,
          },
          {
            yPercent: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".about-page__hero-copy",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45"
        );

      /* =========================================
         SECTION REVEALS
      ========================================= */

      gsap.utils
        .toArray(".about-page__reveal")
        .forEach((element) => {
          gsap.fromTo(
            element,
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 82%",
                toggleActions:
                  "play reverse play reverse",
              },
            }
          );
        });

      /* =========================================
         WORD REVEALS
      ========================================= */

      gsap.utils
        .toArray(".about-page__section-title-line")
        .forEach((line) => {
          const words = line.querySelectorAll("span");

          gsap.fromTo(
            words,
            {
              yPercent: 110,
            },
            {
              yPercent: 0,
              duration: 0.9,
              stagger: 0.08,
              ease: "power4.out",
              scrollTrigger: {
                trigger: line,
                start: "top 82%",
                toggleActions:
                  "play reverse play reverse",
              },
            }
          );
        });

      /* =========================================
         STACK
      ========================================= */

      gsap.fromTo(
        ".about-page__stack-card",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-page__stack-grid",
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         JOURNEY
      ========================================= */

      gsap.fromTo(
        ".about-page__journey-item",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-page__journey-list",
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         JOURNEY LINE
      ========================================= */

      gsap.fromTo(
        ".about-page__journey-progress",
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: ".about-page__journey-list",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      /* =========================================
         LARGE NUMBER
      ========================================= */

      gsap.to(".about-page__background-number", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="about-page"
    >
      {/* BACKGROUND */}

      <div className="about-page__grid"></div>

      <div className="about-page__background-number">
        ABOUT
      </div>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="about-page__hero">

        <div className="about-page__container">

          <div className="about-page__eyebrow">
            <span>(04) — ABOUT ME</span>
            <span>PROFILE / 2026</span>
          </div>

          <div className="about-page__hero-content">

            <h1 className="about-page__hero-title">

              <span className="about-page__hero-line">
                <span>MORE</span>
              </span>

              <span className="about-page__hero-line">
                <span>THAN</span>
              </span>

              <span className="about-page__hero-line">
                <span className="about-page__hero-muted">
                  CODE.
                </span>
              </span>

            </h1>

            <div className="about-page__hero-copy">

              <span className="about-page__hero-copy-label">
                DEVELOPER / BUILDER
              </span>

              <p>
                I'm Rahul Kumar Tiwari, a developer
                focused on building modern web
                applications that are useful,
                interactive and thoughtfully engineered.
              </p>

              <p>
                I work across the frontend and backend,
                combining clean interfaces with reliable
                systems to turn ideas into complete
                digital products.
              </p>

            </div>

          </div>

          <div className="about-page__hero-footer">

            <span>BASED IN INDIA</span>

            <span>FRONTEND / MERN</span>

            <span>OPEN TO OPPORTUNITIES</span>

          </div>

        </div>

      </section>


      {/* =====================================
          WHO I AM
      ===================================== */}

      <section className="about-page__section">

        <div className="about-page__container">

          <div className="about-page__section-top">
            <span>(01) — WHO I AM</span>
            <span>PROFILE</span>
          </div>

          <div className="about-page__two-column">

            <h2 className="about-page__section-title">

              <span className="about-page__section-title-line">
                <span>BUILDING</span>
              </span>

              <span className="about-page__section-title-line">
                <span>WITH</span>
              </span>

              <span className="about-page__section-title-line">
                <span className="about-page__muted">
                  PURPOSE.
                </span>
              </span>

            </h2>

            <div className="about-page__body about-page__reveal">

              <p className="about-page__large-text">
                For me, development is not just about
                writing code. It's about understanding a
                problem and building something that
                actually solves it.
              </p>

              <p>
                I enjoy taking an idea from its early
                structure to a working product — designing
                interfaces, building APIs, connecting
                databases and making the complete
                experience work together.
              </p>

              <p>
                I'm particularly interested in modern web
                applications where frontend experience,
                backend architecture and interaction
                design all come together.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          WHAT I BUILD
      ===================================== */}

      <section className="about-page__section about-page__section--border">

        <div className="about-page__container">

          <div className="about-page__section-top">
            <span>(02) — WHAT I BUILD</span>
            <span>CAPABILITIES</span>
          </div>

          <div className="about-page__two-column">

            <h2 className="about-page__section-title">

              <span className="about-page__section-title-line">
                <span>FROM</span>
              </span>

              <span className="about-page__section-title-line">
                <span>IDEA</span>
              </span>

              <span className="about-page__section-title-line">
                <span className="about-page__muted">
                  TO PRODUCT.
                </span>
              </span>

            </h2>

            <div className="about-page__body about-page__reveal">

              <p className="about-page__large-text">
                I build complete web experiences rather
                than focusing on only one layer of an
                application.
              </p>

              <div className="about-page__build-list">

                <div>
                  <span>01</span>
                  <strong>INTERFACES</strong>
                  <p>
                    Responsive and interactive frontend
                    experiences with React and modern
                    JavaScript.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>SYSTEMS</strong>
                  <p>
                    REST APIs, authentication, CRUD
                    operations and backend services.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>PRODUCTS</strong>
                  <p>
                    Complete full-stack applications
                    connecting the interface, API and
                    database.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          TECH STACK
      ===================================== */}

      <section className="about-page__section">

        <div className="about-page__container">

          <div className="about-page__section-top">
            <span>(03) — TECHNICAL STACK</span>
            <span>TOOLS / TECHNOLOGIES</span>
          </div>

          <div className="about-page__stack-heading">

            <h2 className="about-page__section-title">

              <span className="about-page__section-title-line">
                <span>TOOLS</span>
              </span>

              <span className="about-page__section-title-line">
                <span className="about-page__muted">
                  I USE.
                </span>
              </span>

            </h2>

            <p className="about-page__reveal">
              A practical stack focused on building
              modern, maintainable and production-oriented
              web applications.
            </p>

          </div>

          <div className="about-page__stack-grid">

            {stack.map((group) => (
              <article
                className="about-page__stack-card"
                key={group.number}
              >

                <div className="about-page__stack-card-top">
                  <span>{group.number}</span>
                  <span>STACK</span>
                </div>

                <h3>
                  {group.title}
                </h3>

                <div className="about-page__stack-items">

                  {group.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          JOURNEY
      ===================================== */}

      <section className="about-page__section about-page__section--border">

        <div className="about-page__container">

          <div className="about-page__section-top">
            <span>(04) — JOURNEY</span>
            <span>THE PATH SO FAR</span>
          </div>

          <div className="about-page__journey-heading">

            <h2 className="about-page__section-title">

              <span className="about-page__section-title-line">
                <span>THE</span>
              </span>

              <span className="about-page__section-title-line">
                <span>PATH</span>
              </span>

              <span className="about-page__section-title-line">
                <span className="about-page__muted">
                  SO FAR.
                </span>
              </span>

            </h2>

            <p>
              From education to practical development,
              every stage has added another layer to how
              I approach building software.
            </p>

          </div>

          <div className="about-page__journey-list">

            <div className="about-page__journey-line">
              <div className="about-page__journey-progress"></div>
            </div>

            {journey.map((item) => (
              <article
                className="about-page__journey-item"
                key={`${item.year}-${item.title}`}
              >

                <div className="about-page__journey-year">
                  {item.year}
                </div>

                <div className="about-page__journey-dot"></div>

                <div className="about-page__journey-content">

                  <span>
                    / EXPERIENCE
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

                <div className="about-page__journey-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          CURRENT FOCUS
      ===================================== */}

      <section className="about-page__focus">

        <div className="about-page__container">

          <div className="about-page__focus-content">

            <span className="about-page__focus-label">
              (05) — CURRENT FOCUS
            </span>

            <h2>
              ALWAYS
              <br />
              <span>BUILDING.</span>
            </h2>

            <p>
              Currently focused on improving my frontend
              architecture, full-stack development,
              animations and building better real-world
              products.
            </p>

            <div className="about-page__focus-tags">

              <span>REACT</span>
              <span>MERN</span>
              <span>GSAP</span>
              <span>PRODUCT DEVELOPMENT</span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="about-page__cta">

        <div className="about-page__container">

          <span>
            (06) — NEXT
          </span>

          <h2>
            LET'S BUILD
            <br />
            <span>SOMETHING.</span>
          </h2>

          <a href="/contact">
            START A CONVERSATION
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
};

export default AboutPage;