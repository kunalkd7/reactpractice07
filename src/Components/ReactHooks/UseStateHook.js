import React, { useState } from "react";

export function UseStateHook() {
  const [count, setCount] = useState(0);

  // usestate replace whole value so that's why we need to create new obj,arr to replace it with prev obj,arr
  const [obj, setObj] = useState({ a: 1, b: 2 });
  const [arr, setarray] = useState([1, 2, 3, 4, 5]);

  //useState runs(gets initialize) everytime when a component renders and some calculation can take time so it can descrese app performance
  //we can pass function in useState it will run only one time when the component render
  //it will also behave like any normal state
  const [state, setstate] = useState(() => {
    //any function which takes time
    return 10;
  });

  const incrementCount = () => {
    // setCount(count + 1); //when we use setCount like this it will
    // setCount(count + 1); //always take count value from useState value
    // setCount(count + 1); //which is 0 It will be like 0+1 4 time which will eventually give us 

    setCount((prevCount) => prevCount + 1); //it will take value from it's prev state every time
    setCount((prevCount) => prevCount + 1); //not from the usestate count value
    setCount((prevCount) => prevCount + 1);
  };

  const addarray = () => {
    // we can not update state like this because it's a rule that we can not pass same referenece of array and objects
    // to update their own state

    // arr.push(5)
    // setarray(arr);

    // let temp = arr;
    // temp.push(5);
    // setarray(temp);

    //instead we have to create new arr or object reference to update it's state
    setarray([...arr, 5]);
  };

  return (
    <>
      count value is : {count} <br />
      <button onClick={incrementCount}>click me</button> <br />
      object value is : {JSON.stringify(obj)} <br />
      {/* in usestate object gets oveeride to override the current key value always copy the object first*/}
      {/* <input type="text" value={obj.a} onChange={(e) => { setObj({ a: e.target.value }) }} />
            <input type="text" value={obj.b} onChange={(e) => { setObj({ b: e.target.value }) }} /> <br /> */}
      <input
        type="text"
        value={obj.a}
        name="text"
        onChange={(e) => {
          setObj({ ...obj, a: e.target.value });
        }}
      />
      <input
        type="text"
        value={obj.b}
        onChange={(e) => {
          setObj({ ...obj, b: e.target.value });
        }}
      />
      <br />
      Array is : {arr}
      <button onClick={addarray}>click to add in array</button>
    </>
  );
}
