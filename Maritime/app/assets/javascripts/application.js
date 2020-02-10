/* global $ */


// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  debug.Log('ffs')
  console.Log('ffs')

})
//line


$("blue").css('color', 'blue');
console.log("Hello");
