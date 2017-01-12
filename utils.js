//地理信息及天气信息js
function getLocation(callback) {

    wx.getLocation({
        
        success: function(res) {

        	callback(true, res.latitude, res.longitude);

        },
        fail: function() {

        	callback(false);

        }

    })

}


function getWeatherByLocation(latitude, longitude, callback) {

    var apiKey = "4606b8abb7400f75154e84ab947adefd";
    var apiURL = "http://apis.baidu.com/heweather/weather/free?city=beijing -H 4606b8abb7400f75154e84ab947adefd";


    
    wx.request({
        url: apiURL,
        success: function(res){

            var weatherData = parseWeatherData(res.data);
            getCityName(latitude, longitude, function(city){
                weatherData.city = city;
                callback(weatherData);
            });            

        }
    });

}