import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const EMAIL =
  "rtiwari23763@gmail.com";

const GITHUB =
  "https://github.com/Rahul123-debug539";

const LINKEDIN =
  "https://www.linkedin.com/in/rahulkumartiwari/";

const MAIL_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=Portfolio%20Inquiry`;

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const introItems =
        gsap.utils.toArray(
          ".contact__reveal"
        );

      const headingLines =
        gsap.utils.toArray(
          ".contact__heading-line span"
        );

      const links =
        gsap.utils.toArray(
          ".contact__link"
        );

      const tl = gsap.timeline({
        paused: true,
      });

      tl.fromTo(
        ".contact__top",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      )
        .fromTo(
          headingLines,
          {
            yPercent: 110,
          },
          {
            yPercent: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.25"
        )
        .fromTo(
          ".contact__description",
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
          ".contact__button",
          {
            y: 30,
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.5)",
          },
          "-=0.35"
        )
        .fromTo(
          links,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".contact__decor",
          {
            scale: 0.85,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 72%",

        onEnter: () => {
          tl.restart();
        },

        onEnterBack: () => {
          tl.restart();
        },
      });

      /* Decorative rotation */

      gsap.to(
        ".contact__orb",
        {
          rotate: 360,
          duration: 24,
          repeat: -1,
          ease: "none",
        }
      );

      /* Floating cross */

      gsap.to(
        ".contact__cross",
        {
          y: -10,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="contact"
      id="contact"
    >
      {/* BACKGROUND DECORATION */}

      <div
        className="contact__grid"
        aria-hidden="true"
      />

      <div
        className="contact__orb"
        aria-hidden="true"
      />

      <div
        className="contact__cross"
        aria-hidden="true"
      >
        +
      </div>

      <div
        className="contact__corner contact__corner--top"
        aria-hidden="true"
      >
        <span>IND / 2026</span>
        <span>OPEN TO WORK</span>
      </div>

      <div
        className="contact__corner contact__corner--bottom"
        aria-hidden="true"
      >
        <span>09</span>
        <span>END / CONTACT</span>
      </div>

      <div className="contact__container">

        {/* TOP */}

        <div className="contact__top contact__reveal">
          <span>
            (09) — CONTACT
          </span>

          <span className="contact__availability">
            <i />
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* MAIN */}

        <div className="contact__main">

          {/* LEFT */}

          <div className="contact__heading-wrap">

            <div className="contact__mini-label">
              LET'S CREATE SOMETHING
            </div>

            <h2 className="contact__heading">

              <span className="contact__heading-line">
                <span>
                  HAVE AN
                </span>
              </span>

              <span className="contact__heading-line">
                <span>
                  IDEA?
                </span>
              </span>

              <span className="contact__heading-line">
                <span className="contact__heading-muted">
                  LET'S BUILD IT.
                </span>
              </span>

            </h2>

            <div className="contact__heading-meta">
              <span>REACT</span>
              <span>MERN</span>
              <span>WEB</span>
              <span>2026</span>
            </div>

          </div>

          {/* RIGHT */}

          <div className="contact__side">

            <div className="contact__side-index">
              <span>START</span>
              <strong>01</strong>
            </div>

            <p className="contact__description">
              Whether you're looking for a
              frontend developer, a MERN
              developer or someone to help
              turn an idea into a working
              product, let's start a
              conversation.
            </p>

            <a
              href={MAIL_URL}
              target="_blank"
              rel="noreferrer"
              className="contact__button magnetic-button"
              data-cursor="email"
            >
              <span>
                START A CONVERSATION
              </span>

              <span className="contact__button-arrow">
                ↗
              </span>
            </a>

            <div className="contact__email-note">
              <span>DIRECT EMAIL</span>

              <span>
                {EMAIL}
              </span>
            </div>

          </div>
        </div>

        {/* LINKS */}

        <div className="contact__links">

          <a
            href={MAIL_URL}
            target="_blank"
            rel="noreferrer"
            className="contact__link"
            data-cursor="email"
          >
            <span>
              EMAIL
            </span>

            <span>
              {EMAIL}
              <b>↗</b>
            </span>
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="contact__link"
            data-cursor="github"
          >
            <span>
              GITHUB
            </span>

            <span>
              @Rahul123-debug539
              <b>↗</b>
            </span>
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="contact__link"
            data-cursor="linkedin"
          >
            <span>
              LINKEDIN
            </span>

            <span>
              CONNECT
              <b>↗</b>
            </span>
          </a>

        </div>

        {/* FOOT NOTE */}

        <div className="contact__footer">

          <span>
            BASED IN INDIA
          </span>

          <span>
            BUILDING FOR THE WEB
          </span>

          <span>
            RAHUL KUMAR TIWARI
          </span>

        </div>

      </div>
    </section>
  );
};

export default Contact;