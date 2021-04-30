import { useState, useEffect } from 'react';
import Link from 'next/link';
const bg = 'bg-gray-300';
const txt = 'text-black';
let el = 0;
let link = '';
// Usage
export default function App(props) {
	link = props.link;
	// Call the hook for each key that I'd like to monitor
	const arrowUp = useKeyPress('ArrowUp');
	const arrowDown = useKeyPress('ArrowDown');
	const arrowRight = useKeyPress('ArrowRight');
	const Enter = useKeyPress('Enter');
	const [selected, setSelected] = useState(1);
	useEffect(() => {
		// (De) & Increment select counter
		if (arrowUp && selected > 1) {
			setSelected(selected - 1);
		} else if (arrowDown && selected < 4 && selected + 1 <= Object.keys(props).length) {
			setSelected(selected + 1);
		}
		// Store the elements.
		const c1 = document.querySelector('.choice-1');
		const c2 = document.querySelector('.choice-2');
		const c3 = document.querySelector('.choice-3');
		const c4 = document.querySelector('.choice-4');
		// Change the selected
		if (selected == 1) {
			c1.classList.add(bg);
			c1.classList.add(txt);
			el = document.querySelector(`.choice-${selected}`);
		} else {
			c1.classList.remove(bg);
			c1.classList.remove(txt);
		}
		if (selected == 2) {
			c2.classList.add(bg);
			c2.classList.add(txt);
			el = document.querySelector(`.choice-${selected}`);
		} else {
			c2.classList.remove(bg);
			c2.classList.remove(txt);
		}
		if (selected == 3) {
			c3.classList.add(bg);
			c3.classList.add(txt);
			el = document.querySelector(`.choice-${selected}`);
		} else {
			c3.classList.remove(bg);
			c3.classList.remove(txt);
		}
		if (selected == 4) {
			c4.classList.add(bg);
			c4.classList.add(txt);
			el = document.querySelector(`.choice-${selected}`);
		} else {
			c4.classList.remove(bg);
			c4.classList.remove(txt);
		}
		// Only click with correct awnser
		if ((Enter || arrowRight) && props.correct == selected) el.click();
	});

	return (
		<div className="text-2xl md:text-xl tracking-tighter">
			<ul>
				<Option id="1" op={props.op1} />
				<Option id="2" op={props.op2} />
				<Option id="3" op={props.op3} />
				<Option id="4" op={props.op4} />
			</ul>
		</div>
	);
}
const Option = ({ id, op }) => {
	return (
		<Link href={link}>
			<a>
				<li className={`choice-${id} hide-cursor mb-1 p-2 sm:mb-0`}>{`> ${op}`}</li>
			</a>
		</Link>
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
