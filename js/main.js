$(document).ready(function(){
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
    var long = position.coords.longitude;
    var lat = position.coords.latitude;
      // $('#data').html("latitude: " +lat+ "<br>longitude: "+long);
  //Create API with geolocation
  var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=86af25cc84f9d2bce0815f57184720f7';  
  $.getJSON(api, function(data){
  var fTemp;
  var cTemp;
  var kTemp;
    //JSON  call for Open Weather API 
    var weatherType = data.weather[0].description;
    kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    
    fTemp= (kTemp*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp-273).toFixed(1);
      

    $('#city').html(city);
    $('#weatherType').html(weatherType);
    $('#fTemp').html(fTemp +  " &#8457;");
    
    $('#fTemp').click(function(){
      if(tempSwap===false){
        $('#fTemp').html(fTemp + " &#8457;");

        tempSwap=true;
      }
      else{
         $('#fTemp').html(cTemp + "&#8451;");
        tempSwap=false;
      }
    });
    //Windspeed milesperhour
    windSpeed = (2.237*(windSpeed)).toFixed(2);
    $('#windSpeed').html(windSpeed + " mph");
    if(fTemp < 40){
      $('body').css('background-image','url(https://images.unsplash.com/photo-1454535524385-496c92f1f4b9?auto=format&fit=crop&w=1950&q=80)');
    }else if(fTemp > 70){
      $('body').css('background-image','url(https://images.unsplash.com/photo-1505326335360-b32540735fe1?auto=format&fit=crop&w=1867&q=80)');
    }
    else if (fTemp > 40 && fTemp < 70){
      $('body').css('background-image','url(https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?auto=format&fit=crop&w=1950&q=80)');
    }
    });
  });
  }
});