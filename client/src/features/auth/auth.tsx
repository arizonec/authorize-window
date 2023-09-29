import React, { FC } from 'react'
import { useCurrentQuery } from '../../app/services/auth'

type Props = {
    children: JSX.Element,
}

export const Auth: FC<Props> = ({ children }) => {
    const { isLoading } = useCurrentQuery();

    if (isLoading) {
        return <span>Загрузка...</span>
    }

    return children;
}
