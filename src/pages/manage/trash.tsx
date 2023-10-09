import { FC, useState } from 'react'
import { Question } from '../../components/questionCard'
import { Typography, Table, Button, Space, Modal } from 'antd'
import styles from '../../assets/list.module.scss'
import type { ColumnsType } from 'antd/es/table'
import ListSearch from '../../components/listSearch'

const { Title } = Typography

const Trash: FC = () => {
  const [modal, contextHolder] = Modal.useModal()

  const [list] = useState<Question[]>(() => {
    const list = []
    for (let i = 1; i < 3; i++) {
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

  const [selectedIds, setSelectedIds] = useState<React.Key[]>([])

  const columns: ColumnsType<Question> = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render(isPublished: boolean) {
        return isPublished ? '是' : '否'
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ]

  function deleteQuestion() {
    modal.confirm({
      title: '提示',
      content: '确定要删除吗？',
      okText: '确定',
      cancelText: '取消',
    })
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>

      <div className={styles.content}>
        <Space style={{ marginBottom: '10px' }}>
          <Button type="primary" disabled={selectedIds.length === 0}>
            回复
          </Button>
          <Button
            danger
            type="primary"
            disabled={selectedIds.length === 0}
            onClick={deleteQuestion}
          >
            删除
          </Button>
        </Space>
        <Table
          dataSource={list}
          columns={columns}
          rowKey="_id"
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedRowKeys: React.Key[]) => {
              console.log(selectedRowKeys)
              setSelectedIds(selectedRowKeys)
            },
          }}
        />
      </div>
      {contextHolder}
    </>
  )
}

export default Trash
