import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface MarqueeType {
  title: string;
  id: string;
}

const MarqueePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=15");
  const x = await res.json();
  const resData: MarqueeType[] = x?.data;
  return (
    <div className="bg-[#C40004]">
      <div className="container mx-auto flex h-full items-center">
        <p className="bg-[#A20910] text-white h-full py-2 px-2 font-bold">
          সর্বশেষ
        </p>
        <MarqueeText
          direction="right"
          duration={10}
          className="bg-[#C40004] text-white"
        >
          {resData.map((item) => (
            <span key={item?.id}>
              <span>{item?.title}</span>
              <span className="mx-5">●</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default MarqueePage;
