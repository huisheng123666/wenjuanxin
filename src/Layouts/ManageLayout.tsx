import { FC } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import styles from './manageLayout.module.scss'
import { Button, Space, Divider } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'

const ManageLayout: FC = () => {
  const { pathname } = useLocation()

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            新建问卷
          </Button>
          <Divider />
          <Link to={'list'}>
            <Button
              type={pathname.startsWith('/manage/list') ? 'text' : 'link'}
              icon={<BarsOutlined />}
              size="large"
            >
              我的问卷
            </Button>
          </Link>
          <Link to={'star'}>
            <Button
              type={pathname.startsWith('/manage/star') ? 'text' : 'link'}
              icon={<StarOutlined />}
              size="large"
            >
              星标问题
            </Button>
          </Link>
          <Link to={'trash'}>
            <Button
              icon={<DeleteOutlined />}
              size="large"
              type={pathname.startsWith('/manage/trash') ? 'text' : 'link'}
            >
              回收站
            </Button>
          </Link>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
