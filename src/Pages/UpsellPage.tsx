import { useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import WorkbookSample from "../assets/Images/sampleworkbook.png";
import SelfStudyCourse from "../assets/Images/self-study-course.png";
// import Logo from "../assets/Images/evonne-logo-full.png";
// import WontListen from "../assets/Images/wontlisten.jpeg";
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
import ParentingImg from "../assets/Images/parenting.png";
import BookCover from "../assets/Images/book-cover.png";
import "./UpsellPage.css";

export function UpsellPage() {
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
            <p className="fragment fade-in">
              Wait, there's more! Continue your parenting journey even further
              with our exclusive offer.
            </p>

            <video
              className="fragment fade-in"
              src={VideoEditorVideo}
              controls
              style={{
                maxWidth: "50%",
                borderRadius: "12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
              }}
              poster={VideoEditor}
            >
              Sorry, your browser doesn't support embedded videos.
            </video>
          </section>

          <section>
            <h3 className="fragment fade-in r-fit-text">
              Ready to deepen your parenting journey?
            </h3>
            <h4
              className="fragment fade-in r-fit-text"
              style={{ textAlign: "center" }}
            >
              Upgrade to our complete online course now!
            </h4>
            <div style={{ textAlign: "center" }}>
              <img
                src={ParentingImg}
                alt="Parenting Image"
                style={{ maxWidth: "200px" }}
                className="fragment fade-in"
              />
              <p className="fragment fade-in">
                <small className="fragment fade-in">
                  Do you ever find yourself feeling guilty and overwhelmed as a
                  parent?
                </small>
                <br />
                <small className="fragment fade-in">
                  Have you ever felt disconnected from your teen and longing for
                  more of a meaningful connection?
                </small>
                <br />
                <small className="fragment fade-in">
                  Do you feel like things are slipping out of control, leaving
                  you feeling frustrated and helpless?
                </small>
                <small className="fragment fade-in">
                  If so, we can help you crush it with the online course.
                </small>
              </p>
            </div>
          </section>
        </section>

        <section>
          <h4 className="fragment fade-in r-fit-text">
            What You’ll Learn From This Course
          </h4>
          <p className="fragment fade-in">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "32px",
                flexWrap: "wrap",
                alignItems: "stretch",
                margin: "24px 0",
              }}
            >
              <div
                className="carousel-column fragment fade-in"
                style={{
                  flex: "1 1 200px",
                  maxWidth: "300px",
                  minWidth: "200px",
                  background: "#f7f7f7",
                  borderRadius: "10px",
                  padding: "20px",
                  margin: "8px 0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <h4
                  className="fragment fade-in"
                  style={{ marginTop: 0, fontSize: "2rem" }}
                >
                  Find Immediate Solutions
                </h4>
                <p
                  className="fragment fade-in r-fit-text"
                  style={{ fontSize: "1rem" }}
                >
                  <small>
                    Short FAST Solutions that are action-oriented and work
                    immediately.
                  </small>
                </p>
              </div>
              <div
                className="carousel-column fragment fade-in"
                style={{
                  flex: "1 1 200px",
                  maxWidth: "300px",
                  minWidth: "200px",
                  background: "#f7f7f7",
                  borderRadius: "10px",
                  padding: "20px",
                  margin: "8px 0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <h4
                  className="fragment fade-in"
                  style={{ marginTop: 0, fontSize: "2rem" }}
                >
                  Empower Yourself
                </h4>
                <p className="fragment fade-in" style={{ fontSize: "1rem" }}>
                  And at the same time empower your teen.
                </p>
              </div>
              <div
                className="carousel-column fragment fade-in"
                style={{
                  flex: "1 1 200px",
                  maxWidth: "300px",
                  minWidth: "200px",
                  background: "#f7f7f7",
                  borderRadius: "10px",
                  padding: "20px",
                  margin: "8px 0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <h4
                  className="fragment fade-in"
                  style={{ marginTop: 0, fontSize: "2rem" }}
                >
                  End Exhausting, No-Win Power Struggles
                </h4>
                <p className="fragment fade-in  r-fit-text">
                  <small>
                    No more screaming matches, meltdowns and no more guilt.
                    Sound good?
                  </small>
                </p>
              </div>
            </div>
          </p>
        </section>

        <section>
          <section>
            <h4 className="fragment fade-in" data-fragment-index="2">
              Here’s what you’ll get when you upgrade to this package:
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
                  <strong>Stop Struggling With Your Teen 1.0:</strong> 7 Videos
                  plus bonuses.
                </li>
                <li>
                  <strong>Stop Struggling With Your Teen 2.0:</strong> 10 videos
                  ranging from 6-12 minutes long.
                </li>
                <li>
                  Easy-to-use worksheets and charts accompanying each video that
                  include focused guidelines, practical examples and
                  personalized action steps.
                </li>
                <li>
                  4 package audio lessons that are an abbreviated version of
                  Stop Struggling With Your Teen 1.0 &amp; 2.0 accessible from
                  your phone or from your desktop.
                </li>
                <li>
                  PDF transcript of the 4 audio lessons for those who prefer
                  reading to listening.
                </li>
                <li>
                  Case Study of A Teen's Transformation: Turning Straw- Drugs,
                  Discouraged &amp; All F's- Into Gold.
                </li>
              </ul>
            </div>
            <h4 className="fragment fade-in" data-fragment-index="5">
              Note:
            </h4>
            <p className="fragment fade-in" data-fragment-index="5">
              <small>
                As a previous teacher, Evonne is most interested in people
                learning with minimum effort to maximize results. So she wanted
                to provide you with a variety of ways for you to soak in this
                material.
              </small>
            </p>
          </section>
          <section data-background="#2c3e50">
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
            >
              {/* Left Column - Image */}
              <div style={{ flex: "0 0 20%", textAlign: "center" }}>
                {/* <img
                  // src={WontListen}
                  alt="Stop Struggling With Your Teen Course"
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                  className="fragment fade-in"
                /> */}
              </div>

              {/* Right Column - Text Content */}
              <div style={{ flex: "1", textAlign: "left", color: "#fff" }}>
                <p
                  className="fragment fade-in"
                  style={{
                    color: "#a0d2db",
                    fontSize: "1rem",
                    marginBottom: "5px",
                  }}
                >
                  ($300 VALUE)
                </p>
                <p
                  className="fragment fade-in"
                  style={{
                    color: "#f39c12",
                    marginTop: "0",
                    marginBottom: "15px",
                  }}
                >
                  Stop Struggling With Your Teen 1.0 Self Study (7 Videos plus
                  bonuses)
                </p>
                <p
                  className="fragment fade-in"
                  style={{ fontSize: "0.6em", lineHeight: "1.4" }}
                >
                  Self-study course operates on the principle that parents seek
                  solutions, not just theories, especially when facing
                  challenges. Therefore, we prioritize quick, action-oriented
                  solutions that deliver immediate results.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: 0,
                    fontSize: "0.4em",
                    lineHeight: "1.5",
                  }}
                >
                  <li className="fragment fade-in">
                    <strong>Video 1: The What:</strong> What is the one common
                    factor that lurks behind all relationship problems
                  </li>
                  <li className="fragment fade-in">
                    <strong>Video 2: The Why:</strong> Why do 99 per cent of
                    parents unknowingly sabotage their relationship with their
                    teens instead of strengthening it?
                  </li>
                  <li className="fragment fade-in">
                    <strong>Video 3-7: The How:</strong> How can Five Fast
                    Solutions allow parents to immediately argue less and
                    connect more with their teen?
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section data-background="#2c3e50">
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
            >
              <div style={{ flex: "0 0 20%", textAlign: "center" }}></div>
              <div style={{ flex: "1", textAlign: "left", color: "#fff" }}>
                <p
                  className="fragment fade-in"
                  style={{
                    color: "#a0d2db",
                    fontSize: "1rem",
                    marginBottom: "5px",
                  }}
                >
                  ($600 VALUE)
                </p>
                <p
                  className="fragment fade-in"
                  style={{
                    color: "#f39c12",
                    marginTop: "0",
                    marginBottom: "15px",
                  }}
                >
                  Stop Struggling With Your Teen 2.0 - Self Study (10 Videos
                  plus bonuses)
                </p>
                <p
                  className="fragment fade-in"
                  style={{ fontSize: "0.5em", lineHeight: "1.4" }}
                >
                  Stop Struggling with Your Teen 2.0 consists of two
                  modules-both the second and first most common mistakes that
                  most parents make. What do both mistakes share in common?
                  Strangely enough, most parents can't ever guess what they are
                  because these mistakes are so part of their everyday lives.
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: 0,
                    fontSize: "0.4em",
                    lineHeight: "1.5",
                  }}
                >
                  <li className="fragment fade-in">
                    <strong>Video 1 - The What:</strong> What is the most
                    underused communication skill parents can use to connect
                    with their teen?
                  </li>
                  <li className="fragment fade-in">
                    <strong>Video 2 - The Why:</strong> Why it's important to
                    understand the root cause of a teen's discouragement.
                  </li>
                  <li className="fragment fade-in">
                    <strong>Videos 3-6 - The How:</strong> How Three Fast
                    Solutions can help parents encourage their teens—even when
                    they feel they have nothing encouraging to say.
                  </li>
                  <li className="fragment fade-in">
                    <strong>Video 7 - The What:</strong> What is the most
                    common, yet often unrecognized, mistake parents make?
                  </li>
                  <li className="fragment fade-in">
                    <strong>Video 8 - The Why:</strong> Why the ABCD response
                    addresses the reasons teens may not trust their parents, and
                    why parents sometimes lack self-trust.
                  </li>
                  <li className="fragment fade-in">
                    <strong>Videos 9-10 - The How:</strong> How Two Fast
                    Solutions can help parents move from chaos to credibility by
                    following through on issues within their control.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section
          data-auto-animate
          data-auto-animate-easing="cubic-bezier(0.770, 0.000, 0.175, 1.000)"
        >
          <p> Maximize Your Success with All-Inclusive Resources... </p>
          <h2 className="r-fit-text">As a result,</h2>
          <p>You will discover how to... </p>
          <div
            className="r-hstack justify-center"
            style={{ paddingTop: "24px" }}
          >
            <div
              className="gem-box"
              data-id="box1"
              style={{
                background: "#999",
                width: "50px",
                height: "50px",
                margin: "5px",
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
                margin: "5px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              data-id="box3"
              style={{
                background: "#999",
                width: "50px",
                height: "50px",
                margin: "5px",
                borderRadius: "5px",
              }}
            ></div>
            <div
              data-id="box4"
              style={{
                background: "#999",
                width: "50px",
                height: "50px",
                margin: "5px",
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
                marginTop: "5px", // 添加上边距与标题对齐
                justifyContent: "space-between", // 添加这个属性
                paddingTop: "80px", // 添加上边距与标题对齐
                height: "230px",
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
              <h3>You'll discover how to...</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ marginBottom: "15px" }}>
                  Say the one word you can say to easily get your teen's
                  attention.
                </li>
                <li style={{ marginBottom: "15px" }}>
                  Diffuse conflict by saying less than 10 words.
                </li>
                <li style={{ marginBottom: "15px" }}>
                  Utilize the #1 skill to initiate change with your teen when
                  all else fails.
                </li>
                <li style={{ marginBottom: "15px" }}>
                  Raise your teen's feelings of self-worth by changing only one
                  word you say.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <section>
            <h2 className="r-fit-text">More About The Course</h2>
            <p>
              <small>
                This course is based on the premise that conflict can be a
                catalyst for change.<br></br>
              </small>
              Why?<br></br>
            </p>
            <p>
              <small>
                Over the years, Evonne has learned through personal and
                professional experience. In some strange and wonderful way,
                fighting and connecting are directly related to one another. The
                arguing is the observable behavior, the symptom…as we all know,
                is usually very visible and very loud. What lies underneath this
                symptom - the arguing - is the desire to connect, the desire to
                be heard, the desire to be seen. So many times, both parents and
                teens don't know there is a totally different way to go about
                it.<br></br>
              </small>
            </p>
            <p>
              <small>
                Learn the time-tested solutions that provide you with immediate
                results and long-range changes that transform your relationship
                with your teen.<br></br>
              </small>
            </p>
            <p>
              <small>This course provides you with that roadmap.</small>
            </p>
          </section>

          <section>
            <p>Sample of the Workbook</p>
            <div style={{ textAlign: "center" }}>
              <img
                src={WorkbookSample}
                alt="Sample Workbook"
                style={{
                  maxWidth: "400px",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
                  margin: "20px auto",
                }}
              />
            </div>
            <a
              href="src/assets/Images/evonne-weinhaus-2pt0worksheets0920_video3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "12px 28px",
                background: "#2c3e50",
                color: "#fff",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                transition: "background 0.2s",
              }}
            >
              Download Sample Workbook (PDF)
            </a>
          </section>
        </section>

        <section>
          <section>
            <h2>Here's The Next Steps to The Self Study Course...</h2>
            <p className="fragment fade-in data-fragment-index=2">
            Take Your Journey to the Next Level with Our Online Course Upgrade!
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
          <section>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  flex: "1 1 300px",
                  minWidth: "260px",
                  maxWidth: "45vw",
                  padding: "24px",
                }}
              >
                {/* Left column content goes here */}
                <p className="booktitle">Stop Struggling With Your Teen 2.0</p>
                <p className="small">
                  <small>
                Our self-study course is rooted in the understanding that parents seek practical solutions, not just theoretical concepts.<br></br>
                That's why we prioritize quick, actionable strategies tailored to meet immediate needs and deliver swift results.<br></br>
                </small>
                </p>
                <img
                  src={SelfStudyCourse}
                  alt="Stop Struggling With Your Teen 2.0 Book Cover"
                  style={{
                    maxWidth: "40vw",
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
                    margin: "20px auto",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    textAlign: "right",
                    marginTop: "24px",
                    fontStyle: "italic",
                    color: "#444",
                    fontSize: "1.1em",
                    maxWidth: "400px",
                    marginLeft: "auto",
                    marginRight: 0,
                  }}
                >
                  <p className="quote">
                  “The video series provides encouragment and real practical solutions that has helped me transform my relationships with my kids. I also really like that it feels as if Evonne is in the same room talking to me.”
                  <br />
                  <span style={{ fontWeight: 600, display: "block", marginTop: "8px" }}>
                    -- Jim H.
                  </span>
                  </p>
                </div>
              </div>
              <div
                style={{
                  flex: "1 1 300px",
                  minWidth: "260px",
                  maxWidth: "400px",
                  borderRadius: "10px",
                  padding: "24px",
                }}
              >
                {/* Right column content goes here */}
                <h3 className="r-fit-text">Here’s everything you get with Our Newly Upgraded Program:</h3>
                <ul>
                  <li>
                    <strong>STOP STRUGGLING with your TEEN</strong> (Digital Copy)
                  </li>
                  <li>
                    <strong>Stop Struggling With Your Teen 1.0</strong> (Self-Study Program)
                  </li>
                  <li>
                    <strong>Stop Struggling With Your Teen 2.0</strong> (Self-Study Program)
                  </li>
                  <li>
                    4 Condensed audio files from courses 1.0 and 2.0, accessible on your phone.
                  </li>
                  <li>
                    Worksheets plus charts for Enhanced Learning
                  </li>
                  <li>
                    Recorded 1:1 client session of Evonne working 1:1 with a mom who has a very inventive and strong-willed teen. See first hand how this mom successfully stops struggling with her teen. (audio version)
                  </li>
                  <div style={{ marginTop: "24px", marginBottom: "16px" }}>
                  <span style={{ fontSize: "0.8em", fontWeight: 600 }}>
                    Total Value:{" "}
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "#888",
                        marginRight: "12px",
                        fontSize: "0.95em",
                        transition: "color 0.5s",
                      }}
                    >
                      $900
                    </span>
                    <span
                      style={{
                        color: "#e74c3c",
                        fontWeight: 700,
                        fontSize: "1.15em",
                        marginLeft: "8px",
                        transition: "color 0.5s, font-size 0.5s",
                      }}
                    >
                      Now $297
                    </span>
                  </span>
                </div>
                </ul>
              </div>
            </div>
          </section>
          <section>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h2 className="r-fit-text" style={{ color: "#e74c3c" }}>
            Ready to Transform Your Parenting Journey?
          </h2>
          <p style={{ fontSize: "1.2em", margin: "20px 0" }}>
            Get instant access to the complete self-study course and all exclusive bonuses now!
          </p>
          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "linear-gradient(90deg, #f39c12 0%, #e74c3c 100%)",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1.3em",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(231,76,60,0.15)",
              transition: "background 0.2s, transform 0.2s",
              marginTop: "16px",
            }}
            onClick={e => {
              e.preventDefault();
              alert("Access granted! (Replace this with your checkout logic.)");
            }}
          >
            Access Now
          </a>
          <p style={{ marginTop: "18px", color: "#888", fontSize: "0.95em" }}>
            100% Money-Back Guarantee · Secure Checkout
          </p>
        </div>
          </section>
        </section>


        <section>
          <section>
            <h2 className="r-fit-text">About Evonne Weinhaus</h2>
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
            Evonne is a sought-after relationship therapist, a certified Imago couples counselor and an award-winning parenting author.
            </p>
          </section>
          <section>
            <p>
              Her expertise and humor-filled style have landed her numerous guest spots on <strong>The Today Show</strong>, <strong>Good Morning America</strong>, and <strong>The Oprah Winfrey Show</strong>, plus features in <em>Family Circle</em>, <em>McCall's</em>, <em>Woman's Day</em>, and <em>Working Mother</em>.
            </p>
            <p>
              She was also showcased as a teacher in the film <strong><em>Breakthrough: A Conscious Documentary</em></strong>.
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
            <p>Discover more about Evonne Weinhaus at <a href="https://www.evonneweinhaus.com" target="_blank" rel="noopener noreferrer">www.evonneweinhaus.com</a></p>
          </section>
        </section>
      </div>
    </div>
  );
}

export default UpsellPage;
