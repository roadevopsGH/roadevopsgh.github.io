let helpData = [];

fetch(`data.json?v=${Date.now()}`)
.then(response => response.json())
.then(items =>{
    helpData = items;
	renderCards(helpData);
});

function renderCards(items){
	const container = document.getElementById("helpTopics");
	container.innerHTML = items.map((item, index) => `
	    <article class="help-card")>
	    <span class="badge">${item.category}</span>
        <h2>${item.issue}</h2>
        <ul>
          <div class="message-${index}">
		  	${item.message.join("<br>")}
		  </div>
		  
		  <button class=""copy-btn" onclick="copyMessage(${index}")>Copy Message</button>
		  
		  <
        </ul>
      </article>
    `).join("");
}

document.getElementById("searchBox").addEventListener("input", event => {
	const searchTerm = event.target.value.toLowerCase();

	const filteredItems = helpData.filter(item => {
		return(
			item.issue.toLowerCase().includes(searchTerm) ||
			item.category.toLowerCase().includes(searchTerm) ||
			item.message.join(" ").toLowerCase().includes(searchTerm)
		);
	});
	renderCards(filteredItems);
});

/*One Click Copy Added 061126*/
function copyMessage(index){
	const messageText = document.getElementById(`message-${index}`).innerText;
	navigator.clipboard.writeText(messageText).then(() => {
		alert("message copied!");
	});
}
