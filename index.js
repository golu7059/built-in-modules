const fs = require('fs');
const os = require('os');

const details = "Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google chrom's v8 engine . A web application is a type of software that executes on a server and is displayed by a application's resources over the internate.";

const moreDetails = "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following hello world example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep."




fs.writeFileSync("nodejs_architecture.txt",details,function(err){
    if(err){
        console.log("Error ! occured in adding the file.");
    }
    else{
        console.log("File has been written sucessfully.");
    }
});


fs.readFile('nodejs_architecture.txt',function(err,data){
    if(err){
     console.log("Unable to read file",err);
     return err;
    }
    console.log("File readed sucessfully.",data.toString());
    return data;
});


fs.appendFile('nodejs_architecture.txt',moreDetails,function(err){
    if(err){
        console.log("Unable to append the file ! ");
    }
    console.log("File append sucessfull");
});

// fs.unlink("nodejs_architecture.txt",function(err){
//     if(err){
//         console.log("Unable to delete file");
//     }
//     console.log("File delete sucessfully");
// });

console.log("Operating system is : " + os.type());
console.log("Os release date : " + os.release());
