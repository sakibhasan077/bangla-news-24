import Image from "next/image";
import Logo from "../../../public/assets/logo.webp";
import Link from "next/link";
import Navbar from "./Navbar";
import Marquee from "./Marquee";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  return (
    <>
      <div className="flex justify-center relative container mx-auto">
        <div className="p-4">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Website Logo"
              width={100}
              height={100}
              className="h-10 w-10"
            ></Image>
            <div>
              <h2 className="text-2xl font-bold text-[#C40004] leading-8 ">
                Bangla News 24
              </h2>
              <p className="text-xs leading-4 text-[#737373]">{date}</p>
            </div>
          </Link>
        </div>
        <div className="absolute right-4 top-4">
          <Link href={"/"}>
            {" "}
            <button className="btn bg-transparent border-0 hover:shadow-none hover:text-[#C40004]">
              সাইন ইন
            </button>{" "}
          </Link>
          <Link href={"/"}>
            {" "}
            <button className="btn bg-[#C40004] text-white hover:bg-[#A20910]">
              সাইন আপ
            </button>{" "}
          </Link>
        </div>
      </div>
      <Navbar></Navbar>
      <Marquee></Marquee>
    </>
  );
};

export default Header;
