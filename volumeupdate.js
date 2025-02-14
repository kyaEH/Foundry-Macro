//update the volume of all the music, and also the fade. You can remove either fade or volume if you want to keep one
for(const pl of game.playlists) {
  const updates = pl.sounds.map(s => ({_id:s.id, fade: 1000, volume:0.05})); 
  await pl.updateEmbeddedDocuments("PlaylistSound", updates);
}
