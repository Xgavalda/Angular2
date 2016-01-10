( function ()  { 

var  MyName  =  ng . core 
  . Component ({ 
    selector :  'my-name' , 
    template :  '<h2><span>XGavalda</span></h2>' 
  }) 
  . Class ({ 
    constructor :  function ()  {} 
  }); 

var  HelloApp  = 
  ng . core . Component ({ 
    selector :  'hello-app' , 
    template :  '<h1>Yourname - Hello Angular 2!</h1><my-name></my-name>' , 
    directives :  [ MyName ] 
  }) 
  . Class ({ 
    constructor :  function ()  {} 
  }); 

document . addEventListener ( 'DOMContentLoaded' ,  function ()  { 
    ng . platform . browser . bootstrap ( HelloApp ); 
  }); 

})(); 

