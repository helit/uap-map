import styled from '@emotion/styled'

export const Wrapper = styled.div`
    position: relative;
`

export const Marker = styled.div`
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    background-color: #f44336;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
    }
`
