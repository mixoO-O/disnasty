import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientCarousel } from "@/components/ClientCarousel";
import { ProductShowcase } from "@/components/ProductShowcase";
import { TechStackCarousel } from "@/components/TechStackCarousel";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar />
            <Hero />

            <ScrollReveal>
                <ProductShowcase />
            </ScrollReveal>

            <ScrollReveal>
                <ClientCarousel />
            </ScrollReveal>

            <ScrollReveal>
                <TechStackCarousel />
            </ScrollReveal>

            <ScrollReveal>
                <Testimonials />
            </ScrollReveal>

            {/* Placeholder for next sections */}
            <ScrollReveal>
                <section id="innovation" className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-10 text-center">Innovation Hub</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Content will go here */}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <Footer />
        </main>
    );
}
