import { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./Navbar.css";

const navLinks = [
  {
    label: "HOME",
    type: "route",
    path: "/",
  },
  {
    label: "WORK",
    type: "route",
    path: "/work",
  },
  {
    label: "ABOUT",
    type: "route",
    path: "/about",
  },
  {
    label: "SERVICES",
    type: "section",
    target: "services",
  },
  {
    label: "GITHUB",
    type: "section",
    target: "github",
  },
  {
    label: "CONTACT",
    type: "route",
    path: "/contact",
  },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] =
    useState("home");

  /* =====================================================
     NAVBAR SCROLL
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
     ACTIVE HOME SECTION
  ===================================================== */

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sections =
      document.querySelectorAll(
        "main section[id], section[id]"
      );

    if (!sections.length) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleSections =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          if (
            visibleSections.length > 0
          ) {
            setActiveSection(
              visibleSections[0].target.id
            );
          }
        },
        {
          threshold: [
            0.15,
            0.3,
            0.5,
            0.7,
          ],
          rootMargin:
            "-10% 0px -35% 0px",
        }
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  /* =====================================================
     ROUTE ACTIVE STATE
  ===================================================== */

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    }

    if (location.pathname === "/work") {
      setActiveSection("work");
    }

    if (location.pathname === "/about") {
      setActiveSection("about");
    }

    if (location.pathname === "/contact") {
      setActiveSection("contact");
    }
  }, [location.pathname]);

  /* =====================================================
     CLOSE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================================
     HOME SECTION NAVIGATION
  ===================================================== */

  const navigateToSection = (target) => {
    closeMenu();

    /*
      Already on Home
    */

    if (location.pathname === "/") {
      const section =
        document.getElementById(target);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    /*
      Coming from another page
    */

    navigate(`/#${target}`);
  };

  /* =====================================================
     NAVIGATION
  ===================================================== */

  const handleNavigation = (link) => {
    closeMenu();

    if (link.type === "section") {
      navigateToSection(link.target);
      return;
    }

    navigate(link.path);
  };

  /* =====================================================
     LOGO / HOME
  ===================================================== */

  const handleLogoClick = (event) => {
    closeMenu();

    /*
      If already on Home,
      don't reload the page.
    */

    if (location.pathname === "/") {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =====================================================
     BODY SCROLL LOCK
  ===================================================== */

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(
        "navbar-menu-open"
      );
    } else {
      document.body.classList.remove(
        "navbar-menu-open"
      );
    }

    return () => {
      document.body.classList.remove(
        "navbar-menu-open"
      );
    };
  }, [menuOpen]);

  /* =====================================================
     ACTIVE LINK
  ===================================================== */

  const isLinkActive = (link) => {
    /*
      ROUTE LINKS
    */

    if (link.type === "route") {
      /*
        HOME
      */

      if (link.path === "/") {
        return location.pathname === "/";
      }

      return location.pathname === link.path;
    }

    /*
      HOME SECTION LINKS
    */

    return (
      location.pathname === "/" &&
      activeSection === link.target
    );
  };

  return (
    <header
      className={`navbar ${
        scrolled
          ? "navbar--scrolled"
          : ""
      } ${
        menuOpen
          ? "navbar--menu-open"
          : ""
      }`}
    >
      <div className="navbar__container">

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="navbar__logo"
          onClick={handleLogoClick}
          aria-label="Go to homepage"
          data-cursor="home"
        >
          <span className="navbar__logo-mark">
            R
          </span>

          <span className="navbar__logo-name">
            RAHUL
          </span>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="navbar__desktop"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const active =
              isLinkActive(link);

            return (
              <button
                key={
                  link.type === "route"
                    ? link.path
                    : link.target
                }
                type="button"
                className={`navbar__link ${
                  active
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  handleNavigation(link)
                }
                data-cursor="go"
              >
                <span>
                  {link.label}
                </span>

                {active && (
                  <span className="navbar__active-dot" />
                )}
              </button>
            );
          })}
        </nav>

        {/* =================================================
            AVAILABILITY
        ================================================= */}

        <div className="navbar__availability">
          <span className="navbar__status-dot" />

          <span>
            AVAILABLE
          </span>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className="navbar__menu-button"
          onClick={() =>
            setMenuOpen(
              (previous) => !previous
            )
          }
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          data-cursor="menu"
        >
          <span>
            {menuOpen
              ? "CLOSE"
              : "MENU"}
          </span>

          <span
            className={`navbar__hamburger ${
              menuOpen
                ? "navbar__hamburger--open"
                : ""
            }`}
          >
            <i />
            <i />
          </span>
        </button>
      </div>

      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      <div
        className={`navbar__mobile-menu ${
          menuOpen
            ? "navbar__mobile-menu--open"
            : ""
        }`}
      >
        <div className="navbar__mobile-inner">

          {/* MOBILE HEADER */}

          <div className="navbar__mobile-label">
            <span>
              (00) — NAVIGATION
            </span>

            <span>
              SELECT A SECTION
            </span>
          </div>

          {/* MOBILE LINKS */}

          <nav
            className="navbar__mobile-links"
            aria-label="Mobile navigation"
          >
            {navLinks.map(
              (link, index) => {
                const active =
                  isLinkActive(link);

                return (
                  <button
                    type="button"
                    key={
                      link.type ===
                      "route"
                        ? link.path
                        : link.target
                    }
                    className={`navbar__mobile-link ${
                      active
                        ? "is-active"
                        : ""
                    }`}
                    onClick={() =>
                      handleNavigation(
                        link
                      )
                    }
                    data-cursor="go"
                  >
                    <span className="navbar__mobile-number">
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

                    <span>
                      {link.label}
                    </span>

                    <span className="navbar__mobile-arrow">
                      ↗
                    </span>
                  </button>
                );
              }
            )}
          </nav>

          {/* MOBILE FOOTER */}

          <div className="navbar__mobile-bottom">

            <a
              href="https://github.com/Rahul123-debug539"
              target="_blank"
              rel="noreferrer"
              data-cursor="github"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/rahulkumartiwari/"
              target="_blank"
              rel="noreferrer"
              data-cursor="linkedin"
            >
              LINKEDIN ↗
            </a>

            <span>
              INDIA /{" "}
              {new Date().getFullYear()}
            </span>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;