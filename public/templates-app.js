angular.module('templates-app', ['block_properties/block_properties.html', 'toolbar/add_block.html', 'toolbar/add_component.html', 'toolbar/toolbar.html', 'viewport/block.html', 'viewport/block_item.html', 'viewport/viewport.html']);

angular.module("block_properties/block_properties.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("block_properties/block_properties.html",
    "<table>\n" +
    "    <tr>\n" +
    "        <td colspan=\"2\">\n" +
    "            <button id=\"remove-block\" class=\"btn btn-danger btn-xs\" ng-if=\"!blockprop.nodelete\" ng-click=\"deleteBlock()\">Удалить блок</button>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td><label>ID</label></td>\n" +
    "        <td><input type=\"text\" pattern=\"[a-zA-Z][a-zA-Z0-9_-]*\" ng-model=\"blockprop.id\"></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td>Направление</td>\n" +
    "        <td>\n" +
    "            <label>Горизонтальное <input type=\"radio\" name=\"layout\" value=\"hlayout\" ng-model=\"blockprop.layout\"></label>\n" +
    "            <label>Вертикальное <input type=\"radio\" name=\"layout\" value=\"vlayout\" ng-model=\"blockprop.layout\"></label>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td><label>Ширина</label></td>\n" +
    "        <td><input type=\"number\" ng-model=\"blockprop.width\"></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td><label>Высота</label></td>\n" +
    "        <td><input type=\"number\" ng-model=\"blockprop.height\"></td>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "        <td><label>Растяжение</label></td>\n" +
    "        <td>\n" +
    "            <select ng-model=\"blockprop.stretch\">\n" +
    "                <option value=\"\">0</option>\n" +
    "                <option value=\"stretch-1\">1</option>\n" +
    "                <option value=\"stretch-2\">2</option>\n" +
    "                <option value=\"stretch-3\">3</option>\n" +
    "                <option value=\"stretch-4\">4</option>\n" +
    "                <option value=\"stretch-5\">5</option>\n" +
    "                <option value=\"stretch-6\">6</option>\n" +
    "            </select>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>");
}]);

angular.module("toolbar/add_block.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("toolbar/add_block.html",
    "<div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "        <form novalidate=\"novalidate\" ng-submit=\"ok()\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" ng-click=\"cancel()\">&times;</button>\n" +
    "                <h4 class=\"modal-title\">{{ 'ADD_BLOCK' | translate }}</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <x-flacky-block-properties></x-flacky-block-properties>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">{{ 'CANCEL' | translate }}</button>\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\">{{ 'ADD' | translate }}</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("toolbar/add_component.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("toolbar/add_component.html",
    "<div class=\"modal-dialog\">\n" +
    "    <div class=\"modal-content\">\n" +
    "        <form novalidate=\"novalidate\" ng-submit=\"ok()\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" ng-click=\"cancel()\">&times;</button>\n" +
    "                <h4 class=\"modal-title\">{{ 'ADD_BLOCK' | translate }}</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body\">\n" +
    "                <select ng-model=\"component_name\">\n" +
    "                    <option value=\"test_component\">test_component</option>\n" +
    "                </select>\n" +
    "            </div>\n" +
    "            <div class=\"modal-footer\">\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">{{ 'CANCEL' | translate }}</button>\n" +
    "                <button type=\"submit\" class=\"btn btn-primary\">{{ 'ADD' | translate }}</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("toolbar/toolbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("toolbar/toolbar.html",
    "<aside class=\"flacky-toolbar panel panel-default\" ng-controller=\"ToolbarController\">\n" +
    "    <div class=\"panel-body\">\n" +
    "        <div><input type=\"checkbox\" id=\"toggle_spacing\" ng-model=\"show_spacing\" checked><label for=\"toggle_spacing\">{{ 'SHOW_SPACING' | translate }}</label></div>\n" +
    "        <div><input type=\"checkbox\" id=\"toggle_borders\" ng-model=\"show_borders\" checked><label for=\"toggle_borders\">{{ 'SHOW_BORDERS' | translate }}</label></div>\n" +
    "        <div><input type=\"checkbox\" id=\"toggle_captions\" ng-model=\"show_captions\" checked><label for=\"toggle_captions\">{{ 'SHOW_CAPTIONS' | translate }}</label></div>\n" +
    "        <button class=\"btn btn-success btn-xs\" ng-click=\"openAddComponentDialog()\">{{ 'ADD_COMPONENT' | translate }}</button>\n" +
    "        <button class=\"btn btn-success btn-xs\" ng-click=\"openAddDialog()\">{{ 'ADD_BLOCK' | translate }}</button>\n" +
    "        <div id=\"block-config\" class=\"block-config\">\n" +
    "            <x-flacky-block-properties></x-flacky-block-properties>\n" +
    "        </div>\n" +
    "        <button id=\"gen-html\" class=\"btn btn-success btn-xs\">{{ 'GENERATE' | translate }} HTML</button>\n" +
    "    </div>\n" +
    "</aside>");
}]);

angular.module("viewport/block.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("viewport/block.html",
    "<div class=\"flacky-block {{ block.stretch }} {{ block.layout }}\"\n" +
    "     data-id=\"{{ id }}\"\n" +
    "     ng-click=\"selectBlock($event)\"\n" +
    "     ng-class=\"{'flacky-block--highlight':block.selected}\">\n" +
    "    <div class=\"flacky-block-caption\">{{ block.id }}</div>\n" +
    "    <x-flacky-block-item ng-if=\"!block.component\" ng-repeat=\"(id, block) in block.blocks\"></x-flacky-block-item>\n" +
    "</div>");
}]);

angular.module("viewport/block_item.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("viewport/block_item.html",
    "<div class=\"flacky-block {{ block.stretch }} {{ block.layout }}\"\n" +
    "     data-id=\"{{ id }}\"\n" +
    "     ng-click=\"selectBlock($event)\"\n" +
    "     ng-class=\"{'flacky-block--highlight':block.selected}\">\n" +
    "\n" +
    "</div>");
}]);

angular.module("viewport/viewport.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("viewport/viewport.html",
    "<div class=\"flacky-viewport panel panel-default {{ page.layout }}\"\n" +
    "     ng-class=\"{ 'flacky-viewport--show-spacing':show_spacing,\n" +
    "                 'flacky-viewport--show-borders':show_borders,\n" +
    "                 'flacky-viewport--show-captions':show_captions}\">\n" +
    "    <x-flacky-block ng-repeat=\"(id, block) in page.blocks\"></x-flacky-block>\n" +
    "</div>");
}]);
