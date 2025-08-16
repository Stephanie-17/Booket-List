import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Input = () => {
	const [input, setInput] = useState("");
	const navigate = useNavigate();

	function handleSubmit() {
		const books = input.split(",");
		const bookJSON = JSON.stringify({ books: books });
		console.log(bookJSON);
		navigate("/recommended-books");
	}

	return (
		<>
			 <title>Booket List | Input</title>
			<div className="flex flex-col justify-center items-center mt-36 h-[50vh]">
				<div className="w-[85%] ">
					<h2 className="font-bold text-2xl lg:text-3xl text-center">
						Tell us about your recent reads
					</h2>
					<p className="text-gray-400 text-sm mt-3 text-center lg:text-base">
						For a more specific search, use this format: 'Book1 name by Author1
						name, Book2 name by Author2 name, ...' <br /> Use a comma (',') to
						seperate the book details
					</p>

					<form
						className="flex flex-col justify-center items-center"
						action=""
						onSubmit={handleSubmit}
					>
						<input
							autoFocus
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Enter the last 3 books you read"
							className="min-w-66 lg:w-96 p-4 mt-3 rounded-lg lg:text-center border-[#E5EDF5]  h-9 pl-3  mb-7 border-3 text-[#e4ecff] w-70 sm:w-sm md:w-lg "
						/>

						<button
							className="block bg-[#1747B5] cursor-pointer text-white px-4 py-2 rounded-lg mt-4"
							type="submit"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Input;
