import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductShowcase } from '@/components/ProductShowcase';
import { DevelopmentProcess } from '@/components/DevelopmentProcess';
import { CloudArchitecture } from '@/components/CloudArchitecture';
import { TechStackCarousel } from '@/components/TechStackCarousel';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AIShowcase } from '@/components/AIShowcase';
import { InnovationHub } from '@/components/InnovationHub';
import { useTranslations } from 'next-intl';

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations('HomePage');

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />

      <ScrollReveal>
        <AIShowcase />
      </ScrollReveal>

      <ScrollReveal>
        <DevelopmentProcess />
      </ScrollReveal>

      <ScrollReveal>
        <CloudArchitecture />
      </ScrollReveal>

      {/* <ScrollReveal>
                <ClientCarousel />
            </ScrollReveal> */}

      {/* <ScrollReveal>
                <Testimonials />
                </ScrollReveal> */}

      <ScrollReveal>
        <TechStackCarousel />
      </ScrollReveal>

      <ScrollReveal>
        <ProductShowcase />
      </ScrollReveal>

      <ScrollReveal>
        <InnovationHub />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
