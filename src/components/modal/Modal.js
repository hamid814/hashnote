import React, { useState, useEffect, useContext } from 'react'
import { ModalContext } from '../../context/modal/ModalState';

import QuickInsert from './types/QuickInsert';

import './style/modal.scss';

const Modal = () => {
  const { modalStatus, modalType, setModal } = useContext(ModalContext)
  
  const [modalClass, setModalClass] = useState('off')
  
  useEffect(() => {
    if(modalStatus === 'off') {
      setModalClass('go')

      setTimeout(() => {
        setModalClass('off')
      }, 680);
    } else if(modalStatus === 'on') {
      setModalClass('come')

      setTimeout(() => {
        setModalClass('on')
      }, 680);
    } else if(modalStatus === 'first-off') {
      setModalClass('off')
    }
  }, [modalStatus])

  const onClick = e => {
    if(e.target.classList.contains('modal-container')) {
      closeModal()
    }
  }

  const closeModal = () => {
    setModal('off')
  }
  
  return (
    <div className={`modal-container ${modalClass}`} onClick={onClick}>
      <div className='modal-body'>
        <div className='close-modal-btn' onClick={closeModal}></div>
        moda content
        { modalType === 'quick-insert' && <QuickInsert /> }
      </div>
    </div>
  )
}

export default Modal
