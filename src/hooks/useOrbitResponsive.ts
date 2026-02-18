import { useState, useEffect } from "react";

export interface OrbitLayout {
    /** multiplier for all radius/size values (0.5 – 1) */
    scale: number;
    /** true when width < 768 */
    isMobile: boolean;
    /** true when width < 480 */
    isSmall: boolean;
}

/**
 * Returns scale factor + flags for responsive orbit rendering.
 * Listens to resize events so orbits adapt live.
 */
export const useOrbitResponsive = (): OrbitLayout => {
    const compute = (): OrbitLayout => {
        const w = typeof window !== "undefined" ? window.innerWidth : 1024;
        if (w < 400) return { scale: 0.48, isMobile: true, isSmall: true };
        if (w < 480) return { scale: 0.55, isMobile: true, isSmall: true };
        if (w < 640) return { scale: 0.62, isMobile: true, isSmall: false };
        if (w < 768) return { scale: 0.72, isMobile: true, isSmall: false };
        if (w < 1024) return { scale: 0.85, isMobile: false, isSmall: false };
        return { scale: 1, isMobile: false, isSmall: false };
    };

    const [layout, setLayout] = useState<OrbitLayout>(compute);

    useEffect(() => {
        const onResize = () => setLayout(compute());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return layout;
};
