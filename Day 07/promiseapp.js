/*Promise
is object from a operation

mention the status of the operation

3 states:
    1 pending/ waiting
    2 fulfilled/ resolved - done 
    3 rejected/ error 
    */

const fs = require('fs').promises;

const readFile = (filepath)=>{
    return fs.readFile('file1.txt','utf8')  //return a promise
}

readFile('file.txt').then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.error(err);
})

