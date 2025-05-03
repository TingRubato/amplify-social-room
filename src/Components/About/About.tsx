import React from "react";
import "./About.css";
// import BookImage from "../../assets/Images/book-magnified.jpg";
import HelloVideo from "../../assets/Media/evonne-weinhaus-video-0619.mp4";
import PosterCover from "../../assets/Images/videocover.png";
// Define props interface if needed
interface AboutProps {
  // Add any props here if they exist
}

const About: React.FC<AboutProps> = () => {
  return (
    <section id="about">
      <script src="https://vjs.zencdn.net/8.22.0/video.min.js"></script>
      <article>
        <div>
          <div className="video-container">
            <div className="wrapper">
              <video
                id="my-video"
                className="video-ts"
                controls={true}
                muted={true}
                preload="none"
                poster={PosterCover}
                data-setup='{  "playbackRates": [1, 1.5, 2] }'
              >
                <source src={HelloVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="wrapper">

        <div className="desc full">
          <div className="title">
            <h3 className="title">
              Do you want to argue less and connect more with your teen?
            </h3>
            <p className="separator" />
            <p>
              My passion is to help parents empower both their teens and empower
              themselves. My belief is that conflict can be a catalyst for
              change instead of fueling never-ending power struggles.
            </p>
          </div>
          <div className="title">
            <h3 className="subtitle">Are you...</h3>
            <p className="separator" />
            <h4>Tired of repeating everything three times and not being heard?</h4>
            <h4>Drained from daily arguing?</h4>
            <h4>Eventually, giving in to your teen?</h4>
          </div>
          <div className="title">
            <h3 className="title">Do you want to...</h3>
            <p className="separator" />
            <h4>be closer, more connected, with your teen?</h4>
            <h3 className="subtitle">If so...</h3>
            <p className="separator" />
            <p>
              You are not alone. I have been there. I have worked with many
              parents who feel the same way. I have also worked with many teens
              who feel unheard and misunderstood. I have seen the power of
              connection and how it can change everything.
            </p>
            <h4 className="subtitle">You should get</h4>
          </div>
        </div>
        </div>
      </article>
      <div className="sd-container">
        {" "}
        <div className="arrow"></div>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default About;
