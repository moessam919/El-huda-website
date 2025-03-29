// src/data/products.ts

export interface Product {
    id: string;
    name: string;
    image: string;
    description?: string;
    details: {
        origin?: string;
        color?: string;
        size?: string;
        moisture?: string;
        purity?: string;
        admixture?: string;
        packaging?: string;
        quality?: string;
        container?: string;
        shelfLife?: string;
        season?: string;
        availability?: string;
        variety?: string;
        cultivation?: string;
        imperfect?: string;
        healthBenefits?: string[];
    };
}

export const products: Product[] = [
    {
        id: "white-kidney-beans",
        name: "White kidney beans",
        image: "/WhiteKidneyBeans.png",
        description:
            "White kidney beans, also known as Navy Beans, are one of the most nutritious and versatile legumes. They are rich in plant-based protein, fiber, and essential vitamins such as B vitamins, iron, and magnesium. These beans are widely used in soups, stews, salads, and various international cuisines, making them a staple in kitchens around the world.",
        details: {
            origin: "Egypt",
            color: "Pure white",
            size: "180-200 grains/100g",
            moisture: "Max 14%",
            purity: "99% minimum",
            admixture: "Max 1%",
            quality: "sortex clean",
            packaging: "25kg, 50kg PP bags or as per customer request",
            shelfLife: "24 months if stored in a cool, dry place",
            healthBenefits: [
                "High in Protein & Fiber – Supports digestion and helps maintain a healthy weight",
                "Rich in Antioxidants – Helps reduce inflammation and supports heart health",
                "Great for Energy – Packed with complex carbohydrates for sustained energy",
                "Low in Fat & Cholesterol-Free – A healthy choice for balanced diets",
            ],
        },
    },
    {
        id: "broad-beans",
        name: "Broad beans",
        image: "/BroadBeans.png",
        details: {
            origin: "Egypt",
            color: "Light brown to beige",
            size: "Available in different sizes (50-60 & 60-70)",
            moisture: "Max 12%",
            purity: "99% minimum",
            admixture: "Max 1%",
            packaging: "25kg, 50kg PP bags or as per customer request",
            quality: "sortex clean",
            container: "20 FT (20 Tons), 40 FT (27 Tons)",
            shelfLife: "24 months if stored in a cool, dry place",
        },
    },
    {
        id: "split-broad-beans",
        name: "Split broad beans",
        image: "/SplitBroadBeans.png",
        details: {
            origin: "Egypt",
            color: "Light yellow to beige",
            size: "from 7-12 mm & 10-12 mm & 12mm up",
            moisture: "Max 14%",
            purity: "99% minimum",
            admixture: "Max 1%",
            quality: "sortex clean",
            packaging: "25kg, 50kg PP bags or as per customer request",
            container: "20 FT (20 Tons), 40 FT (27 Tons)",
            shelfLife: "24 months if stored in a cool, dry place",
        },
    },
    {
        id: "split-fava-beans",
        name: "Split Fava beans",
        image: "/SplitFavaBeans.png",
        details: {
            origin: "Lithuanian",
            cultivation: "common",
            quality: "sortex clean",
            color: "light yellow",
            size: "standard Lithuanian size",
            moisture: "12%",
            purity: "97%",
            admixture: "2%",
            packaging: "25 & 50 kg in p.p bags or as client's request",
            container: "20 mt / 20 fcl",
            shelfLife: "24 months if stored in a cool, dry place",
        },
    },
    {
        id: "sun-flower-seeds",
        name: "Sun flower seeds",
        image: "/SunFlowerSeeds.png",
        details: {
            size: "20/64, 22/64, 24/64",
            purity: "99% minimum",
            imperfect: "1%",
            moisture: "9%",
            admixture: "0.5%",
            quality: "sortex clean",
            packaging: "25kg & 50kg p.p bags or as client's request",
            shelfLife: "24 months if stored in a cool, dry place",
        },
    },
    {
        id: "watermelon-seeds",
        name: "Watermelon seeds",
        image: "/WatermelonSeeds.png",
        details: {
            origin: "Egypt",
            color: "light brown",
            purity: "98%",
            moisture: "6%",
            admixture: "0.5%",
            packaging: "25kg & 50kg p.p bags or as client's request",
            shelfLife: "24 months if stored in a cool, dry place",
        },
    },
    {
        id: "pumpkin-seeds",
        name: "Pumpkin seeds",
        image: "/PumpkinSeeds.png",
        details: {
            origin: "Egypt",
            size: "9-10 mm",
            purity: "99%",
            imperfect: "1%",
            moisture: "9%",
            packaging: "25kg & 50kg p.p bags or as client's request",
            shelfLife: "24 months if stored in a cool, dry place",
        },
    },
    {
        id: "sesame-seeds",
        name: "Sesame seeds",
        image: "/SesameSeeds.png",
        details: {
            variety: "Golden (Camel tail)",
            season: "Aug - Sep",
            availability: "Whole Year",
            origin: "Egypt",
            purity: "99%",
            packaging: "10 Kg (Other packing on request)",
            container: "20 FT (18 Tons) 40 FT (27 Tons)",
            shelfLife: "24 months if stored in a cool, dry place",
        },
    },
    {
        id: "fennel-seeds",
        name: "Fennel seeds",
        image: "/FennelSeeds.png",
        details: {
            season: "May",
            availability: "Whole Year",
            origin: "Egypt",
            quality: "Excellent (Free of any bad smell & live or dead weevils)",
            purity: "99%",
            packaging: "25 Kg (Other packing on request)",
            container: "40 FT (27 Tons)",
            shelfLife: "24 months if stored in a cool, dry place",
        },
    },
    {
        id: "caraway-seeds",
        name: "Caraway seeds",
        image: "/CarawaySeeds.png",
        details: {
            season: "May-Jun",
            availability: "Whole Year",
            origin: "Egypt",
            quality: "Excellent (Free of any bad smell & live or dead weevils)",
            purity: "99%",
            packaging: "25 Kg (Other packing on request)",
            container: "40 FT (28 Tons)",
            shelfLife: "24 months if stored in a cool, dry place",
        },
    },
    {
        id: "anise-seeds",
        name: "Anise seeds",
        image: "/AniseSeeds.png",
        details: {
            season: "Apr - May",
            availability: "Whole Year",
            origin: "Egypt",
            quality: "Excellent (Free of any bad smell & live or dead weevils)",
            purity: "99%",
            packaging: "10 Kg (Other packing on request)",
            container: "40 FT (25 Tons)",
            shelfLife: "24 months if stored in a cool, dry place",
        },
    },
];

