import { Typography } from '@mui/material'
import './App.css'

import MapContainer from './components/MapContainer'
import { Modal } from './components/Modal'

const App = () => {
    return (
        <div style={{ display: 'flex', position: 'relative' }}>
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
            <MapContainer />
            <Modal />
        </div>
    )
}

export default App
