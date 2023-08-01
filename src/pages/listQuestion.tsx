import { FC, Key, useState } from 'react'
import styles from '../assets/list.module.scss'
import { QuestionCard } from '../components/questionCard'

export const ListQuestion: FC = () => {
  const [list, setList] = useState(() => {
    const list = []
    for (let i = 1; i < 10; i++) {
      list.push({
        id: i,
        title: '问卷标题' + i,
        isPublished: false,
        isStar: false,
        answerCount: 10,
        createAt: '2021-07-0' + i,
      })
    }
    return list
  })

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div>

      <div className={styles.content}>
        {list.map(item => (
          <QuestionCard key={item.id} />
        ))}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  )
}