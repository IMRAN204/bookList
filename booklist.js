const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");


btn.addEventListener('click', function(e){
    e.preventDefault();

    if(title.value == "" && author.value == "" && year.value == ""){
        alert("Kindly fill up the form");
    }
    else{

        const newRow = document.createElement("tr");

        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value;

        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = author.value;

        const newYear = document.createElement("th");
        newYear.innerHTML = year.value;
        
        newRow.appendChild(newTitle);
        newRow.appendChild(newAuthor);
        newRow.appendChild(newYear);

        bookList.appendChild(newRow);



    }

})