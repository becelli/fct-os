import { useState, useEffect } from 'react';
import React from 'react';
import Quiz from '../../components/quiz';

export default function PowerOn() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 8900);
	}, [show]);

	if (!show) return null;

	return (
		<main className="h-screen w-screen hide-cursor">
			<Quiz
				op1="Carregar Sistema Operacional"
				op2="Realizar o Setup"
				op3="Alterar ordem de Boot"
				op4="Ligar para o técnico"
				correct="2"
				link="/setup"
			/>
		</main>
	);
}
