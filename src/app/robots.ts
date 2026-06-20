import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  };
}

