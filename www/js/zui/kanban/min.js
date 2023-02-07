/*!
 * ZUI: ZUI kanban - v1.10.0 - 2022-09-28
 * http://openzui.com
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2022 cnezsoft.com; Licensed MIT
 */
!function(){"use strict";function a(a,e){return n&&!e?requestAnimationFrame(a):setTimeout(a,e||0)}function e(a){return n?cancelAnimationFrame(a):void clearTimeout(a)}var n="function"==typeof window.requestAnimationFrame;$.zui({asap:a,clearAsap:e})}(),function(a){"use strict";var e="zui.virtuallist",n=function(t,r){"function"==typeof r&&(r={render:r});var i=this;i.name=e,i.$=a(t),i.options=r=a.extend({},n.DEFAULTS,this.$.data(),r),i.scrollTop=this.options.scrollTop||0,i.render(r.list,r.scrollTop);var d=0;i.$.on("scroll."+e,function(){if(i.$.data("ignore-next-scroll"))return i.$.data("ignore-next-scroll",!1);if(!i.rendering){var e=i.$.scrollTop();e!==i.scrollTop&&(i.scrollTop=e,d&&a.zui.clearAsap(d),d=a.zui.asap(function(){d=0,i.render()}))}}),i.$.on("resize."+e,function(){i.rendering||(d&&a.zui.clearAsap(d),d=a.zui.asap(function(){d=0,i.render()}))})};n.prototype.render=function(e,n){var t=this;e?t.list=e:e=t.list,n&&a.extend(this.options,n),t.rendering=!0;var r=t.scrollTop,i=t.$,d=t.options.itemClassName,o=t.options.itemHeight,s=t.options.countPerRow,l=Number.parseFloat(i.css("padding-top"),10),c=Array.isArray(e),h="number"==typeof e?e:e.length,u=i.outerHeight(),p="virtual-list-item-expired",b=i.children(".virtual-list-holder-top"),v=i.children(".virtual-list-holder-bottom");b.length||(b=a('<div class="virtual-list-holder-top" style="width:100%">').prependTo(i)),v.length||(v=a('<div class="virtual-list-holder-bottom" style="width:100%">').appendTo(i)),i.children("."+d).addClass(p).addClass("hidden");var f=Math.max(0,s*Math.floor((r-l)/o-1)),m=Math.min(h-1,1+s*Math.ceil((r-l+u)/o)),g=Math.ceil(f/s)*o,k=Math.ceil((h-m-1)/s)*o;b.height(g);for(var C=f;C<=m;C++){var x=t.options.render(C,e,c?e[C]:null);x.addClass(d).removeClass(p).removeClass("hidden")}return v.height(k),i.children("."+p).remove(),b.prependTo(i),v.appendTo(i),t.scrollHeight=t.$[0].scrollHeight,t.rendering=!1,r=Math.min(t.scrollHeight-u,Math.max(g,r)),t.scrollTop=r,r!==t.$.scrollTop()&&t.$.data("ignore-next-scroll",!0).scrollTop(r),!0},n.prototype.destroy=function(){that.$.off("."+e)},n.DEFAULTS={itemClassName:"virtual-list-item",countPerRow:1},a.fn.virtualList=function(t){return this.each(function(){var r=a(this),i=r.data(e);if(i){if("string"==typeof t)return i[t]();i.destroy()}r.data(e,i=new n(this,t))})}}(jQuery),function(a){"use strict";var e="zui.kanban",n="object"==typeof CSS&&CSS.supports("display","flex"),t=function(n,r){var i=this;if(i.name=e,i.$=a(n).addClass("kanban"),r=i.setOptions(a.extend({},t.DEFAULTS,this.$.data(),r)),r.onAction){var d=function(e){var n=a(this);r.onAction(n.data("action"),n,e,i)};i.$.on("click",".action",d).on("dblclick",".action-dbc",d)}var o=r.droppable;if("auto"===o&&(o=!r.readonly),o){var s=r.sortable;"function"==typeof s?s={finish:s}:s&&"object"!=typeof s&&(s={});var l=0;"function"==typeof o?o={drop:o}:"object"!=typeof o&&(o={});var c=a.extend({dropOnMouseleave:!0,selector:".kanban-item",target:".kanban-lane-col:not(.kanban-col-sorting)",mouseButton:"left"},o,{before:function(e){if(o.before){var n=o.before(e);if(n===!1)return n}if(s){var t=e.element.closest(".kanban-lane-items");t.closest(".kanban-col").addClass("kanban-col-sorting"),i._sortResult=null,i._$sortItems=t;var r=t.data("zui.sortable");r||t.sortable(a.extend({},s,{selector:".kanban-item",trigger:".kanban-card",dragCssClass:"kanban-item-sorting",noShadow:!0,finish:function(a){a.changed&&a.list.length>1&&(i._sortResult=a)}})).triggerHandler(e.event)}},drop:function(a){o.drop&&o.drop(a),r.onAction&&r.onAction("dropItem",a.element,a,i)},start:function(e){i.$.addClass("kanban-dragging"),l&&clearTimeout(l),l=setTimeout(function(){a(e.shadowElement).addClass("in"),l=0},50),o.start&&o.start(e)},always:function(a){if(i.$.removeClass("kanban-dragging"),l&&(clearTimeout(l),l=0),s){var e=i._sortResult;if(i._$sortItems.sortable("destroy").closest(".kanban-col").removeClass("kanban-col-sorting"),e&&e.target&&e.target.closest(".kanban-lane-col")[0]===a.target[0]){var n=e.element.closest(".kanban-lane-items").data("cards"),t=String(e.element.data("id")),r=String(e.target.data("id")),d=n.map(function(a){return a.id}),c=d.indexOf(t);d.splice(c,1);var h=n.splice(c,1),u=d.indexOf(r)+("before"===e.insert?0:1);d.splice(u,0,c),n.splice(u,0,h[0]),e.orders=d,e.cards=n,s.finish&&s.finish(e)}}o.always&&o.always(a)}});i.$.droppable(c)}r.onCreate&&r.onCreate(i)};t.prototype.setOptions=function(e){var t=this,r=a.extend({},t.options,{data:t.data},e);t.options=r,r.useFlex&&!n&&(r.useFlex=!1),t.$.toggleClass("no-flex",!r.useFlex).toggleClass("use-flex",!!r.useFlex);var i=!!a.fn.virtualRender&&r.virtualize;return i&&("object"!=typeof i&&(i={lane:!0}),t.virtualize=a.extend({},i)),t.data=r.data||[],t.render(t.data),r},t.prototype.render=function(e){var n=this;e&&(n.data=e),n.data&&!Array.isArray(n.data)&&(n.data=[n.data]);var t,r=n.options,i=n.data||[];r.fixScroll&&(t=a(window).scrollTop(),a(window).height()+t===document.body.scrollHeight&&(t="bottom")),r.beforeRender&&r.beforeRender(n,i),n.$.toggleClass("kanban-readonly",!!r.readonly).toggleClass("kanban-no-lane-name",!!r.noLaneName),n.$.children(".kanban-board").addClass("kanban-expired"),n.maxKanbanBoardWidth=0;for(var d=0;d<i.length;++d)n.renderKanban(d);n.$.children(".kanban-expired").remove(),r.fluidBoardWidth&&i.length>1&&n.$.children(".kanban-board").css("min-width",n.maxKanbanBoardWidth),t&&a(window).scrollTop("bottom"===t?document.body.scrollHeight:t),r.onRender&&r.onRender(n)},t.prototype.layoutKanban=function(a,e){for(var n=this,t=n.options,r=t.noLaneName?0:t.laneNameWidth,i=0,d={},o=!1,s=[],l=0;l<a.columns.length;++l){var c=a.columns[l];if(d[c.type])console.error('ZUI kanban error: duplicated column type "'+c.type+'" definition.');else{if(d[c.type]=c,c.$cardsCount=0,c.$kanbanData=a,c.$index=i,c.id||(c.id=c.type),c.asParent)o=!0,c.subs=[];else if(i++,c.parentType){var h=d[c.parentType];h&&(h.subs||(h.subs=[]),c.$subIndex=!h.subs&&h.subs.length||0,h.subs.push(c))}s.push(c)}}a.columns=s;var u=a.id,p=n.$,b=t.minColWidth*i+r,v=t.maxColWidth*i+r;e=e||p.children('.kanban-board[data-id="'+u+'"]'),e.css(t.fluidBoardWidth?"min-width":"width",b),e.css(t.fluidBoardWidth?"max-width":"width",v),n.maxKanbanBoardWidth=Math.max(n.maxKanbanBoardWidth,b),a.$layout={minWidth:b,laneNameWidth:r,columnsCount:i,hasParentCol:o,columnsMap:d,columnWidth:100/i};for(var f=a.cardsPerRow||t.cardsPerRow,m=function(a,e,r){if(a.asParent)return 0;r=r||e.items||e.cards||{};var i=r[a.type]||[];if(a.$cardsCount||(a.$cardsCount=0),a.$cardsCount+=i.length,a.parentType){var o=d[a.parentType];o&&(o.$cardsCount||(o.$cardsCount=0),o.$cardsCount+=i.length)}var s=Math.ceil(i.length/(a.cardsPerRow||e.cardsPerRow||f))*(t.cardHeight+t.cardSpace)+t.cardSpace,l=e.$parent?t.maxSubColHeight||t.maxColHeight:t.maxColHeight,c=e.$parent?t.minSubColHeight||t.minColHeight:t.minColHeight,h="auto"===l?s:Math.max(c,Math.min(l,s));return t.calcColHeight&&(h=t.calcColHeight(a,e,i,h,n)),h},g=a.lanes||[],l=0;l<g.length;++l){var k=g[l];k.kanban=u,k.$index=l,k.$kanbanData=a,k.$height=0;var C=k.subLanes;if(C){k.$height=0;for(var x=0;x<C.length;++x){var y=C[x];y.kanban=u,y.$parent=k,y.$index=x,y.$kanbanData=a,y.$height=0;for(var $=y.items||y.cards||{},w=0;w<s.length;++w)y.$height=Math.max(y.$height,m(s[w],y,$));k.$height+=y.$height,x>0&&t.subLaneSpace&&(k.$height+=t.subLaneSpace)}}else for(var $=k.items||k.cards||{},x=0;x<s.length;++x)k.$height=Math.max(k.$height,m(s[x],k,$))}},t.prototype.renderKanban=function(e){var n=this;if("number"==typeof e)e=n.data[e];else{var t=n.data.findIndex(function(a){return a.id===e.id});if(t>-1){var r=n.data[t];e=a.extend(r,e),n.data[t]=e}else n.data.push(e)}e.id||(e.id=a.zui.uuid());var i=e.id,d=n.options,o=n.$,s=o.children('.kanban-board[data-id="'+i+'"]');s.length?s.removeClass("kanban-expired"):s=a('<div class="kanban-board" data-id="'+i+'"></div>').appendTo(o),n.layoutKanban(e,s),n.renderKanbanHeader(e,s),s.children(".kanban-lane").addClass("kanban-expired");for(var l=e.lanes||[],c=null,h=0;h<l.length;++h){var u=l[h];n.renderLane(u,c,e.columns,s,e),c=u}s.children(".kanban-expired").remove(),d.onRenderKanban&&d.onRenderKanban(s,e,n)},t.prototype.renderKanbanHeader=function(e,n){var t=this,r=t.options,i=e.$layout.hasParentCol;n=n||t.$.children('.kanban-board[data-id="'+e.id+'"]');var d=n.children(".kanban-header");d.length||(d=a('<div class="kanban-header"><div class="kanban-cols kanban-header-cols"></div></div>').prependTo(n),r.useFlex||d.addClass("clearfix")),d.css("height",(i?2:1)*r.headerHeight).toggleClass("kanban-header-has-parent",!!i);var o=d.children(".kanban-cols");o.css("left",e.$layout.laneNameWidth).children(".kanban-col").addClass("kanban-expired");for(var s=e.columns,l=e.$layout.columnsMap||{},c=null,h=null,u=0;u<s.length;++u){var p=s[u];if(p.asParent)t.renderHeaderParentCol(s[u],o,c,e),c=p,h=null;else if(p.parentType){var b=l[p.parentType];t.renderHeaderCol(s[u],o,b,h,e),h=p}else t.renderHeaderCol(s[u],o,null,c,e),c=p,h=null}o.find(".kanban-expired").remove(),r.onRenderHeader&&r.onRenderHeader(o,e)},t.prototype.renderHeaderParentCol=function(e,n,t,r){var i=this,d=i.options,o=n.children('.kanban-header-parent-col[data-id="'+e.id+'"]'),s=t?n.children('.kanban-header-col[data-id="'+t.id+'"]:not(.kanban-expired)'):null;o.length?o.removeClass("kanban-expired").find(".kanban-header-sub-cols>.kanban-col").addClass("kanban-expired"):o=a(['<div class="kanban-col kanban-header-col kanban-header-parent-col" data-id="'+e.id+'">','<div class="kanban-header-col">','<div class="title">','<i class="icon"></i>','<span class="text"></span>',d.showCount?'<span class="count"></span>':"","</div>","</div>",'<div class="kanban-header-sub-cols">',"</div>","</div>"].join("")),s&&s.length?s.after(o):n.prepend(o),o.data("col",e).attr("data-type",e.type);var l=r.$layout.columnWidth;d.useFlex&&e.subs?o.css("flex",(e.subs.length||0)+" "+(e.subs.length||0)+" "+l*(e.subs.length||0)+"%"):o.css({width:l*(e.subs.length||0)+"%",left:e.$index*l+"%"});var c=o.children(".kanban-header-col");c.find(".title>.icon").attr("class","icon icon-"+(e.icon||""));var h=c.find(".title>.text").text(e.name).attr("title",e.name);if(e.color&&h.css("color",e.color),d.showCount){var u=void 0!==e.count?e.count:e.$cardsCount||0;d.showZeroCount||u||(u="");var p=c.find(".title>.count").text(u);d.onRenderCount&&d.onRenderCount(p,u,e,i)}d.onRenderHeaderCol&&d.onRenderHeaderCol(o,e,n,r)},t.prototype.renderHeaderCol=function(e,n,t,r,i){var d=this,o=d.options,s=e.parentType&&t;if(s){var l=n.children('.kanban-header-parent-col[data-id="'+t.id+'"]');n=l.children(".kanban-header-sub-cols")}var c=n.children('.kanban-header-col[data-id="'+e.id+'"]'),h=r?n.children('.kanban-header-col[data-id="'+r.id+'"]:not(.kanban-expired)'):null;!s&&c.length&&c.hasClass("kanban-header-parent-col")&&(c.remove(),c.length=0),c.length?c.removeClass("kanban-expired"):c=a(['<div class="kanban-col kanban-header-col" data-id="'+e.id+'">','<div class="title action-dbc" data-action="editCol">','<i class="icon"></i>','<span class="text"></span>',o.showCount?'<span class="count"></span>':"","</div>",'<div class="actions"></div>',"</div>"].join("")),h&&h.length?h.after(c):n.prepend(c),c.data("col",e).attr("data-type",e.type);var u=t&&t.subs&&t.subs.length?100/t.subs.length:i.$layout.columnWidth;o.useFlex?c.css("flex","1 1 "+u+"%"):c.css({left:(t?e.$subIndex:e.$index)*u+"%",width:u+"%"}),c.find(".title>.icon").attr("class","icon icon-"+(e.icon||""));var p=c.find(".title>.text").text(e.name).attr("title",e.name);if(e.color&&p.css("color",e.color),o.showCount){var b=void 0!==e.count?e.count:e.$cardsCount||0;o.showZeroCount||b||(b="");var v=c.find(".title>.count").text(b);o.onRenderCount&&o.onRenderCount(v,b,e,d)}o.onRenderHeaderCol&&o.onRenderHeaderCol(c,e,n,i)},t.prototype.renderLane=function(e,t,r,i,d){var o=this,s=o.options;i=i||o.$.children('.kanban-board[data-id="'+e.kanban+'"]');var l=i.children('.kanban-lane[data-id="'+e.id+'"]'),c=t?i.children('.kanban-lane[data-id="'+t.id+'"]:not(.kanban-expired)'):null;l.length?l.removeClass("kanban-expired"):(l=a('<div class="kanban-lane" data-id="'+e.id+'"></div>'),n||l.addClass("clearfix")),c&&c.length?c.after(l):i.children(".kanban-header").after(l);var h=e.subLanes?e.subLanes.length:0;l.attr("data-index",e.$index).data("lane",e).toggleClass("has-sub-lane",h>0).css({height:e.$height||"auto"}),o.virtualizeRender(d,"lane",l,function(){if(!s.noLaneName){var n=l.children('.kanban-lane-name[data-id="'+e.id+'"]');n.length||(n=a('<div class="kanban-lane-name action-dbc" data-action="editLaneName" data-id="'+e.id+'"></div>').prependTo(l)),n.empty().css("width",s.laneNameWidth).attr("title",e.name).append(a('<span class="text" />').text(e.name)),e.color&&n.css("background-color",e.color),s.onRenderLaneName&&s.onRenderLaneName(n,e,i,r,d)}l.children(".kanban-cols,.kanban-sub-lanes").addClass("kanban-expired");var t;t=e.subLanes?o.renderSubLanes(e,r,l,d):o.renderLaneCols(r,e.items||e.cards||{},l,e,d),s.useFlex||t.css("left",d.$layout.laneNameWidth),l.children(".kanban-expired").remove()},{lane:e,columns:r,kanban:d})},t.prototype.virtualizeRender=function(e,n,t,r,i){var d=this,o=d.virtualize,s=o?o[n]:null;return s?("function"==typeof s&&(s=s(i,t)),"number"==typeof s&&t.height(s),void t.virtualRender(a.extend({render:r},d.options.virtualRenderOptions))):r()},t.prototype.renderSubLanes=function(e,n,t,r){var i=this,d=t.children(".kanban-sub-lanes");d.length?d.removeClass("kanban-expired"):d=a('<div class="kanban-sub-lanes"></div>').appendTo(t),d.children(".kanban-sub-lane").addClass("kanban-expired");for(var o=0;o<e.subLanes.length;++o)i.renderSubLane(e.subLanes[o],n,d,r,o);return d.children(".kanban-expired").remove(),d},t.prototype.renderSubLane=function(e,t,r,i,d){var o=r.children('.kanban-sub-lane[data-id="'+e.id+'"]');o.length?o.removeClass("kanban-expired"):(o=a('<div class="kanban-sub-lane" data-id="'+e.id+'"></div>').appendTo(r),n||o.addClass("clearfix")),o.attr("data-index",d).data("lane",e).css({height:e.$height||"auto"}),o.children(".kanban-col").addClass("kanban-expired");var s=e.items||e.cards;s&&this.renderLaneCols(t,s,o,e,i),o.children(".kanban-expired").remove()},t.prototype.renderLaneCols=function(e,n,t,r,i){var d=this,o=t.children(".kanban-cols");o.length?o.removeClass("kanban-expired"):o=a('<div class="kanban-cols kanban-'+(r.$parent?"sub-":"")+'lane-cols"></div>').appendTo(t),o.children(".kanban-col").addClass("kanban-expired");for(var s=null,l=0;l<e.length;++l){var c=e[l];if(!c.asParent){for(var h=d.renderLaneCol(c,o,s),u=n[c.type]||[],p=0;p<u.length;++p){var b=u[p];b.$index=p,b.order=+b.order,Number.isNaN(b.order)&&(b.order=p)}u.sort(function(a,e){var n=a.order-e.order;return 0!==n?n:a.$index-e.$index}),d.renderColumnCards(c,u,h,r,i),s=c}}return o.children(".kanban-expired").remove(),o},t.prototype.renderColumnCards=function(a,e,n,t,r){var i=this,d=i.options,o=n.find(".kanban-lane-items"),s=a.cardsPerRow||t.cardsPerRow||r.cardsPerRow||d.cardsPerRow;if(d.virtualCardList){var l=o.data("zui.virtuallist");l?l.render(e,{countPerRow:s,itemHeight:d.cardHeight+d.cardSpace}):o.virtualList({countPerRow:s,itemHeight:d.cardHeight+d.cardSpace,list:e,itemClassName:"kanban-item",render:function(e,n,d){var d=n[e],s=e>0?n[e-1]:null;return d.$index=e,d.$col=a,d.$lane=t,i.renderCard(d,o,s,a,t,r)}})}else{o.children(".kanban-item").addClass("kanban-expired");for(var c=0;c<e.length;++c){var h=e[c],u=c>0?e[c-1]:null;h.$index=c,h.$col=a,h.$lane=t,i.renderCard(h,o,u,a,t,r)}o.children(".kanban-expired").remove()}o.css("padding",d.cardSpace/2).toggleClass("kanban-items-grid",s>1).attr("data-cards-per-row",s).data("cards",e)},t.prototype.renderLaneCol=function(e,n,t){var r=this,i=r.options,d=n.children('.kanban-lane-col[data-id="'+e.id+'"]'),o=t?n.children('.kanban-lane-col[data-id="'+t.id+'"]:not(.kanban-expired)'):null;d.length?d.removeClass("kanban-expired"):(d=a(['<div class="kanban-col kanban-lane-col" data-id="'+e.id+'">','<div class="kanban-lane-items scrollbar-hover"></div>',"</div>"].join("")),r.options.readonly||d.append(['<div class="kanban-lane-actions">','<button class="btn btn-default btn-block action" type="button" data-action="addItem"><span class="text-muted"><i class="icon icon-plus"></i> '+r.options.addItemText+"</span></button>","</div>"].join("")),i.laneItemsClass&&d.find(".kanban-lane-items").addClass(i.laneItemsClass),i.laneColClass&&d.addClass(i.laneColClass)),o&&o.length?o.after(d):n.prepend(d),d.attr({"data-parent":e.parentType?e.parentType:null,"data-type":e.type}).data("col",e);var s=e.$kanbanData.$layout.columnWidth;return i.useFlex?d.css("flex","1 1 "+s+"%"):d.css({left:e.$index*s+"%",width:s+"%"}),d},t.prototype.renderCard=function(e,n,t,r,i,d){var o=this.options,s=n.children('.kanban-item[data-id="'+e.id+'"]'),l=t?n.children('.kanban-item[data-id="'+t.id+'"]:not(.kanban-expired)'):null;s.length?s.removeClass("kanban-expired"):(s=a('<div class="kanban-item" data-id="'+e.id+'"></div>'),o.wrapCard&&s.append('<div class="kanban-card"></div>')),l&&l.length?l.after(s):n.prepend(s);var c=r.cardsPerRow||i.cardsPerRow||d.cardsPerRow||o.cardsPerRow;s.data("item",e).css({padding:o.cardSpace/2,width:c>1?100/c+"%":""});var h=o.wrapCard?s.children(".kanban-card"):s;h.css("height",o.cardHeight);var u=o.cardRender||o.itemRender;if(u)u(e,h,r,i,d);else{var p=h.find(".title");p.length||(p=a('<div class="title"></div>').appendTo(h)),p.text(e.name||e.title)}return s},t.DEFAULTS={minColWidth:100,maxColHeight:400,minColHeight:90,minSubColHeight:40,subLaneSpace:2,laneNameWidth:20,fixScroll:!0,headerHeight:32,cardHeight:40,cardSpace:10,cardsPerRow:1,wrapCard:!0,fluidBoardWidth:!0,addItemText:"添加条目",useFlex:!0,droppable:"auto",laneColClass:"",showCount:!0},a.fn.kanban=function(n){return this.each(function(){var r=a(this),i=r.data(e),d="object"==typeof n&&n;i||r.data(e,i=new t(this,d)),"string"==typeof n&&i[n]()})},t.NAME=e,a.fn.kanban.Constructor=t}(jQuery);