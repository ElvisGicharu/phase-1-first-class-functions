function receivesAFunction(callback){
    callback();
};

function returnsANamedFunction(){
   return function math(){
        return 3*2;
    };
};

function returnsAnAnonymousFunction(){
   return (function(){
        return 'This is an anonymous function';
    });
};