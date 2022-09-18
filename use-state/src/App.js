import { useState } from "react";

// const orders = [100, 200, 300];

function App() {
  /* 
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    console.log(total);
    return total
  }); //set the initial value and then onClick or onChange it will increase

  const handleIncrease = () => {
    // setCounter(counter + 1) //Thi could receive a callback
    setCounter((prevState) => prevState + 1);
    // setCounter((prevState) => prevState + 1); // We could do this to initial more value to use
    // setCounter((prevState) => prevState + 1);
  };
  */

  const [info, setInfo] = useState({
    name: "Mr. bunsbof",
    age: 100,
    address: "Your mom womb",
  });

  const handleUpdate = () => {
    setInfo(prev => {
      // This section is to used to write logic
      return {
        ...prev,
        bio: 'Testing with useState'
      }
    });
    //   {
    //   ...info, // If you dont use this to set the initial value the 'bio' will replace all of your object key:value in the inside
    //   bio: 'Testing with useState'
    // }
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;

/*
Component is re-rendered after 'setState'
Initial state is only use for the first time you initial it
setState work best with callback
Initial state with callback
setState is used instead for state with the new value
*/
