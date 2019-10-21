var books = [];
function addBook() {
	book = { title: "Title", author: "Author", pages: 0, status: "none" };
	book.title = $("#title").val();
	book.author = $("#author").val();
	book.pages = $("#pages").val();
	book.status = $("#status").val();
	books.push(book);
	closeModal("#modalCadastro");
}
function closeModal(id) {
	$(id).modal('hide');
}
function showBooks() {
	clearBooks();
	for (let i = 0; i < books.length; i++) {
		title = "<td>" + books[i].title + "</td>";
		author = "<td>" + books[i].author + "</td>";
		pages = "<td>" + books[i].pages + "</td>";
		if (books[i].status == "unread"){
			status = "<td>" + "<button type=\"button\" class=\"btn btn-dark\" onclick=\"read('"+books[i].title+"')\"> Read</button>";
		}else{
			status = "<td>" + "<button type=\"button\" class=\"btn btn-dark\" onclick=\"read('"+books[i].title+"')\" disabled> Had read</button>";
		}
		//status = "<td>" + books[i].status + "</td>";
		button = "<td>" + "<button type=\"button\" class=\"btn btn-dark\" onclick=\"remove('"+books[i].title+"')\"> Remove</button>";
		$("#tablebody").append("<tr>" + title + author + pages + status + button + "</tr>");
	}
}
function clearBooks() {
	$("#tablebody").empty();
}
function remove(title) {
	for ( let i = 0; i < books.length; i++) {
		if (books[i].title == title) {
			books.splice(i,1);
		}
	}
	showBooks();
}
function read(title){
	for ( let i = 0; i<books.length;i++){
		if (books[i].title == title){
			books[i].status = "read";
		}
	}
	showBooks();
}
function clearBooksFilter(){
	$("#tablebody_filter").empty();
}
function filter(){
	input = $("#dataFilter").val().toLowerCase();
	clearBooksFilter();
	for (let i = 0; i<books.length;i++){
		string_geral = books[i].title + books[i].author + books[i].pages + books[i].status;
		title = "<td>" + books[i].title + "</td>";
		author = "<td>" + books[i].author + "</td>";
		pages = "<td>" + books[i].pages + "</td>";
		status = "<td>" + books[i].status + "</td>";
		if (string_geral.toLowerCase().includes(input) || input == ""){
			$("#tablebody_filter").append("<tr>" + title + author + pages + status + "</tr>");
		}
	}
}