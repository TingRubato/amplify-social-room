import { useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/sky.css";

// import Logo from "../assets/Images/evonne-logo-full.png";
import WontListen from "../assets/Images/wontlisten.jpeg";
import RevealZoom from "reveal.js/plugin/zoom/zoom.esm";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";
import RevealSearch from "reveal.js/plugin/search/search.esm";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";
import Arrow from "../assets/Images/arrow.png";
import VideoEditor from "../assets/Images/videocover.png";
import VideoEditorVideo from "../assets/Media/evonne-welcome.mp4";
import ImagePlaceHolder from "../assets/Images/image-placeholder.png";
import GifMemes from "../assets/Images/90F8aUepslB84.gif";
import BookCover from "../assets/Images/book-cover.png";
import "./UpsellPage.css";

export function BookPage() {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!deckRef.current && deckDivRef.current) {
      deckRef.current = new Reveal(deckDivRef.current, {
        controls: true,
        fragments: true,
        autoAnimate: true,
        progress: true,
        center: true,
        autoSlide: 5000,
        loop: false,
        hash: true,
        plugins: [
          RevealZoom,
          RevealNotes,
          RevealSearch,
          RevealMarkdown,
          RevealHighlight,
        ],
      });

      deckRef.current.initialize();
    }

    return () => {
      try {
        deckRef.current?.destroy();
        deckRef.current = null;
      } catch {
        // Handle error if needed

        console.error("Error during cleanup");
      }
    };
  }, [ready]);

  useEffect(() => {
    const handleResize = () => {
      if (deckRef.current) {
        deckRef.current.layout();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section data-transition="slide">
          <section data-state="upsell-content" data-background="#fff">
            <h2 className="fragment fade-in r-fit-text">
              Do you want to connect MORE and argue LESS with your teen?
            </h2>
            <p>
              <small className="fragment fade-in-then-semi-out">
                Don't just hope for a better relationship – take action now!
              </small>
              <br />
              <small className="fragment fade-in-then-semi-out">
                Begin the same journey that has helped hundreds of thousands of
                parents.
              </small>
            </p>
            <img
              src={BookCover}
              alt="Book Cover"
              style={{ maxWidth: "200px" }}
              className="fragment fade-in"
            />
            <p>
              <small className="fragment fade-in">
                Created by{" "}
                <a href="https://evonneweinhaus.com">Evonne Weinhaus</a>
              </small>
            </p>
          </section>
          {/* <button className="button-get">Get it Now</button> */}

          <section>
            <div style={{ textAlign: "center" }}>
              <video
                src={VideoEditorVideo}
                controls
                style={{
                  maxWidth: "75%",
                  borderRadius: "12px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                }}
                poster={VideoEditor}
              >
                Sorry, your browser doesn't support embedded videos.
              </video>
              <p>
                <small>
                  Don't just hope for a better relationship – take action now!
                </small>
              </p>
            </div>
          </section>
        </section>

        <section>
          <img
            src={BookCover}
            alt="Book Cover"
            style={{
              maxWidth: "200px",
              display: "block",
              margin: "0 auto 24px",
            }}
            className="fragment fade-in"
          />
          <h4 className="fragment fade-in">
            The Stop Struggling books sold over a quarter of a million copies.
          </h4>
          <p>
            <small>
              <ul>
                <li className="fragment fade-in">
                  This book is a complete program mapped out… rich with examples
                  of real life issues with step by step solutions.
                </li>
                <li className="fragment fade-in">
                  A proven guide to help you reconnect with your teenager.
                </li>
                <li className="fragment fade-in">
                  Actionable strategies and easy-to-follow exercises for
                  immediate results.
                </li>
                <li className="fragment fade-in">
                  It's a complete toolkit for raising resilient and happy kids.
                </li>
              </ul>
            </small>
          </p>
        </section>

        <section>
          <section>
            <img
              className="r-frame fragment fade-in"
              data-fragment-index="1"
              style={{
                background: "rgba(255,255,255,0.1)",
                maxHeight: "20vh",
                margin: "10vh auto auto",
                display: "block",
              }}
              data-src={WontListen}
              alt="Down arrow"
            />
            <h4 className="fragment fade-in" data-fragment-index="2">
              Is constant fighting with your teenager making you feel like this?
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "48px",
                marginTop: "32px",
              }}
            >
              <ul
                className="fragment fade-in"
                data-fragment-index="3"
                style={{ listStyle: "disc", padding: 0, margin: 0 }}
              >
                <li>
                  <strong>Frustrated:</strong> My teen just doesn’t listen.
                </li>
                <li>
                  <strong>Overwhelmed:</strong> I can’t handle it all.
                </li>
                <li>
                  <strong>Angry:</strong> I’m furious!
                </li>
                <li>
                  <strong>Fearful:</strong> What if I can’t protect my teen?
                </li>
              </ul>
              <ul
                className="fragment fade-in"
                data-fragment-index="4"
                style={{ listStyle: "disc", padding: 0, margin: 0 }}
              >
                <li>
                  <strong>Helpless:</strong> I feel so disconnected from my
                  teen.
                </li>
                <li>
                  <strong>Disappointed:</strong> My kid surely is not the child
                  I expected.
                </li>
                <li>
                  <strong>Confused:</strong> I don’t know what else to do. I’ve
                  tried everything
                </li>
              </ul>
            </div>
            <h3 className="fragment fade-in" data-fragment-index="5">
              You're not alone.
            </h3>
          </section>
          <section>
            <h3 className="fragment fade-in" data-fragment-index="6">
              Countless parents struggle to communicate effectively with their
              teens.
            </h3>
            <h4 className="fragment fade-in" data-fragment-index="7">
              When parents are in pain, they want solutions, not theory. And
              this is the exact promise of Stop Struggling with Your Teen.
            </h4>
          </section>

          <section>
          <p>
          As St. Louis Post Dispatch columnist said, "Stop Struggling with
              Your Teen can be read in an hour and applied in the next."
            </p>
            <p>
            So, how can that possibly work?</p>
            <br />
          </section>
        </section>

        <section>
        <h2 className="r-fit-text">            By learning the 4 step Stop Struggling approach:
          </h2>
            <ul style={{ listStyle: "square", paddingLeft: 0 }}>
            <li className="fragment fade-in" style={{ marginBottom: "12px" }}>
              Think Differently by changing your language.
            </li>
            <li className="fragment fade-in" style={{ marginBottom: "12px" }}>
              Turn Responsibility Over with love—not using fear-based tactics.
            </li>
            <li className="fragment fade-in" style={{ marginBottom: "12px" }}>
              Tap into parents' rights by addressing your part of the problem.
            </li>
            <li className="fragment fade-in" style={{ marginBottom: "12px" }}>
              Take a stand in a no-nonsense and respectful manner.
            </li>
            <li className="fragment fade-in" style={{ marginBottom: "12px" }}>
              Embrace open communication to foster trust and understanding.
            </li>
            </ul>
          <p className="r-fit-text">
            You will quickly see that, Stop Struggling With Your Teen provides
            you with solutions so you will be able to rebuild your relationship,
            reduce fighting and revitalize healthy communication with your teen.
          </p>
        </section>

        <section
          data-auto-animate
          data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
        >
          <h2 className="r-fit-text">As a result,</h2>
          <p>
          you’ll be able to...{" "}
          </p>
          <div className="r-hstack justify-center">
            
            <div
              className="gem-box"
              data-id="box1"
              style={{
                background: "#999",
                width: "50px",
                height: "50px",
                margin: "10px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              className="gem-box"
              data-id="box2"
              style={{
                background: "#999",
                width: "50px",
                height: "50px",
                margin: "10px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              data-id="box3"
              style={{
                background: "#999",
                width: "50px",
                height: "50px",
                margin: "10px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              data-id="box4"
              style={{
                background: "#999",
                width: "50px",
                height: "50px",
                margin: "10px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              data-id="box5"
              style={{
                background: "#999",
                width: "50px",
                height: "50px",
                margin: "10px",
                borderRadius: "5px",
              }}
            ></div>
          </div>
        </section>
        <section
          data-auto-animate
          data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
        >
          <div
            className="r-hstack"
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginLeft: "20px",
              }}
            >
              <div
                data-id="box1"
                data-fragment-index="1"
                data-auto-animate-delay="0"
                style={{
                  background: "cyan",
                  width: "20px",
                  height: "20px",
                  margin: "8px 0",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                data-id="box2"
                data-auto-animate-delay="0.1"
                style={{
                  background: "magenta",
                  width: "20px",
                  height: "20px",
                  margin: "8px 0",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                data-id="box3"
                data-auto-animate-delay="0.2"
                style={{
                  background: "yellow",
                  width: "20px",
                  height: "20px",
                  margin: "8px 0",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                data-id="box4"
                data-auto-animate-delay="0.3"
                style={{
                  background: "limegreen",
                  width: "20px",
                  height: "20px",
                  margin: "8px 0",
                  borderRadius: "5px",
                }}
              ></div>
              <div
                data-id="box5"
                data-auto-animate-delay="0.4"
                style={{
                  background: "orange",
                  width: "20px",
                  height: "20px",
                  margin: "8px 0",
                  borderRadius: "5px",
                }}
              ></div>
            </div>
            <div
              style={{
                textAlign: "left",
                maxWidth: "100%",
                marginRight: "20px",
                animation: "fadeIn 1s ease-in-out",
                animationDelay: "500ms",
              }}
            >
            <h3>As a result, you’ll be able to...</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "15px" }}>
                  Stopping unnecessary power struggles without yelling.
                </li>
                <li style={{ marginBottom: "15px" }}>
                  Letting go of teen's problem in a way that you don't feel like
                  you have given in or given up.
                </li>
                <li style={{ marginBottom: "15px" }}>
                  Raising teens who are equipped with the skills necessary to
                  become responsible, well-adjusted adults.
                </li>
                <li style={{ marginBottom: "15px" }}>
                  Creating your own action plan using the included Stop
                  Struggling With Your Teen Companion Workbook.
                </li>
                <li>Being tough on the problem while tender with your teen.</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: "20px", textAlign: "left" }}> <small>strike that delicate balance between setting limits while encouraging your teen's independence</small></p>
        </section>

        <section>
          <section>
            <h2 className="r-fit-text">My Story</h2>
            <p>
              <small>
                Many years ago, I met with a Dad and his high school senior son
                in a joint session. It wasn't going well at all. I saw them each
                try to have a one-upmanship — they were in the throes of what I
                would call then a power struggle. The dad became so irate that
                he got up to leave the session.
              </small>
            </p>
          </section>

          <section>
            <p>
              <small>
                At the moment, the teen said the words that are etched in my
                heart. "If you ever gave a sh*t about me, you will sit down and
                listen."
              </small>
            </p>
          </section>

          <section>
            <p>
              <small>
                His dad turned around, saw his son's face and sat back
                down."Dad, sometimes I don't even want to live anymore. Nothing
                makes any sense to me. Last week when you were gone, I went
                searching for your guns."
              </small>
            </p>
          </section>

          <section>
            <p>
              <small>
                The dad's face was one of anguish and fear. His anger was gone.
                He moved his chair closer to his son and at that moment, the
                road of recovery had begun. And for me, that was the moment my
                life changed. I wanted to help both parents and teens never to
                feel so hopeless, so desperate. How? By educating parents to
                develop a way both parents and teens feel empowered. Not just
                one or the other, but both. Empowered Parenting, Empowered Teen.
              </small>
            </p>
          </section>

          <section>
            <p>
              <small>
                I realized my mission of{" "}
                <strong>Empowered Parent, Empowered Teen</strong> was more
                important than ever in this day and age which is why I wrote the
                book.
              </small>
            </p>
          </section>
          </section>

        <section>
          <section>
            <h2>About Evonne Weinhaus</h2>
            <video
                src={VideoEditorVideo}
                className="fragment fade-in data-fragment-index=1"
                controls
                style={{
                  maxWidth: "55%",
                  borderRadius: "12px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
                }}
                poster={VideoEditor}
              >
                Sorry, your browser doesn't support embedded videos.
              </video>

            <p className="fragment fade-in data-fragment-index=2">
              Evonne is a sought-after relationship therapist, a certified Imago
              couples counselor and an award-winning parenting author.
            </p>
          </section>
          <section>
            <p>
              Her expertise and humor-filled style have landed her numerous
              guest spots on The Today Show, Good Morning America and the Oprah
              Winfrey show, plus being featured in Family Circle, McCall's,
              Woman's Day Working Mother and showcased as a teacher in the
              movie- <strong>Breakthrough: A Conscious Documentary.</strong>
            </p>
          </section>
          <section>
            <p>
              Her books Stop Struggling with Your Teen and Stop Struggling With
              Your Child have together sold more than a quarter of a million
              copies worldwide.
            </p>
          </section>
          <section>
            <p>
              Discover more about Evonne Weinhaus at www.evonneweinhaus.com
            </p>
          </section>
        </section>

          <section>

            <h2>Take the leap – Secure your guide now!</h2>
            <div className="star" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="gold"
                width="24px"
                height="24px"
                style={{ margin: "0 4px" }}
              >
                <path
                d={
                  index === 4
                  ? "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  : "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                }
                fill={index === 4 ? "url(#partialFill)" : "gold"}
                />
                {index === 4 && (
                <defs>
                  <linearGradient id="partialFill" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="90%" stopColor="gold" />
                  <stop offset="90%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                )}
              </svg>
              ))}
            </div>
            <img
              src={BookCover}
              alt="Book Cover"
              style={{
                maxWidth: "200px",
                display: "block",
                margin: "20px auto",
              }}
              className="fragment fade-in"
            />
            <p className="fragment fade-in">
            <small>A Complete, Easy-to-Use Guide to Reconnect & Rebuild Your Relationship with Your Child</small>
            </p>
            <p className="fragment fade-in-then-semi-out">
              <small>Grab Your Copy of the eBook Now<br></br> with <br></br> Exclusive Bonuses Only Available on This Page</small>
            </p>
          </section>
      </div>
    </div>
  );
}

export default BookPage;
