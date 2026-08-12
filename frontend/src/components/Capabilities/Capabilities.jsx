import {
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Capabilities.css";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: "01",
    title: "WEB APPLICATIONS",
    description:
      "Responsive and interactive web applications focused on usability, performance and clean frontend architecture.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "FULL-STACK PRODUCTS",
    description:
      "Complete web products with React on the frontend and Node.js, Express and MongoDB powering the backend.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
  {
    number: "03",
    title: "ADMIN DASHBOARDS",
    description:
      "Functional dashboards for managing users, content, products, analytics and application data.",
    technologies: [
      "React",
      "REST API",
      "JWT",
      "MongoDB",
    ],
  },
  {
    number: "04",
    title: "API-DRIVEN SYSTEMS",
    description:
      "Secure and scalable REST APIs with authentication, authorization, validation and database integration.",
    technologies: [
      "Node.js",
      "Express",
      "JWT",
      "REST",
    ],
  },
  {
    number: "05",
    title: "PROGRESSIVE WEB APPS",
    description:
      "Installable web applications with caching, offline capabilities and responsive experiences across devices.",
    technologies: [
      "PWA",
      "Service Worker",
      "IndexedDB",
      "React",
    ],
  },
];

const Capabilities = () => {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         HEADER
      ========================================= */

      gsap.fromTo(
        ".capabilities__header > *",
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
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         HEADING
      ========================================= */

      gsap.fromTo(
        ".capabilities__heading-line",
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".capabilities__intro",
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
        ".capabilities__intro-text",
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
            trigger: ".capabilities__intro",
            start: "top 70%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         LIST
      ========================================= */

      gsap.fromTo(
        ".capabilities__item",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: ".capabilities__content",
            start: "top 78%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         PREVIEW
      ========================================= */

      gsap.fromTo(
        ".capabilities__preview",
        {
          x: 45,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ".capabilities__content",
            start: "top 75%",
            toggleActions:
              "play reverse play reverse",
          },
        }
      );

      /* =========================================
         BACKGROUND NUMBER
      ========================================= */

      gsap.to(
        ".capabilities__background-number",
        {
          yPercent: -15,
          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      /* =========================================
         PREVIEW SYMBOL
      ========================================= */

      gsap.to(
        ".capabilities__preview-symbol",
        {
          rotate: 90,
          duration: 5,
          repeat: -1,
          ease: "none",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (index) => {
    if (index === activeIndex) return;

    setActiveIndex(index);

    if (!previewRef.current) return;

    gsap.fromTo(
      previewRef.current,
      {
        opacity: 0,
        y: 18,
        scale: 0.97,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      }
    );
  };

  const activeCapability =
    capabilities[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="capabilities"
      id="capabilities"
    >
      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div
        className="capabilities__background-number"
        aria-hidden="true"
      >
        02
      </div>

      <div className="capabilities__grid" />

      <div className="capabilities__container">

        {/* ===================================
            HEADER
        =================================== */}

        <div className="capabilities__header">

          <span className="capabilities__label">
            (02) — CAPABILITIES
          </span>

          <span className="capabilities__note">
            WHAT I CAN BUILD
          </span>

        </div>

        {/* ===================================
            INTRO
        =================================== */}

        <div className="capabilities__intro">

          <div className="capabilities__heading-wrap">

            <span className="capabilities__eyebrow">
              FROM INTERFACE TO INFRASTRUCTURE
            </span>

            <h2 className="capabilities__heading">

              <span className="capabilities__heading-line">
                TURNING
              </span>

              <span className="capabilities__heading-line">
                <span>IDEAS</span>{" "}
                <span className="capabilities__muted">
                  INTO
                </span>
              </span>

              <span className="capabilities__heading-line">
                PRODUCTS.
              </span>

            </h2>

          </div>

          <div className="capabilities__intro-copy">

            <span className="capabilities__copy-label">
              (01) — OVERVIEW
            </span>

            <p className="capabilities__intro-text">
              From polished interfaces to complete
              backend systems, I build products that
              are designed to work beyond the screen.
            </p>

            <p className="capabilities__intro-small">
              Each project is approached as a complete
              product — structure, interface, logic,
              data and interaction working together.
            </p>

          </div>

        </div>

        {/* ===================================
            CAPABILITY CONTENT
        =================================== */}

        <div className="capabilities__content">

          {/* =================================
              LIST
          ================================= */}

          <div className="capabilities__list">

            <div className="capabilities__list-header">
              <span>
                (02) — SERVICES
              </span>

              <span>
                {capabilities.length
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>

            {capabilities.map(
              (item, index) => (
                <button
                  key={item.number}
                  type="button"
                  className={`
                    capabilities__item
                    ${
                      activeIndex === index
                        ? "is-active"
                        : ""
                    }
                  `}
                  onMouseEnter={() =>
                    handleChange(index)
                  }
                  onFocus={() =>
                    handleChange(index)
                  }
                  onClick={() =>
                    handleChange(index)
                  }
                >

                  <span className="capabilities__number">
                    {item.number}
                  </span>

                  <span className="capabilities__title">
                    {item.title}
                  </span>

                  <span className="capabilities__item-status">
                    {activeIndex === index
                      ? "ACTIVE"
                      : ""}
                  </span>

                  <span className="capabilities__arrow">
                    ↗
                  </span>

                </button>
              )
            )}

          </div>

          {/* =================================
              PREVIEW
          ================================= */}

          <div
            ref={previewRef}
            className="capabilities__preview"
          >

            <div className="capabilities__preview-top">

              <span>
                CAPABILITY
              </span>

              <span>
                {activeCapability.number}
              </span>

            </div>

            <div className="capabilities__preview-main">

              <div className="capabilities__preview-number">
                {activeCapability.number}
              </div>

              <h3>
                {activeCapability.title}
              </h3>

              <p>
                {activeCapability.description}
              </p>

            </div>

            <div className="capabilities__preview-bottom">

              <div className="capabilities__technologies">

                <span className="capabilities__tech-label">
                  STACK
                </span>

                <div className="capabilities__tech-list">

                  {activeCapability.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>

              </div>

              <div className="capabilities__preview-symbol">
                +
              </div>

            </div>

            <div className="capabilities__preview-lines">
              <span />
              <span />
              <span />
            </div>

          </div>

        </div>

        {/* ===================================
            BOTTOM STATEMENT
        =================================== */}

        <div className="capabilities__closing">

          <span>
            BUILD / CONNECT / DEPLOY
          </span>

          <p>
            One stack.
            <br />
            Multiple possibilities.
          </p>

          <span>
            02 / 10
          </span>

        </div>

      </div>
    </section>
  );
};

export default Capabilities;