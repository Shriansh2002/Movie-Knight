"use server";
import MovieCard from "@/components/MovieCard";
import { MovieProp } from "@/types";

export const fetchMovie = async (page: number) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
		{
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${process.env.TMDB_API}`,
			},
		}
	);

	const data = await response.json();

	return data.results.map((item: MovieProp, index: number) => (
		<MovieCard key={item.id} movie={item} index={index} />
	));
};
