import React from "react";
import "./Background.css";

const Background = () => {
	return (
		<div>
			<div
				className=' lg:overflow-hidden lg:block lg:relative'
				id='background'
				style={{ height: "100vh" }}
			></div>

			<div className='lg:hidden absolute'>{/* <img src={Mask1} /> */}</div>
		</div>
	);
};

export default Background;
