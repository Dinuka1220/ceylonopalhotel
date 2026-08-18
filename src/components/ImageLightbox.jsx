import React from 'react';
import { X } from 'lucide-react';

export default function ImageLightbox({ selectedImage, onClose }) {
  if (!selectedImage) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg animate-fadeIn cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-950/80 text-white hover:bg-[#c6a258] hover:text-[#0b1a2c] transition-colors"
          aria-label="Close Preview"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative w-full h-full flex flex-col items-center justify-center p-2">
          <img 
            src={selectedImage.url} 
            alt={selectedImage.title || 'Resort Photo'} 
            className="w-full max-h-[75vh] object-contain rounded-2xl"
          />
          {selectedImage.title && (
            <div className="py-4 text-center">
              <h4 className="font-serif-luxury text-xl font-bold text-white tracking-wide">
                {selectedImage.title}
              </h4>
              <p className="text-xs text-[#c6a258] uppercase tracking-widest mt-1">
                Ceylon One Villas Luxury Resort
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
