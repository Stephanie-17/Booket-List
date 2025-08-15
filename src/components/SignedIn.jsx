import React from "react";
import { Link } from "react-router-dom";

const SignedIn = () => {
	return (
		<div className=" flex flex-col justify-center items-center mt-36">
			<p className="font-bold text-2xl lg:text-3xl text-center">
				You have sucessfully signed in
			</p>
      <Link to="/input">
			  	<button
				className="block bg-[#1747B5] cursor-pointer text-white px-4 py-2 rounded-lg mt-4"
			>
				Get started!
			</button>
			</Link>
		
		</div>
	);
};

export default SignedIn;
