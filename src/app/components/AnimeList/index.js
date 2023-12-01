import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/anime/${id}`} className="cursor-pointer">
      <Image src={images} alt="..." width={300} height={600} />
      <h3 className="font-bold md:text-xl text-md">{title}</h3>
    </Link>
  );
};

export default AnimeList;
