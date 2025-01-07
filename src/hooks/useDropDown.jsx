import { useState } from "react";

function useDropdown() {
    const [isVisible, setIsVisible] = useState(false);

    function handleMouseEnter() {
        setIsVisible(true);
    }

    function handleMouseLeave() {
        setIsVisible(false);
    }

    return { isVisible, handleMouseEnter, handleMouseLeave };
}

export default useDropdown;
