importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");

// @todo 下面这些路径无法识别，或者无法解析
// importScripts("comlink/dist/umd/comlink.js");
// import * as comlink from "comlink";

function handleGetData() {
  console.log("worker function1");
  return Math.random() * 100;
}

function handleSetData() {
  console.log("worker function2");
  return Math.random() * 100;
}

function fab(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fab(n - 1) + fab(n - 2);
}

Comlink.expose({
  handleGetData,
  handleSetData,
  fab,
});
