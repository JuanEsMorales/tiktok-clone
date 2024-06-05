import AlbumDisk from "./AlbumDisk";
import SongTicker from "./SongTicker";

export default function VideoDescription({ username = '@juan', description = 'This is a video description', avatar = 'https://github.com/JuanEsMorales.png', songTitle = 'song title' }) {
  return (
    <footer>
      <div style={{ maxWidth: '275px' }}>
        <strong className="author">@{username}</strong>
        <p className="description-text">{description}</p>
        <SongTicker songTitle={songTitle} />
      </div>
      <div>
        <AlbumDisk avatar={avatar} />
      </div>
    </footer>
  )
}