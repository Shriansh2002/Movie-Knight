import Image from "next/image";

function Hero() {
	return (
		<header
			className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 h-[500px]"
			style={{
				backgroundImage:
					"url(https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
			}}
		>
			<div className="absolute inset-0 bg-black/50 opacity-50"></div>

			<div className="flex-1 flex flex-col gap-10 relative z-10">
				<h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
					Unlimited{" "}
					<span className="red-gradient">Movies</span>, TV
					Shows and more.
				</h1>
			</div>
		</header>
	);
}

export default Hero;
