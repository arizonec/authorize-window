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
    icon?: ReactNode;
};

export const CustomButton: FC<Props> = ({ children, htmlType = 'button', onClick, type, danger, loading, shape, icon }) => {
    return (
        <Form.Item>
            <Button
                type={type}
                htmlType={htmlType}
                onClick={onClick}
                danger={danger}
                loading={loading}
                shape={shape}
                icon={icon}
            >
                {children}
            </Button>
        </Form.Item>
    )
}
