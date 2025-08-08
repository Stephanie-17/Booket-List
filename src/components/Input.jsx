import React from "react";

const Input = ({ setCurrentPage }) => {
	return (
		<div className="flex flex-col justify-center items-center mt-36">
			<div className="w-[85%] ">
				<h2 className="font-bold text-2xl lg:text-3xl text-center">
					Tell us about your recent reads
				</h2>
				<p className="text-gray-400 text-sm mt-3 text-center lg:text-base">
					For a more specific search, use this format: 'Book1 name by Author1
					name, Book2 name by Author2 name, ...'
				</p>
				<form className="flex flex-col justify-center items-center" action="">
					<input
						autoFocus
						type="text"
						placeholder="Enter the last 3 books you read"
						className="min-w-66 lg:w-96 p-4 mt-3 rounded-lg lg:text-center border-[#E5EDF5]  h-9 pl-3  mb-7 border-3 text-[#e4ecff] w-70 sm:w-sm md:w-lg "
					/>

					<button
						className="block bg-[#1747B5] cursor-pointer text-white px-4 py-2 rounded-lg mt-4"
						onClick={() => setCurrentPage("recommended")}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Input;
