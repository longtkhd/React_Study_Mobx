import React from 'react';
import HeaderSearch from '../HeaderSearch'
import ModalCreate from '../ModalCreate'
import { Button, Form, Row, Col, DatePicker } from 'antd'
import './style.less'
const { RangePicker } = DatePicker
const ColProps = {
    xs: 24,
    sm: 12,
    style: {
        marginBottom: 16,
    },
}

const TwoColProps = {
    ...ColProps,
    xl: 96,
}


const HeaderTable = () => {
    return (
        <div>
            <Form name='name'>
                <Row gutter={24}>


                    <Col {...TwoColProps}
                        xl={{ span: 22 }}
                        md={{ span: 15 }}
                        sm={{ span: 15 }}>
                        <Row type="flex" style={{ float: 'right' }}>
                            <HeaderSearch />

                        </Row>
                    </Col>


                    <Col
                        {...TwoColProps}
                        xl={{ span: 1 }}
                        md={{ span: 3 }}
                        sm={{ span: 5 }}
                        style={{ margin: '0 10px' }}

                    >
                        <Row type="flex" style={{ float: 'right' }}>

                            <ModalCreate />
                        </Row>
                    </Col>

                </Row>





            </Form>

        </div>
    );
};





export default HeaderTable;
