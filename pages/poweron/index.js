import { useState, useEffect } from 'react';
import React from 'react';
import Quiz from '../../components/quiz';

export default function PowerOn() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		}, 9000);
	}, [show]);

	if (!show) return null;

	return (
		<main className="h-screen w-screen hide-cursor">
			<Quiz
				op1="Carregar o kernel e o sistema Operacional"
				op2="Realizar o setup e rotina de testes"
				op3="Alterar ordem de boot e ativar o mouse"
				op4="Ligar para o técnico da FCT"
				correct="2"
				link="/setup"
			/>
		</main>
	);
}
