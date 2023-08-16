import { FC } from 'react'
import styles from '../assets/questionCard.module.scss'

export interface Question {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

export const QuestionCard: FC<Question> = question => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{question.title}</a>
        </div>
        <div className={styles.right}>
          {question.isPublished ? (
            <span style={{ color: 'green' }}>已发布 </span>
          ) : (
            <span>未发布 </span>
          )}
          <span>答卷：{question.answerCount} </span>
          <span>{question.createdAt}</span>
        </div>
      </div>
      <div className={styles['button-container']}>
        <div className="left">
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className="right">
          <button>标星</button>
          <button>复制</button>
          <button>删除</button>
        </div>
      </div>
    </div>
  )
}
