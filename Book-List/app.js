// Book Constructer
function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
// UI Constructer
function UI(){}

// Add Book To List
UI.prototype.addBookToList=function(book){
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
// Show Alert
UI.prototype.showAlert=function(message,className){
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
// Delete Book
UI.prototype.deleteBook=function(target)
{
    if(target.className==='delete')
    {
        target.parentElement.parentElement.remove();
    }
}
// Clear Fields
UI.prototype.clearFields=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}
// Event Listener For Add Book
document.getElementById('book-form').addEventListener('submit',
function (e) {
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
    ui.showAlert('Book Removed!','succes');
    e.preventDefault();
});