let {PythonShell} = require('python-shell')
var path = require("path");

function get_speech(){
    document.getElementById("detect").value= "Wait a bit..."
    let options = {
        pythonPath: 'C:\RS\anaconda3\envs\toper\python.exe',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: './',
      };
    
    let pyshell = new PythonShell('speech_text.py', options);

    pyshell.on('message',function(message){
        swal(message);
    });
}