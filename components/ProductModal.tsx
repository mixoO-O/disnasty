'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    title: string;
    category: string;
    image?: string;
    gradient: string;
  } | null;
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="pointer-events-auto relative flex h-full w-full flex-col overflow-hidden rounded-none border-0 border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl md:h-auto md:max-h-[90vh] md:max-w-2xl md:rounded-3xl md:border"
            >
              {/* Background Gradient Blob */}
              <div
                className={`absolute right-0 top-0 h-96 w-96 bg-gradient-to-br ${product.gradient} pointer-events-none -translate-y-1/2 translate-x-1/2 rounded-full opacity-20 blur-3xl`}
              />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/20 p-2 text-gray-200 backdrop-blur-md transition-all hover:bg-black/40 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Image Section */}
              {product.image && (
                <div className="relative h-64 w-full shrink-0 md:h-80">
                  <Image src={product.image} alt={product.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>
              )}

              {/* Content Section */}
              <div className="overflow-y-auto p-8 md:p-10">
                <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
                  {product.category}
                </span>

                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">{product.title}</h2>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-gray-200">
                    {/* Placeholder description - in a real app this would come from the product object or translation */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-gray-200">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
