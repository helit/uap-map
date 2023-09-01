import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { breakpoints } from './theme';
import { theme } from './theme/theme';

export const AppWrapper = styled.div`
    position: relative;
`;

export const ContentWrapper = styled.div``;

export const PageTitle = styled(Typography)`
    position: absolute;
    top: 0;
    left: 0;
    margin: 16px;
    color: ${theme.palette.primary.contrastText};
    z-index: 5;

    @media (max-width: ${breakpoints.medium}) {
        font-size: 18px;
    }
`;
