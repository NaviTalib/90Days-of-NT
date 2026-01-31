function greet(name,callback){
    callback(name);
}

greet("navicodes",function(name){
    console.log("Hello "+name);
});


