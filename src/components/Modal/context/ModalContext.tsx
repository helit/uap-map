import { createContext, useCallback, useEffect, useState } from 'react'
import { Modal } from '..'

export const ModalProvider = (props: any) => {
    const [modal, setModal] = useState<any>()
    const unSetModal = useCallback(() => {
        setModal(undefined)
    }, [setModal])

    return (
        <ModalContext.Provider value={{ unSetModal, setModal }} {...props}>
            {props.children}
            {modal && <Modal modal={modal} unSetModal={unSetModal} />}
        </ModalContext.Provider>
    )
}

export const ModalContext = createContext({
    setModal: (modal: any) => {},
})
