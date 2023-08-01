import './App.css'
import { useTitle } from 'ahooks'
import { ListQuestion } from './pages/listQuestion'

function App() {
  useTitle('app Page')

  return (
    <>
      <ListQuestion />
    </>
  )
}

export default App
