import React, { useState, useRef, useEffect } from "react";
import FreeResource from "./FreeResource";
import "./FreeResources.css";
import youtubeImage from "./images/youtube.png";
import facebook from "./images/facebook.png";


const FreeResources: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (groupRef.current) {
      if (isExpanded) {
        groupRef.current.style.maxHeight = `${groupRef.current.scrollHeight}px`; // 动态设置高度
      } else {
        groupRef.current.style.maxHeight = "200px"; // 折叠时的高度
      }
    }
  }, [isExpanded]);

  return (
    <section id="free-resources">
      <div className="heading">
        <h2 className="title">Free Resources for Parents</h2>
        <p className="separator" />
      </div>
      <div className="free-resource-columns">
        <div className="free-resource-group">
          <p className="subcaption">Youtube Resources</p>
          <FreeResource
            title="Welcome to Evonne Weinhaus YouTube Channel."
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=7O3lAWTv5xo"
          >
            <small>
              Hi, it's Evonne. Welcome to my You Tube channel where you will
              have an opportunity to see videos about parenting teens. In
              particular, parent teen communication- how to argue less and
              connect more with your teen and quick parenting solutions that are
              2 minutes or less.
            </small>
            <p></p>
          </FreeResource>

          <FreeResource
            title="Methods of Discipline"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=elGVb1tDWq0"
          >
            <small>
              Do you practice methods of Discipline that leave you at your wit's
              end? Listen to what Evonne has to say about it.
            </small>
            <p></p>
          </FreeResource>

          <FreeResource
            title="What Use to Stop Me From Writing My Book -- Stop Struggling With Your Teen"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=QzKuGpBr1l8"
          >
            <small>
              Parent Teen Communication, Quick Parenting Solutions, Parenting
              Tips for Teenagers, Evonne Weinhaus
            </small>
            <p></p>
          </FreeResource>

          <FreeResource
            title="Vaping: How To StartTalking About it"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=i0OdTrw91XE"
          >
            <small>
              Parent Teen Communication, Quick Parenting Solutions, Parenting
              Tips for Teenagers, Evonne Weinhaus
            </small>
            <p></p>
          </FreeResource>

          <FreeResource
            title="Vaping: How to Talk About it, Pt. 2"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=-c40aiy_eFU"
          >
            <small>
              Parent Teen Communication, Quick Parenting Solutions, Parenting
              Tips for Teenagers, Evonne Weinhaus, Vaping
            </small>
            <p></p>
          </FreeResource>

          <FreeResource
            title="Vaping: What are the 8 L's?"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=ML_H8eYgP0M"
          >
            <small>
              Parent Teen Communication, Quick Parenting Solutions, Parenting
              Tips for Teenagers, Evonne Weinhaus, vaping
            </small>
            <p></p>
          </FreeResource>

          <FreeResource
            title="7 Words to Change Your Relationship"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=gZGiIhpDrro"
          >
            <small>
              Parent Teen Communication, Quick Parenting Solutions, Parenting
              Tips for Teenagers, Evonne Weinhaus
            </small>
            <p></p>
          </FreeResource>
          <FreeResource
            title="Warning!"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=hEGwZ1MsLPg"
          >
            <small>Using the word, "warning"</small>
            <p></p>
          </FreeResource>
          {isExpanded && (
            <>

          <FreeResource
            title="What to Do About Peer Pressure"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=Qb2GymRFrsw"
          >
            <small>
              Parent Teen Communication, Quick Parenting Solutions, Parenting
              Tips for Teenagers, Evonne Weinhaus, Peer pressure
            </small>
            <p></p>
          </FreeResource>

          <FreeResource
            title="Limiting Screen Time: Protecting or Punishing?"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=jCOcTIqU5Kk"
          >
            <small>
              Parent Teen Communication, Quick Parenting Solutions, Parenting
              Tips for Teenagers, controlling screen time, Evonne Weinhaus
            </small>
            <p></p>
          </FreeResource>

          <FreeResource
            title="Limiting Screen Time: Don't Use Your Mouth, Use Your Routine"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=ZlJTrUApeEc"
          >
            <small>Changing routines</small>
            <p></p>
          </FreeResource>

          <FreeResource
            title="#2 Aha Moment"
            img={youtubeImage}
            // tech="youtube"
            link="https://www.youtube.com/watch?v=E9O9ZBkSJ80"
          >
            <small>
              Have you ever had a moment when you said a statement and realized
              immediately, you have just released a truth to others, as well as
              to yourself. This happened to me and became my #2 Aha Moment.
            </small>
            <p></p>
          </FreeResource>
          </>
          )}
        </div>
        <div className="free-resource-group">
          <p className="subcaption">Facebook Audio</p>
          <FreeResource
            title="Week 1: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/10155907366698019/"
          >
            <small>
              In this ready-to-go role play, Alex and I act as mother and son to
              demonstrate common situations when parenting teenagers. After each
              part, I will discuss helpful methods you can apply when arguing
              with your teen.
            </small>
          </FreeResource>

          <FreeResource
            title="Week 2: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/10155923284513019/"
          >
            <small>
              This week, we act out one of the most common arguments parents
              have with their teens. How would you handle it?
            </small>
          </FreeResource>

          <FreeResource
            title="Week 3: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/10155937655103019/"
          >
            <small>
              Alex gives me a topic I'm personally very passionate about and I
              know many of you moms out there are as well. Instead of letting
              your frustration take over, please take my advice at the end of
              the video!
            </small>
          </FreeResource>

          <FreeResource
            title="Week 3: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/10155937655103019/"
          >
            <small>
              Alex gives me a topic I'm personally very passionate about and I
              know many of you moms out there are as well. Instead of letting
              your frustration take over, please take my advice at the end of
              the video!
            </small>
          </FreeResource>

          <FreeResource
            title="Week 4: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/10155958875563019/"
          >
            <small>
              An issue almost ALL parents seem to be struggling with!
            </small>
          </FreeResource>

          <FreeResource
            title="Week 5: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/10155972881633019/"
          >
            <small>
              A conversation I would guess EVERY parent has had with their son
              or daughter, but are you doing it the most effective way?
            </small>
          </FreeResource>

          <FreeResource
            title="Week 6: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/282738078981141/"
          >
            <small>
              Tired of getting a messy car back from your teen? Well, look no
              further!
            </small>
          </FreeResource>

          <FreeResource
            title="Week 7: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/315269719233099/"
          >
            <small>
              Does your teenager ever try to go behind your back, and how should
              you handle it?
            </small>
          </FreeResource>

          {isExpanded && (
            <>
          <FreeResource
            title="Week 8: Quick Parenting Solutions"
            img={facebook}
            // // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/518350761943727/"
          >
            <small>
              Teen dangling bait... Mom (me) refuses to take it and son (Alex)
              left without any words. So much so Alex in the role of teenager
              stops the video. Priceless.
            </small>
          </FreeResource>

          <FreeResource
            title="Week 9: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/2203344356544628/"
          >
            <small>
              A very effective method for better communication with your teen -
              and it all starts with changing your language from questions to
              expectations.
            </small>
          </FreeResource>

          <FreeResource
            title="Week 10: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/316263392468407/"
          >
            <small>
              In this special edition of Quick Parenting Solutions - Applying
              Tuesday Tips, Alex asks me to elaborate on previous weeks' Tuesday
              Tips.
            </small>
          </FreeResource>

          <FreeResource
            title="Week 11: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/537938646660054/"
          >
            <small>
              The importance of progressing from small problems to big problems
              when establishing your credibility.
            </small>
          </FreeResource>

          <FreeResource
            title="Week 12: Quick Parenting Solutions - Applying Tuesday Tips"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/1014954595350708/"
          >
            <small>
              I follow up on last week's video by explaining what ABCD parenting
              is.
            </small>
          </FreeResource>

          <FreeResource
            title="Week 13: Quick Parenting Solutions - Applying Tuesday Tips"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/595150460900247/"
          >
            <small>
              In this special edition of Quick Parenting Solutions - Applying
              Tuesday Tips, Alex asks me to elaborate on previous weeks' Tuesday
              Tips.
            </small>
          </FreeResource>

          <FreeResource
            title="Week 14–17: Thursday Talks with Evonne"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/182109476000845/"
          >
            <small>
              Thursday Talks with Evonne – A multi-week segment focused on
              deeper discussions and parental insights.
            </small>
          </FreeResource>

          <FreeResource
            title="Week 18: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/949504315235785/"
          >
            <small>
              If you could give one piece of advice, what would it be?
            </small>
          </FreeResource>

          <FreeResource
            title="Week 19: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/2230920133857503/"
          >
            <small>Thursday Talks with Evonne</small>
          </FreeResource>

          <FreeResource
            title="Week 20–22: Quick Parenting Solutions – Vaping"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/2193217890932638/"
          >
            <small>
              Series on vaping: Catching your teen vaping, how to start the
              conversation, and learning to be a better listener.
            </small>
          </FreeResource>

          <FreeResource
            title="Week 23: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/350357238889170/"
          >
            <small>Review and further discussion on the three L's.</small>
          </FreeResource>

          <FreeResource
            title="Week 24: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/1131119660390951/"
          >
            <small>
              Seven words that could change your relationship with your teen.
            </small>
          </FreeResource>

          <FreeResource
            title="Week 25: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/2462256227334993/"
          >
            <small>The word "Warning"</small>
          </FreeResource>

          <FreeResource
            title="Week 26: Quick Parenting Solutions"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/406431183232956/"
          >
            <small>Alcohol, drugs and peer pressure</small>
          </FreeResource>

          <FreeResource
            title="Week 27–28: Quick Parenting Solutions – Limiting Screen Time"
            img={facebook}
            // tech="facebook"
            link="https://www.facebook.com/evonneweinhaus/videos/372003733589763/"
          >
            <small>
              A 3-part series on limiting screen time, including practical tips
              and communication methods for // tech boundaries.
            </small>
          </FreeResource>
          </>
        )}
        </div>
      </div>
      <button className="expand-button" onClick={toggleExpand}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default FreeResources;