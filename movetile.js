// GET THE DOCUMENT ID OF THE TILE
// EX: Scene.fAITj8cz6FjK9DFT.Tile.7i2lZ3mEdCpbGmCu
// Then, take only the last part
await canvas.tiles.get("7i2lZ3mEdCpbGmCu").document.update({x: 500,y: 500})
