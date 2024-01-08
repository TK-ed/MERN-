function objects() {
  obj1 = { 1: "one", 2: "two", three: 3 }; // Object Literal
  obj2 = new Object(); // using new keyword
  obj2.id = 3;
  obj2.name = "tked";
  function example(id, name) {
    // using object constructor as a function
    this.id = id;
    this.name = name;
  }
  obj3 = new example(2, "tk-ed");
  //     console.log(obj3);
  //     console.log(obj2);
  //     console.log(obj1)
  //   console.log(typeof obj3);
  a = JSON.stringify(obj3);
  b = JSON.parse(a);
  console.log(typeof a);
  console.log(typeof b);
  address = {
    1: "one",
    2: "two",
    task: "Task1",
    contact: {
      id: 21,
      place: {
        area: "cbe",
      },
    },
    objFunction: function () {
      console.log(`Hello world ${address["task"]}`);
      console.log(`Hello world ${address[1]}`);
      console.log(`Hello world ${address.task}`);
      console.log(address.contact.place.area);
      console.log(`${address["contact"]["place"]["area"]}`);
    },
  };
  address.objFunction();

  async function fetching() {
    const response = fetch(
      "https://catfact.ninja/fact"
    ).then((res) => {
      (res.json()).then((res) => console.log(`ram: ${res.fact}, gomtha: ${res['length']}`));
    });
  }
  fetching();


  // function fetchAPI() {
  //     return new Promise((resolve, reject) => {
  //         let fetching = fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  //         response = fetching.json()
  //         if (fetching)
  //             {resolve()}
  //         else
  //             {reject()}
  //     })
  //   }
  //   fetchAPI().then( () => {
  //     console.log(response);
  //   }).catch(() => console.log('API not fetched'))
}

// js string -> object => parse ==> response(server -> client)
// json -> object => parse ==> response(server -> client)
// object -> json => stringify ==> request(client -> server)
