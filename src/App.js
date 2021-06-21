import React from "react";
import Background from "./components/Background/Background";

import logo from "./img/logo/merge-money-logo.png";

import "./App.css";

const App = () => {
	return (
		<div className='h-screen overflow-hidden'>
			<Background />
			<div className='h-screen flex flex-col justify-center items-center'>
				<div className='flex justify-center items-center space-x-4'>
					<h1 className='text-7xl text-white font-bold'>
						Merge <span className='text-dough-blue'>.</span> Money
					</h1>
					{/* <img
						src={logo}
						alt='Merge Money'
						style={{ objectFit: "cover", objectPosition: "0px 10%" }}
					/> */}
				</div>
				<div className='flex flex-col justify-center items-center'>
					<hr
						className='mb-6 mt-4'
						style={{
							border: "1px solid white",
							width: "80%",
							backgroundColor: "white",
						}}
					/>
					<div className='text-center'>
						<h3
							className='text-3xl lg:text-4xl font-bold mb-2'
							style={{ color: "#222222" }}
						>
							We're building the future of fintech.
						</h3>
						<h4 className='text-3xl' style={{ color: "#222222" }}>
							Contact us at{" "}
							<a
								className='font-bold text-dough-logo'
								href='mailto:hello@merge.money'
							>
								hello@merge.money
							</a>
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
