'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('ProductShowcase');

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

  // Retrieve features as array using integers keys 0,1,2...
  const features = [0, 1, 2].map((i) => t(`products.${product.id}.features.${i}`));

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
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="group pointer-events-auto relative flex max-h-[100dvh] w-full flex-col overflow-hidden border border-white/10 bg-background/80 shadow-2xl backdrop-blur-2xl md:max-h-[85vh] md:max-w-3xl md:rounded-[2rem]"
            >
              {/* Background Ambient Glow */}
              <div
                className={`absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br ${product.gradient} pointer-events-none opacity-20 blur-[100px]`}
              />
              <div
                className={`absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr ${product.gradient} pointer-events-none opacity-20 blur-[100px]`}
              />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-30 rounded-full bg-black/20 p-2 text-white/70 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image Section - More "lightweight" feel */}
              {product.image && (
                <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-80">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Lighter gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>
              )}

              {/* Content Section */}
              <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 md:py-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span
                    className={`mb-4 inline-block rounded-full bg-gradient-to-r ${product.gradient} bg-clip-text text-sm font-bold uppercase tracking-wider text-transparent`}
                  >
                    {t(`products.${product.id}.category`)}
                  </span>

                  <h2 className="mb-6 text-3xl font-bold leading-tight text-foreground md:text-5xl">
                    {t(`products.${product.id}.title`)}
                  </h2>

                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {t(`products.${product.id}.description`)}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                      {t('keyFeatures')}
                    </h3>
                    <div className="grid gap-3 md:grid-cols-2">
                      {features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 backdrop-blur-sm"
                        >
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${product.gradient} bg-opacity-10`}
                          >
                            <CheckCircle2 className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-sm font-medium text-foreground/90">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
