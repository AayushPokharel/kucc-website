import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import { useSigninCheck } from 'reactfire'

import ExCommunityPage from './pages/teams/ExCommunity'
import AdvBoardPage from './pages/teams/AdvBoard'
import DocTeamPage from './pages/teams/DocTeam'
import CommunityCoPage from './pages/teams/CommunityCo'
import CodeOfConductPage from './pages/CodeOfConductPage'
import ContactPage from './pages/ContactPage'
import RegisterPage from './pages/member/RegisterPage'
import NewsNoticePage from './pages/newsAndNotices/NewsNoticePage'
import EventsPage from './pages/events/EventsPage'
import ItExpressPage from './pages/publications/ItExpressPage'
import StudentBlog from './components/StudentBlog'
import BlogPage from './components/BlogPage'
import HomePage from './pages/homePage/homePage'

const PrivateRoute = () => {
  const { status, data: signInCheckResult } = useSigninCheck()

  if (status === 'loading') {
    return <h6>Loading</h6>
  }
  return signInCheckResult.signedIn ? <Outlet /> : <Navigate to="/signin" />
}

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="advisory-board" element={<AdvBoardPage />} />
      <Route path="executive-committee" element={<ExCommunityPage />} />
      <Route path="community-coordinators" element={<CommunityCoPage />} />
      <Route path="documentation-teams" element={<DocTeamPage />} />
      <Route path="code-of-conduct" element={<CodeOfConductPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="events" element={<EventsPage />} />
      <Route path="it-express" element={<ItExpressPage />} />
      <Route path="news-and-notices" element={<NewsNoticePage />} />
      <Route path="blogs" element={<StudentBlog />} />
      <Route path="blog/:id" element={<BlogPage />} />
    </Routes>
  )
}

export default Routers
