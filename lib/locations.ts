export interface Location {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  headline: string;
  description: string;
  neighborhoods: string[];
  localKeywords: string[];
}

import locationsData from "@/content/locations.json";

export function getAllLocations(): Location[] {
  return locationsData as Location[];
}

export function getLocationBySlug(slug: string): Location | undefined {
  return getAllLocations().find((l) => l.slug === slug);
}
