document.getElementById('message').innerHTML='<h1>CPU 测试</h1> <p>最多：18771</p><p>最快：1.728</p><hr>'
const startTime = Date.now();

for (let i = 0; i < 100000; i++) {
  console.log(i);
}

const endTime = Date.now();
const ec = endTime - startTime
const sp = ec / 1000
const lst = ec / 1000 * 2420
let dnm = Math.floor(lst);
document.getElementById('time').innerHTML = `<p>测试分数： ${dnm}</p><p>速度：${sp}</p>`