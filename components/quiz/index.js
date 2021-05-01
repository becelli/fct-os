import { useState, useEffect } from 'react';
import Router from 'next/router';
const bg = 'md:bg-gray-300';
const txt = 'md:text-black';
let el = 0;
let link = '';
let correct = 0;

// Add sound to page
import useSound from 'use-sound';
const computerSfx = '/computer-startup-long.mp3';

export default function App(props) {
	// Sound effect to run after this page
	const [play] = useSound(computerSfx);

	// Enable these values globally
	link = props.link;
	correct = props.correct;
	// Call the hook for each key that I'd like to monitor
	const arrowUp = useKeyPress('ArrowUp');
	const arrowDown = useKeyPress('ArrowDown');
	const arrowRight = useKeyPress('ArrowRight');
	const Enter = useKeyPress('Enter');

	// How many entries
	const options = Object.keys(props).length - 2;
	// Select options by keyboard.
	const [selected, setSelected] = useState(1);
	useEffect(() => {
		// (De) & Increment select counter
		if (arrowUp && selected > 1) {
			setSelected(selected - 1);
		} else if (arrowDown && selected < options) {
			setSelected(selected + 1);
		}
		// Store the elements.
		const c1 = document.querySelector('.choice-1');
		const c2 = document.querySelector('.choice-2');
		const c3 = document.querySelector('.choice-3');
		const c4 = document.querySelector('.choice-4');
		// Change the selected
		if (props.op1) changeSelectedColor(selected, c1, 1);
		if (props.op2) changeSelectedColor(selected, c2, 2);
		if (props.op3) changeSelectedColor(selected, c3, 3);
		if (props.op4) changeSelectedColor(selected, c4, 4);
		// Click on enter or arrow right
		if (Enter || arrowRight) {
			el.click();
		}
	});

	return (
		<div className="text-md ">
			<div className="sound hidden" onClick={play}></div>
			<ul>
				{props.op1 && <Option id="1" op={props.op1} />}
				{props.op2 && <Option id="2" op={props.op2} />}
				{props.op3 && <Option id="3" op={props.op3} />}
				{props.op4 && <Option id="4" op={props.op4} />}
			</ul>
		</div>
	);
}
// Changes the highlighted option
const changeSelectedColor = (selected, element, id) => {
	if (selected == id) {
		element.classList.add(bg);
		element.classList.add(txt);
		el = document.querySelector(`.choice-${selected}`);
	} else {
		element.classList.remove(bg);
		element.classList.remove(txt);
	}
};
// Options Available
const Option = ({ id, op }) => {
	const [clicked, setClicked] = useState(0);
	useEffect(() => {
		if (clicked == correct) {
			const sound = document.querySelector('.sound');
			sound.click();
			Router.push(link);
		}
	});
	return (
		<li
			onClick={() => setClicked(id)}
			className={`choice-${id} hide-cursor mb-4 sm:mb-0 select-none`}>
			{`> ${op}`}
		</li>
	);
};
// Hook
function useKeyPress(targetKey) {
	// State for keeping track of whether key is pressed
	const [keyPressed, setKeyPressed] = useState(false);
	// If pressed key is our target key then set to true
	// If released key is our target key then set to false
	const upHandler = ({ key }) => {
		if (key === targetKey) {
			setKeyPressed(true);
			setKeyPressed(false);
		}
	};
	// Add event listeners
	useEffect(() => {
		window.addEventListener('keyup', upHandler);
		// Remove event listeners on cleanup
		return () => {
			window.removeEventListener('keyup', upHandler);
		};
	}, []); // Empty array ensures that effect is only run on mount and unmount
	return keyPressed;
}
