/* eslint-disable @typescript-eslint/no-explicit-any */



const Books = (book: any, ) => {
console.log(book)
    return (
       <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table table-xl">
    
    <tbody>
      <tr>
        {/* <td>{index + 1}</td> */}
        <td>{book.book.title}</td>
        <td>{book.book.author}</td>
        <td>{book.book.ISBN}</td>
        <td>{book.book.Genre}</td>
        <td>{book.book.Copies}</td>
        <td>{book.book.Availability}</td>
        <td>{book.book.Actions}</td>
      </tr>
     </tbody>
     
  </table>

 
</div>
    );
};

export default Books;