import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../components/admin/layout/layout'
import Dashboard from '../pages/admin/dashboard'
import NewDrop from '../pages/admin/newDrop'
import CrewNetwork from '../pages/admin/crewNetwork'
import SalesEarnings from '../pages/admin/salesEarnings'
import Training from '../pages/admin/training'
import Profile from '../pages/admin/profile'
import TrainingPlaybackPage from '../pages/admin/training/player'

function AdminRoutes() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="new-drops" element={<NewDrop />} />
        <Route path="network-tree" element={<CrewNetwork />} />
        <Route path="sales-earnings" element={<SalesEarnings />} />
        <Route path="training" element={<Training />} />
        <Route path="training/playback" element={<TrainingPlaybackPage />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </AdminLayout>
  )
}

export default AdminRoutes
