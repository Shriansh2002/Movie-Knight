import Image from "next/image";

import { MotionDiv } from "@/components/MotionDiv";
import { motionDivVariants as variants } from "@/constants/FramerMotion";
import { MovieCardProp, MovieProp } from "@/types";

function MovieCard({ movie, index }: MovieCardProp) {
	return (
		<MotionDiv
			variants={variants}
			initial="hidden"
			animate="visible"
			transition={{
				delay: index * 0.25,
				ease: "easeInOut",
				duration: 0.5,
			}}
			viewport={{ amount: 0 }}
			className="max-w-sm rounded relative w-full"
		>
			<div className="relative w-full h-[37vh]">
				<Image
					src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					alt={movie.title}
					fill
					className="rounded-xl"
				/>
			</div>

			<div className="py-4 flex flex-col gap-3">
				<div className="flex justify-between items-center gap-1">
					<h2 className="font-bold text-white text-xl line-clamp-1 w-full">
						{movie.title}
					</h2>
					<div className="py-1 px-2 bg-[#161921] rounded-sm">
						<p className="text-white text-sm font-bold capitalize">
							{movie.adult && "18+"}
						</p>
					</div>
				</div>

				<div className="flex gap-4 items-center">
					<div className="flex flex-row gap-2 items-center">
						<Image
							src="./star.svg"
							alt="star"
							width={18}
							height={18}
							className="object-contain"
						/>
						<p className="text-base text-white font-bold">
							{movie.vote_average}
						</p>
					</div>
				</div>
			</div>
		</MotionDiv>
	);
}

export default MovieCard;
