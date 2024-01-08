function promises() {
  let promise1 = new Promise((res, rej) => {
    const task = false;
    if (task) res("Promise1");
    else
      setTimeout(() => {
        rej("noPromise1");
      }, 4000);
  });

  let promise2 = new Promise((res, rej) => {
    const task = true;
    if (task)
      setTimeout(() => {
        res("Promise2");
      }, 3000);
    else rej("noPromise2");
  });

  let promise3 = new Promise((res, rej) => {
    const task = true;
    if (task)
      setTimeout(() => {
        res("Promise3");
      }, 3000);
    else rej("noPromise3");
  });

  //   Promise.all([promise1, promise2, promise3]).then((val) => {
  //     console.log(val);
  //   });

  //   Promise.any([promise1, promise2, promise3]).then((val) => {
  //     console.log(val);
  //   });

  //   Promise.race([promise1, promise2, promise3]).then((val) => {
  //     console.log(val);
  //   });

  //   Promise.resolve([promise1, promise2, promise3]).then((val) => {
  //     console.log(val);
  //   });
}

function hi() {
    setTimeout(() => {
        console.log('3');
      }, 3000);
}

async function fetching() {
    // const response = fetch(
    //   "https://catfact.ninja/fact"
    // ).then((res) => {
    //   (res.json()).then((res) => console.log(`ram: ${res.fact}, gomtha: ${res['length']}`));
    // });
    const resp = await fetch("https://catfact.ninja/fact")
    var len = resp.json()
    // var len = len.fac
    console.log(len);
    // if ( len >= 10)
    //     console.log(resp.json());
    // else{
    //     console.log(resp.json());
    //     console.log('Adios');
// }
  }
  fetching();