import { FaPowerOff } from 'react-icons/fa';
import useSound from 'use-sound';
const computerStartUp = '/computer-startup-24.mp3';
import Link from 'next/link';
export default function PowerButton() {
	const [play] = useSound(computerStartUp);
	return (
		<section className="text-white flex w-screen h-screen">
			<div
				onClick={play}
				className="cursor-pointer m-auto sm:opacity-10 sm:hover:opacity-100 transition duration-400 text-9xl">
				<Link href="/poweron">
					<a>
						<FaPowerOff />
					</a>
				</Link>
			</div>
		</section>
	);
}
