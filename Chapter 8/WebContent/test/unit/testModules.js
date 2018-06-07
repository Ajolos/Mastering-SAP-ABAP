sap.ui.define([
 "test/unit/simpleTest",
 "test/unit/simpleTest2"], function(){
 "use strict";
});

sap.ui.require([
 "path/to/file/tested1",
 "path/to/file/tested2",
 . . .
 ],
 function(file1, file2, ... ){
  "use strict";
  QUnit.module("Simple module");
  
  function testCase(assert, argument, expected){
   var result = file1.method1(argument);
   assert.stricEqual(result, expected, "Correct result");
  }
  
  QUnit.test("Name of the test case", function(assert){
   testCase.call(this, assert, "testArgument1", "expectedValue");
  });
 . . .
});
