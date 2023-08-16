import { FC, useState } from 'react'
import styles from '../../assets/list.module.scss'
import { Question, QuestionCard } from '../../components/questionCard'
import { useTitle } from 'ahooks'

export const ListQuestion: FC = () => {
  useTitle('X问卷 - 我的问卷')

  const [list] = useState<Question[]>(() => {
    const list = []
    for (let i = 1; i < 10; i++) {
      list.push({
        _id: i.toString(),
        title: '问卷标题' + i,
        isPublished: i % 2 === 0,
        isStar: false,
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
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div>

      <div className={styles.content}>
        {list.map(item => (
          <QuestionCard key={item._id} {...item} />
        ))}
      </div>
      <div className={styles.footer}>list footer</div>
    </>
  )
}