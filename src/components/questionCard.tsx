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
      <div>{question.title}</div>
      <div></div>
    </div>
  )
}
