function runjs(input) {
input;
}
function loadjs(host,src) {
var allowed_host = ['localhost',"ipx.googl.0000x.gxc"]
var js = ['/zh/sandbox/js/lib.js']
if (host==""){
    console.error("invalid host")
}else if (!allowed_host.includes(host)){
    console.error(`host "`+host+`" is not in allowed_host array`)
}

if (allowed_host.includes(host)&&js.includes(src)){
    var script = document.createElement('script');
    script.src = "http://"+host+src;
    document.head.appendChild(script);
    console.log(src+' has been append to body.');
}
}
loadjs('localhost','./js/lib.js')