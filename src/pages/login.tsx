import { UserAddOutlined } from '@ant-design/icons'
import { Space, Typography, Form, Input, Button, Checkbox } from 'antd'
import { FC, useEffect } from 'react'
import styles from './register/style.module.scss'
import { Link } from 'react-router-dom'
import { REGISTER_PATHNAME } from '../router'

const { Title } = Typography

const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

function deleteUserStorage() {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

function getUserStorage() {
  return {
    username: localStorage.getItem(USERNAME_KEY) || '',
    password: localStorage.getItem(PASSWORD_KEY) || '',
  }
}

const Login: FC = () => {
  const [form] = Form.useForm()

  const onFinished = (values: { username: string; password: string; remember: boolean }) => {
    if (values.remember) {
      rememberUser(values.username, values.password)
    } else {
      deleteUserStorage()
    }
  }

  useEffect(() => {
    form.setFieldsValue(getUserStorage())
  }, [form])

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>

      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinished}
          initialValues={{ remember: true }}
          form={form}
        >
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }} valuePropName="checked" name="remember">
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
            <Link to={REGISTER_PATHNAME}>
              <Button type="link" block>
                没有账户，请注册
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
