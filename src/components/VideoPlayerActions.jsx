import { Comment } from "./icons/Comment";
import { Heart } from "./icons/Heart";
import PlusIcon from "./icons/Plus";
import { Share } from "./icons/Share";

export default function VideoPlayerActions({ likes, shares, comments, avatar, username }) {
  const handleLike = () => {
    alert('Like')
  }
  const handleShare = () => {
    alert('Share')
  }
  const handleComment = () => {
    alert('Comment')
  }

  return (
    <aside className="actions">
      <button className="action" style={{ position: 'relative', marginBottom: '15px'}}>
        <img className="avatar" src={avatar} alt={username} />
        <PlusIcon />
      </button>
      <button className="action" onClick={handleLike}>
        <Heart />
        <span title="Likes">{likes}</span>
      </button>
      <button className="action" onClick={handleShare}>
        <Share />
        <span title="Shares">{shares}</span>
      </button>
      <button className="action" onClick={handleComment}>
        <Comment />
        <span title="Comments">{comments}</span>
      </button>
    </aside>
  )
}