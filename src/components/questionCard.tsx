import { FC } from 'react'
import styles from '../assets/questionCard.module.scss'
import { Button, Divider, Space, Tag, Modal, message } from 'antd'
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'

export interface Question {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

export const QuestionCard: FC<Question> = question => {
  const nav = useNavigate()

  const [modal, contextHolder] = Modal.useModal()

  function duplicate() {
    modal.confirm({
      title: '提示',
      content: '确定要复制吗？',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        message.success('复制成功')
      },
    })
  }

  function deleteQuestion() {
    modal.confirm({
      title: '提示',
      content: '确定要删除吗？',
      okText: '确定',
      cancelText: '取消',
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={
              question.isPublished
                ? `/question/stat/${question._id}`
                : `/question/edit/${question._id}`
            }
          >
            <Space>
              {question.title}
              {question.isStar ? <StarOutlined style={{ color: '#ffc107' }} /> : ''}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            <Tag color={question.isPublished ? 'processing' : ''}>
              {question.isPublished ? '已发布' : '未发布'}
            </Tag>
            <span>答卷：{question.answerCount} </span>
            <span>{question.createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider />
      <div className={styles['button-container']}>
        <div className="left">
          <Space>
            <Button
              onClick={() => nav('/question/edit/' + question._id)}
              icon={<EditOutlined />}
              type="text"
              size="small"
            >
              编辑问卷
            </Button>
            <Button
              onClick={() => nav('/question/stat/' + question._id)}
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              disabled={!question.isPublished}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className="right">
          <Space>
            <Button type="text" icon={<StarOutlined />} size="small">
              {question.isStar ? '取消标星' : '标星'}
            </Button>
            <Button type="text" icon={<CopyOutlined />} size="small" onClick={duplicate}>
              复制
            </Button>
            <Button type="text" icon={<DeleteOutlined />} size="small" onClick={deleteQuestion}>
              删除
            </Button>
          </Space>
        </div>
      </div>
      {contextHolder}
    </div>
  )
}
