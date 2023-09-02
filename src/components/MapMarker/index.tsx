import { SightingInfoType } from '../../types/sightingInfo';
import {
    BodyWrapper,
    Footer,
    Inline,
    Marker,
    MediaWrapper,
    StyledImage,
} from './styles';
import {
    CrisisAlert,
    PersonRemove,
    Report,
    SettingsAccessibility,
    SupervisorAccount,
    VerticalAlignBottom,
    Visibility,
} from '@mui/icons-material';
import { useModal } from '../Modal/context/ModalContext';
import { Divider, Link, Typography } from '@mui/material';
import { LightTooltip } from '../Tooltip';

type MapMarkerProps = {
    sighting: SightingInfoType;
};

export const MapMarker = ({ sighting }: MapMarkerProps) => {
    const { showModal } = useModal();

    const openModal = () => {
        showModal(getModalContent());
    };

    const getModalContent = () => {
        return (
            <div>
                <Typography variant="h4" component="h2" mb={3}>
                    {sighting.name}
                </Typography>
                <Inline>
                    <Typography variant="subtitle1" fontWeight={'bold'}>
                        Date:
                    </Typography>
                    <Typography variant="subtitle1">{sighting.date}</Typography>
                </Inline>
                <Inline>
                    <Typography variant="subtitle1" fontWeight={'bold'}>
                        Incident type:
                    </Typography>
                    <Typography variant="subtitle1">{sighting.type}</Typography>
                </Inline>
                <Divider sx={{ margin: '24px 0' }} />
                <BodyWrapper>
                    <Typography variant="body1" mb={3}>
                        {sighting.description}
                    </Typography>
                    {sighting.image && (
                        <MediaWrapper>
                            <StyledImage
                                src={sighting.image}
                                alt={sighting.name}
                            />
                        </MediaWrapper>
                    )}
                    {sighting.video && (
                        <MediaWrapper>
                            <video controls width="100%">
                                <source
                                    src={sighting.video}
                                    type="video/webm"
                                />
                            </video>
                        </MediaWrapper>
                    )}
                    <Footer>
                        <Inline>
                            <Typography variant="subtitle1" fontWeight={'bold'}>
                                Source:
                            </Typography>
                            <Link
                                href={
                                    'https://en.wikipedia.org/wiki/List_of_reported_UFO_sightings'
                                }
                                target="_blank"
                                rel="noreferrer"
                                variant="subtitle1"
                            >
                                Wikipedia - List of reported UFO sightings
                            </Link>
                        </Inline>
                        {sighting.url && (
                            <Link
                                href={sighting.url}
                                target="_blank"
                                rel="noreferrer"
                                variant="subtitle1"
                            >
                                Read more
                            </Link>
                        )}
                    </Footer>
                </BodyWrapper>
            </div>
        );
    };

    const getIcon = () => {
        switch (sighting.type) {
            case 'Sighting':
                return <Visibility />;
            case 'Abduction':
                return <SettingsAccessibility />;
            case 'Close encounter':
                return <SupervisorAccount />;
            case 'Disappearance':
                return <PersonRemove />;
            case 'Crash':
                return <CrisisAlert />;
            case 'Landing':
                return <VerticalAlignBottom />;
            default:
                return <Report />;
        }
    };

    return (
        <LightTooltip title={sighting.name} placement="top">
            <Marker onClick={openModal}>{getIcon()}</Marker>
        </LightTooltip>
    );
};
