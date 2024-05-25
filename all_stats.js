const allStats = canvas.tokens.controlled[0].actor.system.statSecondaire
let html = `
<table>
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    `;

for (const [key, obj] of Object.entries(allStats)) {
    html += `
    <tr>
        <td>${key}</td>
        <td>${obj.value}</td>
    </tr>
`;
}

html += `
    </tbody>
</table>
`;
new Dialog({
  title: "Stats",
  content: html,
  buttons: {
      button1: {
          label: "Close",
          icon: `<i class="fas fa-check"></i>`
      },
  }
}).render(true);
