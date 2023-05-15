const getTodos = () => {
    
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange',()=>{
            console.log(xhr,xhr.readyState)
            if(xhr.readyState===4 && xhr.status===200){
                //console.log(xhr.responseText);
            
                resolve(xhr.responseText);
            }
            else if(xhr.readyState===4){
                //console.log("UnSuccess");
               
                reject("UnSuccess");
            }
        });
        
        xhr.open('GET','https://jsonplaceholder.typicode.com/todos');
        xhr.send();
    
    });

    
    
};

getTodos().then(data => {
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

const getTodosCallback = (callback) => {
    
  
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange',()=>{
            console.log(xhr,xhr.readyState)
            if(xhr.readyState===4 && xhr.status===200){
                
                callback(undefined,xhr.responseText);
              
            }
            else if(xhr.readyState===4){
                //console.log("UnSuccess");
                callback('UnSuccess',undefined);
              
            }
        });
        
        xhr.open('GET','https://jsonplaceholder.typicode.com/todos');
        xhr.send();   
    
};

getTodosCallback((err,data) => {
    console.log(err,data);

});


