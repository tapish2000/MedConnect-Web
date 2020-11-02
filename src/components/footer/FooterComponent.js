import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './FooterComponent.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram
  } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
	render() {
		return (
			<div className="main-footer bg-info">
				<div className="container-fluid text-light">
					<div className="d-flex justify-content-around">
						<div className="col-md-2"><h5>Quick Links</h5></div>
						<div className="col-md col-4">
							<div className="row">
								<div className="col-12"><Link to={"/"} style={{color:"white",textDecoration:"none"}}>Home</Link></div>
								<div className="col-12"><Link to={"/stores"} style={{color:"white",textDecoration:"none"}}>Store</Link></div>
							</div>
						</div>
						<div className="col-md col-4">
							<div className="row">
								<div className="col-12"><Link to={"/allopgen"} style={{color:"white",textDecoration:"none"}}>Generic Allopathic Products</Link></div>
								<div className="col-12"><Link to={"/allopbrand"} style={{color:"white",textDecoration:"none"}}>Branded Allopathic Products</Link></div>
							</div>
						</div>
						<div className="col-md col-4">
						<div className="row">
								<div className="col-12"><Link to={"/ayurgen"} style={{color:"white",textDecoration:"none"}}>Generic Ayurvedic Products</Link></div>
								<div className="col-12"><Link to={"/ayurbrand"} style={{color:"white",textDecoration:"none"}}>Branded Ayurvedic Products</Link></div>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-around">
						<div className="social-container">
							<h5 className="text-white">Connect With Us</h5>
							<a href="#" className="facebook social">
								<FontAwesomeIcon icon={faFacebook} size="2x" />
							</a>
							<a href="#" className="twitter social">
								<FontAwesomeIcon icon={faTwitter} size="2x" />
							</a>
							<a href="#" className="instagram social">
								<FontAwesomeIcon icon={faInstagram} size="2x" />
							</a>
						</div>
						<div className="footer-bottom">
							<p className="text-xs-center">
								MedConnect &copy;{new Date().getFullYear()} - All Rights Reserved
							</p>
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}

export default Footer;