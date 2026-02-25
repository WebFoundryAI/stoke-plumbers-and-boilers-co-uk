export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "stoke-on-trent",
  name: "Stoke-on-Trent",
  countyOrRegion: "Staffordshire",
  latitude: 52.9988,
  longitude: -2.1820,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "newcastle-under-lyme",
    name: "Newcastle-under-Lyme",
    countyOrRegion: "Staffordshire",
    latitude: 53.0096,
    longitude: -2.2276,
  },
  {
    slug: "stafford",
    name: "Stafford",
    countyOrRegion: "Staffordshire",
    latitude: 52.8060,
    longitude: -2.1218,
  },
  {
    slug: "crewe",
    name: "Crewe",
    countyOrRegion: "Cheshire East",
    latitude: 53.0997,
    longitude: -2.4435,
  },
  {
    slug: "congleton",
    name: "Congleton",
    countyOrRegion: "Cheshire East",
    latitude: 53.1619,
    longitude: -2.2147,
  },
  {
    slug: "leek",
    name: "Leek",
    countyOrRegion: "Staffordshire",
    latitude: 53.1041,
    longitude: -1.9871,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
