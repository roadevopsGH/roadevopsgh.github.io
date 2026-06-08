/*This function shows the popup menu from the menu logo in
the toolbar.  When a mouse hovers over the icon, it displays
the menu.  When a mouse clicks on the icon again, it closes
the menu.  When you are hovering over the div containing the
menu, it will stay visible. when you click on one of the elements
it will dissappear again.*/
function openHomeMenu(){
    var x = document.getElementById("toolbar-dropdown");
    if (x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
  }
}
fetch("issues.json")
	.then(response => response.json())
	.then(data => displayIssues(data));
function displayIssues(issues){
	const container = document.getElementById("issues");
	issues.forEach(issue => {
		const card = document.createElement("div");
		card.className = "card";
		card.innerHTML = `
		<h3>${issue.title}</h3>
		<h3>${issue.severity}</h3>
		<h3>${issue.action}</h3>
		`;
	container.appendChild(card);
	});
}
searchBox.addEventListner("input", () => {
	const term = searchBox.value.toLowerCase();
	const filtered = issues.filter(issue =>
		issue.title.toLowerCase().includes(term)
		);
	displayIssues(filtered);
});
