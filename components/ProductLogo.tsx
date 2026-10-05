import Image from "next/image";
import type { Product } from "@/data/productos";

const SIZES: Record<NonNullable<Product["logoType"]>, string> = {
  image: "(max-width: 768px) 40vw, 200px",
  icon: "48px",
  text: "150px",
};

export default function ProductLogo({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  if (product.logoType === "text" || !product.logo) {
    return (
      <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
        {product.name}
      </span>
    );
  }

  if (product.logoType === "icon") {
    return (
      <Image
        src={product.logo}
        alt={product.logoAlt}
        width={44}
        height={44}
        className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={product.logo}
      alt={product.logoAlt}
      width={220}
      height={44}
      sizes={SIZES.image}
      className="h-7 sm:h-8 w-auto max-w-[190px] object-contain object-left"
      priority={priority}
    />
  );
}