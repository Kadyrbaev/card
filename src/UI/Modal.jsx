import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Modal = (props) => {
    const {children }= props
    console.log(props);
  return (
    <Fragment>
        {/* <Backdrop></Backdrop> */}
        {createPortal(<ModalStyled text={props.background}>{children}</ModalStyled>, document.getElementById("modal"))}
        {createPortal(<Backdrop onClick={props.onClose}></Backdrop>, document.getElementById("backdrop"))}
        {/* <ModalStyled>
          {children}
        </ModalStyled> */}
    </Fragment>
  )
}

export default Modal


const ModalStyled = styled.div`
    border: 2px solid red;
    width: 300px;
    height: 200px;
    position: fixed;
    z-index: 2;
    background-color: ${(props)=> props.text};
`
const Backdrop = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #373131;
    position: fixed;
    top: 0;
    z-index: 1;
`
