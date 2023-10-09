import { UserAddOutlined } from '@ant-design/icons'
import { Space, Typography, Form, Input, Button } from 'antd'
import { FC } from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../../router'

const { Title } = Typography

const Register: FC = () => {
  const onFinished = (values: any) => {
    console.log(values)
  }

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>注册</Title>
        </Space>
      </div>

      <div>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinished}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              { type: 'string', min: 5, max: 20 },
              { pattern: /^\w+$/, message: '只能说字母数字下划线' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="confirm"
            dependencies={['password']}
            rules={[
              { required: true, message: '请输入密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject('两次输入密码不一致')
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="昵称" name="nickname">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Button type="primary" block htmlType="submit">
              注册
            </Button>
            <Link to={LOGIN_PATHNAME}>
              <Button type="link" block>
                已有账户，请登录
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register
