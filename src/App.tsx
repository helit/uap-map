import { Typography } from '@mui/material';
import './App.css';

import MapContainer from './components/MapContainer';
import { Modal } from './components/Modal';
import { ModalProvider } from './components/Modal/context/ModalContext';
import { ContentWrapper } from './style';

const App = () => {
    return (
        <ModalProvider>
            <ContentWrapper>
                <Typography
                    variant={'h5'}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        margin: '16px',
                        color: '#ffffff',
                        zIndex: 10,
                    }}
                >
                    UFO/UAP Report & Sighting map
                </Typography>
                <Modal />
                <MapContainer />
            </ContentWrapper>
        </ModalProvider>
    );
};

export default App;
