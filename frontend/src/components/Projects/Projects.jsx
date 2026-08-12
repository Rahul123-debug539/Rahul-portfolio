import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "CS MENTOR",
    category: "FULL-STACK E-LEARNING PLATFORM",
    description:
      "A complete learning platform designed for students to access computer science content through a modern, responsive and easy-to-use interface.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "PWA",
    ],
    type: "EDUCATION / MERN",
    year: "2026",
    live: "https://www.csmentor.in/",
    github: "https://github.com/Rahul123-debug539",
  },
  {
    number: "02",
    title: "JOBPILOT AI",
    category: "AI-POWERED JOB PLATFORM",
    description:
      "An AI-focused job platform concept designed to help candidates analyze opportunities, evaluate resume compatibility and streamline their job search workflow.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AI",
      "REST API",
    ],
    type: "AI / FULL-STACK",
    year: "2026",
    live: "#",
    github:
      "https://github.com/Rahul123-debug539/JobPilot-AI",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* --------------------------------
         SECTION HEADER
      -------------------------------- */

      gsap.fromTo(
        ".projects__heading-word",
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
          scrollTrigger: {
            trigger: ".projects__heading",
            start: "top 82%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".projects__intro",
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
            trigger: ".projects__intro",
            start: "top 82%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".projects__top span",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects__top",
            start: "top 88%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* --------------------------------
         PROJECT CARDS
      -------------------------------- */

      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card, index) => {
        const visual = card.querySelector(
          ".project-card__visual"
        );

        const visualGrid = card.querySelector(
          ".project-card__visual-grid"
        );

        const visualCenter = card.querySelector(
          ".project-card__visual-center"
        );

        const details = card.querySelector(
          ".project-card__details"
        );

        const category = card.querySelector(
          ".project-card__category"
        );

        const title = card.querySelector(
          ".project-card__title-line"
        );

        const description = card.querySelector(
          ".project-card__description"
        );

        const technologies = card.querySelectorAll(
          ".project-card__technologies span"
        );

        const actions = card.querySelectorAll(
          ".project-card__actions a"
        );

        const meta = card.querySelectorAll(
          ".project-card__meta-item"
        );

        /* --------------------------------
           CARD MAIN REVEAL
        -------------------------------- */

        const cardTimeline = gsap.timeline({
          paused: true,
        });

        cardTimeline
          .fromTo(
            visual,
            {
              y: 70,
              scale: 0.94,
              opacity: 0,
            },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
            }
          )
          .fromTo(
            category,
            {
              y: 20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.55"
          )
          .fromTo(
            title,
            {
              yPercent: 110,
            },
            {
              yPercent: 0,
              duration: 0.7,
              ease: "power4.out",
            },
            "-=0.35"
          )
          .fromTo(
            description,
            {
              y: 25,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.55,
              ease: "power3.out",
            },
            "-=0.35"
          )
          .fromTo(
            technologies,
            {
              y: 15,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.05,
              ease: "power3.out",
            },
            "-=0.25"
          )
          .fromTo(
            actions,
            {
              y: 15,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.2"
          )
          .fromTo(
            meta,
            {
              y: 20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.3"
          );

        ScrollTrigger.create({
          trigger: card,
          start: "top 78%",
          onEnter: () => cardTimeline.play(),
          onLeaveBack: () => cardTimeline.reverse(),
        });

        /* --------------------------------
           VISUAL PARALLAX
        -------------------------------- */

        gsap.fromTo(
          visualGrid,
          {
            y: -30,
          },
          {
            y: 30,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        /* --------------------------------
           VISUAL CENTER PARALLAX
        -------------------------------- */

        gsap.fromTo(
          visualCenter,
          {
            y: 25,
          },
          {
            y: -25,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );

        /* --------------------------------
           SLIGHT ALTERNATING MOVEMENT
        -------------------------------- */

        gsap.fromTo(
          card,
          {
            x: index % 2 === 0 ? -20 : 20,
          },
          {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 45%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="projects"
      id="work"
    >
      <div className="projects__container">

        {/* TOP BAR */}

        <div className="projects__top">
          <span>(03) — SELECTED WORK</span>

          <span>PROJECTS / 02</span>
        </div>

        {/* HEADING */}

        <div className="projects__heading-wrap">
          <h2 className="projects__heading">

            <span className="projects__heading-line">
              <span className="projects__heading-word">
                SELECTED
              </span>
            </span>

            <span className="projects__heading-line">
              <span className="projects__heading-word projects__heading-muted">
                WORK.
              </span>
            </span>

          </h2>

          <p className="projects__intro">
            A selection of products and applications I've
            designed and developed — from learning platforms
            to AI-powered tools.
          </p>
        </div>

        {/* PROJECT LIST */}

        <div className="projects__list">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >

              {/* CARD TOP */}

              <div className="project-card__top">
                <span>{project.number}</span>

                <span>{project.year}</span>
              </div>

              {/* VISUAL */}

              <div className="project-card__visual-wrap">

                <div className="project-card__visual">

                  <div className="project-card__visual-grid">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="project-card__visual-orbit">
                    <div className="project-card__orbit-dot"></div>
                  </div>

                  <div className="project-card__visual-center">

                    <span className="project-card__visual-number">
                      {project.number}
                    </span>

                    <strong>
                      {project.title}
                    </strong>

                    <small>
                      {project.type}
                    </small>

                  </div>

                  <div className="project-card__visual-corner project-card__visual-corner--tl">
                    ↗
                  </div>

                  <div className="project-card__visual-corner project-card__visual-corner--br">
                    SCROLL / EXPLORE
                  </div>

                </div>

              </div>

              {/* DETAILS */}

              <div className="project-card__details">

                <div className="project-card__content">

                  <span className="project-card__category">
                    {project.category}
                  </span>

                  <h3 className="project-card__title">

                    <span className="project-card__title-line-wrap">

                      <span className="project-card__title-line">
                        {project.title}
                      </span>

                    </span>

                  </h3>

                  <p className="project-card__description">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="project-card__technologies">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  {/* ACTIONS */}

                  <div className="project-card__actions">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        project.live === "#"
                          ? "is-disabled"
                          : ""
                      }
                    >
                      LIVE PROJECT
                      <span>↗</span>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GITHUB
                      <span>↗</span>
                    </a>

                  </div>

                </div>

                {/* META */}

                <div className="project-card__meta">

                  <div className="project-card__meta-item">

                    <span>ROLE</span>

                    <strong>
                      FULL-STACK
                    </strong>

                  </div>

                  <div className="project-card__meta-item">

                    <span>STACK</span>

                    <strong>
                      MERN
                    </strong>

                  </div>

                  <div className="project-card__meta-item">

                    <span>STATUS</span>

                    <strong>
                      {project.number === "01"
                        ? "LIVE"
                        : "BUILDING"}
                    </strong>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;