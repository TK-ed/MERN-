"use client";

import axios from "axios";
import Comp1 from "./components/c1";
import Comp2 from "./components/c2";
import { useState } from "react";

export default function Home() {
  const [item, setItem] = useState("")
  const [value, setValue] = useState(0)
  
  const scrape = async (event) => {
    event.preventDefault();
    console.log(item);
    setItem("");
    try {
      // const url = `http://localhost:6969/${item}`;
      const url = "https://jsonplaceholder.typicode.com/todos";
      const response = await axios.get(url);
      data = response.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const increment = () => {
    setValue((val)=>val+1)
    console.log(value);
  };
  
  const decrement = () => {
    setValue(() => value-1)
  }

  return (
    <main className="text-center">
      <div>
        <h3 className="mb-3 mt-7">
          Find your desired product at a <span>low cost</span>
        </h3>
        <form>
          <input
            className="p-2 mr-2 rounded-full hover:scale-20 text-[#222831]"
            type="text"
            value={item}
            placeholder="Enter your item"
            onChange={(e) => {
              // console.log(e.target.value);
              setItem(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={scrape}
            className="p-1 border-2 border-[#FFFFFF] rounded-full hover:bg-[#EEEEEE] hover:opacity-69 hover:text-[#000000]"
          >
            Search!!
          </button>
        </form>
        <br />
        <h1>useState</h1>
        <button
          type="button"
          onClick={increment}
          className="p-1 border-2 border-[#FFFFFF] rounded-full hover:bg-[#EEEEEE] hover:opacity-69 hover:text-[#000000]"
        >
          Add!!
        </button>
        <br />
        <button
          type="button"
          onClick={decrement}
          className="p-1 border-2 border-[#FFFFFF] rounded-full hover:bg-[#EEEEEE] hover:opacity-69 hover:text-[#000000]"
        >
          Subtract!!
        </button>

        {value}
        {/* <Comp1 name="Ram" dept="CSE"/>
        <Comp2 name="Sugi" dept="Kovai"/> */}
      </div>
    </main>
  );
}
