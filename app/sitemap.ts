import { MetadataRoute } from "next";
import customersData from "@/data/customers.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flx-software.de";

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/produkte`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/referenzen`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sicherheit`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.35,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const referencePages = customersData.map((customer) => ({
    url: `${baseUrl}/referenzen/${customer.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...referencePages];
}

