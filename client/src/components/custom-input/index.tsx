import React, { FC } from 'react';
import { Form, Input } from 'antd';

type Props = {
    name: string;
    placeholder: string;
    type?: string;
}

export const CustomInput: FC<Props> = ({ name, placeholder, type = 'text' }) => {
    return (
        <Form.Item
            name={name}
            rules={[{
                required: true,
                message: 'Обязательное поле'
            }]}
            shouldUpdate={true}
        >
            <Input
                placeholder={placeholder}
                type={type}
                size='large'
            >

            </Input>
        </Form.Item>
    )
}
