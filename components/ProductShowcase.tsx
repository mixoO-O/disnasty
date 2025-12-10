'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useMemo } from 'react';
import { ProductModal } from './ProductModal';

interface SelectedProduct {
  id: string;
  gradient: string;
  image: string;
  title: string;
  category: string;
}

interface ProductItem {
  id: string;
  gradient: string;
  image: string;
}

export function ProductShowcase() {
  const t = useTranslations('ProductShowcase');
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
  const [shuffledProducts, setShuffledProducts] = useState<ProductItem[]>([]);

  // Separate content from layout slots
  const productContent = useMemo(
    () => [
      {
        id: 'aiAnalytics',
        gradient: 'from-blue-500 to-cyan-500',
        image: '/tech-dashboard.png',
      },
      {
        id: 'smartCity',
        gradient: 'from-purple-500 to-pink-500',
        image: '/smart-city.png',
      },
      {
        id: 'neuralNet',
        gradient: 'from-amber-500 to-orange-500',
        image: '/neural-network.png',
      },
      {
        id: 'defi',
        gradient: 'from-emerald-500 to-teal-500',
        image: '/tech-dashboard.png',
      },
      {
        id: 'quantum',
        gradient: 'from-indigo-500 to-violet-500',
        image: '/quantum-core.png',
      },
      {
        id: 'cyber',
        gradient: 'from-red-500 to-rose-500',
        image: '/smart-city.png',
      },
      {
        id: 'holo',
        gradient: 'from-fuchsia-500 to-magenta-500',
        image: '/neural-network.png',
      },
    ],
    [],
  );

  const gridSlots = [
    'md:col-span-2 md:row-span-2',
    'md:col-span-2 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-2 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
  ];

  useEffect(() => {
    // Shuffle content on mount
    const shuffled = [...productContent].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
  }, [productContent]);

  // If not hydrated yet, show a skeleton or initial state to match server render
  // However, for this visual component, we can just render the initial order first to avoid layout shift
  // or wait for hydration. Let's render initial order first then shuffle effect takes over.
  const displayProducts = shuffledProducts.length > 0 ? shuffledProducts : productContent;

  return (
    <section id="products" className="relative overflow-hidden px-6 py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">{t('description')}</p>
        </motion.div>

        <div className="perspective-1000 grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-4">
          {displayProducts.map((product, index) => {
            // Use the grid slot based on index
            const className = gridSlots[index] || 'md:col-span-1 md:row-span-1';

            return (
              <motion.div
                key={`${product.id}-${index}`}
                initial={{ opacity: 0, scale: 0.5, rotateX: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  y: {
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: Math.random() * 2,
                  },
                  rotate: {
                    duration: 6 + Math.random() * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: Math.random() * 2,
                  },
                  default: {
                    duration: 0.8,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 50,
                    damping: 20,
                  },
                }}
                className={`bg-card/40 group relative overflow-hidden rounded-2xl backdrop-blur-md ${className} transform-style-3d`}
              >
                {/* Image Background */}
                {product.image && (
                  <div className="absolute inset-0">
                    <Image
                      src={product.image}
                      alt={t(`products.${product.id}.title`)}
                      fill
                      className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />
                  </div>
                )}

                {/* Holographic Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 mix-blend-color-dodge transition-opacity duration-500 group-hover:opacity-40`}
                />

                {/* Scanning Line Effect on Hover */}
                <div className="pointer-events-none absolute inset-0 translate-y-[-100%] bg-gradient-to-b from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-y-[100%]" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                  <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
                    <span className="glow-text mb-2 block text-xs font-medium uppercase tracking-widest text-cyan-400">
                      {t(`products.${product.id}.category`)}
                    </span>
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`font-bold leading-tight text-white ${
                          className.includes('row-span-2') ? 'text-3xl' : 'text-xl'
                        }`}
                      >
                        {t(`products.${product.id}.title`)}
                      </h3>
                      <button
                        onClick={() =>
                          setSelectedProduct({
                            ...product,
                            title: t(`products.${product.id}.title`),
                            category: t(`products.${product.id}.category`),
                          })
                        }
                        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:opacity-100"
                      >
                        <ArrowUpRight className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </section>
  );
}
