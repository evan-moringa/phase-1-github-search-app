// //Fteching data from server
// fetch(`https://api.github.com/search/users?q=octocat/${id}`)
// .then(response => response.json())
// .then(data => {

//     console.log(data)
//     displayAccounts(data)
// });

//display accounts
fetch("https://api.github.com/search")
.then(res => res.json)
.then( data => {
    console.log(data)
    
})
                     

 function searchGitHub(data) {
    const searchQuery = document.getElementById("searchInput").value;

    if (searchQuery.trim() === "") {
        alert("Please enter a search query");
        return;
    }

    try {
        const response =  fetch(`${user_url}/repositories?q=${searchQuery}`);
        const data = response.json();
        
        displayResults(data.items);
    } catch (error) {
        console.error("Error:", error);
    }
}

function displayResults(items) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (items.length === 0) {
        resultsDiv.innerHTML = "<p>No results found.</p>";
        return;
    }

    const list = document.createElement("ul");
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="${item.html_url}" target="_blank">${item.name}</a>`;
        list.appendChild(listItem);
    });

    resultsDiv.appendChild(list);
}




