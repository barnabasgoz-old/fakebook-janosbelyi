import type { NextPage } from 'next'
import Nav from '../components/nav'
import SavePass from '../components/savePass'
import ProfilePicChange from '../components/profilePicChange'
import Groups from '../components/groups'
import Pages from '../components/pages'
import Games from '../components/games'
import MiJarAFejedben from '../components/whatisinyourhead'
import EskuvoUtan from '../components/eskuvoutan'
import JogiDolgok from '../components/jogidolgok'

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
          <MiJarAFejedben />
          <ProfilePicChange />
          <EskuvoUtan />
        </div>
        <div className="w-1/2 min-h-screen overflow-hidden">
          <Games />
          <JogiDolgok />
        </div>
      </div>
      
    </>
  )
}

export default Home
