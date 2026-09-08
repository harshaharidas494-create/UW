"use client";

export default function Footer() {
  return (
    <footer className="pt-12 md:pt-16 lg:pt-20 pb-4 lg:pb-8 px-6 md:px-8 lg:px-16 bg-dk text-wh border-t border-brd" id="ft">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-6 lg:gap-12 pb-14 border-b border-brd">
          <div>
            <img src="/assets/logo-white.png" alt="" className="h-8 w-auto mb-5" />
            <p className="text-[0.8rem] leading-[1.75] text-wht max-w-[270px]">A diversified group building market-leading businesses across technology, real estate, media, commerce, hospitality, and financial services.</p>
            <div className="flex gap-1.5 mt-6">
              {["in", "X", "ig", "fb"].map((soc, i) => (
                <a key={i} href="#" className="w-8 h-8 border border-brd flex items-center justify-center text-[0.6rem] font-bold text-wh/30 transition-all duration-300 rounded-full hover:border-c5 hover:text-c7 hover:bg-[#6cc5d90a]">{soc}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[0.58rem] font-bold tracking-[0.22em] uppercase mb-5">Companies</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {["UW Technologies", "UW Properties", "UW Living Spaces", "Pixel Media Group", "Souq Digital", "Oasis Hospitality", "UW Capital", "CloudNest"].map((lnk, i) => (
                <li key={i}><a href="#" className="text-[0.78rem] text-wh/30 transition-colors duration-300 hover:text-wh">{lnk}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.58rem] font-bold tracking-[0.22em] uppercase mb-5">Group</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {["About", "Leadership", "Careers", "Newsroom", "Investors"].map((lnk, i) => (
                <li key={i}><a href="#" className="text-[0.78rem] text-wh/30 transition-colors duration-300 hover:text-wh">{lnk}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.58rem] font-bold tracking-[0.22em] uppercase mb-5">Connect</h4>
            <ul className="flex flex-col gap-2.5 list-none">
              {["Contact Us", "Partnerships", "Media Enquiries", "Locations"].map((lnk, i) => (
                <li key={i}><a href="#" className="text-[0.78rem] text-wh/30 transition-colors duration-300 hover:text-wh">{lnk}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-3 text-center">
          <p className="text-[0.6rem] text-wh/20">&copy; 2026 Unique World Group of Companies. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((lnk, i) => (
              <a key={i} href="#" className="text-[0.6rem] text-wh/20 transition-colors duration-300 hover:text-wh">{lnk}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
