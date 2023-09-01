import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AppWrapper } from './style';
import { ThemeProvider } from '@mui/system';
import { theme } from './theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <App />
            </AppWrapper>
        </ThemeProvider>
    </React.StrictMode>
);
