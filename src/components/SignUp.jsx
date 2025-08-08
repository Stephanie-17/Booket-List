import React, { useState } from "react";

const SignUp = ({ setCurrentPage, setSignedIn }) => {
	const [signPage, setSignPage] = useState(true);

	function handleClick() {
		setCurrentPage("signed-in");
		setSignedIn(true);
	}
	return (
		<div className="  mt-10">
			<div>
				<h2 className="text-3xl font-semibold mb-10 text-center">
					{signPage ? "Create Your Account" : "Log into your Account"}
				</h2>
				<div className="flex justify-center items-center flex-col w-[60%]">
					<form>
						<p>Name</p>
						<input
							className="w-90 rounded-lg h-9 pl-3 mt-2 mb-7 bg-gray-200"
							type="text"
							placeholder="Enter your name"
						/>

						<p>Email</p>
						<input
							className="w-90 rounded-lg h-9 pl-3 mt-2 mb-7 bg-gray-200"
							type="text"
							placeholder="Enter your email"
						/>

						<p>Password</p>
						<input
							className="w-90 rounded-lg h-9 pl-3 mt-2 mb-7 bg-gray-200"
							type="text"
							placeholder="Enter your password"
						/>

						<button
							className="w-90 block text-white rounded-lg h-9 pl-3 mt-2 mb-7 bg-[#1466B8]"
							onClick={handleClick}
						>
							{signPage ? "Sign up" : "Log in"}
						</button>
					</form>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="mt-5 text-gray-400 text-sm mb-4 text-center">
						or {signPage ? "Sign up" : "Log in"} with
					</p>
					<div>
						<button className="bg-gray-200 px-4 py-2 font-semibold rounded-lg text-center mr-3">
							Continue with Google
						</button>
						<button className="bg-gray-200 px-4 py-2 font-semibold rounded-lg text-center ">
							Continue with Facebook
						</button>
					</div>

					<p
						className="text-gray-400 mt-6 underline cursor-pointer"
						onClick={() => setSignPage(!signPage)}
					>
						{signPage
							? "Already have an account? Log in"
							: "Dont have an account? Sign in"}{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
