import { MainNewsType } from "@/type";
import Image from "next/image";

interface MainNews {
  news: MainNewsType[];
  banglaDate: (date: string) => string;
}

const MainNews = ({ news, banglaDate }: MainNews) => {
  const [left, ...other] = news;
  return (
    <div className=" flex justify-between bg-[#FAFAFA]">
      {/* left */}
      <article className="group w-full basis-[48%] overflow-hidden rounded-lg border border-[#e5e5e5] bg-white">
        {/* Image */}
        <div className="relative h-56.25 w-full overflow-hidden">
          <Image
            src={left.imageUrl}
            alt={left.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.1]"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category */}
          <p className="mb-2 text-sm font-medium text-[#C40004]">
            {left.category}
          </p>

          {/* Title */}
          <h2 className="mb-2 text-[21px] font-semibold leading-[1.35] text-[#171717] group-hover:text-[#C40004]">
            {left.title}
          </h2>

          {/* Description */}
          <p className="line-clamp-3 text-[15px] leading-6 text-gray-600">
            {left.description}
          </p>

          {/* Date */}
          <p className=" text-sm mt-3 text-gray-600">
            {left.firstPublished && banglaDate(left.firstPublished)}
          </p>
        </div>
      </article>
      {/* Right */}
      <div className="basis-[48%]">
        <ul className="rounded-lg border border-[#e5e5e5] pb-7">
          {other.slice(0, 5).map((item, idx) => (
            <li
              key={item.id}
              className={`h-full p-3 text-[#171717] font-semibold ${idx !== 0 && "border-t  border-[#e5e5e5] "}`}
            >
              <span className="mb-1 text-xs text-[#C40004] block font-semibold">
                {item.category}
              </span>
              <span className="block font-semibold">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainNews;
