var  FriendsList  =  ng . core 
  . Component ({ 
    selector :  'friends' , 
    template :  '<ul><li *ngFor="#friend of friends">{{ friend }}</li></ul>' , 
    directives :  [ ng . common . NgFor ] 
  }) 
  . Class ({ 
    constructor :  function ()  { 
      this . friends  =  [ "Alice" ,  "Bob" ,  "James" ,  "Aaron" ]; 
    } 
  }); 

var  HelloApp  = 
  ng . core . Component ({ 
    selector :  'hello-app' , 
    template :  '<h1>Hello Angular 2!</h1><friends></friends>' , 
    directives :  [ FriendsList ] 
  }) 
  . Class ({ 
    constructor :  function ()  {} 
  }); 

  document . addEventListener ( 'DOMContentLoaded' ,  function ()  { 
    ng . platform . browser . bootstrap ( HelloApp ); 
  }); 