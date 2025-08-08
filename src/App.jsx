import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Input from "./components/Input";
import SignedIn from "./components/SignedIn";
import Recommended from "./components/Recommended";

function App() {
	const [currentPage, setCurrentPage] = useState("home");
	const [signedIn, setSignedIn] = useState(false);

	const renderPage = () => {
		switch (currentPage) {
			case "home":
				return <HomePage setCurrentPage={setCurrentPage} />;
			case "sign-up":
				return (
					<SignUp setSignedIn={setSignedIn} setCurrentPage={setCurrentPage} />
				);
			case "signed-in":
				return <SignedIn setCurrentPage={setCurrentPage} />;
			case "input":
				return <Input setCurrentPage={setCurrentPage} />;
			case "recommended":
				return <Recommended />;
			default:
				return <HomePage />;
		}
	};

	return (
		<>
			<NavBar signedIn={signedIn} setCurrentPage={setCurrentPage} />
			{renderPage()}
			<Footer />
		</>
	);
}

export default App;
