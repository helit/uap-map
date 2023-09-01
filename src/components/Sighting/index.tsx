import { Marker as MapboxMarker } from 'react-map-gl';
import { SightingInfoType } from '../../types/sightingInfo';
import { Pin } from '../Pin';

type SightingProps = {
    sighting: SightingInfoType;
};

export const Sighting = ({ sighting }: SightingProps) => {
    const coordinates = sighting.location.coordinates?.split(',');

    return (
        <MapboxMarker
            latitude={Number(coordinates[0])}
            longitude={Number(coordinates[1])}
            anchor="center"
        >
            <Pin sighting={sighting} />
        </MapboxMarker>
    );
};
