# GetGeolocation
A very simple way to get browser geolocation

**Usage**:
Just call the function and pass the callbacks:

```javascript
getGeolocation(

  // Success callback
  function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
  },

  // Error callback
  function (err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  },

  // Not available callback
  function () {
    console.warn('This browser do not support geolocation');
  }
  
);
```
Thaaaats all :D
