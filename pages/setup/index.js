import React from 'react';
import { useState, useEffect } from 'react';
import Construction from '../../components/construction';

export default function setUp() {
	const [show, setShow] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			if (show < 1) setShow(1);
		}, 2500);
		setTimeout(() => {
			if (show < 2) setShow(2);
		}, 5500);
		setTimeout(() => {
			if (show < 3) setShow(3);
		}, 8500);
	}, [show]);

	if (!show || show == 2) return null;
	if (show == 1)
		return (
			<main className="h-screen w-screen flex">
				<img className="h-64 m-auto" src="/unesp-logo.png" />
			</main>
		);
	return (
		<main className="h-screen w-screen flex">
			<div className="m-auto">
				<Construction />
			</div>
		</main>
	);
}
