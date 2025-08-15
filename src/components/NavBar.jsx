import { Link } from "react-router-dom";

const NavBar = ({ signedIn }) => {
	return (
		<div className="flex justify-between mx-8 my-4">
			<Link to="/">
				<h2 className="font-bold text-xl cursor-pointer">Booket List</h2>
			</Link>

			{signedIn ? (
				<div>
					{" "}
					<Link to="/recommended books">
					  <p>Get Started</p>
					</Link>
					<Link to="saved-list">
					  <p>Saved List</p>
					</Link>
					
				</div>
			) : (
				<Link to="/sign-up">
					<button
						className="bg-[#4573A1]  cursor-pointer text-white px-4 py-2 rounded-lg"
						
					>
						Sign In
					</button>
				</Link>
			)}
		</div>
	);
};

export default NavBar;
