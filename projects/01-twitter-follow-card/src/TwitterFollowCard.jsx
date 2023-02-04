import { useState } from 'react'

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
  ? 'tw-followCard-follow is-following'
  : 'tw-followCard-follow'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
   return(

    <article className="tw-followCard">
      <a href = {`https://www.twitter.com/${userName}`} target="_blank" rel="noopener noreferrer">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Profile Photo" />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-name">{children}</strong>
          <span
          className="tw-followCard-infoUser">@{userName}</span>
        </div>
      </header>
      </a>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followcard-text'>{text}</span>
          <span className='tw-followCard-unfollow'>Dejar de seguir</span>

        </button>
      </aside>
    </article>
   )
}