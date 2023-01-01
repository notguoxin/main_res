function rd(host) {
  var ssl_host = ['localhost','127.0.0.1','192.168.0.10','joe-is-david.github.io','www.changuoxin009.cf','42.189.36.193']
    if (ssl_host.includes(host)) {
      return true
    }else{console.error("host validation failed");}
  }
function bruh() {
  var current_host = location.host
  if (!rd(current_host)) {
    window.location.href = '/_main_lib_/error/xenon.html';
    
  }
};

bruh();