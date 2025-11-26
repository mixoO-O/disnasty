import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientCarousel } from "@/components/ClientCarousel";
import { ProductShowcase } from "@/components/ProductShowcase";
import { TechStackCarousel } from "@/components/TechStackCarousel";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AIShowcase } from "@/components/AIShowcase";

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

            <ScrollReveal>
                <AIShowcase />
            </ScrollReveal>

            {/* Placeholder for next sections */}
            <section id="innovation" className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Innovation Hub</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                client: "Mediprotek",
                                location: "Chile",
                                desc: "Comprehensive application development and system maintenance.",
                                tags: ["Healthcare", "Maintenance"]
                            },
                            {
                                client: "Shipping Companies",
                                location: "Arica, Chile",
                                desc: "Maritime systems for port and shipping management.",
                                tags: ["Maritime", "Logistics"]
                            }
                        ].map((project, index) => (
                            <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all hover:-translate-y-1 group">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors">{project.client}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">{project.location}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
