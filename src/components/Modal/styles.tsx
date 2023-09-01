import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 16px;
`;

export const ModalContent = styled(Paper)`
    display: flex;
    flex-direction: column;
    width: 1024px;
    min-height: 600px;
    max-height: 800px;
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 16px 16px 0;
`;

export const ModalBody = styled.div`
    flex: 1;
    text-align: left;
    padding: 0 42px 24px;
    overflow-y: auto;
`;

export const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 16px;
`;
