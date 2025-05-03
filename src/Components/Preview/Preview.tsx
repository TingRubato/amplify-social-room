import { FC } from "react";
import "./Preview.css";

const Preview: FC = () => {
  return (
	<section id="preview">
					<div className="heading">
									<h3 className="title">Get a Preview Copy</h3>
			<p className="separator" />
		</div>
	<div className="preview">
				<ul className="align">
					<li>
						<figure className='book'>
							<ul className='hardcover_front'>
								<li>
									<div className="coverDesign blue">
									</div>
								</li>
								<li></li>
							</ul>
							<ul className='page'>
								<li></li>
								<li>
									<a className="btn" href="/src/assets/stop-struggling-with-your-teen-excerpt-2.pdf" download>Download</a>
								</li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
							<ul className='hardcover_back'>
								<li></li>
								<li></li>
							</ul>
							<ul className='book_spine'>
								<li></li>
								<li></li>
							</ul>
							<figcaption>		

								<h1>Stop Struggling with Your Teen</h1>
								<span>By Evonne Weinhaus</span>
								<a href="#" className="p">Get it now on Amazon</a>
							</figcaption>
						</figure>
					</li>
				</ul>
			</div>
</section>
  );
};

export default Preview;
