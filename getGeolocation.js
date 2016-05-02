/* ====================================================
 * GetGeolocation()
 * https://github.com/capynet/GetGeolocation
 * jQuery 1.3+
 * Marcelo Iván Tosco (capynet)
 * ==================================================== */

var getGeolocation = function (successCB, errorCB, notAvailableCB) {
  if (!navigator.geolocation) notAvailableCB();
  navigator.geolocation.getCurrentPosition(successCB, errorCB);
};

// Public
//-----------------------------------------------------------
getGeolocation.prototype = {};
