import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/impressum", "/datenschutz"],
    },
    sitemap: "https://astrogeo-anna.de/sitemap.xml",
  };
}
