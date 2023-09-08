import { Button, Result } from 'antd'
import { FC } from 'react'

const NotFound: FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <a href="/">
          <Button type="primary">Back Home</Button>
        </a>
      }
    />
  )
}

export default NotFound