export const mainProducts: Product[] = [
    {
        id: "white-kidney-beans",
        name: "White kidney beans",
        image: "/WhiteKidneyBeans.png",

        details: {},
    },
    {
        id: "broad-beans",
        name: "Broad beans",
        image: "/BroadBeans.png",
        details: {},
    },
    {
        id: "split-broad-beans",
        name: "Split broad beans",
        image: "/SplitBroadBeans.png",
        details: {},
    },
    {
        id: "split-fava-beans",
        name: "Split Fava beans",
        image: "/SplitFavaBeans.png",
        details: {},
    },
    {
        id: "sun-flower-seeds",
        name: "Sun flower seeds",
        image: "/SunFlowerSeeds.png",
        details: {},
    },
    {
        id: "watermelon-seeds",
        name: "Watermelon seeds",
        image: "/WatermelonSeeds.png",
        details: {},
    },
    {
        id: "pumpkin-seeds",
        name: "Pumpkin seeds",
        image: "/PumpkinSeeds.png",
        details: {},
    },
    {
        id: "sesame-seeds",
        name: "Sesame seeds",
        image: "/SesameSeeds.png",
        details: {},
    },
    {
        id: "fennel-seeds",
        name: "Fennel seeds",
        image: "/FennelSeeds.png",
        details: {},
    },
    {
        id: "caraway-seeds",
        name: "Caraway seeds",
        image: "/CarawaySeeds.png",
        details: {},
    },
    {
        id: "anise-seeds",
        name: "Anise seeds",
        image: "/AniseSeeds.png",
        details: {},
    },
];

export const otherProducts: Product[] = [
    {
        id: "apricot",
        name: "Apricot",
        image: "",
        details: {},
    },
    {
        id: "prunes",
        name: "Prunes",
        image: "",
        details: {},
    },
    {
        id: "dates",
        name: "Dates",
        image: "",
        details: {},
    },
    {
        id: "dried-fig",
        name: "Dried fig",
        image: "",
        details: {},
    },
    {
        id: "raisins",
        name: "Raisins",
        image: "",
        details: {},
    },
    {
        id: "almonds",
        name: "Almonds",
        image: "",
        details: {},
    },
    {
        id: "hazelnuts",
        name: "Hazelnuts",
        image: "",
        details: {},
    },
    {
        id: "walnuts",
        name: "Walnuts",
        image: "",
        details: {},
    },
];
