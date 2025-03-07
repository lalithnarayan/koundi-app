import { useMusic } from "@/context/MusicContext";

const AdminPanel = () => {
  const { addSong } = useMusic();

  const handleAddSong = () => {
    const newSong = { id: Date.now(), title: "New Song", artist: "Unknown", genre: "Pop" };
    addSong(newSong);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
};

export default AdminPanel;
