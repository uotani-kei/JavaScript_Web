// test_default_export.js
export let value = 0; // 通常のエクスポート
export default function increment(){ // defaultエクスポート
return ++value;
}