/**
 * Created by IntelliJ IDEA.
 * User: zhouquan.yezq
 * Date: 11-12-31
 * Time: 下午1:42
 * To change this template use File | Settings | File Templates.
 */


/***************Load resource**********/
GLOBAL.namespace('ali.ux.network');
(function(network) {
    var $ = jQuery;
    network.loadJSONResource = function(jui, thisObj) {
        var type = jui.attr('classtype');
        $.getJSON([GLOBAL.BASEURL,"/" ,GLOBAL[type][ jui.attr('id')] , '/configure.json'].join(''), function(data) {
            var template = data.template;
            network.loadUIResource({url:[GLOBAL.BASEURL,"/",GLOBAL[type][ jui.attr('id')],"/",template].join(""),type:type,thisObj:thisObj,objAux:{height:jui.height}});
        });
    };
    network.loadUIResource = function(objAux) {
        $.ajax({
            url: objAux.url,
            context: objAux.thisObj,
            success: function(data) {
                $(this).append(data);
                var layout = $(this).find(".layout div");
                if (objAux.objAux.height) {
                    layout.css('height', objAux.objAux.height);
                }
                layout.droppable({
                    drop: function(event, ui) {
                        //todo
                    },accept:'.COMPONENT'
                });
            }
        });
    }
})(ali.ux.network);
