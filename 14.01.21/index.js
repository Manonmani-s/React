
/**
 * create a class named Book
 * constructor
 * build below props :
 * title , author, isbn
 * method change(key, value)
 */

 /**
 * create a class named BookList
 * constructor
 * build below props :
 * books // (meant to contain elemnts from Type Book)
 * methods :
 * addBookToList(book)
 * deleteBook(isbn)
 * 
 */

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    
    change(key, value) {
        this[key] = value;
    }
}

// let book1 = new Book('js', 'gabor', 12385);

// book1.change('title', 'php');
// console.log(book1['title']);

class BookList {
    /**
     * 
     * @param {Book[]} array 
     */
    constructor(array) {
        this.books = Array.from(array);
    }

    addBookToList(book) {
        let index = this.books.findIndex(item => item.isbn == book.isbn);

        if (index < 0) {
            this.books.push(book);
            return {
                msg: `The Book Added Successfully`,
                flag: true
            };
        }
        return {
            msg: `The Book Already Exist`,
            flag: false
        };
    }

    deleteBook(isbn) {
        let index = this.books.findIndex(item => item.isbn == isbn);
        if (index < 0) {
            
            return {
                msg: `The Book is not in the list`,
                flag: false
            };
        }
        this.books.splice(index, 1);
        return {
            msg: `The Book deleted Successfully`,
            flag: true
        };
    }
}

/**
 * Create a class called UI
 * no props
 * two methods :
 * add a row (to the table in your html)
 * delete a row (from the table in your html)
 */

class UI{
    /**
     * 
     * @param {BookList} bookList 
     */
    addBooktoUI(book) {
        const tableBody = document.getElementById('book-list');
        // tableBody.innerHTML = ``;
        // bookList.books.forEach(book => {
            tableBody.innerHTML += `
            <tr id = '${book.isbn}'>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
        </tr>`;
        // });
    }
    /**
     * 
     * @param {HTMLElement} element 
     */
    removeBook(element) {
        element.remove();
    }
}
 
/**
 * please handle onclick Event of the submit button
 * in html file, please add to the button onclick='addBook()'
 * in the js file , define addBook() function
 * bring the value of the inputs
 * create book instance from Book with the values (title , author , isbn)
 * add the Book to the Book list 
 * define a ui instance from UI
 * use ui.addBooktoUI(book)
 */


addBook = e => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;
    let book = new Book(title, author, isbn);
    
    let list = new BookList([]);
    list.addBookToList(book);
    console.log(list);

    let ui = new UI();
    ui.addBooktoUI(book);


}