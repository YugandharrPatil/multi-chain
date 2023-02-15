import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import WhatIsGraux from "./components/WhatIsGraux";

function App() {
	return (
		<div>
			<Navbar />
			<About />
			<Info />
			<WhatIsGraux />
			<Footer />
		</div>
	);
}

export default App;
