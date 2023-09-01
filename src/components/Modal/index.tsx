import { Paper } from '@mui/material'
import { ModalWrapper } from './styles'
import { useEffect } from 'react'

export const Modal = ({ modal, unSetModal }: any) => {
    useEffect(() => {
        console.log('modal', modal)
    }, [modal, unSetModal])

    return (
        <ModalWrapper>
            <Paper sx={{ width: '500px', height: '500px' }}>{modal}</Paper>
        </ModalWrapper>
    )
}
