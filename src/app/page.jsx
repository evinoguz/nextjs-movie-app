import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const param = searchParams.genre ? `movie/${searchParams.genre}` : `trending/all/day`;
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(api_url + `/${param}?api_key=${api_key}&language=tr-TR&page=1`, {
    next: { revalidate: 1000 },
  });

  const data = await res.json();
  console.log(data);
  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {data?.results?.map((item, i) => (
        <Movies item={item} key={i} />
      ))}
    </div>
  );
};

export default Page;
