import React from 'react';

interface SocialLinksProps {
  // Add any props if needed
}

const SocialLinks: React.FC<SocialLinksProps> = () => {
  return (
    <div className="social">
      <a
        href="https://twitter.com/evonneweinhaus"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Evonne's Twitter profile"
      >
        {' '}
        <i className="fab fa-twitter" />
      </a>
      <a
        id="profile-link"
        href="https://www.facebook.com/evonneweinhaus/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Evonne's Facebook Profile"
      >
        {' '}
        <i className="fab fa-facebook" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCayytkuU0vGaHshfmKsmF2w"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Evonne's Youtube Channel"
      >
        {' '}
        <i className="fab fa-youtube" />
      </a>
      <a
        href="https://www.linkedin.com/in/evonne-weinhaus-18aa292/"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Evonne's Instagram Profile"
      >
        {' '}
        <i className="fab fa-instagram" />
      </a>
      <a
        href="emailto:evonne.weinhaus@me.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to Evonne's Email"
      >
        {' '}
        <i className="fas fa-envelope" />
      </a>
    </div>
  );
};

export default SocialLinks;
