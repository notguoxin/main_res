let title = document.getElementById('title');
let begin = document.getElementById('begin');
title.innerHTML = `Host Blocked`;
begin.innerHTML = `<h1>Host '${location.host}' is blocked.</h1><p>Allowed host: 'localhost' , '127.0.0.1' , 'joe-is-david.github.io' , 'www.changuoxin009.cf'</p>`;