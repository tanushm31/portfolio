import Image from "next/image";
import localFont from "next/font/local";

const danfofont = localFont({
	src: "fonts/Danfo-Regular-VariableFont_ELSH.ttf",
	display: "swap",
});

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<nav className=" w-full h-[60px] px-5 flex justify-start items-center">
				<div className={`${danfofont.className} text-red-600 text-3xl`}>
					Tanush&apos;s Blog
				</div>
			</nav>
		</main>
	);
}
