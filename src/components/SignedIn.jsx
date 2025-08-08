import React from "react";

const SignedIn = ({ setCurrentPage }) => {
	return (
		<div className=" flex flex-col justify-center items-center mt-36">
			<p className="font-bold text-2xl lg:text-3xl text-center">
				You have sucessfully signed in
			</p>
			<button
				className="block bg-[#1466B8] cursor-pointer text-white px-4 py-2 rounded-lg mt-4"
				onClick={() => setCurrentPage("input")}
			>
				Get started!
			</button>
		</div>
	);
};

export default SignedIn;
