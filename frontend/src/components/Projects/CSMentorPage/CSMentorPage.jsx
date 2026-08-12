import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CSMentorPage.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "CONTENT MANAGEMENT",
    description:
      "Structured learning content through categories, topics and subtopics, making large amounts of Computer Science material easier to organize and navigate.",
  },
  {
    number: "02",
    title: "ADMIN DASHBOARD",
    description:
      "A dedicated dashboard for managing learning content and keeping the platform's information structured and maintainable.",
  },
  {
    number: "03",
    title: "RICH CONTENT",
    description:
      "Learning material can combine text, images and video resources to create a more useful experience for students.",
  },
  {
    number: "04",
    title: "AUTHENTICATION",
    description:
      "Authentication and protected application flows help separate administrative functionality from the public learning experience.",
  },
  {
    number: "05",
    title: "CLOUD MEDIA",
    description:
      "Images and media assets are handled through cloud storage rather than making the application responsible for serving every asset directly.",
  },
  {
    number: "06",
    title: "PWA EXPERIENCE",
    description:
      "Progressive Web App capabilities provide a more app-like experience with support for modern caching and offline-oriented functionality.",
  },
];

const stack = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "JWT",
  "Cloudinary",
  "Vite",
  "PWA",
  "GSAP",
  "CSS",
];

const architecture = [
  {
    number: "01",
    title: "CLIENT",
    description:
      "React-based frontend responsible for the user interface, navigation, content presentation and interactive experience.",
  },
  {
    number: "02",
    title: "API",
    description:
      "Node.js and Express power the backend API layer that handles application logic and communication between the frontend and database.",
  },
  {
    number: "03",
    title: "DATABASE",
    description:
      "MongoDB stores the structured application data using Mongoose models and relationships between content entities.",
  },
  {
    number: "04",
    title: "MEDIA",
    description:
      "Cloudinary handles cloud-based media storage so uploaded assets can be managed separately from the application server.",
  },
];

const challenges = [
  {
    number: "01",
    title: "STRUCTURING CONTENT",
    description:
      "Designing a content hierarchy that could scale from simple topics to larger collections of Computer Science learning material.",
  },
  {
    number: "02",
    title: "ADMIN WORKFLOW",
    description:
      "Creating an internal workflow that makes content management practical without exposing administrative functionality to normal users.",
  },
  {
    number: "03",
    title: "FRONTEND / BACKEND FLOW",
    description:
      "Connecting dynamic React interfaces with APIs and database-backed content while keeping the application maintainable.",
  },
];

const CSMentorPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         HERO
      ========================================= */

      const heroTimeline = gsap.timeline();

      heroTimeline
        .fromTo(
          ".cs-mentor__eyebrow",
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".cs-mentor__hero-line span",
          {
            yPercent: 110,
          },
          {
            yPercent: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".cs-mentor__hero-copy",
          {
            y: 35,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );

      /* =========================================
         REVEALS
      ========================================= */

      gsap.utils
        .toArray(".cs-mentor__reveal")
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
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 84%",
                toggleActions:
                  "play reverse play reverse",
              },
            }
          );
        });

      /* =========================================
         FEATURE CARDS
      ========================================= */

      gsap.fromTo(
        ".cs-mentor__feature",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cs-mentor__features-grid",
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         ARCHITECTURE
      ========================================= */

      gsap.fromTo(
        ".cs-mentor__architecture-item",
        {
          x: -35,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cs-mentor__architecture-list",
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         CHALLENGES
      ========================================= */

      gsap.fromTo(
        ".cs-mentor__challenge",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cs-mentor__challenges-grid",
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         STACK
      ========================================= */

      gsap.fromTo(
        ".cs-mentor__stack-item",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cs-mentor__stack",
            start: "top 85%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         VISUAL PARALLAX
      ========================================= */

      gsap.to(".cs-mentor__visual-inner", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".cs-mentor__visual",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* =========================================
         LARGE BACKGROUND NUMBER
      ========================================= */

      gsap.to(".cs-mentor__background-number", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="cs-mentor"
    >
      <div className="cs-mentor__grid"></div>

      <div className="cs-mentor__background-number">
        01
      </div>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="cs-mentor__hero">

        <div className="cs-mentor__container">

          <div className="cs-mentor__eyebrow">
            <span>
              (01) — CASE STUDY
            </span>

            <span>
              EDUCATION / FULL-STACK
            </span>
          </div>

          <div className="cs-mentor__hero-content">

            <h1 className="cs-mentor__hero-title">

              <span className="cs-mentor__hero-line">
                <span>CS</span>
              </span>

              <span className="cs-mentor__hero-line">
                <span>MENTOR.</span>
              </span>

            </h1>

            <div className="cs-mentor__hero-copy">

              <span>
                FULL-STACK E-LEARNING PLATFORM
              </span>

              <p>
                A learning platform built to organize
                Computer Science content into a
                structured and accessible digital
                experience.
              </p>

            </div>

          </div>

          <div className="cs-mentor__hero-meta">

            <div>
              <span>ROLE</span>
              <strong>FULL-STACK</strong>
            </div>

            <div>
              <span>YEAR</span>
              <strong>2026</strong>
            </div>

            <div>
              <span>TYPE</span>
              <strong>PERSONAL PROJECT</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>MERN</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          PROJECT VISUAL
      ===================================== */}

      <section className="cs-mentor__visual-section">

        <div className="cs-mentor__container">

          <div className="cs-mentor__visual">

            <div className="cs-mentor__visual-inner">

              <div className="cs-mentor__visual-grid"></div>

              <div className="cs-mentor__visual-center">

                <span>
                  PROJECT / 01
                </span>

                <strong>
                  CS MENTOR
                </strong>

                <small>
                  LEARN / BUILD / GROW
                </small>

              </div>

              <div className="cs-mentor__visual-corner cs-mentor__visual-corner--tl">
                ↗
              </div>

              <div className="cs-mentor__visual-corner cs-mentor__visual-corner--br">
                2026 / FULL-STACK
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          OVERVIEW
      ===================================== */}

      <section className="cs-mentor__section">

        <div className="cs-mentor__container">

          <div className="cs-mentor__section-top">
            <span>(02) — OVERVIEW</span>
            <span>THE PRODUCT</span>
          </div>

          <div className="cs-mentor__two-column">

            <h2 className="cs-mentor__section-title">

              <span>
                BUILDING
              </span>

              <span>
                A BETTER
              </span>

              <span className="is-muted">
                LEARNING
              </span>

            </h2>

            <div className="cs-mentor__body cs-mentor__reveal">

              <p className="is-large">
                CS Mentor is a full-stack learning
                platform focused on making Computer
                Science content easier to discover,
                organize and consume.
              </p>

              <p>
                The platform is structured around
                categories, topics and subtopics so
                that learning material can be organized
                in a way that feels natural to students.
              </p>

              <p>
                The project combines a React frontend
                with a Node.js and Express backend,
                MongoDB for application data and
                Cloudinary for media storage.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          PROBLEM
      ===================================== */}

      <section className="cs-mentor__section cs-mentor__section--border">

        <div className="cs-mentor__container">

          <div className="cs-mentor__section-top">
            <span>(03) — THE PROBLEM</span>
            <span>WHY IT EXISTS</span>
          </div>

          <div className="cs-mentor__problem">

            <h2 className="cs-mentor__section-title">

              <span>
                LEARNING
              </span>

              <span>
                SHOULD NOT
              </span>

              <span className="is-muted">
                FEEL FRAGMENTED.
              </span>

            </h2>

            <div className="cs-mentor__body cs-mentor__reveal">

              <p className="is-large">
                Computer Science learning resources
                can easily become scattered across
                different pages, platforms and formats.
              </p>

              <p>
                CS Mentor was built around the idea of
                bringing structured learning material
                into one focused experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          SOLUTION
      ===================================== */}

      <section className="cs-mentor__section">

        <div className="cs-mentor__container">

          <div className="cs-mentor__section-top">
            <span>(04) — THE SOLUTION</span>
            <span>PRODUCT APPROACH</span>
          </div>

          <div className="cs-mentor__two-column">

            <h2 className="cs-mentor__section-title">

              <span>
                STRUCTURE
              </span>

              <span>
                THE
              </span>

              <span className="is-muted">
                KNOWLEDGE.
              </span>

            </h2>

            <div className="cs-mentor__body cs-mentor__reveal">

              <p className="is-large">
                Instead of treating every article as
                an isolated piece of content, the
                platform organizes knowledge into
                logical levels.
              </p>

              <div className="cs-mentor__flow">

                <div>
                  <span>01</span>
                  <strong>CATEGORY</strong>
                </div>

                <span>↓</span>

                <div>
                  <span>02</span>
                  <strong>TOPIC</strong>
                </div>

                <span>↓</span>

                <div>
                  <span>03</span>
                  <strong>SUBTOPIC</strong>
                </div>

                <span>↓</span>

                <div>
                  <span>04</span>
                  <strong>CONTENT</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          FEATURES
      ===================================== */}

      <section className="cs-mentor__section cs-mentor__section--border">

        <div className="cs-mentor__container">

          <div className="cs-mentor__section-top">
            <span>(05) — FEATURES</span>
            <span>WHAT I BUILT</span>
          </div>

          <div className="cs-mentor__features-heading">

            <h2 className="cs-mentor__section-title">

              <span>
                CORE
              </span>

              <span className="is-muted">
                FEATURES.
              </span>

            </h2>

            <p className="cs-mentor__reveal">
              The product combines content management,
              learning interfaces and backend services
              into one complete application.
            </p>

          </div>

          <div className="cs-mentor__features-grid">

            {features.map((feature) => (
              <article
                className="cs-mentor__feature"
                key={feature.number}
              >

                <div className="cs-mentor__feature-top">

                  <span>
                    {feature.number}
                  </span>

                  <span>
                    FEATURE
                  </span>

                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

                <span className="cs-mentor__feature-arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          ARCHITECTURE
      ===================================== */}

      <section className="cs-mentor__section">

        <div className="cs-mentor__container">

          <div className="cs-mentor__section-top">
            <span>(06) — ARCHITECTURE</span>
            <span>HOW IT WORKS</span>
          </div>

          <div className="cs-mentor__architecture-heading">

            <h2 className="cs-mentor__section-title">

              <span>
                FROM
              </span>

              <span>
                UI
              </span>

              <span className="is-muted">
                TO DATA.
              </span>

            </h2>

            <p>
              The application follows a straightforward
              client, API, database and media architecture.
            </p>

          </div>

          <div className="cs-mentor__architecture-list">

            {architecture.map((item) => (
              <article
                className="cs-mentor__architecture-item"
                key={item.number}
              >

                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <span className="cs-mentor__architecture-arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          STACK
      ===================================== */}

      <section className="cs-mentor__stack-section">

        <div className="cs-mentor__container">

          <div className="cs-mentor__section-top">
            <span>(07) — TECHNOLOGY</span>
            <span>STACK</span>
          </div>

          <div className="cs-mentor__stack-heading">

            <h2 className="cs-mentor__section-title">

              <span>
                BUILT
              </span>

              <span className="is-muted">
                WITH.
              </span>

            </h2>

            <p>
              Technologies used across the frontend,
              backend, database, media and application
              experience.
            </p>

          </div>

          <div className="cs-mentor__stack">

            {stack.map((item) => (
              <span
                className="cs-mentor__stack-item"
                key={item}
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          MY CONTRIBUTION
      ===================================== */}

      <section className="cs-mentor__section cs-mentor__section--border">

        <div className="cs-mentor__container">

          <div className="cs-mentor__section-top">
            <span>(08) — MY CONTRIBUTION</span>
            <span>ROLE / RESPONSIBILITY</span>
          </div>

          <div className="cs-mentor__contribution">

            <h2 className="cs-mentor__section-title">

              <span>
                I BUILT
              </span>

              <span>
                THE
              </span>

              <span className="is-muted">
                SYSTEM.
              </span>

            </h2>

            <div className="cs-mentor__body cs-mentor__reveal">

              <p className="is-large">
                This project involved working across
                the full application rather than only
                the visual layer.
              </p>

              <ul>
                <li>
                  React frontend architecture
                </li>

                <li>
                  Responsive UI development
                </li>

                <li>
                  REST API development
                </li>

                <li>
                  MongoDB data modeling
                </li>

                <li>
                  Authentication and authorization
                </li>

                <li>
                  Cloud media integration
                </li>

                <li>
                  PWA implementation
                </li>

                <li>
                  Deployment and integration
                </li>
              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          CHALLENGES
      ===================================== */}

      <section className="cs-mentor__section">

        <div className="cs-mentor__container">

          <div className="cs-mentor__section-top">
            <span>(09) — CHALLENGES</span>
            <span>WHAT I LEARNED</span>
          </div>

          <div className="cs-mentor__features-heading">

            <h2 className="cs-mentor__section-title">

              <span>
                BUILDING
              </span>

              <span className="is-muted">
                IN PRACTICE.
              </span>

            </h2>

            <p className="cs-mentor__reveal">
              The project helped me understand the
              difference between building individual
              features and building a complete product.
            </p>

          </div>

          <div className="cs-mentor__challenges-grid">

            {challenges.map((challenge) => (
              <article
                className="cs-mentor__challenge"
                key={challenge.number}
              >

                <span>
                  {challenge.number}
                </span>

                <h3>
                  {challenge.title}
                </h3>

                <p>
                  {challenge.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          RESULT / LEARNING
      ===================================== */}

      <section className="cs-mentor__result">

        <div className="cs-mentor__container">

          <div className="cs-mentor__result-content">

            <span>
              (10) — TAKEAWAY
            </span>

            <h2>
              BUILD.
              <br />
              <span>LEARN.</span>
              <br />
              IMPROVE.
            </h2>

            <p>
              CS Mentor gave me practical experience
              with building a complete web product —
              from structuring the interface and API
              to managing data, authentication, media
              and deployment.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          PROJECT LINKS
      ===================================== */}

      <section className="cs-mentor__links">

        <div className="cs-mentor__container">

          <div className="cs-mentor__links-top">
            <span>
              (11) — EXPLORE
            </span>

            <span>
              CS MENTOR
            </span>
          </div>

          <div className="cs-mentor__links-grid">

            <a
              href="https://www.csmentor.in/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LIVE PROJECT</span>
              <strong>↗</strong>
            </a>

            <a
              href="https://github.com/Rahul123-debug539"
              target="_blank"
              rel="noreferrer"
            >
              <span>GITHUB</span>
              <strong>↗</strong>
            </a>

            <Link to="/work/jobpilot-ai">
              <span>NEXT PROJECT</span>
              <strong>→</strong>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default CSMentorPage;