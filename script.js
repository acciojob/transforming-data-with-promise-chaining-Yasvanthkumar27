//your JS code here. If required.
const ip = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.onclick = function () {
  const value = parseFloat(ip.value);
  output.textContent = "";

  new Promise((resolve) => {
    setTimeout(() => {
      output.textContent = "Result: " + value;
      resolve(value);
    }, 2000);
  })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = num * 2;
          output.textContent = "Result: " + res;
          resolve(res);
        }, 2000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = num - 3;
          output.textContent = "Result: " + res;
          resolve(res);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = num / 2;
          output.textContent = "Result: " + res;
          resolve(res);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = num + 10;
          output.textContent = "Final Result: " + res;
          resolve(res);
        }, 1000);
      });
    });
};
