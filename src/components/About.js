const About = () => {
	return (
		<div className="about">
			<div className="text-center mt-5">
				<img src={`${process.env.PUBLIC_URL}/images/solana.png`} alt="" />
				<h1>
					Solana <br /> Solution for <br /> Blockchains!
				</h1>
			</div>
		</div>
	);
};

export default About;
