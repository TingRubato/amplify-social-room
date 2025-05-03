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

        <section id="themes">
          <h2 className="r-fit-text">Themes</h2>
          <p className="r-fit-text">
            reveal.js comes with a few themes built in: <br />
            <a
              href="#/themes"
              onClick={() => {
                const themeEl = document.getElementById("theme");
                if (themeEl) {
                  themeEl.setAttribute("href", "dist/theme/black.css");
                }
                return false;
              }}
            >
              Black (default)
            </a>{" "}
            -
            <a
              href="#/themes"
              onClick={() => {
                document
                  .getElementById("theme")
                  ?.setAttribute("href", "dist/theme/white.css");
                return false;
              }}
            >
              White
            </a>{" "}
            -
            <a
              href="#/themes"
              onClick={() => {
                document
                  .getElementById("theme")
                  ?.setAttribute("href", "dist/theme/league.css");
                return false;
              }}
            >
              League
            </a>{" "}
            -
            <a
              href="#/themes"
              onClick={() => {
                document
                  .getElementById("theme")
                  ?.setAttribute("href", "dist/theme/sky.css");
                return false;
              }}
            >
              Sky
            </a>{" "}
            -
            <a
              href="#/themes"
              onClick={() => {
                document
                  .getElementById("theme")
                  ?.setAttribute("href", "dist/theme/beige.css");
                return false;
              }}
            >
              Beige
            </a>{" "}
            -
            <a
              href="#/themes"
              onClick={() => {
                document
                  .getElementById("theme")
                  ?.setAttribute("href", "dist/theme/simple.css");
                return false;
              }}
            >
              Simple
            </a>{" "}
            <br />
            <a
              href="#/themes"
              onClick={() => {
                document
                  .getElementById("theme")
                  ?.setAttribute("href", "dist/theme/serif.css");
                return false;
              }}
            >
              Serif
            </a>{" "}
            -
            <a
              href="#/themes"
              onClick={() => {
                document
                  .getElementById("theme")
                  ?.setAttribute("href", "dist/theme/blood.css");
                return false;
              }}
            >
              Blood
            </a>{" "}
            -
            <a
              href="#/themes"
              onClick={() => {
                document
                  .getElementById("theme")
                  ?.setAttribute("href", "dist/theme/night.css");
                return false;
              }}
            >
              Night
            </a>{" "}
            -
            <a
              href="#/themes"
              onClick={() => {
                document
                  .getElementById("theme")
                  ?.setAttribute("href", "dist/theme/moon.css");
                return false;
              }}
            >
              Moon
            </a>{" "}
            -
            <a
              href="#/themes"
              onClick={() => {
                document
                  .getElementById("theme")
                  ?.setAttribute("href", "dist/theme/solarized.css");
                return false;
              }}
            >
              Solarized
            </a>
          </p>
        </section>

        <section>
          <section data-background="#dddddd">
            <h2 className="r-fit-text">Slide Backgrounds</h2>
            <p className="r-fit-text">
              Set <code>data-background="#dddddd"</code> on a slide to change
              the background color. All CSS color formats are supported.
            </p>
            <a href="#" className="navigate-down">
              <img
                className="r-frame"
                style={{ background: "rgba(255,255,255,0.1)" }}
                width={178}
                height={238}
                data-src={Arrow}
                alt="Down arrow"
              />
            </a>
          </section>
          <section data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">
            <h2 className="r-fit-text">Gradient Backgrounds</h2>
            <pre>
              <code className="hljs html wrap">
                &lt;section data-background-gradient= "linear-gradient(to
                bottom, #ddd, #191919)"&gt;
              </code>
            </pre>
          </section>
          <section data-background={ImagePlaceHolder}>
            <h2 className="r-fit-text">Image Backgrounds</h2>
            <pre>
              <code className="hljs html">
                &lt;section data-background="image.png"&gt;
              </code>
            </pre>
          </section>
          <section
            data-background={ImagePlaceHolder}
            data-background-repeat="repeat"
            data-background-size="100px"
          >
            <h2 className="r-fit-text">Tiled Backgrounds</h2>
            <pre>
              <code className="hljs html" style={{ wordWrap: "break-word" }}>
                &lt;section data-background="image.png"
                data-background-repeat="repeat" data-background-size="100px"&gt;
              </code>
            </pre>
          </section>
          <section
            data-background-video={VideoEditorVideo}
            data-background-color="#000000"
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                color: "#fff",
                padding: "20px",
              }}
            >
              <h2 className="r-fit-text">Video Backgrounds</h2>
              <pre>
                <code className="hljs html" style={{ wordWrap: "break-word" }}>
                  &lt;section data-background-video="video.mp4,video.webm"&gt;
                </code>
              </pre>
            </div>
          </section>
          <section data-background={GifMemes}>
            <h2 className="r-fit-text">... and GIFs!</h2>
          </section>
        </section>

        <section
          data-transition="slide"
          data-background="#4d7e65"
          data-background-transition="zoom"
        >
          <h2 className="r-fit-text">Background Transitions</h2>
          <p className="r-fit-text">
            Different background transitions are available via the
            backgroundTransition option. This one's called "zoom".
          </p>
          <pre>
            <code className="hljs javascript">
              {`Reveal.configure({ backgroundTransition: 'zoom' })`}
            </code>
          </pre>
        </section>

        <section
          data-transition="slide"
          data-background="#b5533c"
          data-background-transition="zoom"
        >
          <h2 className="r-fit-text">Background Transitions</h2>
          <p className="r-fit-text">
            You can override background transitions per-slide.
          </p>
          <pre>
            <code className="hljs html" style={{ wordWrap: "break-word" }}>
              &lt;section data-background-transition="zoom"&gt;
            </code>
          </pre>
        </section>

        <section
          data-background-iframe="https://hakim.se"
          data-background-interactive
        >
          <div
            style={{
              position: "absolute",
              width: "40%",
              right: 0,
              boxShadow:
                "0 1px 4px rgba(0,0,0,0.5), 0 5px 25px rgba(0,0,0,0.2)",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              color: "#fff",
              padding: "20px",
              fontSize: "20px",
              textAlign: "left",
            }}
          >
            <h2 className="r-fit-text">Iframe Backgrounds</h2>
            <p className="r-fit-text">
              Since reveal.js runs on the web, you can easily embed other web
              content. Try interacting with the page in the background.
            </p>
          </div>
        </section>

        <section>
          <h2 className="r-fit-text">Marvelous List</h2>
          <ul>
            <li>No order here</li>
            <li>Or here</li>
            <li>Or here</li>
            <li>Or here</li>
          </ul>
        </section>

        <section>
          <h2 className="r-fit-text">Fantastic Ordered List</h2>
          <ol>
            <li>One is smaller than...</li>
            <li>Two is smaller than...</li>
            <li>Three!</li>
          </ol>
        </section>

        <section>
          <h2 className="r-fit-text">Tabular Tables</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Value</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apples</td>
                <td>$1</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Lemonade</td>
                <td>$2</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Bread</td>
                <td>$3</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="r-fit-text">Clever Quotes</h2>
          <p className="r-fit-text">
            These guys come in two forms, inline:{" "}
            <q cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">
              The nice thing about standards is that there are so many to choose
              from
            </q>{" "}
            and block:
          </p>
          <blockquote cite="http://searchservervirtualization.techtarget.com/definition/Our-Favorite-Technology-Quotations">
            &ldquo;For years there has been a theory that millions of monkeys
            typing at random on millions of typewriters would reproduce the
            entire works of Shakespeare. The Internet has proven this theory to
            be untrue.&rdquo;
          </blockquote>
        </section>

        <section>
          <h2 className="r-fit-text">Intergalactic Interconnections</h2>
          <p className="r-fit-text">
            You can link between slides internally,
            <a href="#/2/3">like this</a>.
          </p>
        </section>

        <section>
          <h2 className="r-fit-text">Speaker View</h2>
          <p className="r-fit-text">
            There's a{" "}
            <a href="https://revealjs.com/speaker-view/">speaker view</a>. It
            includes a timer, preview of the upcoming slide as well as your
            speaker notes.
          </p>
          <p className="r-fit-text">
            Press the <em>S</em> key to try it out.
          </p>

          <aside className="notes">
            Oh hey, these are some notes. They'll be hidden in your
            presentation, but you can see them if you open the speaker notes
            window (hit 's' on your keyboard).
          </aside>
        </section>

        <section>
          <h2 className="r-fit-text">Export to PDF</h2>
          <p className="r-fit-text">
            Presentations can be{" "}
            <a href="https://revealjs.com/pdf-export/">exported to PDF</a>,
            here's an example:
          </p>
          <iframe
            data-src="https://www.slideshare.net/slideshow/embed_code/42840540"
            width="445"
            height="355"
            style={{
              border: "3px solid #666",
              marginBottom: "5px",
              maxWidth: "100%",
              borderWidth: 0,
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
            }}
            allowFullScreen
            title="Slideshare PDF Example"
          ></iframe>
        </section>

        <section>
          <h2 className="r-fit-text">Global State</h2>
          <p className="r-fit-text">
            Set <code>data-state="something"</code> on a slide and{" "}
            <code>"something"</code>
            will be added as a class to the document element when the slide is
            open. This lets you apply broader style changes, like switching the
            page background.
          </p>
        </section>

        <section data-state="customevent">
          <h2 className="r-fit-text">State Events</h2>
          <pre>
            <code className="javascript" data-trim style={{ fontSize: "18px" }}>
              {`      Reveal.on( 'customevent', function() {
        console.log( '"customevent" has fired' );
        
        } );
  `}
            </code>
          </pre>
        </section>

        <section>
          <h2 className="r-fit-text">Take a Moment</h2>
          <p className="r-fit-text">
            Press B or . on your keyboard to pause the presentation. This is
            helpful when you're on stage and want to take distracting slides off
            the screen.
          </p>
        </section>

        <section>
          <h2 className="r-fit-text">Much more</h2>
          <ul>
            <li>Right-to-left support</li>
            <li>
              <a href="https://revealjs.com/api/">Extensive JavaScript API</a>
            </li>
            <li>
              <a href="https://revealjs.com/auto-slide/">Auto-progression</a>
            </li>
            <li>
              <a href="https://revealjs.com/backgrounds/#parallax-background">
                Parallax backgrounds
              </a>
            </li>
            <li>
              <a href="https://revealjs.com/keyboard/">
                Custom keyboard bindings
              </a>
            </li>
          </ul>
        </section>

        <section style={{ textAlign: "left" }}>
          <h1>THE END</h1>
          <p className="r-fit-text">
            - <a href="https://slides.com">Try the online editor</a> <br />-{" "}
            <a href="https://github.com/hakimel/reveal.js">
              Source code &amp; documentation
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default BookPage;
