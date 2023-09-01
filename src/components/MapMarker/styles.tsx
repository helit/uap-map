import styled from '@emotion/styled';
import { theme } from '../../theme/theme';
import { IconButton } from '@mui/material';

export const Wrapper = styled.div`
    position: relative;
`;

export const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    text-align: left;
    max-width: 700px;
`;

export const StyledImage = styled.img`
    object-fit: contain;
    height: 400px;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Inline = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`;

export const Marker = styled(IconButton)`
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.contrastText};

    &:hover {
        background-color: ${theme.palette.secondary.dark};
    }
`;
