import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Github.css";

gsap.registerPlugin(ScrollTrigger);

const GITHUB_USERNAME = "Rahul123-debug539";

const Github = () => {
  const sectionRef = useRef(null);

  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);

        const [profileResponse, reposResponse] =
          await Promise.all([
            fetch(
              `https://api.github.com/users/${GITHUB_USERNAME}`
            ),
            fetch(
              `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
            ),
          ]);

        if (!profileResponse.ok || !reposResponse.ok) {
          throw new Error("GitHub request failed");
        }

        const profileData = await profileResponse.json();
        const reposData = await reposResponse.json();

        setProfile(profileData);
        setRepositories(reposData);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  useEffect(() => {
    if (loading || error) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".github__heading-line span",
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".github__heading",
            start: "top 78%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".github__profile",
        {
          y: 45,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".github__profile",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        ".github__repo",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".github__repos",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [loading, error]);

  if (loading) {
    return (
      <section
        ref={sectionRef}
        className="github"
        id="github"
      >
        <div className="github__container">
          <div className="github__loading">
            FETCHING GITHUB DATA...
          </div>
        </div>
      </section>
    );
  }

  if (error || !profile) {
    return (
      <section
        ref={sectionRef}
        className="github"
        id="github"
      >
        <div className="github__container">
          <div className="github__error">
            <span>GITHUB DATA UNAVAILABLE</span>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              data-cursor="github"
            >
              VIEW GITHUB ↗
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="github"
      id="github"
    >
      <div className="github__container">

        {/* HEADER */}
        <div className="github__top">
          <span>(08) — CODE ACTIVITY</span>

          <span>GITHUB / {GITHUB_USERNAME}</span>
        </div>

        {/* INTRO */}
        <div className="github__intro">

          <h2 className="github__heading">

            <span className="github__heading-line">
              <span>CODE</span>
            </span>

            <span className="github__heading-line">
              <span className="github__heading-muted">
                IN PUBLIC.
              </span>
            </span>

          </h2>

          <p className="github__intro-text">
            A live snapshot of my open-source work,
            experiments and repositories.
          </p>

        </div>

        {/* PROFILE */}
        <div className="github__profile">

          <div className="github__profile-main">

            <div className="github__avatar">
              <img
                src={profile.avatar_url}
                alt={profile.login}
              />
            </div>

            <div>
              <span className="github__profile-label">
                DEVELOPER
              </span>

              <h3>{profile.name || profile.login}</h3>

              <p>
                {profile.bio ||
                  "Developer building modern web applications."}
              </p>
            </div>

          </div>

          <div className="github__stats">

            <div>
              <strong>{profile.public_repos}</strong>
              <span>REPOSITORIES</span>
            </div>

            <div>
              <strong>{profile.followers}</strong>
              <span>FOLLOWERS</span>
            </div>

            <div>
              <strong>{profile.following}</strong>
              <span>FOLLOWING</span>
            </div>

          </div>

          <a
            className="github__profile-link"
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            data-cursor="github"
          >
            VISIT GITHUB <span>↗</span>
          </a>

        </div>

        {/* REPOSITORIES */}

        <div className="github__repos">

          <div className="github__repos-header">
            <span>RECENT REPOSITORIES</span>
            <span>{repositories.length} / 06</span>
          </div>

          <div className="github__repo-grid">

            {repositories.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="github__repo"
                data-cursor="open"
              >
                <div className="github__repo-top">
                  <span>
                    {repo.language || "CODE"}
                  </span>

                  <span>↗</span>
                </div>

                <h3>{repo.name}</h3>

                <p>
                  {repo.description ||
                    "Repository and development work."}
                </p>

                <div className="github__repo-bottom">
                  <span>
                    ★ {repo.stargazers_count}
                  </span>

                  <span>
                    FORK {repo.forks_count}
                  </span>
                </div>
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Github;