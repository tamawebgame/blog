import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"

export const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 500)
        }
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div onClick={handleClick} className={`cursor-pointer ${show ? "animate-[fadeIn_0.2s_ease-in-out_forwards]" : "animate-[fadeOut_0.2s_ease-in-out_forwards] pointer-events-none"} fixed bottom-6 right-6 bg-white w-16 h-16 rounded-full inline-flex justify-center items-center shadow-lg`}>
            <FontAwesomeIcon size="lg" icon={faArrowUp}></FontAwesomeIcon>
        </div>
    )
}