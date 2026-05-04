import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationPath, className = '', style = {} }) => {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Load and play animation
        fetch(animationPath)
            .then((res) => res.json())
            .then((data) => {
                if (animationRef.current) {
                    animationRef.current.destroy();
                }

                animationRef.current = lottie.loadAnimation({
                    container: containerRef.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: data,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                });
            })
            .catch((error) => console.error('Failed to load Lottie animation:', error));

        return () => {
            if (animationRef.current) {
                animationRef.current.destroy();
            }
        };
    }, [animationPath]);

    return (
        <div 
            ref={containerRef} 
            className={className} 
            style={{
                overflow: 'hidden',
                ...style
            }} 
        />
    );
};

export default LottieAnimation;
