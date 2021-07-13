import React from "react";
import Suggestion from "../../components/suggest";
import Footer from "../../components/Footer";
import ProductDisplay from "../../components/singleProductHero";

function Nuka() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ProductDisplay filter="H700 Nuka-Cola" />
			<Suggestion />
			<Footer />
		</div>
	);
}

export default Nuka;
