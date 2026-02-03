function fetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"navicodes",age:25});
        },2000);
    });

}

fetchUser().then(user => console.log(user.name))
           .catch(err => console.log(err));