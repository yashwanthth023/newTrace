import React from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import '../style/modal.scss'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ProtoTypeModal = ({ showModal, setShowModal }) => {

    const formik = useFormik({
        // validationSchema: experienceValidationSchema,
        initialValues: {
            name: '',
            description: '',
            remarks: '',
        }
    })

    return (
        <Modal
            isOpen={showModal}
            style={customStyles}

        >
            <div className='modal_container'>
                <div className='modal_container_header'>
                    <div className='modal_container_header_title'>Add Prototype</div>
                    <span onClick={() => setShowModal(false)} class="modal_container_header_btn">&times;</span>
                </div>
                <div className='modal_container_body'>

                </div>
            </div>



        </Modal>
    )
}

export default ProtoTypeModal