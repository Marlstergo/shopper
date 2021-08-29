import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Hamburger from "hamburger-react";
// import ProtectedRoute from "../reusable/ProtectedRoute";

const Layout = ({ children, title="Dashboard" }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div>
			
			<div className="hidden md:block bg-dashboard h-screen overflow-hidden">
				<div className="">
					<div className="md:w-4/5 xl:w-5/6 right-0 my-4 pb-10 top-16 absolute bg-dashboard">
						<div className="mx-4">
							<div className="my-3">{children}</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-dashboard md:hidden">
				<div className={`w-full -right-1 sm:right-0 my-4 pb-10 top-16 absolute bg-dashboard ${isOpen ? "overflow-hidden h6" : "overflow-scroll"}`}>
					<div className="mx-2 sm:mx-4">
						<div className="my-3">{children}</div>
					</div>
				</div>
				<div className={`fixed top-0 left-0 h-screen w-screen z-10 overlay ${isOpen ? "block" : "hidden"}`}></div>

				{/* {isOpen ? <Navigation /> : ""} */}
			</div>

			
		</div>
	);
}


export default (Layout)