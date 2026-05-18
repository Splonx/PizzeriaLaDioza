import { galleryImages } from "../data/images";
import OptimizedImage from "./OptimizedImage";

export default function Gallery() {
  return (
    <section className="section-pad scroll-reveal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Galerie photo</p>
          <h2 className="section-title">Une ambiance chaude, moderne et gourmande</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Photos lumineuses, pizzas croustillantes et cuisine italienne rassurante pour donner envie de commander dès le premier regard.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[230px] gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.src}
              className={`group overflow-hidden rounded-2xl shadow-soft ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <OptimizedImage
                src={image.src}
                fallback={image.fallback}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                sizes={index === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
