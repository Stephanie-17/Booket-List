import React from "react";
import RecommendedBook from "./RecommendedBook";

const Recommended = ({setCurrentPage}) => {
	return (
		<div className="flex flex-col ml-5 sm:ml-15 lg:ml-25 mt-10">
			<p className="font-bold text-2xl lg:text-3xl mb-5">Recommended reads</p>
			<input
				className="border-[#E5EDF5] border-2 text-[#e4ecff] w-70 sm:w-sm md:w-lg p-2  rounded-lg mb-5"
				type="search"
				placeholder="Search"
			/>
			<div className="flex gap-4">
				<button className="bg-[#ffffff] text-black font-semibold py-2 px-3 rounded-lg cursor-pointer">
					Filter
				</button>
				<button className="bg-[#1747B5] font-semibold py-2 px-3 rounded-lg cursor-pointer">
					Sort
				</button>
			</div>
			<div className="flex flex-wrap gap-6">
				<RecommendedBook setCurrentPage={setCurrentPage} />
            <RecommendedBook setCurrentPage={setCurrentPage}/>
			</div>
			
		</div>
	);
};

export default Recommended;
