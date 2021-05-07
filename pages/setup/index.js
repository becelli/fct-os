import React from 'react';
import { useState, useEffect } from 'react';
// import Construction from '../../components/construction';
const tVoid = 2.5;
const tLogo = 6.5;
const tPage = 9;

import Quiz from '../../components/quiz';

export default function setUp() {
	const [show, setShow] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			if (show < 1) setShow(1);
		}, tVoid * 1000);
		setTimeout(() => {
			if (show < 2) setShow(2);
		}, tLogo * 1000);
		setTimeout(() => {
			if (show < 3) setShow(3);
		}, tPage * 1000);
	}, [show]);
	

	if (!show || show == 2) return null;
	if (show == 1)
		return (
			<main className="h-screen w-screen flex">
				<img className="h-64 m-auto" src="/unesp-logo.png" />
			</main>
		);
	return (
		<main className="h-screen w-screen hide-cursor">
			<Quiz
				op1="Descompactar dados"
				op2="Verificar os terminais"
				op3="Carregar tela de login"
				op4="Carregar o sistema operacional"
				correct="1"
				link="http://google.com"
			/>
		</main>
	);
}
