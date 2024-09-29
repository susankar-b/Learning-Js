// Immediately Invoked Function Expressions

// Named IIFE
(function chai(){
    console.log(`DB Connected`);
    
})();
// Unnamed IIFE
((name)=>{
    console.log(`DB connected to ${name}`);
    
})('Susanakr')