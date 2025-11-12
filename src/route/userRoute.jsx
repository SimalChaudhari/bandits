import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components'
import Home from '../pages/home'
import Vault from '../pages/vault'
import Crew from '../pages/crew'
import CompensationPlan from '../pages/compensationPlan'

function UserRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vault" element={<Vault />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/compensation-plan" element={<CompensationPlan />} />  
      </Routes>
    </Layout>
  )
}

export default UserRoutes
