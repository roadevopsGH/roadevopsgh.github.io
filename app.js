fetch(`data.json?v=${$Date.now()}`)
.then(response => response.json())
.then(items =>{
	const container = document.getElementById("helpTopics");
	container.innerHTML = items.map(item => `
	<article class="help-card")>
	<span class="badge">${item.category}</span>
        <h2>${item.issue}</h2>
        <ul>
          ${item.message.map(line => `<li>${line}</li>`).join("")}
        </ul>
      </article>
    `).join("");
});
