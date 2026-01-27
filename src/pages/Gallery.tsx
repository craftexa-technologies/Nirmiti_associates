import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import useParallax from "@/hooks/useParallax";

// Gallery images imports
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import g8 from "@/assets/gallery/g8.jpg";
import g9 from "@/assets/gallery/g9.jpg";
import g10 from "@/assets/gallery/g10.jpg";
import g11 from "@/assets/gallery/g11.jpg";
import g12 from "@/assets/gallery/g12.jpg";

const galleryImages = [
  { src: g1, alt: "Construction Project 1" },
  { src: g2, alt: "Construction Project 2" },
  { src: g3, alt: "Construction Project 3" },
  { src: g4, alt: "Construction Project 4" },
  { src: g5, alt: "Construction Project 5" },
  { src: g6, alt: "Construction Project 6" },
  { src: g7, alt: "Construction Project 7" },
  { src: g8, alt: "Construction Project 8" },
  { src: g9, alt: "Construction Project 9" },
  { src: g10, alt: "Construction Project 10" },
  { src: g11, alt: "Construction Project 11" },
  { src: g12, alt: "Construction Project 12" },
];

const Gallery = () => {
  const { ref: heroRef, style: heroStyle } = useParallax({ speed: 0.15 });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 opacity-5 will-change-transform"
          style={heroStyle}
        >
          <div className="absolute inset-0 diagonal-stripes" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <span className="text-sm text-primary font-bold">Showcasing Our Work</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Photo Gallery
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Take a look at some of our completed and ongoing projects. We take pride in our 
                craftsmanship and attention to detail.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <ScrollReveal 
                key={index} 
                animation="fade-up" 
                delay={0}
              >
                <div className="overflow-hidden rounded-xl border border-border bg-card aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
