import { FC, ReactNode } from 'react';
import { Layout as AntdLayout } from 'antd';
import styles from './index.module.css';
import { Header } from '../header';

type Props = {
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.main}>
            <Header />
            <AntdLayout.Content style={{
                height: '100%'
            }}>
                {children} //Проверить, можно ли использовать Outlet?
            </AntdLayout.Content>
        </div>
    )
}
