export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "manchester",
  name: "Manchester",
  countyOrRegion: "Greater Manchester",
  latitude: 53.4808,
  longitude: -2.2426,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "salford",
    name: "Salford",
    countyOrRegion: "Greater Manchester",
    latitude: 53.4830,
    longitude: -2.2931,
  },
  {
    slug: "stockport",
    name: "Stockport",
    countyOrRegion: "Greater Manchester",
    latitude: 53.4106,
    longitude: -2.1575,
  },
  {
    slug: "altrincham",
    name: "Altrincham",
    countyOrRegion: "Greater Manchester",
    latitude: 53.3879,
    longitude: -2.3494,
  },
  {
    slug: "bolton",
    name: "Bolton",
    countyOrRegion: "Greater Manchester",
    latitude: 53.5778,
    longitude: -2.4290,
  },
  {
    slug: "oldham",
    name: "Oldham",
    countyOrRegion: "Greater Manchester",
    latitude: 53.5409,
    longitude: -2.1114,
  },
  {
    slug: "rochdale",
    name: "Rochdale",
    countyOrRegion: "Greater Manchester",
    latitude: 53.6158,
    longitude: -2.1560,
  },
  {
    slug: "sale",
    name: "Sale",
    countyOrRegion: "Greater Manchester",
    latitude: 53.4242,
    longitude: -2.3223,
  },
  {
    slug: "didsbury",
    name: "Didsbury",
    countyOrRegion: "Greater Manchester",
    latitude: 53.4162,
    longitude: -2.2282,
  },
  {
    slug: "chorlton",
    name: "Chorlton",
    countyOrRegion: "Greater Manchester",
    latitude: 53.4400,
    longitude: -2.2723,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
