export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
  price: string;
}

import servicesData from "@/content/services.json";

export function getAllServices(): Service[] {
  return servicesData as Service[];
}

export function getServiceBySlug(slug: string): Service | undefined {
  return getAllServices().find((s) => s.slug === slug);
}
