import React from 'react';
import FooterNavigation from './FooterNavigation'

const Footer = (props) => {
  return(
    <footer className="site-footer py-90">
  		<div className="container">

  			<div className="row gap-y">

  				<div className="col-12 col-md-4">
  					<h6 className="heading-alt fs-14 mb-3">Media Grand</h6>
  					<p className="fs-13">Media Grand are a team of Augmented Reality specialists, based in the historic city of Bath, UK. Our services include prototyping &amp; MVP builds, bespoke app development on web, PC and mobile platforms including smart-glasses and experience based AR consultancy.</p>
  					<br />
  					<p className="text-light">Media Grand &copy; 2018. All rights reserved.</p>
  				</div>

  				<div className="col-12 col-md-2">
  					<h6 className="heading-alt fs-14 mb-3  pl-20">Quick Nav</h6>

              <FooterNavigation />


  				</div>

  				<div className="col-12 col-md-2">
  					<h6 className="heading-alt fs-14 mb-3">Address</h6>
  					<p className="fs-13">92 High Street<br />Weston<br />Bath<br />BA1 4DQ</p>
  					<p>+44 (0)1225 482297</p>
  				</div>

  				<div className="col-12 col-md-2">
  					<h6 className="heading-alt fs-14 mb-3">Follow Us</h6>
  					<div className="social text-center">
  						<a className="social-twitter" href="https://twitter.com/mediagranduk"><i className="fa fa-twitter" aria-hidden="true"></i></a>
  						<a className="social-facebook" href="http://facebook.com/mediagrandar"><i className="fa fa-facebook" aria-hidden="true"></i></a>
  						<a className="social-linkedin" href="https://uk.linkedin.com/in/mediagranduk"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
  						<a className="social-google-plus" href="https://plus.google.com/u/0/113954957027382777010"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
  						<a className="social-youtube" href="https://www.youtube.com/channel/UCTsw8RHodV0FFJfmFQ-Jqxg"><i className="fa fa-youtube" aria-hidden="true"></i></a>
  					</div>
  				</div>

  			</div>

  		</div>
  	</footer>
  )
}

export default Footer;
