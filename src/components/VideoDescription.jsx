import AlbumDisk from "./AlbumDisk";
import SongTicker from "./SongTicker";

export default function VideoDescription({ author = '@juan', description = 'This is a video description', albumImage = 'https://github.com/JuanEsMorales.png', songTitle = 'song title' }) {
  return (
    <footer>
      <div style={{ maxWidth: '275px' }}>
        <strong className="author">@{author}</strong>
        <p className="description-text">{description}</p>
        <SongTicker songTitle={songTitle} />
      </div>
      <div>
        <AlbumDisk albumImage={albumImage} />
      </div>
    </footer>
  )
}