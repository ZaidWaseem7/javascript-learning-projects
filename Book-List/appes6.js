class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }
}
class UI{

    addBookToList(book){
        const list=document.getElementById('Book-list');
        // Create TR Element
        const row=document.createElement('tr');
        // Insert Elements IN List
        row.innerHTML=
        `   <td>${book.title}</td>
           <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X<a></td>`;
            list.appendChild(row);
    }
    showAlert(message,className){
        // Create Div
        const div=document.createElement('div');
        // Add Class
        div.className=`alert ${className}`;
        // Add Text
        div.appendChild(document.createTextNode(message));
        // Get A Parent
        const container=document.querySelector('.container');
        // Get a Form
        const form=document.querySelector('#book-form');
        // Insert Alert
        container.insertBefore(div,form);
        // Dissaappear after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove()
        },3000)
    }
    deleteBook(target){
        if(target.className==='delete')
        {
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}}
// LOcal Storage
class Store{
    static getBooks(){
        let books;
        if (localStorage.getItem('books')===null) {
            books=[];
        }else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static displayBooks(){
        const books=Store.getBooks();
        books.forEach(function(book){
            const ui=new UI;
            ui.addBookToList(book);
        });
    }
    static addBooks(book){
        const books=Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
    static removeBook(isbn){
        const books=Store.getBooks();
        books.forEach(function(book,index){
            if(isbn.book===isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }

}
// DOM load event
document.addEventListener('DOMContentLoaded',Store.displayBooks);


document.getElementById('book-form').addEventListener('submit',
function(e){

    // Get Form Values
    const title=document.getElementById('title').value,
          author=document.getElementById('author').value,
          isbn=document.getElementById('isbn').value;

    //   Instatiate a Book
    const book=new Book(title,author,isbn);
    // Instatiate UI
    const ui=new UI();
    if (title===''||author===''||isbn===''){
        // Error Alert
        ui.showAlert('Please Fill in All Fields','error')
    }else{
    // Add Book To List
    ui.addBookToList(book);
    // Show Success
    ui.showAlert('Book Added!','succes')
    // Clear Fields
    ui.clearFields();
    }
   e.preventDefault(); 
});
document.getElementById('Book-list').addEventListener('click',
function(e){
    // Instatiate UI
    const ui=new UI();
    ui.deleteBook(e.target);
    // remove book from Ls
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    ui.showAlert('Book Removed!','succes');
    e.preventDefault();
});