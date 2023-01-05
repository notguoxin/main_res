let score_table = document.getElementById('score');
let time_table = document.getElementById('time');
const startTime = Date.now();


for (let i = 0; i < 100000; i++) {
  console.log(i);
}

const endTime = Date.now();
const ec = endTime - startTime
const sp = ec / 1000
const lst = ec / 1000 * 2420
let dnm = Math.floor(lst);
score_table.innerHTML=dnm
time_table.innerHTML=sp