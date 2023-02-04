import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App() {
  return(
    <div className='App'>
      <TwitterFollowCard userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard initialIsFollowing = {true} userName="RickyEdit">
        ricky
      </TwitterFollowCard>
      <TwitterFollowCard userName="InfoJobs">
        InfoJobs
      </TwitterFollowCard>
    </div>
    )
}

