import { set } from 'mobx';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd'



const ModalCreate = () => {
    const [ModalText, setModalText] = useState('')
    const [visible, setVisible] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false)


    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true)

        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false)
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };


    return (
        <div>
            <Button type="ghost" onClick={showModal} >
                Create
        </Button>
            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>{ModalText} test</p>
            </Modal>

        </div>
    );
};





export default ModalCreate;

