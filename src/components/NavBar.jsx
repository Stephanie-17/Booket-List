import React from "react";

const NavBar = ({ setCurrentPage, signedIn }) => {
	return (
		<div className="flex justify-between mx-8 my-4">
			<h2
				className="font-bold text-xl cursor-pointer"
				onClick={() => setCurrentPage("home")}
			>
				Booket List
			</h2>
			{signedIn ? (
				<div>
					{" "}
					<p>Get Started</p> <p>Saved List</p>
				</div>
			) : (
				<button
					className="bg-[#1466B8] cursor-pointer text-white px-4 py-2 rounded-lg"
					onClick={() => setCurrentPage("sign-up")}
				>
					Sign In
				</button>
			)}
		</div>
	);
};

export default NavBar;
