import { useModal } from './context/ModalContext';

export const Modal = () => {
    const { isModalOpen, hideModal, modalContent } = useModal();

    return (
        <>
            {isModalOpen && (
                <div className="modal-overlay" onClick={hideModal}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {modalContent}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
