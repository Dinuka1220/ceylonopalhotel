import React from 'react';

/**
 * PaintBrushDivider Component
 * Renders an artistic organic paintbrush stroke / torn edge image divider 
 * at the bottom of Section Two as requested by the user.
 */
export default function PaintBrushDivider({ fillColor = "#FFFFFF", height = "h-16 md:h-24" }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none pointer-events-none ${height}`}>
      {/* SVG Organic Paint Brush Stroke Paths */}
      <svg 
        className="relative block w-full h-full text-white" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Layer 1: Subtle Gold Paint Background Stroke Overlay */}
        <path 
          d="M0,0 C150,90 350,-40 500,65 C650,140 900,10 1200,80 L1200,120 L0,120 Z" 
          fill="#c6a258" 
          opacity="0.3"
        />

        {/* Layer 2: Main Organic Paintbrush Edge Splatter Stroke */}
        <path 
          d="M0,35 
             C30,30 45,45 60,32 
             C90,15 120,60 150,40 
             C180,20 210,55 240,30 
             C270,5 300,45 330,25 
             C360,10 390,50 420,35 
             C450,20 480,65 510,40 
             C540,15 570,55 600,20 
             C630,5 660,45 690,15 
             C720,30 750,5 780,35 
             C810,60 840,20 870,45 
             C900,15 930,50 960,30 
             C990,10 1020,40 1050,20 
             C1080,45 1110,15 1140,35 
             C1170,55 1190,25 1200,40 
             L1200,120 L0,120 Z" 
          fill={fillColor}
        />

        {/* Layer 3: Paint Brush Splatter Dots */}
        <circle cx="120" cy="25" r="2" fill={fillColor} />
        <circle cx="280" cy="12" r="3" fill={fillColor} />
        <circle cx="450" cy="18" r="2.5" fill={fillColor} />
        <circle cx="670" cy="8" r="3.5" fill={fillColor} />
        <circle cx="890" cy="12" r="2" fill={fillColor} />
        <circle cx="1040" cy="15" r="3" fill={fillColor} />
      </svg>
    </div>
  );
}
