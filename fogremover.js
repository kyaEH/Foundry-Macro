// this will create a global light to disable fog of war exploration for the player, but keep the vision system with shadow (remove unexplored area) 
const dimensions = canvas.scene.dimensions
let [created_light] = await canvas.scene.createEmbeddedDocuments('AmbientLight', [{'config.dim': dimensions.maxR, vision: true, walls: false, x: dimensions.width/2, y: dimensions.height/2}])
await new Promise(r => setTimeout(r, 100));
await created_light.update({hidden: true})
await created_light.delete()
