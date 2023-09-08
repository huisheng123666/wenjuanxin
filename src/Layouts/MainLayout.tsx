import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'
import styles from './mainLayout.module.scss'
import { ForkOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import UserInfo from '../components/userInfo'

const { Header, Footer, Content } = Layout

const { Title } = Typography

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Link to="/">
            <div className={styles.logo}>
              <Space>
                <Title>
                  <ForkOutlined />
                </Title>
                <Title>X问卷</Title>
              </Space>
            </div>
          </Link>
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>X问卷 &copy;2023 - present by xmw</Footer>
    </Layout>
  )
}

export default MainLayout
