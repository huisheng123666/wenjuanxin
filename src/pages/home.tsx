import { FC } from 'react'
import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MANAGE_INDEX_PATHNAME } from '../router'
import styles from '../assets/home.module.scss'

const { Title, Paragraph } = Typography

const Home: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.home}>
      <Title>问卷调查 ｜ 在线投票</Title>
      <Paragraph>已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份</Paragraph>
      <Button
        type="primary"
        size="large"
        onClick={() => {
          navigate(MANAGE_INDEX_PATHNAME)
        }}
      >
        开始使用
      </Button>
    </div>
  )
}

export default Home
