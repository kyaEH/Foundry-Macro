const myContent = `
<div class="my-class">
  <h3>Parade</h3>${canvas.tokens.controlled[0].actor.system.statSecondaire.parade.value} <br>
  <h3>Résistance Magique</h3> ${canvas.tokens.controlled[0].actor.system.statSecondaire.RM.value} <br>
  <br>
  <textarea></textarea>
</div>
<br>
`;
new Dialog({
  title: "Résistances",
  content: myContent,
  buttons: {button1: {
      label: "Fermer",
      icon: `<i class="fas fa-check"></i>`
    },}
}).render(true);
