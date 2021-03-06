import { useState, useEffect } from 'react'
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";

const Links = () => {
	return (
		<div className="flex flex-col whitespace-nowrap lg:flex-row text-xl">
			<a className="block pl-3 pr-3" href="/for-sale">All Properties</a>
			<a className="block pl-3 pr-3" href="/for-sale">For Sale</a>
			<a className="block pl-3 pr-3" href="/to-rent">To Rent</a>
			<a className="block pl-3 pr-3" href="/owned">Owned Properties</a>
			<a className="block pl-3 pr-3" href="/renting">Currently Renting</a>
			<a className="block pl-3 pr-3 text-green-400" href="/about">About</a>
			<a className="block pl-3 pr-3 text-red-800" href="/create-item">Create</a>
		</div>
	)
}

export default function Nav() {

	useEffect(() => {
		load()
	},[])

	//assigning location variable
	const location = useLocation();

	//destructuring pathname from location
	const { pathname } = location;

	//Javascript split method to get the name of the path in array
	const splitLocation = pathname.split("/");

	// Burger menus
	function load () {
		// open
		const burger = document.querySelectorAll('.navbar-burger');
		const menu = document.querySelectorAll('.navbar-menu');

		if (burger.length && menu.length) {
			for (var i = 0; i < burger.length; i++) {
				burger[i].addEventListener('click', function () {
					for (var j = 0; j < menu.length; j++) {
						menu[j].classList.toggle('hidden');
					}
				});
			}
		}

		// close
		const close = document.querySelectorAll('.navbar-close');
		const backdrop = document.querySelectorAll('.navbar-backdrop');

		if (close.length) {
			for (var i = 0; i < close.length; i++) {
				close[i].addEventListener('click', function () {
					for (var j = 0; j < menu.length; j++) {
						menu[j].classList.toggle('hidden');
					}
				});
			}
		}

		if (backdrop.length) {
			for (var i = 0; i < backdrop.length; i++) {
				backdrop[i].addEventListener('click', function () {
					for (var j = 0; j < menu.length; j++) {
						menu[j].classList.toggle('hidden');
					}
				});
			}
		}
	};

	const [showMenu, setShowMenu] = useState(false)
	return (
		<div>
			<nav className="relative px-4 py-4 flex justify-between items-center bg-transparent">
				<a className="text-3xl font-bold leading-none" href="/">
					{/* <svg className="h-10" alt="logo" viewBox="0 0 100 100">
						<path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
					</svg> */}
					<img
						className="object-contain scale-75 mb-2 pl-3"
						src="./pogtoken.png"
						alt=""
					></img>
				</a>
				<div className="lg:hidden">
					<button className="navbar-burger flex items-center text-blue-600 p-3">
						<svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Mobile menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>
				<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 whitespace-nowrap lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">					
					<li><a className={splitLocation[1] === "for-sale" ? "active text-lg hover:text-red-500" : "text-lg text-white hover:text-red-500"} href="/for-sale">For Sale</a></li>
					<li className="text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>
					<li><a className={splitLocation[1] === "to-rent" ? "active text-lg hover:text-red-500" : "text-lg text-white hover:text-red-500"} href="/to-rent">To Rent</a></li>
					<li className="text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>
					<li><a className={splitLocation[1] === "owned" ? "active text-lg hover:text-red-500" : "text-lg text-white hover:text-red-500"} href="/owned">Owned Properties</a></li>
					<li className="text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>												
					<li><a className={splitLocation[1] === "renting" ? "active text-lg hover:text-red-500" : "text-lg text-white hover:text-red-500"} href="/renting">Currently Renting</a></li>
					<li className="text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>
					<li><a className={splitLocation[1] === "" ? "active text-lg hover:text-red-500" : "text-lg text-white hover:text-red-500"} href="/all-properties">All Properties</a></li>					
					<li className="text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>	
					<li><a className={splitLocation[1] === "exclusive" ? "active text-lg hover:text-red-500" : "text-lg text-white hover:text-red-500"} href="/exclusive">Exclusive</a></li>
					<li className="text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
						</svg>
					</li>	
					<li><a className={splitLocation[1] === "about" ? "active text-lg hover:text-red-500" : "text-lg text-white hover:text-red-500"} href="/about">About</a></li>				
				</ul>				
				<a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Connect Wallet</a>
			</nav>
			<div className="navbar-menu relative z-50 hidden">
				<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
				<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gray-900 border-r overflow-y-auto">
					<div className="flex items-center mb-8">
						<a className="mr-auto text-3xl font-bold leading-none" href="#">
						<img
						className="object-contain scale-75 mb-2 pl-3 mt-2"
						src="./pogtoken.png"
						alt=""
					></img>
						</a>
						<button className="navbar-close">
							<svg className="h-6 w-6 text-white cursor-pointer hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
							</svg>
						</button>
					</div>
					<div>
						<ul>
							<li className="mb-1">
								<a className={splitLocation[1] === "" ? "active block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded" : "block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded"} href="/">All Properties</a>
							</li>
							<li className="mb-1">
								<a className={splitLocation[1] === "for-sale" ? "active block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded" : "block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded"} href="/for-sale">For Sale</a>
							</li>
							<li className="mb-1">
								<a className={splitLocation[1] === "to-rent" ? "active block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded" : "block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded"} href="/to-rent">To Rent</a>
							</li>
							<li className="mb-1">
								<a className={splitLocation[1] === "owned" ? "active block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded" : "block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded"} href="/owned">My Properties</a>
							</li>
							<li className="mb-1">
								<a className={splitLocation[1] === "renting" ? "active block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded" : "block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded"} href="/renting">Renting</a>
							</li>
							<li className="mb-1">
								<a className={splitLocation[1] === "about" ? "active block p-4 text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded" : "block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded"} href="/about">About</a>
							</li>
						</ul>
					</div>
					<div className="mt-auto">
						<div className="pt-6">						
							<a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Connect Wallet</a>
						</div>
						<p className="my-4 text-xs text-center text-white">
							<span>Copyright ?? 2022</span>
						</p>
					</div>
				</nav>
			</div>
			</div>
		// <nav>
		// 	<div className="hidden lg:flex">
		// 		<Links />
		// 	</div>
		// 	<div className="lg:hidden relative">
		// 		<div className="text-white">
		// 			<button className="btn-icon" onClick={() => setShowMenu(!showMenu)}>
		// 				<IoMenu />
		// 			</button>
		// 		</div>
		// 		{showMenu && (
		// 			// <div className="absolute pb-3 top-10 right-0 z-50 bg-black shadow-zl rounded">
		// 			//     <Links />
		// 			// </div> 
		// <div>
		// 	<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
		// 		<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
		// 			<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
		// 				<a
		// 					className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
		// 					href="#pablo"
		// 				>
		// 					pink Tailwind Starter Kit
		// 				</a>
		// 				<button
		// 					className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
		// 					type="button"
		// 					onClick={() => setShowMenu(!showMenu)}
		// 				>
		// 					<i className="fas fa-bars"></i>
		// 				</button>
		// 			</div>
		// 			<div
		// 				className={
		// 					"lg:flex flex-grow items-center" +
		// 					(showMenu ? " flex" : " hidden")
		// 				}
		// 				id="example-navbar-danger"
		// 			>
		// 				<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
		// 					<li className="nav-item">
		// 						<a
		// 							className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
		// 							href="#pablo"
		// 						>
		// 							<i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Share</span>
		// 						</a>
		// 					</li>
		// 					<li className="nav-item">
		// 						<a
		// 							className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
		// 							href="#pablo"
		// 						>
		// 							<i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tweet</span>
		// 						</a>
		// 					</li>
		// 					<li className="nav-item">
		// 						<a
		// 							className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
		// 							href="#pablo"
		// 						>
		// 							<i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Pin</span>
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</nav>
		// </div>
	)
}
		// 	</div>
		// </nav>

