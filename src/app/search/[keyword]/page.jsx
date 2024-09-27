import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const api_key = process.env.NEXT_PUBLIC_API_KEY;
  const api_url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(api_url + `/search/movie?api_key=${api_key}&query=${keyword}&language=tr-TR`);
  const data = await res.json();
  return (
    <div>
      {!data.results ? (
        <div>Sonuç bulunamadı</div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-5">
          {data?.results?.map((item, i) => (
            <Movies item={item} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
