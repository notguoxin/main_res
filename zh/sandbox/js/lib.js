var _not_allowed_host_ = ['xhostfile.data.fileserver.com','*.discord.com','discord.com']
function return_data(array,data) {
    if (array=='_not_allowed_host_'){if (!_not_allowed_host_.includes(data)) {document.getElementById('any').innerHTML = '<message>host is blocked</message><br><errorid>0x00034</errorid>'; return '<message>host is blocked</message><errorid>0x00034</errorid>';}else{return 'allowed'}}
}