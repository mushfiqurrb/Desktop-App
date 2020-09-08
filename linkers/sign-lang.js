let {PythonShell} = require('python-shell')
var path = require("path");

function detect_sign(){
    document.getElementById("detect").value= "Wait a bit..."
    let options = {
        pythonPath: 'C:\RS\anaconda3\envs\toper\python.exe',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: './',
      };
    
    let pyshell = new PythonShell('test.py', options);

    pyshell.end(function (err,code,signal){
        document.getElementById("detect").value= "Detect Sign"
    });

    //pyshell.on('message',function(message){
    //    console.log(message);
    //});
}