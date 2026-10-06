import { MainNewsType } from '@/type';
import Image from 'next/image';

interface MainPageCartType {
  news: MainNewsType;
  banglaDate: (date:string) => string;
}

const MainPageCart = ({news,banglaDate}:MainPageCartType) => {
  return (
    <div className=''>
      <article className="group w-full basis-[48%] overflow-hidden rounded-lg border border-[#e5e5e5] bg-white h-90">
              {/* Image */}
              <div className="relative h-38 w-full overflow-hidden">
                <Image
                  src={news.imageUrl}
                  alt={news.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.1]"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Category */}
                <p className="mb-2 text-xs font-medium text-[#C40004]">
                  {news.category}
                </p>

                {/* Title */}
                <h2 className="mb-2 text-base font-semibold leading-[1.35] text-[#171717] group-hover:text-[#C40004]">
                  {news.title}
                </h2>

                {/* Description */}
                <p className="line-clamp-2 text-sm leading-6 text-gray-600">
                  {news.description}
                </p>
                {/* Date */}
                <p className=" text-xs mt-3 text-gray-600">
                  {news.firstPublished && banglaDate(news.firstPublished)}
                </p>

              </div>
            </article>
    </div>
  );
};

export default MainPageCart;