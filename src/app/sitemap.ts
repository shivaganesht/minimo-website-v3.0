import type { MetadataRoute } from "next";

// Dynamically generate the sitemap with sensible defaults
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://minimo.example.com";

  const routes = [
    "",
    "/about",
    "/contact",
    "/product",
    // Note: Dynamic product pages (/product/[slug]) should be added here if you have a data source.
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}