export function TracksList({ tracksList }: { tracksList: Track[] }) {
  return (
    <ul>
      {tracksList.map((track, index) => (
        <p>
          {track.songTitle} - {track.artist}
        </p>
      ))}
    </ul>
  );
}
