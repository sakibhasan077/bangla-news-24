import MainNews from "@/components/mainPage/MainNews";

export default async function Home() {
  const res = await fetch("http://news-api-v2.vercel.app/api/news/sections");
  const resData = await res.json();
  const mainNews = resData.data[0].articles;
  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 container mx-auto">
        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
