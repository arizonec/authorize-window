import { FC, ReactNode } from 'react'
import { Button, Form } from 'antd';

type Props = {
    children: ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
    danger?: boolean;
    loading?: boolean;
    shape?: "default" | "circle" | "round" | undefined;
};

export const CustomButton: FC<Props> = ({ children, htmlType = 'button', type, danger, loading, shape }) => {
    return (
        <Form.Item>
            <Button
                type={type}
                htmlType={htmlType}
                danger={danger}
                loading={loading}
                shape={shape}
            >
                {children}
            </Button>
        </Form.Item>
    )
}
