import React from 'react';
import SocialLinks from '../SocialLinks';
import './Contact.css';
// import FooterIMG from "../../assets/Images/evonne-weinhaus-fast-solutiuons.png";

interface ContactProps {
  // Add any props if needed
}

const Contact: React.FC<ContactProps> = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:evonne@evonneweinhaus.com?subject=Contact%20Form%20Submission%20to%20Evonne&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
        {/* <img src={FooterIMG} alt="Evonne Weinhaus" /> */}
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <div className='social'>
              <SocialLinks />
            </div>

            <p className="subtitle">
              Please, use the form below or send an email to {''}
              <span className="mail">
                evonne
                <i className="fas fa-at at" />
                  evonneweinhaus
                <i className="fas fa-circle dot small-circle" />
                com
              </span>
              :
            </p>
          </div>
        </div>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
