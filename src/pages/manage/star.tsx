import { FC, useState } from 'react'
import { Question, QuestionCard } from '../../components/questionCard'
import { Empty, Typography } from 'antd'
import styles from '../../assets/list.module.scss'

const { Title } = Typography

const Star: FC = () => {
  const [list] = useState<Question[]>(() => {
    const list = []
    for (let i = 1; i < 1; i++) {
      list.push({
        _id: i.toString(),
        title: '问卷标题' + i,
        isPublished: true,
        isStar: true,
        answerCount: 10,
        createdAt: '2021-07-0' + i,
      })
    }
    return list
  })

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>

      <div className={styles.content}>
        {list.map(item => (
          <QuestionCard key={item._id} {...item} />
        ))}
      </div>
      {list.length !== 0 ? '' : <Empty />}
      {list.length ? <div className={styles.footer}>分页</div> : ''}
    </>
  )
}

export default Star
