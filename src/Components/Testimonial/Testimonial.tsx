import { useEffect, useState } from "react";
import "./Testimonial.css";
import $ from "jquery";

const Testimonial = () => {
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    $(document).ready(function() {
      let oldId: number | null = null;

      $(".tabs-controls-link").click(function(e) {
        e.preventDefault();

        if ($(this).hasClass("tabs-controls-link-active")) {
          return false;
        }

        const newId = parseInt($(this).data("id"), 10);
        setCurrentId(newId);
        $(".tabs-controls-link-active").removeClass(
          "tabs-controls-link-active"
        );
        $(this).addClass("tabs-controls-link-active");

        if (oldId === null || newId < oldId) {
          // item is hidden
          const timing = $(".card.hidden").length * 100;
          $(".card").each(function(index) {
            if (index > newId - 1 || index == newId - 1) {
              window.setTimeout(function() {
                $(".card")
                  .eq(index)
                  .removeClass("hidden");
              }, timing - index * 100);
            }
          });
        } else {
          $(".card").each(function(index) {
            if (index < newId - 1) {
              window.setTimeout(function() {
                $(".card")
                  .eq(index)
                  .addClass("hidden");
              }, index * 100);
            }
          });
        }

        oldId = newId;
      });
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prevId) => {
        const newId = prevId === 6 ? 1 : prevId + 1;
        $(`.tabs-controls-link[data-id=${newId}]`).click();
        return newId;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="testimonial">
      <h2 className="title">What Others are Saying: </h2>
        <div className="separator" />
        <section className="cards-container">
        <div className={`card card-current ${currentId === 1 ? 'active' : ''}`} id="1">
          <br />
          <p>
            Evonne has rightfully earned a reputationas the kind of motivational
            speakerwho combines substance, humor and star quality.
          </p>
          <br />
          <br />
            <h1>--- TRIBUNE MEDIA SERVICES</h1>
          <div className="social">
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-youtube" />
          </div>
        </div>
        <div className="card" id="2">
        <br />
          <p>
            Your "knock your socks off" workshop was everything l hoped it!would
            be plus more. We made a lot of money and had toturn people away. In
            fact, USAA local manager called today!to complain that he and
            several of his employees wereunable to get in since we already had a
            130 people signed up.Evonne, you truly brought "a lot of class" to
            our Insurance Day.
          </p>
          <br />
          <br />
            <h1>--- PC., RPA, CFE, CIFI, MHP, GHS Property and Casualty</h1>
          <div className="social">
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-youtube" />
          </div>
        </div>
        <div className="card" id="3">
        <br />

          <p>
            She works the room like Susan Powter. High energy. Fast paced. Lots
            of audience participation.
          </p>
          <br />
          <br />
            <h1>--- St. Petersburg Times</h1>
          <div className="social">
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-youtube" />
          </div>
        </div>
        <div className="card" id="4">
          <br />
          <p>
            Thank you for the expertise, professionalism and guidanceyou have
            given me. You asked hard-hitting questions thatno one else had asked
            before. No one else has requiredme to step back and look deeper.
            ...l have never had suchsuccess before because l was going at it
            from the wrong angle.
          </p>
          <br />
          <br />
            <h1>--WH., Manager of Training & Development CNA</h1>
          <div className="social">
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-youtube" />
          </div>
        </div>
        <div className="card" id="5">
          <br />
          <p>
            I got some wonderful feedback from students and faculty and guests
            about your presentation/talk at our breakfast.AND l have finally
            started reading your book - wonderful!It really was a wonderful talk
            wonderful topic -you touched many, many people who were there. Thank
            you!
          </p>
          <br />
            <h1>
              -- K.B.K, Ph.D. <br />
              Assistant Professor, English/Creative Writing
              <br />
              STEPHENS COLLEGE
            </h1>
          <div className="social">
            <i className="fa fa-facebook" />
            <i className="fa fa-twitter" />
            <i className="fa fa-linkedin" />
            <i className="fa fa-youtube" />
          </div>
        </div>
      </section>
      <section>
        <ul className="tabs-controls">
          <li className="tabs-controls-item">
            <a
              href="#"
              className="tabs-controls-link tabs-controls-link-active"
              data-id="1"
            >
				{" "}
            </a>
          </li>
          <li className="tabs-controls-item">
            <a href="#" className="tabs-controls-link" data-id="2">
			{" "}
            </a>
          </li>
          <li className="tabs-controls-item">
            <a href="#" className="tabs-controls-link" data-id="3">
			{" "}
            </a>
          </li>
          <li className="tabs-controls-item">
            <a href="#" className="tabs-controls-link" data-id="4">
			{" "}
            </a>
          </li>
          <li className="tabs-controls-item">
            <a href="#" className="tabs-controls-link" data-id="5">
			{" "}
            </a>
          </li>
        </ul>
      </section>
    </section>
    </>
  );
};

export default Testimonial;
