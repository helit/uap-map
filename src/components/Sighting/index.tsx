import { Marker as MapboxMarker } from 'react-map-gl';
import { SightingInfoType } from '../../types/sightingInfo';
import { MapMarker } from '../MapMarker';

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
            <MapMarker sighting={sighting} />
        </MapboxMarker>
    );
};
