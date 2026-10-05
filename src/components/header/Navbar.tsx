import Link from "next/link";

interface NavDataType{
  title: string;
  scrapable: boolean;
}

const Navbar = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const x = await res.json();
  const resData:NavDataType[] = x.data;
  return (
    <nav className="container mx-auto pb-5">
      <ul className="flex justify-center gap-5">
        <li><Link href={"/"} className="text-sm text-[#171717] hover:text-[#C40004]">হোম</Link></li>
        {resData.filter(item=> item.scrapable).map((item, id) => (
          <li key={id}><Link href={"/"} className="text-sm text-[#171717] hover:text-[#C40004]">{item.title}</Link></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
