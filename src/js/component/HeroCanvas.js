import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const HeroCanvas = props => {
	const position = { x: 0, y: 0, radius: 100 };
	const [test, setTest] = useState(null);
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const size = { width: width, height: 600 };
	const canvasRef = useRef(null);
	const requestIdRef = useRef(null);
	const ctx = useRef(null);

	let particleArray = [];
	let adjustX = 10;
	let adjustY = 50;

	const handleMove = (clix, cliy) => {
		position.x = clix;
		position.y = cliy;
		// setTest(position);
	};

	const renderFrame = () => {
		const ctx = canvasRef.current.getContext("2d");
		var randomColor = Math.floor(Math.random() * 16777215).toString(16);
		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = "#0b132b";
		ctx.font = " 2vw 'Fugaz One'";
		ctx.fillText("<Full Stack Web Developer/>", 0, 30);

		// ctx.strokeStyle = "white";
		// ctx.strokeRect(0, 0, 100, 100);
		const textCoordinates = ctx.getImageData(0, 0, 500, 500);

		for (let i = 0; i < particleArray.length; i++) {
			particleArray[i].draw();
			particleArray[i].update();
		}
	};

	class Particle {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.size = 2;
			this.baseX = this.x;
			this.baseY = this.y;
			this.density = Math.random() * 30 + 1;
		}

		draw() {
			const ctx = canvasRef.current.getContext("2d");
			ctx.fillStyle = "#b1cdee";
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fill();
		}

		update() {
			let dx = position.x - this.x;
			let dy = position.y - this.y;
			let distance = Math.sqrt(dx * dx + dy * dy);
			let forceDirectionX = dx / distance;
			let forceDirectionY = dy / distance;
			let maxDistance = position.radius;
			let force = (maxDistance - distance) / maxDistance;
			let directionX = forceDirectionX * force * this.density;
			let directionY = forceDirectionY * force * this.density;

			if (distance < position.radius) {
				const ctx = canvasRef.current.getContext("2d");
				this.x -= directionX;
				this.y -= directionY;
			} else {
				if (this.x !== this.baseX) {
					let dx = this.x - this.baseX;
					this.x -= dx / 10;
				}
				if (this.y !== this.basyY) {
					let dy = this.y - this.baseY;
					this.y -= dy / 10;
				}
			}
		}
	}

	function init() {
		particleArray = [];
		if (!canvasRef.current) {
			window.setTimeout(init, 100);
		} else {
			console.log("init ran");
			const ctx = canvasRef.current.getContext("2d");
			const textCoordinates = ctx.getImageData(0, 0, width, 600);
			for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
				for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
					if (textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] > 128) {
						let positionX = x + adjustX;
						let positionY = y + adjustY;
						particleArray.push(new Particle(positionX * 3, positionY * 6));
					}
				}
			}
		}
	}

	setTimeout(() => {
		init();
	}, 1000);

	useEffect(() => {
		const canvas = canvasRef.current;
		ctx.current = canvas.getContext("2d");
	}, []);

	const animate = () => {
		if (!canvasRef.current) return;
		renderFrame();
		requestIdRef.current = requestAnimationFrame(animate);
	};

	const connect = () => {
		const ctx = canvasRef.current.getContext("2d");
		for (let a = 0; a < particleArray.length; a++) {
			for (let b = a; b < particleArray.length; b++) {
				let dx = particleArray[a].x - particleArray[b].x;
				let dy = particleArray[a].y - particleArray[b].y;
				let distance = Math.sqrt(dx * dx + dy * dy);
				if (distance < 5) {
					ctx.strokeStyle = "white";
					ctx.lineWidth = 2;
					ctx.beginPath();
					ctx.moveTo(particleArray[a].x, particleArray[a].y);
					ctx.lineTo(particleArray[b].x, particleArray[b].y);
					ctx.stroke();
				}
			}
		}
	};

	useEffect(
		() => {
			const handleWindowResize = () => setWidth(window.innerWidth);
			window.addEventListener("resize", handleWindowResize);
			return () => window.removeEventListener("resize", handleWindowResize);
		},
		[width]
	);

	useEffect(
		() => {
			requestIdRef.current = requestAnimationFrame(animate);
			return () => {
				cancelAnimationFrame(requestIdRef.current);
			};
		},
		[width]
	);

	return <canvas onMouseMove={e => handleMove(e.clientX, e.clientY)} {...size} ref={canvasRef} />;
};

HeroCanvas.propTypes = {};
