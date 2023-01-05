const scriptLocations = ['./_main_lib_/other/cofliler.js','./_main_lib_/js/sorce.js','./_main_lib_/other/error_tool.js'];

for (let i = 0; i < scriptLocations.length; i++) {
  const location = scriptLocations[i];
  var script = document.createElement('script');
  script.src = location;
  document.head.appendChild(script);
}
