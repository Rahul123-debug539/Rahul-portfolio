import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

 useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      paused: true,
    });

    tl.fromTo(
      ".footer__big-text span",
      {
        yPercent: 110,
      },
      {
        yPercent: 0,
        duration: 1,
        ease: "power4.out",
      }
    );

    tl.fromTo(
      ".footer__item",
      {
        y: 25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      },
      "-=0.5"
    );

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top 80%",

      onEnter: () => {
        tl.restart();
      },

      onEnterBack: () => {
        tl.restart();
      },
    });
  }, footerRef);

  return () => ctx.revert();
}, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer__container">

        {/* BIG STATEMENT */}

        <div className="footer__hero">
          <div className="footer__big-text">
            <span>BUILD.</span>
          </div>

          <div className="footer__big-text footer__big-text-muted">
            <span>LEARN.</span>
          </div>

          <div className="footer__big-text">
            <span>REPEAT.</span>
          </div>
        </div>

        {/* LINKS */}

        <div className="footer__links">

          <div className="footer__item">
            <span className="footer__label">
              NAVIGATION
            </span>

            <div className="footer__nav">
              <a href="#home" data-cursor="go">
                HOME
              </a>

              <a href="#projects" data-cursor="go">
                WORK
              </a>

              <a href="#about" data-cursor="go">
                ABOUT
              </a>

              <a href="#services" data-cursor="go">
                SERVICES
              </a>

              <a href="#github" data-cursor="go">
                GITHUB
              </a>

              <a href="#contact" data-cursor="go">
                CONTACT
              </a>
            </div>
          </div>

          <div className="footer__item">
            <span className="footer__label">
              SOCIAL
            </span>

            <div className="footer__nav">

              <a
                href="https://github.com/Rahul123-debug539"
                target="_blank"
                rel="noreferrer"
                data-cursor="github"
              >
                GITHUB ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                data-cursor="linkedin"
              >
                LINKEDIN ↗
              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                data-cursor="whatsapp"
              >
                WHATSAPP ↗
              </a>

            </div>
          </div>

          <div className="footer__item">
            <span className="footer__label">
              AVAILABLE
            </span>

            <p className="footer__availability">
              OPEN TO FRONTEND,
              <br />
              MERN & FULL-STACK
              <br />
              OPPORTUNITIES.
            </p>
          </div>

          <div className="footer__item footer__back-top">

            <button
              onClick={scrollToTop}
              data-cursor="top"
            >
              BACK TO TOP
              <span>↑</span>
            </button>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="footer__bottom">

          <span>
            © {new Date().getFullYear()} RAHUL KUMAR TIWARI
          </span>

          <span>
            DESIGNED & BUILT WITH REACT
          </span>

          <span>
            NOIDA / INDIA
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;