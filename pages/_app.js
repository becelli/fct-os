import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
	return (
		<section className="bg-black text-white">
			<Head>
				<title>FCT-OS 0.1-ALPHA</title>
			</Head>
			<Component {...pageProps} />
		</section>
	);
}

export default MyApp;
