import { FC } from 'react';
import { Layout, Space, Typography, Button } from 'antd';
import styles from './index.module.css';
import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { CustomButton } from '../custom-button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

export const Header: FC = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamIcon} />
                <Link to={Paths.home}>
                    <CustomButton type='link'>
                        <Typography.Title>
                            Сотрудники
                        </Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <CustomButton type='link' icon={<UserOutlined />}>
                        Зарегистрироваться
                    </CustomButton>
                </Link>
                <Link to={Paths.login}>
                    <CustomButton type='link' icon={<LoginOutlined />}>
                        Войти
                    </CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    )
}
