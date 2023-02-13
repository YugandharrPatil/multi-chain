import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg">
				<div class="container-fluid">
					<a class="navbar-brand" href="#hi">
						<img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="" />
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#hinavbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto">
							<li class="nav-item me-4">
								<a class="nav-link" aria-current="page" href="#hi">
									Who
								</a>
							</li>
							<li class="nav-item me-4">
								<a class="nav-link" href="#hi">
									What
								</a>
							</li>
							<li class="nav-item me-4">
								<a class="nav-link" href="#hi">
									How
								</a>
							</li>
							<li class="nav-item me-4">
								<a class="nav-link" href="#hi">
									Why
								</a>
							</li>
							<li class="nav-item me-4">
								<a class="nav-link" href="#hi">
									About
								</a>
							</li>
							<li class="nav-item me-4">
								<a class="nav-link" href="#hi">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
