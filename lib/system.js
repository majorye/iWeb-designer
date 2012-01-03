/**
 * Created by IntelliJ IDEA.
 * User: zhouquan.yezq
 * Date: 11-12-31
 * Time: 下午1:42
 * To change this template use File | Settings | File Templates.
 */

/**********Global setting**************/
var GLOBAL = {};
GLOBAL.BASEURL = 'http://alibaba-60945/webdesigner/lib/ui';
GLOBAL.LAYOUT = {
    'grid-18':'fd.layout.grid-18'
};
GLOBAL.COMPONENT = {
    'singletab':'fd.tab.singletab'
};

GLOBAL.namespace = function(str) {
    var arr = str.split ? str.split('.') : [];
    var o = window;
    for (var i = 0; i < arr.length; i++) {
        o[arr[i]] = o[arr[i]] || {};
        o = o[arr[i]];
    }

};
 GLOBAL.namespace('ali.ux.system');
(function(system) {
    system.start = function() {
        var $ = jQuery;
        $.use("ui-draggable", function() {
            $(".inf-list li").draggable({
                start: function(event, ui) {
                },
                drag: function(event, ui) {
                    ;
                },
                stop: function(event, ui) {
                },revert:true,cursor:'move'
            });
        });
        $.use("ui-droppable", function() {    // 引入ui-droppable的时候，会自动载入依赖项ui-draggable
            $('.cleft').droppable({
                drop: function(event, ui) {
                    var helper = ui.helper;
                    var height = helper.find('input').attr('value');
                    helper.height=height;
                    ali.ux.network.loadJSONResource(helper, this);
                },accept:'.LAYOUT',greedy:true
            });
            $(".cleft div").droppable({
                drop: function(event, ui) {
                     var helper = ui.helper;
                    ali.ux.network.loadJSONResource(helper, this);
                },accept:'.COMPONENT',greedy:true
            });
        });
    };
    //system.start();
})(ali.ux.system);