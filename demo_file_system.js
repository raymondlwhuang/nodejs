var fs = require('fs');

  fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });
  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  fs.unlink('mynewfile2.txt',function(err){
    if (err) throw err;
    console.log('File deleted');
  });
  fs.rename('mynewfile3.txt','mynewfile4txt',function(err) {
    if(err) throw err;
    console.log('File Renamed!');
  }

  );