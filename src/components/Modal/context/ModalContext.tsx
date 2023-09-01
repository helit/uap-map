import { createContext, useContext, useState, ReactNode } from 'react';
import Modal from '..';

interface ModalContextProps {
    isModalOpen: boolean;
    showModal: (content: ReactNode) => void;
    hideModal: () => void;
    modalContent: ReactNode | null;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
    undefined
);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

type ModalProviderProps = {
    children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const showModal = (content: ReactNode) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const hideModal = () => {
        setModalContent(null);
        setIsModalOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{ isModalOpen, showModal, hideModal, modalContent }}
        >
            {children}
            <Modal />
        </ModalContext.Provider>
    );
};
