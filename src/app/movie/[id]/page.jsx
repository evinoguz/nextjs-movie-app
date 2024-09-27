import Image from "next/image";
import React from "react";
const getMovie = async (id) => {
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(api_url + `/movie/${id}?api_key=${api_key}&language=tr-TR`);
  return res.json();
};
const Page = async ({ params }) => {
  const id = params.id;
  const movieDetail = await getMovie(id);
  console.log("movie:", movieDetail);
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path || item?.movieDetail}`}
        alt={movieDetail?.title}
      />
      <div className="absolute bg-gray-500 dark:bg-gray-950 w-1/2 h-1/2 opacity-80 rounded-lg p-5">
        <div className={`text-4xl font-bold my-3`}>{movieDetail?.title}</div>
        <div> {movieDetail?.overview} </div>
        <div className="my-3">
          {movieDetail?.release_date} - {movieDetail?.vote_average}
        </div>
        <div className="my-5 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
