import React from 'react';

const About = () => {
  return(
    <section className="section section-inverse bg-img py-150" style={{backgroundImage: `url(assets/img/bg-bath.jpg)`}} data-overlay="8" id="about">
			<div className="container">

				<div className="row gap-y">
					<div className="col-12 col-md-6 px-40">

            <h2>About Us</h2>

						<p className="lead">Media Grand are a team of Augmented Reality specialists, based in the historic city of Bath, UK.</p>

						<p>Founded in 2008 by <a href="https://www.linkedin.com/in/mediagranduk/" rel="noopener noreferrer" target="_blank"><strong>Paul Lewis</strong>,</a> an AR visionary and award winning multi-media producer of over 20 years, to offer you dedicated technology expertise based on our knowledge and experience.</p>

						<p>We have worked with clients from a wide range of industries around the world, from local pop-up art collaborators to multi-national corporations.</p>

						<p>We are friendly, approachable and available to discuss your AR project, no matter how large or small.</p>


					</div>

					<div className="col-12 col-md-6 px-40">

						<h2>What We Do</h2>

  						<p className="lead">Our services include bespoke AR app development on web, PC and mobile platforms including smart-glasses, prototyping and professional AR consultancy.</p>

  						<p>We use a wide range of AR technologies to get the job done, providing you with a full array of tracking functionality and a rich feature set to match your digital concept.</p>

  						<p>Our main developer toolkit includes <a href="https://www.vuforia.com/apps.html" rel="noopener noreferrer" target="_blank"><strong>Vuforia</strong></a>,
                <a href="https://www.wikitude.com/showcase/" rel="noopener noreferrer" target="_blank"><strong>Wikitude</strong></a>,
                <a href="https://unity3d.com/" rel="noopener noreferrer" target="_blank"><strong>Unity</strong></a>,
                <a href="https://developer.apple.com/arkit/" rel="noopener noreferrer" target="_blank"><strong>ARKit</strong></a>,
                <a href="https://developers.google.com/ar/" rel="noopener noreferrer" target="_blank"><strong>ARCore</strong></a> and
                <a href="https://www.artoolkit.org/" rel="noopener noreferrer" target="_blank"><strong>ARToolkit</strong></a>.
                We can deliver AR on the web, as mobile apps, on smart-glasses or on PC's for big-screen engagement. We can also offer AR browser experiences for those on a budget.</p>


					</div>
				</div>

			</div>
		</section>
  )
}

export default About;
