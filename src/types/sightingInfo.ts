export type SightingInfoType = {
    id: string;
    date: string;
    name: string;
    type: string;
    location: SightingLocationType;
    description: string;
    url?: string;
};

export type SightingLocationType = {
    name: string;
    coordinates: string;
};
