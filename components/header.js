import { useState, useCallback } from "react";
import Menu from "./menu";
import PortalPopup from "./portal-popup";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const onDeveloperClick = useCallback(() => {
    window.open("https://parkingswing.vercel.app");
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[0px] w-[1440px] h-[70px] overflow-hidden shrink-0 z-[7]">
        <div className="absolute top-[5px] left-[8px] flex flex-row items-end justify-start gap-[340px] md:gap-[320px]">
          <img
            className="relative rounded-41xl w-[50px] h-[50px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-104@2x.png"
          />
          <div className="relative w-[688px] h-[60px]">
            <img
              className="absolute top-[13px] left-[0px] w-[52px] h-[34px] object-cover hidden cursor-pointer lg:hidden md:flex"
              alt=""
              src="/menu@2x.png"
              onClick={openMenu}
            />
            <div className="absolute top-[0px] left-[87px] w-[601px] h-[52px] md:hidden">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-xl font-black font-inknut-antiqua text-white text-center inline-block">
                Community
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[171px] text-xl font-black font-inknut-antiqua text-white text-center inline-block">
                Whitepaper
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[350px] text-xl font-black font-inknut-antiqua text-white text-center inline-block">
                Contact
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[479px] text-xl font-black font-inknut-antiqua text-white text-center inline-block"
                onClick={onDeveloperClick}
              >
                Developer
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <PortalPopup placement="Top left" onOutsideClick={closeMenu}>
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
