import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Input from "./components/Input";
import SignedIn from "./components/SignedIn";
import Recommended from "./components/Recommended";
import SavedList from "./components/SavedList";

function App() {
	const [currentPage, setCurrentPage] = useState("input");
	const [signedIn, setSignedIn] = useState(false);

	// const renderPage = () => {
	// 	switch (currentPage) {
	// 		case "home":
	// 			return <HomePage setCurrentPage={setCurrentPage} />;
	// 		case "sign-up":
	// 			return (
	// 				<SignUp setSignedIn={setSignedIn} setCurrentPage={setCurrentPage} />
	// 			);
	// 		case "signed-in":
	// 			return <SignedIn setCurrentPage={setCurrentPage} />;
	// 		case "input":
	// 			return <Input setCurrentPage={setCurrentPage} />;
	// 		case "recommended":
	// 			return <Recommended setCurrentPage={setCurrentPage} />;
	// 		case "saved-list":
	// 			return <SavedList />;
	// 		default:
	// 			return <HomePage />;
	// 	}
	// };

	return (
		<>
		  <NavBar signedIn={signedIn} />
		  <Routes>
				<Route index element={<HomePage />}></Route>
				<Route path="sign-up" element={<SignUp setSignedIn={setSignedIn} />} />
				<Route path="signed-in" element={<SignedIn/>} />
				<Route path="input" element={<Input />} />
				<Route path="recommended books" element={<Recommended />}/>
				<Route path="saved list" element={<SavedList />}/>
			</Routes>
			
			
			<Footer />
		</>
	);
}

export default App;
