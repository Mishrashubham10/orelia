import Image, { StaticImageData } from 'next/image';

interface ReviewCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export function ReviewCard({ title, description, image }: ReviewCardProps) {
  return (
    <div
      className="
        group relative
        rounded-xl border bg-card text-card-foreground
        p-6 shadow-sm
        transition-smooth
        hover:shadow-lg hover:-translate-y-1
      "
    >
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="
            relative h-12 w-12 overflow-hidden rounded-full
            border bg-muted
          "
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <h4 className="text-lg leading-tight">{title}</h4>
      </div>

      {/* Review text */}
      <p
        className="
          text-sm leading-relaxed
          text-muted-foreground
        "
      >
        {description}
      </p>

      {/* Decorative accent */}
      <span
        className="
          pointer-events-none absolute inset-x-0 bottom-0 h-1
          rounded-b-xl opacity-0
          gradient-primary
          transition-smooth
          group-hover:opacity-100
        "
      />
    </div>
  );
}