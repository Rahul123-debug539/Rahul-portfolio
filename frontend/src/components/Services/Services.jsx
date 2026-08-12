import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "FRONTEND DEVELOPMENT",
    description:
      "Responsive, accessible and interactive interfaces built with React and modern JavaScript.",
    stack: ["React", "JavaScript", "CSS", "GSAP"],
  },
  {
    number: "02",
    title: "FULL-STACK DEVELOPMENT",
    description:
      "Complete web applications connecting polished React interfaces with reliable backend systems.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    number: "03",
    title: "API & BACKEND DEVELOPMENT",
    description:
      "REST APIs with authentication, authorization, CRUD operations and database integration.",
    stack: ["Node.js", "Express", "JWT", "MongoDB"],
  },
  {
    number: "04",
    title: "WEBSITE & UI DEVELOPMENT",
    description:
      "Modern websites focused on strong visual hierarchy, responsive layouts and engaging interactions.",
    stack: ["React", "CSS", "GSAP", "Responsive UI"],
  },
];

const process = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Understand the idea, requirements, users and the actual problem we are trying to solve.",
  },
  {
    number: "02",
    title: "PLAN",
    description:
      "Define the structure, technology, components, APIs and development approach before writing the core code.",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "Create a clear visual direction with strong hierarchy, responsive layouts and meaningful interactions.",
  },
  {
    number: "04",
    title: "BUILD",
    description:
      "Develop the frontend, backend and integrations while keeping the code modular and maintainable.",
  },
  {
    number: "05",
    title: "TEST",
    description:
      "Check functionality, responsiveness, edge cases and user experience before the final release.",
  },
  {
    number: "06",
    title: "SHIP",
    description:
      "Deploy the product, connect the required services and prepare it for real-world usage.",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);

  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services__heading-line span",
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".services__heading",
            start: "top 78%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".service-row",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services__list",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".process-card",
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
            trigger: ".process__grid",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const changeService = (index) => {
    setActiveService(index);

    gsap.fromTo(
      previewRef.current,
      {
        opacity: 0,
        y: 20,
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

  const selected = services[activeService];

  return (
    <section
      ref={sectionRef}
      className="services"
      id="services"
    >
      <div className="services__container">

        {/* HEADER */}
        <div className="services__top">
          <span>(06) — SERVICES</span>
          <span>WHAT I CAN BUILD</span>
        </div>

        {/* INTRO */}
        <div className="services__intro">
          <h2 className="services__heading">
            <span className="services__heading-line">
              <span>TURNING</span>
            </span>

            <span className="services__heading-line">
              <span>IDEAS</span>
            </span>

            <span className="services__heading-line">
              <span className="services__heading-muted">
                INTO PRODUCTS.
              </span>
            </span>
          </h2>

          <p className="services__intro-text">
            From frontend interfaces to complete full-stack
            applications, I focus on building useful products
            with thoughtful engineering.
          </p>
        </div>

        {/* SERVICES */}
        <div className="services__content">

          <div className="services__list">
            {services.map((service, index) => (
              <button
                key={service.number}
                className={`service-row ${
                  activeService === index
                    ? "is-active"
                    : ""
                }`}
                onMouseEnter={() => changeService(index)}
                onFocus={() => changeService(index)}
              >
                <span className="service-row__number">
                  {service.number}
                </span>

                <span className="service-row__title">
                  {service.title}
                </span>

                <span className="service-row__arrow">
                  ↗
                </span>
              </button>
            ))}
          </div>

          {/* PREVIEW */}
          <div
            ref={previewRef}
            className="services__preview"
          >
            <div className="services__preview-top">
              <span>{selected.number}</span>
              <span>CAPABILITY</span>
            </div>

            <div>
              <h3>{selected.title}</h3>

              <p>{selected.description}</p>

              <div className="services__stack">
                {selected.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="services__preview-mark">
              +
            </div>
          </div>

        </div>

        {/* PROCESS */}
        <div className="process">

          <div className="process__header">
            <span>(07) — PROCESS</span>
            <span>HOW I WORK</span>
          </div>

          <div className="process__intro">
            <h2>
              FROM IDEA
              <br />
              TO <span>REALITY.</span>
            </h2>

            <p>
              A simple process keeps development focused,
              transparent and aligned with the actual goal of
              the product.
            </p>
          </div>

          <div className="process__grid">
            {process.map((item) => (
              <article
                className="process-card"
                key={item.number}
              >
                <div className="process-card__number">
                  {item.number}
                </div>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <span className="process-card__arrow">
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

export default Services;