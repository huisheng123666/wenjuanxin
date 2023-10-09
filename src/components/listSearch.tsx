import { FC, useCallback, useState } from 'react'
import { Input } from 'antd'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const { Search } = Input

const ListSearch: FC = () => {
  const [searchParams] = useSearchParams()

  const [value, setValue] = useState(searchParams.get('keyword') || '')

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const changeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value)
    },
    []
  )

  function handleSearch(value: string) {
    navigate(
      {
        pathname,
        search: `?keyword=${value}`,
      },
      {
        replace: true,
      }
    )
  }

  return (
    <Search
      onSearch={handleSearch}
      style={{ width: '260px' }}
      onChange={changeValue}
      value={value}
      allowClear
    />
  )
}

export default ListSearch
