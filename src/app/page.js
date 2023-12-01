import AnimeList from "./components/AnimeList";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now`
  );

  const anime = await response.json();
  console.log(anime);

  return (
    <div>
      <h1 className="font-bold text-2xl md:px-32 px-6">Current Season Anime</h1>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:px-32 px-6 gap-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-2xl">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                id={data.mal_id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
