import { FC } from 'react'
import { Layout } from '../../components/layout'
import { Row, Card, Form, Space, Typography } from 'antd'
import { CustomInput } from '../../components/custom-input'
import { PasswordInput } from '../../components/password-input'
import { CustomButton } from '../../components/custom-button'
import { Paths } from '../../paths'
import { Link } from 'react-router-dom'

export const Register: FC = () => {
    return (
        <Layout>
            <Row
                align='middle'
                justify='center'
            >
                <Card
                    title='Зарегистрируйтесь!'
                    style={{
                        width: '30rem'
                    }}
                >
                    <Form onFinish={() => null}>
                        <CustomInput
                            name='name'
                            placeholder='Имя'
                        />
                        <CustomInput
                            type='email'
                            name='email'
                            placeholder='Введите email'
                        />
                        <PasswordInput
                            name='password'
                            placeholder='Введите пароль'
                        />
                        <PasswordInput
                            name='confirmPassword'
                            placeholder='Повторите пароль'
                        />
                        <CustomButton
                            type='primary'
                            htmlType='submit'
                        >
                            Зарегистироваться
                        </CustomButton>
                    </Form>
                    <Space
                        direction='vertical'
                        size='large'
                    >
                        <Typography.Text>
                            Есть аккаунт?
                            <Link to={Paths.login}>
                                Войдите
                            </Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    )
}
