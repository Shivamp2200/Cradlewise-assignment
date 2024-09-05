
import Link from "next/link";
import Landing from "../src/pages/landingpage/index";
const Header = () => {
  return (
    <div
      className="flex justify-center items-center w-full h-[50px] bg-[#FF595A] opacity-100 px-0 py-[10px] gap-[10px]"
    >
      {/* Text for larger screens */}
      <span className="font-basier-circle text-[16px] font-medium leading-[26px] text-center tracking-[0.05em] text-white hidden md:block">
        ← Plan ahead and save up to $300!{' '}
        <a href="#" className="underline">
          Learn more
        </a>{' '}
        →
      </span>
      <Link href="/landingpage">Smart Crib</Link> 


      {/* Text for mobile screens */}
      <span className="font-basier-circle text-[16px] font-medium leading-[26px] text-center tracking-[0.05em] text-white block md:hidden">
        Financing available - $71/month at 0% APR
      </span>
    </div>
  );
};

export default Header;
