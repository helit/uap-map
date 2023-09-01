import Map, { GeolocateControl } from 'react-map-gl';
import { MapWrapper } from './styles';
import { sightingData } from '../../data/sightingData';
import { Sighting } from '../Sighting';
import { mapSettings, mapStyles } from '../../data/mapData';

export const MapContainer = () => {
    return (
        <MapWrapper>
            <Map
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
                initialViewState={mapSettings.initialViewState}
                mapStyle={mapStyles.outdoors}
                style={{ width: '100%', height: '100%' }}
            >
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                />
                {sightingData.map((sighting) => (
                    <Sighting key={sighting.id} sighting={sighting} />
                ))}
            </Map>
        </MapWrapper>
    );
};

export default MapContainer;
