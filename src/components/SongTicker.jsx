import { MusicIcon } from "./icons/MusicIcon";
import Marquee from "react-fast-marquee"

export default function SongTicker({ songTitle }) {
  return (
    <div className="song-ticker">
      <MusicIcon />
      <Marquee gradient={false} className="song-title">{songTitle}</Marquee>
    </div>
  )
}