import MainNews from "@/components/mainPage/MainNews";
import MainPageCart from "@/components/mainPage/MainPageCart";
import { MainNewsType, OtherNews } from "@/type";

type DateType = {
  banglaDate: (date:string) => string;
}

export default async function Home() {
  const res = await fetch("http://news-api-v2.vercel.app/api/news/sections");
  const resData = await res.json();
  const mainNews:MainNewsType[] = resData.data[0].articles;
  const others: OtherNews[] = resData.data.slice(1);
  // Bangla Date
  const getBanglaDate = (englishDate:string): string => {
    const date = new Date(englishDate);
    const formatted = new Intl.DateTimeFormat("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
    return formatted
  };
  return (
    <div className="mt-6 ">
      <div className="grid grid-cols-3 container mx-auto bg-[#FAFAFA]">
        <div className="col-span-2">
          {/* main news */}
          <MainNews news={mainNews} banglaDate = {getBanglaDate}></MainNews>
          {/* other news */}
          <div className="mt-8">
            {others
              .filter((item) => !item.title.includes("বিবিসি"))
              .map((item, idx) => (
                <div key={idx}>
                  <h2 className="mb-3 leading-7 font-bold text-[18px] text-[#171717] border-b-2 border-red-700 pb-2">
                    {item.title}
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {item.articles.map((elem) => (
                      <MainPageCart key={elem.id} news={elem} banglaDate = {getBanglaDate}></MainPageCart>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
