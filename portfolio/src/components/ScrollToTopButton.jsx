import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!show) return null;

    return (
        <button
            onClick={scrollToTop}
            className="
  fixed bottom-6 right-6 z-50
  bg-violet-700 hover:bg-white
  text-white hover:text-black text-3xl
  w-12 h-12
  rounded-full
  flex items-center justify-center
  shadow-lg
  transition-all duration-300
"
        >
            ↑
        </button>
    );
}
