import { FC, MouseEvent } from "react";
import "./Preview.css";
import parentTeenQuizPdf from "../../assets/parent-teen-quiz-evonne-weinhaus_0619.pdf";

const Preview: FC = () => {
	const handleDownloadClick = (event: MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();

		const downloadLink = document.createElement("a");
		downloadLink.href = parentTeenQuizPdf;
		downloadLink.download = "parent-teen-quiz-evonne-weinhaus_0619.pdf";
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);

		window.setTimeout(() => {
			window.location.href = "https://stopstruggling.evonneweinhaus.com";
		}, 300);
	};

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
									<a className="btn" href={parentTeenQuizPdf} download="parent-teen-quiz-evonne-weinhaus_0619.pdf" onClick={handleDownloadClick}>Download</a>
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
