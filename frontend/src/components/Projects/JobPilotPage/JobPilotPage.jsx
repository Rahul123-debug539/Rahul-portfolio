import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./JobPilotPage.css";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "RESUME ANALYSIS",
    description:
      "Analyze a candidate's resume and extract useful information that can be used throughout the job-search workflow.",
  },
  {
    number: "02",
    title: "ATS EVALUATION",
    description:
      "Evaluate how closely a resume aligns with a job description and surface areas that could be improved.",
  },
  {
    number: "03",
    title: "JOB MATCHING",
    description:
      "Compare candidate information with job requirements to identify opportunities that are a stronger match.",
  },
  {
    number: "04",
    title: "JOB DISCOVERY",
    description:
      "Create a more structured workflow for discovering relevant opportunities instead of manually checking every listing.",
  },
  {
    number: "05",
    title: "APPLICATION WORKFLOW",
    description:
      "Organize the job-search process around opportunities, compatibility and application-related actions.",
  },
  {
    number: "06",
    title: "AI-ASSISTED DECISIONS",
    description:
      "Use AI-oriented analysis to help candidates understand opportunities and make better decisions during their search.",
  },
];

const workflow = [
  {
    number: "01",
    title: "UPLOAD RESUME",
    description:
      "The candidate starts by providing their resume as the primary source of professional information.",
  },
  {
    number: "02",
    title: "ANALYZE PROFILE",
    description:
      "The system processes the available information and prepares it for comparison with job opportunities.",
  },
  {
    number: "03",
    title: "MATCH JOBS",
    description:
      "Job requirements are compared against the candidate profile to identify stronger opportunities.",
  },
  {
    number: "04",
    title: "CHECK ATS",
    description:
      "The resume can be evaluated against specific job requirements to highlight potential compatibility gaps.",
  },
  {
    number: "05",
    title: "REVIEW",
    description:
      "The candidate reviews matched opportunities and decides which applications are worth pursuing.",
  },
];

const architecture = [
  {
    number: "01",
    title: "FRONTEND",
    description:
      "React provides the interface for resume workflows, job discovery, analysis results and application-related interactions.",
  },
  {
    number: "02",
    title: "BACKEND",
    description:
      "Node.js and Express provide the API layer responsible for application logic, authentication and communication with external services.",
  },
  {
    number: "03",
    title: "DATABASE",
    description:
      "MongoDB is used to persist application data and provide a flexible foundation for user and job-related information.",
  },
  {
    number: "04",
    title: "AI LAYER",
    description:
      "AI-oriented processing can be integrated into resume analysis, matching and recommendation workflows.",
  },
];

const challenges = [
  {
    number: "01",
    title: "MATCHING LOGIC",
    description:
      "Designing a useful way to compare a candidate profile with job requirements is more complex than simply matching keywords.",
  },
  {
    number: "02",
    title: "PRODUCT WORKFLOW",
    description:
      "The challenge is not only building individual features but connecting them into a workflow that actually makes job searching easier.",
  },
  {
    number: "03",
    title: "AI INTEGRATION",
    description:
      "AI features need to produce useful and understandable results rather than adding complexity without improving the candidate experience.",
  },
];

const stack = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "REST API",
  "AI",
  "JWT",
  "Vite",
  "CSS",
];

const JobPilotPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         HERO
      ========================================= */

      const heroTimeline = gsap.timeline();

      heroTimeline
        .fromTo(
          ".jobpilot__eyebrow",
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
          ".jobpilot__hero-line span",
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
          ".jobpilot__hero-copy",
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
         GENERAL REVEALS
      ========================================= */

      gsap.utils
        .toArray(".jobpilot__reveal")
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
         FEATURES
      ========================================= */

      gsap.fromTo(
        ".jobpilot__feature",
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
            trigger: ".jobpilot__features-grid",
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         WORKFLOW
      ========================================= */

      gsap.fromTo(
        ".jobpilot__workflow-item",
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
            trigger: ".jobpilot__workflow-list",
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
        ".jobpilot__architecture-item",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".jobpilot__architecture-list",
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
        ".jobpilot__challenge",
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
            trigger: ".jobpilot__challenges-grid",
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
        ".jobpilot__stack-item",
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
            trigger: ".jobpilot__stack",
            start: "top 85%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         VISUAL PARALLAX
      ========================================= */

      gsap.to(".jobpilot__visual-inner", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".jobpilot__visual",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* =========================================
         BACKGROUND NUMBER
      ========================================= */

      gsap.to(".jobpilot__background-number", {
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
      className="jobpilot"
    >
      <div className="jobpilot__grid"></div>

      <div className="jobpilot__background-number">
        02
      </div>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="jobpilot__hero">

        <div className="jobpilot__container">

          <div className="jobpilot__eyebrow">

            <span>
              (02) — CASE STUDY
            </span>

            <span>
              AI / FULL-STACK
            </span>

          </div>

          <div className="jobpilot__hero-content">

            <h1 className="jobpilot__hero-title">

              <span className="jobpilot__hero-line">
                <span>JOBPILOT</span>
              </span>

              <span className="jobpilot__hero-line">
                <span className="jobpilot__muted">
                  AI.
                </span>
              </span>

            </h1>

            <div className="jobpilot__hero-copy">

              <span>
                AI-POWERED JOB PLATFORM
              </span>

              <p>
                A product concept focused on helping
                candidates analyze resumes, evaluate
                opportunities and create a more
                structured job-search workflow.
              </p>

            </div>

          </div>

          <div className="jobpilot__hero-meta">

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
              <strong>PRODUCT CONCEPT</strong>
            </div>

            <div>
              <span>STACK</span>
              <strong>MERN / AI</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          VISUAL
      ===================================== */}

      <section className="jobpilot__visual-section">

        <div className="jobpilot__container">

          <div className="jobpilot__visual">

            <div className="jobpilot__visual-inner">

              <div className="jobpilot__visual-grid"></div>

              <div className="jobpilot__visual-orbit"></div>

              <div className="jobpilot__visual-center">

                <span>
                  PROJECT / 02
                </span>

                <strong>
                  JOBPILOT AI
                </strong>

                <small>
                  MATCH / ANALYZE / APPLY
                </small>

              </div>

              <div className="jobpilot__visual-corner jobpilot__visual-corner--tl">
                ↗
              </div>

              <div className="jobpilot__visual-corner jobpilot__visual-corner--br">
                2026 / AI PRODUCT
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          OVERVIEW
      ===================================== */}

      <section className="jobpilot__section">

        <div className="jobpilot__container">

          <div className="jobpilot__section-top">

            <span>
              (02) — OVERVIEW
            </span>

            <span>
              THE PRODUCT
            </span>

          </div>

          <div className="jobpilot__two-column">

            <h2 className="jobpilot__section-title">

              <span>
                MAKING
              </span>

              <span>
                JOB SEARCH
              </span>

              <span className="jobpilot__muted">
                SMARTER.
              </span>

            </h2>

            <div className="jobpilot__body jobpilot__reveal">

              <p className="is-large">
                JobPilot AI is a product concept
                designed around one simple idea:
                reduce the amount of manual work
                involved in searching for jobs.
              </p>

              <p>
                Instead of treating a resume as a
                static document, the product uses it
                as the foundation for understanding
                the candidate's skills and experience.
              </p>

              <p>
                That information can then be compared
                with job requirements to surface more
                relevant opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          PROBLEM
      ===================================== */}

      <section className="jobpilot__section jobpilot__section--border">

        <div className="jobpilot__container">

          <div className="jobpilot__section-top">

            <span>
              (03) — THE PROBLEM
            </span>

            <span>
              JOB SEARCH
            </span>

          </div>

          <div className="jobpilot__problem">

            <h2 className="jobpilot__section-title">

              <span>
                TOO MANY
              </span>

              <span>
                JOBS.
              </span>

              <span className="jobpilot__muted">
                TOO LITTLE SIGNAL.
              </span>

            </h2>

            <div className="jobpilot__body jobpilot__reveal">

              <p className="is-large">
                Finding a job is not only about
                discovering vacancies. Candidates
                also need to understand whether an
                opportunity actually fits their profile.
              </p>

              <p>
                Manually comparing resumes with job
                descriptions can become repetitive,
                especially when applying to multiple
                opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          SOLUTION
      ===================================== */}

      <section className="jobpilot__section">

        <div className="jobpilot__container">

          <div className="jobpilot__section-top">

            <span>
              (04) — THE SOLUTION
            </span>

            <span>
              PRODUCT APPROACH
            </span>

          </div>

          <div className="jobpilot__two-column">

            <h2 className="jobpilot__section-title">

              <span>
                TURN
              </span>

              <span>
                SEARCH
              </span>

              <span className="jobpilot__muted">
                INTO SIGNAL.
              </span>

            </h2>

            <div className="jobpilot__body jobpilot__reveal">

              <p className="is-large">
                The product brings resume analysis,
                job matching and application decisions
                into one connected workflow.
              </p>

              <div className="jobpilot__flow">

                <div>
                  <span>01</span>
                  <strong>RESUME</strong>
                </div>

                <span>↓</span>

                <div>
                  <span>02</span>
                  <strong>ANALYSIS</strong>
                </div>

                <span>↓</span>

                <div>
                  <span>03</span>
                  <strong>MATCHING</strong>
                </div>

                <span>↓</span>

                <div>
                  <span>04</span>
                  <strong>DECISION</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          FEATURES
      ===================================== */}

      <section className="jobpilot__section jobpilot__section--border">

        <div className="jobpilot__container">

          <div className="jobpilot__section-top">

            <span>
              (05) — FEATURES
            </span>

            <span>
              WHAT IT DOES
            </span>

          </div>

          <div className="jobpilot__features-heading">

            <h2 className="jobpilot__section-title">

              <span>
                CORE
              </span>

              <span className="jobpilot__muted">
                FEATURES.
              </span>

            </h2>

            <p className="jobpilot__reveal">
              The concept connects resume intelligence,
              opportunity discovery and application
              workflows into a single product.
            </p>

          </div>

          <div className="jobpilot__features-grid">

            {features.map((feature) => (
              <article
                className="jobpilot__feature"
                key={feature.number}
              >

                <div className="jobpilot__feature-top">

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

                <span className="jobpilot__feature-arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          WORKFLOW
      ===================================== */}

      <section className="jobpilot__section">

        <div className="jobpilot__container">

          <div className="jobpilot__section-top">

            <span>
              (06) — WORKFLOW
            </span>

            <span>
              FROM RESUME TO OPPORTUNITY
            </span>

          </div>

          <div className="jobpilot__workflow-heading">

            <h2 className="jobpilot__section-title">

              <span>
                ONE
              </span>

              <span>
                CONNECTED
              </span>

              <span className="jobpilot__muted">
                FLOW.
              </span>

            </h2>

            <p>
              The product is designed around a
              straightforward sequence that turns
              candidate information into actionable
              job opportunities.
            </p>

          </div>

          <div className="jobpilot__workflow-list">

            {workflow.map((item) => (
              <article
                className="jobpilot__workflow-item"
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

                <span className="jobpilot__workflow-arrow">
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

      <section className="jobpilot__section jobpilot__section--border">

        <div className="jobpilot__container">

          <div className="jobpilot__section-top">

            <span>
              (07) — ARCHITECTURE
            </span>

            <span>
              HOW IT WORKS
            </span>

          </div>

          <div className="jobpilot__architecture-heading">

            <h2 className="jobpilot__section-title">

              <span>
                PRODUCT
              </span>

              <span>
                FROM
              </span>

              <span className="jobpilot__muted">
                THE INSIDE.
              </span>

            </h2>

            <p>
              A MERN-based architecture provides the
              application foundation while AI-oriented
              services can handle analysis and matching
              workflows.
            </p>

          </div>

          <div className="jobpilot__architecture-list">

            {architecture.map((item) => (
              <article
                className="jobpilot__architecture-item"
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

                <span className="jobpilot__architecture-arrow">
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

      <section className="jobpilot__stack-section">

        <div className="jobpilot__container">

          <div className="jobpilot__section-top">

            <span>
              (08) — TECHNOLOGY
            </span>

            <span>
              STACK
            </span>

          </div>

          <div className="jobpilot__stack-heading">

            <h2 className="jobpilot__section-title">

              <span>
                BUILT
              </span>

              <span className="jobpilot__muted">
                WITH.
              </span>

            </h2>

            <p>
              Technologies used or planned across
              the frontend, backend, database and
              AI-oriented product layer.
            </p>

          </div>

          <div className="jobpilot__stack">

            {stack.map((item) => (
              <span
                className="jobpilot__stack-item"
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

      <section className="jobpilot__section jobpilot__section--border">

        <div className="jobpilot__container">

          <div className="jobpilot__section-top">

            <span>
              (09) — MY CONTRIBUTION
            </span>

            <span>
              ROLE / RESPONSIBILITY
            </span>

          </div>

          <div className="jobpilot__contribution">

            <h2 className="jobpilot__section-title">

              <span>
                BUILDING
              </span>

              <span>
                THE
              </span>

              <span className="jobpilot__muted">
                PRODUCT.
              </span>

            </h2>

            <div className="jobpilot__body jobpilot__reveal">

              <p className="is-large">
                The project focuses on building the
                technical foundation for an AI-assisted
                job-search product.
              </p>

              <ul>

                <li>
                  React frontend development
                </li>

                <li>
                  Backend API architecture
                </li>

                <li>
                  MongoDB data modeling
                </li>

                <li>
                  Authentication and authorization
                </li>

                <li>
                  Resume analysis workflow
                </li>

                <li>
                  Job matching logic
                </li>

                <li>
                  AI feature integration
                </li>

                <li>
                  Product workflow design
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          CHALLENGES
      ===================================== */}

      <section className="jobpilot__section">

        <div className="jobpilot__container">

          <div className="jobpilot__section-top">

            <span>
              (10) — CHALLENGES
            </span>

            <span>
              WHAT I LEARNED
            </span>

          </div>

          <div className="jobpilot__features-heading">

            <h2 className="jobpilot__section-title">

              <span>
                BUILDING
              </span>

              <span className="jobpilot__muted">
                WITH AI.
              </span>

            </h2>

            <p className="jobpilot__reveal">
              The project pushed the focus beyond
              traditional CRUD development into
              product thinking and AI-assisted workflows.
            </p>

          </div>

          <div className="jobpilot__challenges-grid">

            {challenges.map((challenge) => (
              <article
                className="jobpilot__challenge"
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
          RESULT
      ===================================== */}

      <section className="jobpilot__result">

        <div className="jobpilot__container">

          <div className="jobpilot__result-content">

            <span>
              (11) — TAKEAWAY
            </span>

            <h2>
              SEARCH.
              <br />
              <span>MATCH.</span>
              <br />
              MOVE.
            </h2>

            <p>
              JobPilot AI represents a shift from
              simply building web applications toward
              designing products that use technology
              to reduce repetitive work and improve
              decision-making.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          LINKS
      ===================================== */}

      <section className="jobpilot__links">

        <div className="jobpilot__container">

          <div className="jobpilot__links-top">

            <span>
              (12) — EXPLORE
            </span>

            <span>
              JOBPILOT AI
            </span>

          </div>

          <div className="jobpilot__links-grid">

            <a
              href="https://github.com/Rahul123-debug539/JobPilot-AI"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                GITHUB
              </span>

              <strong>
                ↗
              </strong>
            </a>

            <Link to="/work/cs-mentor">

              <span>
                PREVIOUS PROJECT
              </span>

              <strong>
                ←
              </strong>

            </Link>

            <Link to="/contact">

              <span>
                START A CONVERSATION
              </span>

              <strong>
                ↗
              </strong>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default JobPilotPage;