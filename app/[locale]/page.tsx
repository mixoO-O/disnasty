import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientCarousel } from "@/components/ClientCarousel";
import { ProductShowcase } from "@/components/ProductShowcase";
import { MobileAppProcess } from "@/components/MobileAppProcess";
import { WebAppProcess } from "@/components/WebAppProcess";
import { CloudArchitecture } from "@/components/CloudArchitecture";
import { TechStackCarousel } from "@/components/TechStackCarousel";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AIShowcase } from "@/components/AIShowcase";
import { InnovationHub } from "@/components/InnovationHub";
import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('HomePage');

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar />
            <Hero />

            <ScrollReveal>
                <ProductShowcase />
            </ScrollReveal>

            <ScrollReveal>
                <WebAppProcess />
            </ScrollReveal>

            <ScrollReveal>
                <MobileAppProcess />
            </ScrollReveal>

            <ScrollReveal>
                <CloudArchitecture />
            </ScrollReveal>

            {/* <ScrollReveal>
                <ClientCarousel />
            </ScrollReveal> */}

            <ScrollReveal>
                <TechStackCarousel />
            </ScrollReveal>

            {/* <ScrollReveal>
                <Testimonials />
            </ScrollReveal> */}

            <ScrollReveal>
                <AIShowcase />
            </ScrollReveal>

            <ScrollReveal>
                <InnovationHub />
            </ScrollReveal>

            <Footer />
        </main>
    );
}
