angular.module('templates-common', ['test_component/test.html']);

angular.module("test_component/test.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("test_component/test.html",
    "<div>\n" +
    "    Hello World!\n" +
    "</div>");
}]);
