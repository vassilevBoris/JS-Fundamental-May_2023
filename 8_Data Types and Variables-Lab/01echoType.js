function echoType(params) {
    console.log(typeof (params));
    if (typeof params === "number" || typeof params === "string"){
        console.log(params);
    }else{
        console.log( 'Parameter is not suitable for printing');
    }

}   
echoType('Hello, JavaScript!');
console.log("---------------");
echoType(18);
console.log("---------------");
echoType(null);