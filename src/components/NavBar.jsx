import { Link } from "react-router-dom";

const NavBar = ({ signedIn }) => {
	return (
		<div className="flex justify-between items-center mx-4 sm:mx-8 my-4 ">
			<Link to="/">
				<h2 className="font-bold text-lg sm:text-xl cursor-pointer">Booket List</h2>
			</Link>

			{signedIn ? (
				<div className="flex justify-between items-center text-sm ">
					{" "}
					<Link to="/input">
						<p className="pr-2 sm:px-5">Get Started</p>
					</Link>
					<Link to="/saved-list">
						<p className="sm:pl-5">Saved List</p>
					</Link>
				</div>
			) : (
				<Link to="/sign-up">
					<button className="bg-[#4573A1]  cursor-pointer text-white px-4 py-2 rounded-lg">
						Sign In
					</button>
				</Link>
			)}
		</div>
	);
};

export default NavBar;
