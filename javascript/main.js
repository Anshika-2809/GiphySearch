var button=document.querySelector(".js-go");
button.addEventListener("click",function(){
    var input=document.querySelector('.js-userinput').value;
 		searchGiphy( input );
    //pushToDOM(input);
});
document.querySelector(".js-userinput").addEventListener('keyup',function(e){
  
    var input = document.querySelector('.js-userinput').value;
 
   // if the key ENTER is pressed...
   if(e.which === 13) {
    searchGiphy( input );
    //pushToDOM(input);
   }
 
 });
 
 /* 2. do the data stuff with the API */
 //var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
 function searchGiphy(searchQuery){
   var url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+searchQuery;
   // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load',function(e){

  var data = e.target.response;
  pushToDOM(data);

  });
  }


 
 /* 3. Show me the GIFs */
function pushToDOM(input) {
    var response = JSON.parse(input);

    var imageURL=response.data;

    //Array-Foreach
    //arr.forEach(callback[,thisarg])

    var container = document.querySelector(".js-container");

    container.innerHTML = "";

    imageURL.forEach(function(image){
      // find img src
      var src = image.images.fixed_height.url;
  
      // concatenate a new IMG tag
      container.innerHTML += "<img src='"+ src +"' class='container-image' />";
    });
   /* var imageURL = response.data[0].images.fixed_height.url;
    console.log(imageURL);

    var container = document.querySelector(".js-container");
    container.innerHTML = "<img src=\"https://media3.giphy.com/media/Z1kpfgtHmpWHS/200.gif\">";*/
   

    /*Create an app that displays one GIF after another just like watching TV. It doesn't need to go endlessly,
     it could just be 5 GIFS that play one after another. 

      This is possible using the current GIPHY Api: 

      http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

      Or by using this special GIF API: 

      tv.giphy.com/v1/gifs/tv?api_key=CW27AW0nlp5u0&tag=giphytv

    */
    
}






/*document.querySelector(".js-go").addEventListener('click',function(){
  

  var input = document.querySelector("input").value;
 
  
  search(input);
 
});
document.querySelector(".js-userinput").addEventListener('keyup',function(e){

  var input = document.querySelector("input").value;
  
  if (e.which === 13){
    

      search(input);
      

  }
 
  
  

});


// AJAX Request
function search(query){
  var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+query;
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();
  GiphyAJAXCall.addEventListener('load',function(e){

    var data = e.target.response;
    
    pushToDOM(data);
    
    });
}



function pushToDOM(input){
    var response = JSON.parse(input);
    console.log(response);
    var imageURL = response.data;
    imageURL.forEach(function(image) {
    var container = document.querySelector(".js-container");
    container.innerHTML = "";
    
    var src = image.imageURL.fixed_height.url;
    
    container.innerHTML += "<img src='"+ src +"' class='container-image' />";
      
    
    
  });
  
   
}*/