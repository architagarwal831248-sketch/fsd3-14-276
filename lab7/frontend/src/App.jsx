import Book from "./components/Book";
import Event from "./components/Event";
import Fruit from "./components/Fruit";
import Pen from "./components/Pen";
import { books } from "./data/Books";
import { pens } from "./data/Pens";


export default function App() {
  return (
    <>
      <h1>Online Book Store</h1>
      <div className="container">
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Pen pen={pens[0]} />
        <Pen pen={pens[1]} />
        <Fruit/>
        <Event/>
      </div>
    </>
  );
}