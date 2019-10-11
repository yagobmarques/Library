var books = [];
function addBook(){
	book = {title: "Title",  author: "Author", pages: 0,status: "none"};
	book.title = $("#title").val();
	book.author = $("#author").val();
	book.pages = $("#pages").val();
	book.status = $("#status").val();
	books.push(book);
	closeModal("#modalCadastro");
}
function closeModal(id){
	$(id).modal('hide');
}
function showBooks(){
	clearBooks();
	for (i = 0; i<books.length; i++){
		title = "<td>" +books[i].title + "</td>";
		author = "<td>" +books[i].author + "</td>";
		pages = "<td>" +books[i].pages + "</td>";
		status = "<td>" +books[i].status + "</td>";
		button = "<td>" + "<button type=\"button\" class=\"btn btn-dark\" onclick=\"remove()\" value=\""+books[i].title+"\"> Remove</button>"; 
		$("#tablebody").append("<tr>"+title+author+pages+status+button+"</tr>");
	}
}
function clearBooks(){
	$("#tablebody").empty();
}
