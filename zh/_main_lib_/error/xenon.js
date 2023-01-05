let title = document.getElementById('title');let begin = document.getElementById('begin');
let erroridinpt = document.getElementById('errorid');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const errorid = urlParams.get('errorid')
    var error_array= ['1cbfa571504cf3659d9ffe7886f77d8c','a9dbcf3d21eee91bf40e5bd857e642f8']
    if (!error_array.includes(errorid)) {window.location.href = 'http://www.changuoxin009.cf'}
if (errorid==='1cbfa571504cf3659d9ffe7886f77d8c') {
    title.innerHTML = `主机被阻止`;
    begin.innerHTML = `<h2>主机“${location.host}”已被阻止。</h2><p>允许的主机：“localhost”、“127.0.0.1”、“joe-is-david.github.io”、“www. changuoxin009.cf'</p>`;
    erroridinpt.innerHTML = `Error id:${error_array[0]}`;
}
if (errorid==='a9dbcf3d21eee91bf40e5bd857e642f8') {
const lcn = urlParams.get('lpd')

    title.innerHTML = `网址不允许`;
    begin.innerHTML = `<h2>url '${lcn}' 不允许访问。</h2><p>允许的主机： 'localhost' , '127.0.0.1' , 'joe-is-david.github.io' , 'www .changuoxin009.cf'</p>`;
    erroridinpt.innerHTML = `Error id:${error_array[1]}`;
}