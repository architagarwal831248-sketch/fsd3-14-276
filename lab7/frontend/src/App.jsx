import Book from "./components/Book";
import Event from "./components/Event";
import Fruit from "./components/Fruit";
import Pen from "./components/Pen";
import { books } from "./data/Books";
import { pens } from "./data/Pens";


const MyButton = ()=>{
  let count = 1;
  const handleSubmit = () => {
    alert("button clicked");
    console.log('button clicked',count);
    count++
  };
  return (
    <button classname="bg-black text-white 
    text-xl rounded-md 
    m-4 px-2 py-2" onClick={handleSubmit}>clicked {count} times
    </button>
  );
};

export default function App() {
  return (
    <>
    <MyButton/>
    </>
  );
}
