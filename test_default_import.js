import increment, { value } from "./test_default_export.js"; 
// defaultエクスポートは{}で囲まない、通常のエクスポートは{}で囲む
increment();
console.log(value);