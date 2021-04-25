class Form{
    constructor(){

    }
    display(){
      var title = createElement("h2");
      title.html("Car racing game");
       title.position(550,150);

       var imput = createInput("name");
       var button = createButton("play");
       
       imput.position(580,200);
       button.position(600,250);

       button.mousePressed(function(){
           imput.hide();
           button.hide();

           var name = imput.value();
           var greeting = createElement("h2");
           greeting.html("hello " + name);
           greeting.position(600,200);
       })

    }
}