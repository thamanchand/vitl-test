import { useState, useRef, useEffect } from "react";

type AnyEvent = MouseEvent | TouchEvent;

function useVisible(initialIsVisible: any) {
    const [isVisible, setIsVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: AnyEvent) => {
        if (ref.current && !ref.current.contains(event?.target as Node)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isVisible, setIsVisible };
}

export default useVisible;