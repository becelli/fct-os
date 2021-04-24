import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
	return (
		<section className="bg-black text-white">
			<Component {...pageProps} />
		</section>
	);
}

export default MyApp;
