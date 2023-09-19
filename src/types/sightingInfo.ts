export type SightingInfoType = {
    id: string;
    date: string;
    name: string;
    type: string;
    location: SightingLocationType;
    description: string;
    sources?: SourcesType[];
    image?: string;
    video?: string;
};

export type SightingLocationType = {
    name: string;
    coordinates: string;
};

export type SourcesType = {
    title: string;
    url: string;
};
