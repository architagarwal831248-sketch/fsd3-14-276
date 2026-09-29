const b1 = {
  oicurl: "https://m.media-amazon.com/images/I/518+W2zr3BL._SY385_.jpg",
  bname:"React Design Pattwern",
  price:1199,
  quantity: 10,
  rating: 5.0,
};


function Book(){
  return(
    <div>
      <img src = " https://m.media-amazon.com/images/I/518+W2zr3BL._SY385_.jpg" alt = "design pattern react js"/>
      <h1>Let us React</h1>
      <h2>Price:765.00</h2>
      <h3>Quantity:5</h3>
    </div>
  );
}



export default function App(){
   return (
    <>
    <Book/>
   <h1>Hello React</h1>
   <Book/>
   </>
   );
}