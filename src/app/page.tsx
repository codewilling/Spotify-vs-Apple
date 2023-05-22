import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col items-center">
        <h1>Spotify vs Apple</h1>
        <p>convert playlists between spotify and apple</p>
      </div>

      <div className="my-16">
        <h2>Link to playlist</h2>
        <input className="rounded-md"></input>
      </div>
      
      <div>

      </div>
    </main>
  );
}
