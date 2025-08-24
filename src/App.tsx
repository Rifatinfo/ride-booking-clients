
import { Outlet } from 'react-router'
import './App.css'
import CommonLayout from './components/ui/layout/CommonLayout'

function App() {

  return (
    <>
      <CommonLayout>
        <Outlet />
      </CommonLayout>
    </>
  )
}

export default App
