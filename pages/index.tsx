import type { NextPage } from 'next'
import Nav from '../components/nav'
import SavePass from '../components/savePass'
import ProfilePicChange from '../components/profilePicChange'
import Groups from '../components/groups'
import Pages from '../components/pages'
import Games from '../components/games'

const Home: NextPage = () => {
  return (
    <>
      <Nav></Nav>
      <div className="flex w-full h-auto justify-evenly gap-1 overflow-hidden pt-12">
        <div className="w-1/2 h-auto overflow-hidden">
          <Groups />
          <Pages />
        </div>
        <div className="w-full min-h-screen pt-2 overflow-scroll">
          <SavePass />
          <ProfilePicChange />
        </div>
        <div className="w-1/2 min-h-screen overflow-hidden">
          <Games />
        </div>
      </div>
      
    </>
  )
}

export default Home
