import React from "react";
import "./Author.css";
import AuthorImage from "../../assets/Images/evonne-bg.png";

const Author: React.FC = () => {
  return (
    <section id="author">
      <article>

      <div className="wrapper">
  
        <div className="author-content">
          <div className="desc">
                <img
                  className="image-fluid"
                  src={AuthorImage}
                  alt="Evonne Weinhaus"
                />
                </div>

                <div className="heading">
                <h2 className="title">About Evonne Weinhaus</h2>
                <div className="separator" />
                <div className="author-content">
                <p className="subtitle">
                 Evonne is a professional speaker, a family consultant, and an
                  award-winning parenting author.<br />She has had numerous guest
                  spots on{" "}
                  <b>
                    <i>The Today Show</i>
                  </b>
                  ,{" "}
                  <b>
                    <i>Good Morning America</i>
                  </b>{" "}
                  and the{" "}
                  <b>
                    <i>Oprah Winfrey</i>
                  </b>{" "}
                  show, plus being featured in{" "}
                  <b>
                    <i>Family Circle</i>
                  </b>
                  ,{" "}
                  <b>
                    <i>McCall's</i>
                  </b>
                  ,{" "}
                  <b>
                    <i>Woman's Day</i>
                  </b>
                  ,{" "}
                  <b>
                    <i>Working Mother</i>
                  </b>
                  ,{" "}
                  <b>
                    <i>Selling Power</i>
                  </b>{" "}
                  and showcased as a teacher in the movie—{" "}
                  <b>
                    <i>Breakthrough: A Conscious Documentary</i>
                  </b>
                  .<br />
                  Her books{" "}
                  <b>
                    <i>Stop Struggling with Your Teen</i>
                  </b>{" "}
                  and{" "}
                  <b>
                    <i>Stop Struggling With Your Child</i>
                  </b>{" "}
                  have together sold more than a quarter of a million copies
                  worldwide, plus{" "}
                  <b>
                    <i>Stop Struggling With Your Child</i>
                  </b>{" "}
                  won{" "}
                  <b>
                    <i>Child's Magazine</i>
                  </b>{" "}
                  award for Excellence in Family Issues.
                </p>
              </div>
              <div className="heading">
                <h2 className="title">My story</h2>
                <div className="separator" />
                <p className="subtitle">
                  There have been several pivotal moments in my career...
                  <br />
                  <br />
                  Many years ago I met with a Dad and his high school senior son
                  in a joint session. It wasn’t going well at all. I saw them
                  each try to have a one-upmanship — they were in the throes of
                  what I would call then a power struggle. The dad became so
                  irate that he got up to leave the session.
                  <br />
                  <br />
                  At the moment, the teen said the words that are etched in my
                  heart. "If you ever gave a sh*t about me, you will sit down
                  and listen."
                  <br />
                  <br />
                  His dad turned around, saw his son's face and sat back down.
                  <br />
                  <br />
                  "Dad, sometimes I don't even want to live anymore. Nothing
                  makes any sense to me.
                  <br />
                  <br />
                  Last week when you were gone, I went searching for your guns."
                  <br />
                  <br />
                  The dad’s face was one of anguish and fear. His anger was
                  gone. He moved his chair closer to his son and at that moment,
                  the road of recovery had begun.
                  <br />
                  <br />
                  And for me, that was the moment my life changed. I wanted to
                  help both parents and teens never to feel so hopeless, so
                  desperate. How? By educating parents to develop a way both
                  parents and teens feel empowered. Not just one or the other,
                  but both. Empowered Parenting, Empowered Teen.
                  <br />
                  <br />
                  Then came the year 2000 and I heard the words, "You have a
                  brain tumor." Instantly, my life changed. With that said— I am
                  forever blessed-I made a full recovery and, at the same time,
                  I was forever changed. Before brain surgery, fear eluded me.
                  After brain surgery, fear gripped me. Unbeknownst to me, the
                  golf ball and a half size tumor had blocked me from
                  experiencing feelings. Now, I am learning to let my
                  feelings/emotions guide me along with what my thoughts are. It
                  has been as if a whole new world has opened up for me.
                  <br />
                  <br />
                  The next pivotal moment happened when I was working with a mom
                  and I wanted to show her a copy of my book Stop Struggling
                  With Your Teen. I couldn’t— it was out of print. And, it
                  really didn't matter. My book was of the "old world". It
                  didn't deal with this new digital age we are living in. That
                  was the moment, my emotions kicked in…I made a promise to
                  myself to update Stop Struggling With Your Teen, to combine
                  the time-tested and proven parenting principles of the "old
                  world" with the new current problems we are all facing, be it
                  being a teenager, a parent, or a grandparent.
                  <br />
                  <br />I realized my mission of Empowered, Parent, Empowered
                  Teen was more important than ever in this day and age.
                </p>
                </div>
            </div>
        </div>
      </div>
      </article>

    </section>
  );
};

export default Author;
