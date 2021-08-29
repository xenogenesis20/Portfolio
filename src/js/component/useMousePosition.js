import { useEffect, useState, useRef } from "react";

export const useMousePosition = (clix, cliy) => {
	// const [position, setPosition] = useState({ x: 0, y: 0, radius: 50 });

	// useEffect(() => {
	// 	const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY, radius: 50 });
	// 	window.addEventListener("mousemove", setFromEvent);

	// 	return () => {
	// 		window.removeEventListener("mousemove", setFromEvent);
	// 	};
	// }, []);

	function getCoords(clientX, clientY) {
		return {
			x: clientX || 0,
			y: clientY || 0,
			radius: 50
		};
	}

	const position = useRef({ x: 0, y: 0, radius: 50 }); // ref not state!

	useEffect(() => {
		const handleMove = e => {
			position.current.x = clix;
			position.current.y = cliy;
		};
		global.addEventListener("mousemove", handleMove);
		return () => {
			global.removeEventListener("mousemove", handleMove);
		};
	});
	// useEffect(() => {
	// 	const handleMove = e => {
	// 		position.current = getCoords(clix, cliy);
	// 	};
	// 	global.addEventListener("mousemove", handleMove);
	// 	return () => {
	// 		global.removeEventListener("mousemove", handleMove);
	// 	};
	// });
	return position;
};
