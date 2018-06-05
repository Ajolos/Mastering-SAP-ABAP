jQuery.sap.require("sap.ui.qunit-css");
jQUery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
Qunit.config.autostart = false;
sap.ui.require([
 "sap/ui/test/Opa5",
 "my/namespace/test/integration/pages/BasicArrangements",
 “my/namespace/test/integration/pages/SearchView], function(Opa5, Arrangements){
 "use strict";
 Opa5.extendConfig({
   arrangements: new Arrangements(),
   viewNamespaece: "my.namespace.views",
   autoWait: true
 });
 sap.ui.require([
  "my/namespace/test/integration/SearchViewJourney"
 ], function(){
  QUnit.start();
 });
});
