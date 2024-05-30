import { Comment } from "./icons/Comment";
import { Heart } from "./icons/Heart";
import { Share } from "./icons/Share";

export default function VideoPlayerActions({ likes, shares, comments }) {
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