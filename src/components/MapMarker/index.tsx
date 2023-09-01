import { SightingInfoType } from '../../types/sightingInfo';
import { BodyWrapper, Inline, Marker, Wrapper } from './styles';
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
import { Divider, Typography } from '@mui/material';

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
                </BodyWrapper>
            </div>
        );
    };

    const getIcon = () => {
        switch (sighting.type) {
            case 'Sighting':
                return <Visibility sx={{ color: 'white' }} />;
            case 'Abduction':
                return <SettingsAccessibility sx={{ color: 'white' }} />;
            case 'Close encounter':
                return <SupervisorAccount sx={{ color: 'white' }} />;
            case 'Disappearance':
                return <PersonRemove sx={{ color: 'white' }} />;
            case 'Crash':
                return <CrisisAlert sx={{ color: 'white' }} />;
            case 'Landing':
                return <VerticalAlignBottom sx={{ color: 'white' }} />;
            default:
                return <Report sx={{ color: 'white' }} />;
        }
    };

    return (
        <Wrapper onClick={openModal}>
            <Marker>{getIcon()}</Marker>
        </Wrapper>
    );
};
