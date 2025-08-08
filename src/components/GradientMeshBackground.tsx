'use client';

import { useEffect, useRef } from 'react';
import { Gradient } from 'whatamesh';

export default function GradientMeshBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gradientRef = useRef<Gradient | null>(null);

    useEffect(() => {
        if (canvasRef.current && !gradientRef.current) {
            const gradient = new Gradient();
            gradient.initGradient("#gradient-canvas");
            gradientRef.current = gradient;
        }
    }, []);

    return (
        <div className="fixed inset-0 z-[-1]">
            <canvas 
                id="gradient-canvas" 
                ref={canvasRef} 
                className="w-full h-full"
                data-transition-in
            />
        </div>
    );
}