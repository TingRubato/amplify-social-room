import React from 'react';
import './Book.css';

interface BookProps {
  // Add any props here if needed
}

const Book: React.FC<BookProps> = () => {
  return (
    <section id="book">
        <div className="heading">
          <h3 className="title">About<br/><i>Stop Struggling with Your Teen</i></h3>
          <p className="separator" />
          <p>
          When parents are feeling frustrated, exhausted and tired of fighting with their teens all the time, they want solutions-not theory. In <b><i>Stop Struggling with Your Teen</i></b>, parents learn the 4 step <b><i>Stop Struggling</i></b> approach to get to the heart of parent-teen conflict. They discover how to strike that delicate balance between setting limits while encouraging their teen's independence.
          </p>
          <ul>
            <li>By stopping unnecessary power struggles without giving in.</li>
            <li>Raising teens who are equipped with the skills necessary to become responsible, well-adjusted adults.</li>
            <li>Creating your own action plan using the included <b><i>Stop Struggling With Your Teen Companion Workbook.</i></b></li>
            <li>Rebuilding your relationship, reducing fighting and revitalizing healthy communication with your teen.</li>
          </ul>
          <p>
          I hope the <b>Stop Struggling</b> approach will serve as your roadmap, providing you with the concrete tools for arguing less and connecting more with your teen.
          </p>
        </div>
    </section>
  );
};

export default Book;
