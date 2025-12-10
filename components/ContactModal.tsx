'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations('ContactModal');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
    onClose();
  };

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
          <div className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="pointer-events-auto relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-8 shadow-2xl backdrop-blur-xl"
            >
              {/* Background Gradient Blob */}
              <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-200 transition-colors hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <h2 className="mb-2 text-3xl font-bold">
                <span className="animate-gradient bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-[length:200%_200%] bg-clip-text text-transparent">
                  {t('title')}
                </span>
              </h2>
              <p className="mb-8 text-gray-200">{t('subtitle')}</p>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-200">
                    {t('nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder={t('namePlaceholder')}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
                    {t('emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder={t('emailPlaceholder')}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-200">
                    {t('messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder={t('messagePlaceholder')}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-lg border border-white/10 bg-black py-4 font-bold text-white transition-colors hover:border-primary/50"
                >
                  <div className="animate-gradient absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-accent bg-[length:200%_200%] opacity-0 transition-opacity group-hover:opacity-20" />
                  <span className="relative z-10">{t('submitButton')}</span>
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
