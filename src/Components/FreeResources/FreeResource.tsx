import React from 'react';

// interface TechIcons {
//   [key: string]: string;
// }

interface FreeResourceProps {
  link?: string;
  repo?: string;
  img: string;
  title: string;
  // tech: string;
  children?: React.ReactNode;
}

const FreeResource: React.FC<FreeResourceProps> = props => {
  // const tech: TechIcons = {
  //   facebook: 'fab fa-facebook-square',
  //   youtube: 'fab fa-youtube'
  // };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    <div className="free-resource">
      <a className="free-resource-link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="free-resource-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="free-resource-details">
        <div className="free-resource-tile">
          {/* <p className="icons">
            {props.tech.split(' ').map(t => (
              <i className={tech[t]} key={t} />
            ))}
          </p> */}
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreeResource;