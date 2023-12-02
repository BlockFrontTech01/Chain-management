import { useCallback, useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onDeveloperClick = useCallback(() => {
    window.open("https://jeffspace.vercel.app");
  }, []);

  return (
    <div
      className="rounded-[5px] [background:linear-gradient(180deg,_#bcb7b3,_#000)] w-[387px] h-[305px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full max-h-full"
      data-animate-on-scroll
    >
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[54px] left-[126px] text-xl font-black font-inknut-antiqua text-white text-center inline-block">
        Community
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[106px] left-[122px] text-xl font-black font-inknut-antiqua text-white text-center inline-block">
        Whitepaper
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[158px] left-[147px] text-xl font-black font-inknut-antiqua text-white text-center inline-block">
        Contact
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[210px] left-[139px] text-xl font-black font-inknut-antiqua text-white text-center inline-block"
        onClick={onDeveloperClick}
      >
        Developer
      </button>
    </div>
  );
};

export default Menu;
