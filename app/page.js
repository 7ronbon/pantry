// do " npm run dev " to local host
// control c to stop running local host
// https://console.firebase.google.com/u/0/project/expense-tracker-ad886/firestore/databases/-default-/data

'use client'
import React, { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  deleteDoc, 
  doc } from "firebase/firestore";
import {db} from './firebase';
import { Box, Container, FormControl, InputLabel, Typography, Input } from "@mui/material";
//import { App } from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

// UI stuff here

const theme = createTheme( { 
  palette: {
    primary: { main: "#fff" },
    secondary: { main: "#000" },
  },
  typography: {
    h1: { fontSize:"3rem", fontWeight:500},
    h2: { fontSize:"2rem", fontWeight:400},
    h3: { fontSize:"1rem", fontWeight:300},
  },
});

function App() {
  return (
  <Container sx = {{ bgcolor:"pink", textDecorationColor: 'blue'}}>
    <Box display="flex">
      <typography varient="h1">BLAH</typography>
    </Box>
  </Container>
  )
} 
export default App;

// END UI stuff



// export default function Home() {
//   const [ items, setItems ] = useState([
//   ]);
  
//   const [ newItem, setNewItem ] = useState( {name: '', amt:'', cost:''})
//   const [ total, setTotal ] = useState(0)

//   // add items to database
//   const addItem = async (e) => {
//     e.preventDefault();
//     if (newItem.name !== '' && newItem.amt !== '' && newItem.cost !== ''){
//       setItems([...items, newItem]);
//       await addDoc(collection(db, 'items'), { name: newItem.name.trim() , amt: newItem.amt.trim() , cost: newItem.cost.trim() });
//       setNewItem({name: '', amt:'', cost: ''});
//     }
//   }

//   // read items from database
//   useEffect(() => {
//     const q= query(collection(db, 'items'));
//     const unsubscribe = onSnapshot( q, (QuerySnapshot) => {
//       let itemsArr = [];

//       QuerySnapshot.forEach((doc)=>{
//         itemsArr.push({...doc.data(), id: doc.id});
//       })
//       setItems(itemsArr);

//       // read total from itemsArr
//       const caluTotal = () => {
//         const totalPrice = itemsArr.reduce((sum,item) => sum + parseFloat(item.cost * item.amt), 0);
//         setTotal(totalPrice);
//       };
//       caluTotal();
//       return() => unsubscribe();
//     });
//   },[]);

//   // delete items from database
//   const deleteItem = async (id) => {
//     await deleteDoc(doc(db, 'items', id));
//   }

//   return (
//     <main className="flex min-h-screen items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

//       {/* https://tailwindcss.com/docs/background-color */}
//       <div className="bg-orange-900 p-3 rounded-lg items-center">
//         <h1 className="text-3xl p-3 text-center">the pantry...</h1>
//         <form className="grid grid-col-12 items-center text-black">
//           <input value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value}) } className="col-span-3 p-3 border" type="text" placeholder="item name?"/>
//           <input value={newItem.amt} onChange={(e) => setNewItem({...newItem, amt: e.target.value}) } className="col-span-3 p-3 border" type="number" placeholder="amt of items?"/>
//           <input value={newItem.cost} onChange={(e) => setNewItem({...newItem, cost: e.target.value}) } className="col-span-3 p-3 border" type="number" placeholder="cost per item?"/>
//           <button onClick={addItem} className="bg-orange-800 hover:bg-orange-600 p-3 text-xl rounded-lg text-white" type="submit">add</button>
//         </form>

//         <h1 className="text-3xl p-3 text-center">current items...</h1>
//         <ul>
//           {items.map((item, id) => (
//             <li key={id} className="my-4 w-full flex justify-between mx-2 bg-orange-800 rounded-lg">
//               <div className="p-3 w-full flex justify-between mx-3"> 
//                 <span className="lowercase">{item.name}</span>
//                 <span>x{item.amt}</span>
//                 <span>${item.cost}</span>
//               </div>
//               <button onClick={() => deleteItem(item.id)} className="ml-8 p-3 border-orange-900 hover:bg-orange-600 w-10 rounded-lg">x</button>
//             </li>
//           ))}
//         </ul>

//         {items.length < 1 ? ('there are no items in your bag...') : ( 
//           <div className="flex justify-between p-3">
//             <span>total :</span> <span>${total}</span>
//           </div>
//         )}

//       </div>

//       </div>
//     </main>
//   );
// }
