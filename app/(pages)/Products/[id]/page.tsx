import ProductGallery from "@/app/Components/ProductGallery";
import { Product, products } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduct(id: string): Promise<Product | undefined> {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 200));
    return products.find((product) => product.id === id);
}

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
    // Await the params object before accessing its properties
    const { id } = await params;
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    const detailEntries = Object.entries(product.details ?? {}).filter(
        ([, value]) => value !== undefined && value !== null
    );
    const healthBenefits = product.details?.healthBenefits;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back Navigation */}
            <nav className="mb-8">
                <Link
                    href="/Products"
                    className="inline-flex items-center gap-2 text-[#8AB420] hover:text-[#6d8e1a] transition-colors group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:-translate-x-1 transition-transform"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Products
                </Link>
            </nav>

            {/* Product Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Gallery */}
                <ProductGallery
                    imagess={product.imagess ?? []}
                    productName={product.name}
                />

                {/* Product Info */}
                <div className="space-y-8">
                    {/* Title and Badges */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {product.name}
                        </h1>
                    </div>

                    {/* Description */}
                    {product.description && (
                        <div className="prose max-w-none text-gray-700">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                About this product
                            </h2>
                            <p>{product.description}</p>
                        </div>
                    )}

                    {/* Details Section */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                Specifications
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {detailEntries
                                    .filter(([key]) => key !== "healthBenefits")
                                    .map(([key, value]) => (
                                        <div key={key} className="space-y-1">
                                            <h3 className="text-sm font-medium text-gray-500 capitalize">
                                                {key
                                                    .replace(/([A-Z])/g, " $1")
                                                    .trim()}
                                            </h3>
                                            <p className="text-gray-900 font-medium">
                                                {Array.isArray(value)
                                                    ? value.join(", ")
                                                    : value}
                                            </p>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Health Benefits */}
                        {healthBenefits && healthBenefits.length > 0 && (
                            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Health Benefits
                                </h2>
                                <ul className="space-y-3">
                                    {healthBenefits.map((benefit, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <svg
                                                className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700">
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Related Products - Simulate dynamic recommendations */}
            <section className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    You may also like
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products
                        .filter((p) => p.id !== product.id)
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 4)
                        .map((related) => (
                            <Link
                                key={related.id}
                                href={`/Products/${related.id}`}
                                className="group block"
                            >
                                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                                    <Image
                                        src={related.imagess?.[0] ?? ""}
                                        alt={related.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <h3 className="font-medium text-gray-900 group-hover:text-[#8AB420] transition-colors">
                                    {related.name}
                                </h3>
                            </Link>
                        ))}
                </div>
            </section>
        </div>
    );
}
