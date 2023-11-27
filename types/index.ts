export interface MovieProp {
	adult: boolean;
	backdrop_path: string;
	genre_ids: Float32Array[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface MovieCardProp {
	movie: MovieProp;
	index: number;
}
