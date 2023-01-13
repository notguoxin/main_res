var repair_mode = false;
var repair_mode_res = 'null';
function rd(host) {
  var allowed_host = ['localhost','127.0.0.1','192.168.0.10','www.changuoxin009.cf','joe-is-david.github.io','42.189.36.193']
  var url_blocked= ['testserver.changuoxin009.cf']
    if (allowed_host.includes(host)) {
      return true
    }else if (url_blocked.includes(host)){
      return 'type2'
  }
  }
function bruh(ocr,res) {
  if (ocr) {
    window.location.href = '/_main_lib_/error/xenon.html?errorid=on_repair_mode&res='+res
  }else{
  var current_host = location.host
  if (!rd(current_host)) {
    window.location.href = '/_main_lib_/error/xenon.html?errorid=1cbfa571504cf3659d9ffe7886f77d8c';    
  }else if(rd(current_host)==='type2'){
    const lpd = location.href.replace('http://','').replace(location.host,'')
    window.location.href = '/_main_lib_/error/xenon.html?errorid=a9dbcf3d21eee91bf40e5bd857e642f8&lpd='+lpd;    
  }}
};
bruh(ocr=repair_mode,res=repair_mode_res);