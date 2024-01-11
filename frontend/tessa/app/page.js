"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Reducer from "./components/c3";
import Link from "next/link";

export default function Home() {
  const [item, setItem] = useState("");
  const [value, setValue] = useState(0);
  const [text, setText] = useState("Hello");

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

  // const increment = () => {
  //   setValue((val) => val + 1);
  //   console.log(value);
  // };

  // const decrement = () => {
  //   setValue(() => value - 1);
  // };

  // const click = () => {
  //   setText(() => console.log(text));
  // };

  return (
    <main className="text-center">
      {/* <div>
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
        <br />
        {value}
        <button
          type="button"
          onClick={decrement}
          className="p-1 border-2 border-[#FFFFFF] rounded-full hover:bg-[#EEEEEE] hover:opacity-69 hover:text-[#000000]"
        >
          Check!!
        </button>
        <br />
        {value}
      </div> */}
      <Reducer />
      <br />
      <Link href={"/todo"}>Click me</Link>
      {/* <div className="one">
        <div className="two"></div>
      </div> */}
    </main>
  );
}
