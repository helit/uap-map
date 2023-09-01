import { Button, Divider, IconButton } from '@mui/material';
import { useModal } from './context/ModalContext';
import {
    ModalActions,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalWrapper,
} from './styles';
import { Close } from '@mui/icons-material';

export const Modal = () => {
    const { isModalOpen, hideModal, modalContent } = useModal();

    return (
        <>
            {isModalOpen && modalContent && (
                <ModalOverlay onClick={hideModal}>
                    <ModalWrapper>
                        <ModalContent
                            elevation={3}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ModalHeader>
                                <IconButton onClick={hideModal}>
                                    <Close />
                                </IconButton>
                            </ModalHeader>
                            <ModalBody>{modalContent}</ModalBody>
                            <Divider />
                            <ModalActions>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    onClick={hideModal}
                                >
                                    Close
                                </Button>
                            </ModalActions>
                        </ModalContent>
                    </ModalWrapper>
                </ModalOverlay>
            )}
        </>
    );
};

export default Modal;
