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
            aria-label="Scroll to top"
            className="
  fixed bottom-6 right-6 z-50
  bg-primary hover:bg-primaryDark
  text-white text-3xl
  w-12 h-12
  rounded-full
  flex items-center justify-center
  shadow-lg shadow-primary/30
  transition-all duration-300
"
        >
            ↑
        </button>
    );
}