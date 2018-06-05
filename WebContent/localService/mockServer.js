sap.ui.define(["sap/ui/core/util/MockServer"], function(MockServer){
 "use strict";
  return {
   init: function(){
    var oMockServer = new MockServer({
    rootUri: "/"
   });
   oMockServer.simulate("../localService/metadata.xml", {
   sMockdataBaseUrl: "../localService/mockdata",
   bGenerateMissingMockData: true
  });
  oMockServer.start();
  }
 }
}
