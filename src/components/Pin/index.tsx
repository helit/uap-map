import { SightingInfoType } from '../../types/sightingInfo';
import { Marker, Wrapper } from './styles';
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

type PinProps = {
    sighting: SightingInfoType;
};

export const Pin = ({ sighting }: PinProps) => {
    const { showModal } = useModal();

    const togglePopup = () => {
        showModal(getModalContent());
    };

    const getModalContent = () => {
        return (
            <div>
                <h1>{sighting.name}</h1>
                <p>{sighting.description}</p>
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
        <Wrapper onClick={togglePopup}>
            <Marker>{getIcon()}</Marker>
        </Wrapper>
    );
};
