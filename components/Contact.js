import React from 'react';


const Contact = (props) => {
  return(
    <section className="section pb-0 bg-gray" id="contact">
			<div className="container">

				<h2 className="text-center">Contact Us</h2>

				<br /><br />

				<form className="row gap-y" action="assets/php/sendmail.php" method="POST" data-form="mailer">

					<div className="col-12 col-lg-6">

						<div className="alert alert-success">Your message was sent, we'll get back to you as quickly as we can.</div>

						<div className="row">
							<div className="form-group col-12 col-md-6">
								<input className="form-control form-control-lg" type="text" name="firstname" placeholder="First Name" />
							</div>

							<div className="form-group col-12 col-md-6">
								<input className="form-control form-control-lg" type="text" name="lastname" placeholder="Last Name" />
							</div>
						</div>

						<div className="row">
							<div className="form-group col-12 col-md-6">
								<input className="form-control form-control-lg" type="email" name="email" placeholder="Email" />
							</div>

							<div className="form-group col-12 col-md-6">
								<input className="form-control form-control-lg" type="text" name="phone" placeholder="Phone" />
							</div>
						</div>

						<div className="form-group">
							<textarea className="form-control form-control-lg" rows="4" placeholder="What do you have in mind?" name="message"></textarea>
						</div>

						<div className="g-recaptcha" data-sitekey="6LeieSYTAAAAAAHbE1RSXoWTPyuW6V3XXoQ4IYUQ"></div>

						<button className="btn btn-lg btn-primary" type="submit">Send message</button>

					</div>


					<div className="col-12 offset-lg-1 col-lg-5 text-center text-lg-left">

						<h5>Media Grand UK</h5>
						<p>92 High Street<br />Weston<br />Bath<br />BA1 4DQ</p>
						<p>+44 (0)1225 482297</p>
						<p>info@mediagrand.co.uk</p>

						<h6>Follow Us</h6>
						<div className="social social-sm">
							<a className="social-twitter" href="https://twitter.com/mediagranduk"><i className="fa fa-twitter" aria-hidden="true"></i></a>
							<a className="social-facebook" href="http://facebook.com/mediagrandar"><i className="fa fa-facebook" aria-hidden="true"></i></a>
							<a className="social-linkedin" href="https://uk.linkedin.com/in/mediagranduk"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
							<a className="social-google-plus" href="https://plus.google.com/u/0/113954957027382777010"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
							<a className="social-youtube" href="https://www.youtube.com/channel/UCTsw8RHodV0FFJfmFQ-Jqxg"><i className="fa fa-youtube" aria-hidden="true"></i></a>
						</div>

					</div>
				</form>



				<br /><br /><br /><br />




			</div>

			<div className="h-350" data-provide="map" data-lat="51.3877908" data-lng="-2.3810596" data-marker-lat="51.3979263" data-marker-lng="-2.3952624" data-info="&lt;strong&gt;Our address&lt;/strong&gt;&lt;br&gt;92 High Street, Weston, BA1 4DQ" data-style="dark"></div>
		</section>
  )
}

export default Contact;
