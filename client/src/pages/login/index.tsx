import { FC, useState } from 'react'
import { Layout } from '../../components/layout'
import { Row, Card, Form, Space, Typography } from 'antd'
import { CustomInput } from '../../components/custom-input'
import { PasswordInput } from '../../components/password-input'
import { CustomButton } from '../../components/custom-button'
import { Paths } from '../../paths'
import { Link, useNavigate } from 'react-router-dom'
import { UserData, useLoginMutation } from '../../app/services/auth'
import { isErrorWithMessage } from '../../utils/is-error-with-message'
import { ErrorMessage } from '../../components/error-message'

export const Login: FC = () => {
    const navigate = useNavigate();
    const [loginUser, loginUserResult] = useLoginMutation();
    const [error, setError] = useState('');

    const login = async (data: UserData) => {
        try {
            await loginUser(data).unwrap();
            navigate('/');
        } catch (error) {
            const maybeError = isErrorWithMessage(error);

            if (maybeError) {
                setError(error.data.message);
            } else {
                setError('Неизвестная ошибка!')
            }
        }
    }

    return (
        <Layout>
            <Row
                align='middle'
                justify='center'
            >
                <Card
                    title='Войдите'
                    style={{
                        width: '30rem'
                    }}
                >
                    <Form onFinish={login}>
                        <CustomInput
                            type='email'
                            name='email'
                            placeholder='Введите email'
                        />
                        <PasswordInput
                            name='password'
                            placeholder='Введите пароль'
                        />
                        <CustomButton
                            type='primary'
                            htmlType='submit'
                        >
                            Войти
                        </CustomButton>
                    </Form>
                    <Space
                        direction='vertical'
                        size='large'
                    >
                        <Typography.Text>
                            Нет аккаунта?
                            <Link to={Paths.register}>
                                Зарегистироваться
                            </Link>
                        </Typography.Text>
                        <ErrorMessage message={error} />
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
