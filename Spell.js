const spellUuid = ""; // UUID of the spell from the Actor inventory


const actor = canvas.tokens.controlled[0].actor;
const item = await fromUuid(spellUuid);
const speaker = ChatMessage.getSpeaker({ actor: actor});
const rollMode = game.settings.get('core', 'rollMode');
const label = `[${item.type}] ${item.name}`;
ChatMessage.create({
        speaker: speaker,
        rollMode: rollMode,
        flavor: label,
        content: item.system.description ?? '',
});

// Remove automatically the power of the Actor, edit this if your system have a differente Power configuration
if(item.system.power) {
        const power = actor.system.power.value;
        const cost = item.system.power;
        const newpower = power - cost;
        actor.update({'system.power.value': newpower})
}

// You can add a sequencer effect here
/* EXEMPLE
new Sequence()
.effect()
    .file("modules/JB2A_DnD5e/Library/Generic/UI/Critical_03_Red_200x200.webm")
    .atLocation(canvas.tokens.controlled[0])
    .scaleToObject(3)
    .fadeIn(1500, {ease: "easeOutCubic", delay: 0})
    .scaleIn(2, 2500, {ease: "easeInOutCubic"})
    .scaleOut(0, 1500, {ease: "easeInCubic"})
.play()
*/
