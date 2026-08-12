import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WorkPage.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "CS MENTOR",
    category: "FULL-STACK E-LEARNING PLATFORM",
    year: "2026",
    type: "EDUCATION / MERN",
    description:
      "A complete learning platform built to organize Computer Science content into categories, topics and subtopics with a modern learning experience.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "PWA",
    ],
    role: "FULL-STACK DEVELOPMENT",
    slug: "/work/cs-mentor",
    live: "https://www.csmentor.in/",
  },
  {
    number: "02",
    title: "JOBPILOT AI",
    category: "AI-POWERED JOB PLATFORM",
    year: "2026",
    type: "AI / FULL-STACK",
    description:
      "A job-focused product concept designed around resume analysis, job matching, ATS evaluation and a more structured job-search workflow.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI",
      "REST API",
    ],
    role: "FULL-STACK DEVELOPMENT",
    slug: "/work/jobpilot-ai",
    live: "#",
  },
];

const WorkPage = () => {
  const pageRef = useRef(null);

useEffect(() => {
  const ctx = gsap.context(() => {

    /* =========================================
       HERO
    ========================================= */

    const heroTimeline = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    heroTimeline
      .fromTo(
        ".work-page__eyebrow",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
        }
      )

      .fromTo(
        ".work-page__hero-line span",
        {
          yPercent: 115,
        },
        {
          yPercent: 0,
          duration: 1.25,
          stagger: 0.16,
          ease: "power4.out",
        },
        "-=0.4"
      )

      .fromTo(
        ".work-page__hero-copy",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
        },
        "-=0.5"
      );


    /* =========================================
       PROJECT REVEALS
    ========================================= */

    gsap.utils
      .toArray(".work-project")
      .forEach((project) => {

        const visual = project.querySelector(
          ".work-project__visual"
        );

        const visualInner = project.querySelector(
          ".work-project__visual-inner"
        );

        const content = project.querySelector(
          ".work-project__content"
        );

        const category = project.querySelector(
          ".work-project__category"
        );

        const title = project.querySelector(
          ".work-project__content h2"
        );

        const description = project.querySelector(
          ".work-project__description"
        );

        const technologies = project.querySelectorAll(
          ".work-project__technologies span"
        );

        const actions = project.querySelector(
          ".work-project__actions"
        );

        const meta = project.querySelectorAll(
          ".work-project__meta-item"
        );


        /* -----------------------------------------
           PROJECT CONTAINER
        ----------------------------------------- */

        gsap.fromTo(
          project,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: project,
              start: "top 88%",
              toggleActions:
                "play reverse play reverse",

              once: false,
            },
          }
        );


        /* -----------------------------------------
           VISUAL
        ----------------------------------------- */

        gsap.fromTo(
          visual,
          {
            opacity: 0,
            scale: 0.92,
            y: 60,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",

            scrollTrigger: {
              trigger: visual,
              start: "top 88%",
              toggleActions:
                "play reverse play reverse",
            },
          }
        );


        /* -----------------------------------------
           VISUAL PARALLAX
        ----------------------------------------- */

        gsap.fromTo(
          visualInner,
          {
            yPercent: 8,
          },
          {
            yPercent: -8,
            ease: "none",

            scrollTrigger: {
              trigger: visual,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );


        /* -----------------------------------------
           CATEGORY
        ----------------------------------------- */

        gsap.fromTo(
          category,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power3.out",

            scrollTrigger: {
              trigger: content,
              start: "top 88%",
              toggleActions:
                "play reverse play reverse",
            },
          }
        );


        /* -----------------------------------------
           TITLE
        ----------------------------------------- */

        gsap.fromTo(
          title,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",

            scrollTrigger: {
              trigger: content,
              start: "top 84%",
              toggleActions:
                "play reverse play reverse",
            },
          }
        );


        /* -----------------------------------------
           DESCRIPTION
        ----------------------------------------- */

        gsap.fromTo(
          description,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",

            scrollTrigger: {
              trigger: description,
              start: "top 90%",
              toggleActions:
                "play reverse play reverse",
            },
          }
        );


        /* -----------------------------------------
           TECHNOLOGIES
        ----------------------------------------- */

        gsap.fromTo(
          technologies,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: "power3.out",

            scrollTrigger: {
              trigger: technologies[0],
              start: "top 90%",
              toggleActions:
                "play reverse play reverse",
            },
          }
        );


        /* -----------------------------------------
           ACTIONS
        ----------------------------------------- */

        gsap.fromTo(
          actions,
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",

            scrollTrigger: {
              trigger: actions,
              start: "top 92%",
              toggleActions:
                "play reverse play reverse",
            },
          }
        );


        /* -----------------------------------------
           META
        ----------------------------------------- */

        gsap.fromTo(
          meta,
          {
            x: 30,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",

            scrollTrigger: {
              trigger: meta[0],
              start: "top 90%",
              toggleActions:
                "play reverse play reverse",
            },
          }
        );

      });


    /* =========================================
       CTA
    ========================================= */

    gsap.fromTo(
      ".work-page__cta-content",
      {
        y: 70,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".work-page__cta",
          start: "top 82%",
          toggleActions:
            "play reverse play reverse",
        },
      }
    );

  }, pageRef);


  return () => ctx.revert();

}, []);

  return (
    <main
      ref={pageRef}
      className="work-page"
    >
      <div className="work-page__grid"></div>

      <div className="work-page__background-number">
        03
      </div>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="work-page__hero">

        <div className="work-page__container">

          <div className="work-page__eyebrow">
            <span>(03) — SELECTED WORK</span>
            <span>PROJECTS / {projects.length}</span>
          </div>

          <div className="work-page__hero-content">

            <h1 className="work-page__hero-title">

              <span className="work-page__hero-line">
                <span>SELECTED</span>
              </span>

              <span className="work-page__hero-line">
                <span className="work-page__hero-muted">
                  WORK.
                </span>
              </span>

            </h1>

            <div className="work-page__hero-copy">

              <span>
                PROJECT ARCHIVE
              </span>

              <p>
                A collection of web applications and
                digital products I've designed and built
                across frontend, backend and full-stack
                development.
              </p>

            </div>

          </div>

          <div className="work-page__hero-footer">

            <span>02 PROJECTS</span>

            <span>FULL-STACK / WEB / AI</span>

            <span>2026</span>

          </div>

        </div>

      </section>


      {/* =====================================
          PROJECTS
      ===================================== */}

      <section className="work-page__projects">

        <div className="work-page__container">

          {projects.map((project) => (
            <article
              className="work-project"
              key={project.number}
            >

              {/* PROJECT HEADER */}

              <div className="work-project__top">

                <span>
                  {project.number}
                </span>

                <span>
                  {project.year}
                </span>

              </div>


              {/* PROJECT VISUAL */}

              <div className="work-project__visual">

                <div className="work-project__visual-inner">

                  <div className="work-project__visual-grid"></div>

                  <div className="work-project__visual-orbit"></div>

                  <div className="work-project__visual-center">

                    <span>
                      PROJECT / {project.number}
                    </span>

                    <strong>
                      {project.title}
                    </strong>

                    <small>
                      {project.type}
                    </small>

                  </div>

                  <span className="work-project__corner work-project__corner--tl">
                    ↗
                  </span>

                  <span className="work-project__corner work-project__corner--br">
                    {project.year} / BUILD
                  </span>

                </div>

              </div>


              {/* PROJECT DETAILS */}

              <div className="work-project__details">

                <div className="work-project__content">

                  <span className="work-project__category">
                    {project.category}
                  </span>

                  <h2>
                    {project.title}
                  </h2>

                  <p className="work-project__description">
                    {project.description}
                  </p>


                  <div className="work-project__technologies">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>


                  <div className="work-project__actions">

                    <Link to={project.slug}>
                      VIEW CASE STUDY
                      <span>↗</span>
                    </Link>

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        LIVE PROJECT
                        <span>↗</span>
                      </a>
                    )}

                  </div>

                </div>


                {/* META */}

                <div className="work-project__meta">

                  <div className="work-project__meta-item">

                    <span>ROLE</span>

                    <strong>
                      {project.role}
                    </strong>

                  </div>

                  <div className="work-project__meta-item">

                    <span>TYPE</span>

                    <strong>
                      {project.type}
                    </strong>

                  </div>

                  <div className="work-project__meta-item">

                    <span>YEAR</span>

                    <strong>
                      {project.year}
                    </strong>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="work-page__cta">

        <div className="work-page__container">

          <div className="work-page__cta-content">

            <span>
              (04) — NEXT PROJECT
            </span>

            <h2>
              HAVE AN
              <br />
              <span>IDEA?</span>
            </h2>

            <p>
              Let's turn it into something useful,
              functional and memorable.
            </p>

            <Link to="/contact">
              START A CONVERSATION
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default WorkPage;