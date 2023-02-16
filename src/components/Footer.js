const Footer = () => {
	return (
		<footer>
			<div className="hii">
				<img src={`${process.env.PUBLIC_URL}/images/grauxxx.png`} alt="" />
				<div className="col1 text-center">
					<h3>Connect with Us!</h3>
					<div className="social-icons mx-auto pt-4">
						<a href="">
							<i class="fa-xl fa-brands fa-twitter"></i>
						</a>
						<a href="">
							<i class="fa-xl fa-brands fa-discord"></i>
						</a>
						<a href="">
							<i class="fa-xl fa-brands fa-telegram"></i>
						</a>
						<a href="">
							<i class="fa-xl fa-brands fa-reddit"></i>
						</a>
						<a href="">
							<i class="fa-xl fa-brands fa-github"></i>
						</a>
						<a href="">
							<i class="fa-xl fa-brands fa-youtube"></i>
						</a>
					</div>
					<h6 className="pt-2">&#169; 2023 Graux Foundation. All rights reserved.</h6>
				</div>
				<div className="links">
					<h4>Graux</h4>
					<a href="#">Documentation</a>
					<br />
					<a href="#">Terms and Policy</a>
					<br />
					<a href="#">Privacy Policy</a>
					<h4>Products</h4>

					<h4>Resources</h4>
					<a href="#">Medium Articles</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
