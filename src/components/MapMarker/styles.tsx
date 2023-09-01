import styled from '@emotion/styled';
import { theme } from '../../theme/theme';

export const Wrapper = styled.div`
    position: relative;
`;

export const BodyWrapper = styled.div`
    text-align: left;
    max-width: 500px;
`;

export const Inline = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
`;

export const Marker = styled.div`
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: ${theme.palette.secondary.main};
    border-radius: 50%;

    &:hover {
        cursor: pointer;
        background-color: ${theme.palette.secondary.dark};
    }
`;
