$( document ).ready(function() {
     
    for (var i = 0; i < 10; i++){
        $.ajax({url: "https://random.dog/woof.json", success: function(result){
            // $('.img').attr('src',result.url);
              
              if(result.url!=""){
                  var imgF = result.url;
                  var ext = imgF.split('.').pop();
                  //console.log(ext);
                  if(ext!="mp4"){
                    var img = $('<img class="dynamic" width="250" height="150">'); //Equivalent: $(document.createElement('img'))
                    img.attr('src', result.url);
                    img.appendTo('.img');
                  } 
               }                
        }});

    }
    

  

});