import './App.css';

import MapContainer from './components/MapContainer';
import { Modal } from './components/Modal';
import { ModalProvider } from './components/Modal/context/ModalContext';
import { ContentWrapper, PageTitle } from './style';

const App = () => {
    return (
        <ModalProvider>
            <ContentWrapper>
                <PageTitle component="h1" variant="h5">
                    UFO/UAP Report & Sighting map
                </PageTitle>
                <Modal />
                <MapContainer />
            </ContentWrapper>
        </ModalProvider>
    );
};

export default App;
