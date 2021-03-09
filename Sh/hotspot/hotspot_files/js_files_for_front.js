"undefined"===typeof window.tdcPostSettings&&(window.tdcPostSettings={tdbTemplateType:"all"});if(window.tdbVue&&"undefined"!==typeof window.tdbVue.router){var eventHub=new Vue;Vue.component("image-links",{template:'\n            <a :class="classes" :href="link">{{text}}</a>\n        ',props:{classes:[],link:"",text:""}});new Vue({el:"#tdb-modal",router:window.tdbVue.router})}window.tdbVueManager&&"undefined"!==typeof window.tdbVueManager.router&&new Vue({el:"#tdb-modal-website-manager",router:window.tdbVueManager.router});
(function(){function a(b,d,a,e,g,f,h){var c=jQuery(".tdb-"+b+"-templates");c.length&&"undefined"===typeof c.data("tdb-templates")&&("undefined"!==typeof f&&f.call(),tdbGetMobileTemplates(b,d,c),f="","undefined"!==typeof tdcState&&(f=tdcState.isMobileComposer()?"1":""),f={action:"tdb_get_"+b+"_templates",mobile_templates:f,_nonce:window.tdb_globals.wpRestNonce},f[b+"_id"]=d,jQuery.ajax({type:"POST",url:td_ajax_url,data:f,success:function(f,k,n){c.html("");f=jQuery.parseJSON(f);k='<div class="tdb-templates-header"><div class="tdb-templates-header-item"><span>Cloud Templates</span></div>'+
("undefined"!==typeof e&&!0===e?'<div class="tdb-templates-header-item"><span>Global</span></div>':"")+'<div class="tdb-templates-header-item"><span>Mobile Template</span></div></div>';var l=n="",m=!1;_.isArray(f)&&f.length?(_.each(f,function(c,f,h){f="";"true"===c.is_current.toString()&&(f=" tdb-current",m=!0);f='<div class="tdb-template-el tdb-'+b+"-template-el"+f+'"  data-template-id="'+c.template_id+'"><div class="tdb-template-el-id tdb-'+b+'-template-id">'+c.template_id+'</div><div class="tdb-template-el-title" data-type="'+
b+'" data-action="'+a+'" title="'+c.template_title+' - Set template for this post" data-'+b+'-id="'+d+'" data-template-id="'+c.template_id+'">'+c.template_title+'</div><div class="tdb-template-el-wrap"><div class="tdb-template-el-icon"><div class="tdb-template-el-options"><div title="Delete template" class="tdb-template-el-delete"></div><div title="Duplicate template" class="tdb-template-el-duplicate"></div><div title="Rename template" class="tdb-template-el-edit"></div></div></div></div>';"undefined"!==
typeof e&&!0===e&&(h="","undefined"!==typeof g&&""!==g&&(h='data-global-action="'+g+'"'),f+='<div class="tdb-template-el-global tdb-'+b+'-template-global" title="Set as Global Template" data-type="'+b+'" data-'+b+'-id="'+d+'" data-template-id="'+c.template_id+'" '+h+'><input type="checkbox" class="tdb-template-el-global-input tdb-'+b+'-template-global-input" '+(!0===c.is_global?'checked="checked" ':"")+'><label></label><span class="tdb-template-el-global-checked tdb-'+b+'-template-global-checked">Global</span></div>');
f+='<div class="tdb-template-el-mobile-wrap tdb-'+b+'-template-mobile" data-type="'+b+'" data-'+b+'-id="'+d+'" data-template-id="'+c.template_id+'"><span class="tdb-template-el-mobile">'+(""===c.mobile_template_title?"-":'<span class="tdb-template-el-mobile-active">Yes</span>')+'</span><div class="tdb-template-el-mobile-btns" data-mobile-template-id="'+c.mobile_template_id+'" data-template-id="'+c.template_id+'"><div title="New mobile template" class="'+b+"id-"+c.template_id+' tdb-template-el-mobile-btn tdb-template-el-mobile-blank tdb-create-mobile-template" data-type="'+
b+'" data-'+b+'-id="'+d+'" data-template-id="'+c.template_id+'"></div><div title="Load mobile template from TagDiv Cloud Library" class="'+b+"id-"+c.template_id+' tdb-template-el-mobile-btn tdb-template-el-mobile-import tdb-load-mobile-template"></div></div></div>';l+=f+"</div>"}),"undefined"!==typeof e&&!0===e&&(n+='<div class="tdb-template-el tdb-'+b+"-template-el "+(m?"":"tdb-current")+'"><div class="tdb-template-el-id tdb-'+b+'-template-id"></div><div class="tdb-template-el-title" data-type="'+
b+'" data-action="'+a+'" title="Set as Global Template" data-'+b+'-id="'+d+'" data-template-id="">Global Template</div></div>'),c.append(n+k+l)):(c.append(k),c.append('<div class="tdb-templates-desc">No cloud templates. Please import one or more templates from <b>Cloud Library</b>.</div>'));c.data("tdb-templates",!0);"undefined"!==typeof h&&h.call()},error:function(b,d,a){}}))}ezoicSiteSpeed(jQuery(document), String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-dot-ready/).substring(1).slice(0,-1), function(){jQuery("#wp-admin-bar-tdb_template_builder_disabled a").click(function(b){b.preventDefault();
alert("Please select tagDiv Builder Template from the theme panel or set a default template. The current page/post uses a template that is not editable.")});jQuery("#wp-admin-bar-new-tdb_templates").hide()});jQuery("body").on("click","#wp-admin-bar-tdb_template_load, .tdb-load-mobile-template",function(b){b.preventDefault();var d=jQuery(this),a=d.attr("class");b="";var e=!1;d.hasClass("tdb-load-mobile-template")&&(e=!0);"undefined"!==typeof a&&(0===a.indexOf("singleid-")?(b={wp_type:"single",templateType:"Single"},
d=a.split(" ")[0].replace("singleid-",""),e?b.assign_mobile_to_template=d:b.assign_to_post=d):0===a.indexOf("categoryid-")?(b={wp_type:"category",templateType:"Category"},d=a.split(" ")[0].replace("categoryid-",""),e?b.assign_mobile_to_template=d:b.assign_to_category=d):0===a.indexOf("404")?(b={wp_type:"404",templateType:"404"},d=btoa(window.location.href),e?b.assign_mobile_to_template=d:b.assign_to_404=d):0===a.indexOf("date")?(b={wp_type:"date",templateType:"Date"},d=btoa(window.location.href),
e?b.assign_mobile_to_template=d:b.assign_to_archive=d):0===a.indexOf("search")?(b={wp_type:"search",templateType:"Search"},d=btoa(window.location.href),e?b.assign_mobile_to_template=d:b.assign_to_search=d):0===a.indexOf("attachment")?(b={wp_type:"attachment",templateType:"Attachment"},d=btoa(window.location.href),e?b.assign_mobile_to_template=d:b.assign_to_attachment=d):0===a.indexOf("authorid")?(b={wp_type:"author",templateType:"Author"},d=a.split(" ")[0].replace("authorid-",""),e?b.assign_mobile_to_template=
d:b.assign_to_author=d):0===a.indexOf("tagid")?(b={wp_type:"tag",templateType:"Tag"},d=a.split(" ")[0].replace("tagid-",""),e?b.assign_mobile_to_template=d:b.assign_to_tag=d):0===a.indexOf("pageid")&&(b={wp_type:"page",templateType:"Pages"},d=a.split(" ")[0].replace("pageid-",""),e&&(b.assign_mobile_to_template=d)),""!==b&&(b.hide_mobile_selector="hide",window.tdbVue.router.push({name:"loadRoute",params:b})))}).on("click",".tdb-create-mobile-template",function(b){var a=jQuery(this),c=a.data("template-id"),
e=a.data("type");tdConfirm.modal({caption:"Create Mobile "+("page"===e?"Page":"Template"),objectContext:window,callbackYes:function(){var b=jQuery("#tdb-new-template-name"),d=jQuery("#tdb-copy-content");jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_create_mobile_template",template_id:c,template_title:b.val(),template_type:e,copyContent:d.is(":checked")?"1":"0",_nonce:window.tdb_globals.wpRestNonce},success:function(b,d,f){b=jQuery.parseJSON(b);"undefined"!==typeof b.mobile_template_id&&
(tdConfirm.close(),d=a.closest(".tdb-template-el"),d.length&&(f=d.find(".tdb-template-el-mobile:first"),d.find(".tdb-template-el-mobile-btns:first").data("mobile-template-id",b.mobile_template_id),f.html('<span class="tdb-template-el-mobile-active">Yes</span>')),tdbGetMobileTemplates(e,c))},error:function(b,a,d){}})},htmlInfoContent:"Enter the mobile "+("page"===e?"page":"template")+' name: <input id="tdb-new-template-name" type="text" value=""onfocus="(function(e){ jQuery( e.target ).siblings(\'#tdb-modal-notice\').fadeOut(50); })(event)"/><em id="tdb-modal-notice"></em><div class="tdb-form-check"><input type="checkbox" class="form-check-input" id="tdb-copy-content"><label class="form-check-label" for="tdb-copy-content"><span class="tdb-check"></span><span class="tdb-check-title">Copy content</span></label></div>',
textYes:"Create",textNo:"Cancel"})}).on("click","#wp-admin-bar-tdb_template_single > a, #wp-admin-bar-tdb_template_category > a, #wp-admin-bar-tdb_template_404 > a, #wp-admin-bar-tdb_template_date > a, #wp-admin-bar-tdb_template_search > a, #wp-admin-bar-tdb_template_attachment > a, #wp-admin-bar-tdb_template_author > a, #wp-admin-bar-tdb_template_tag > a",function(b){b.preventDefault();var d=jQuery(this),c=d.parent(),e=c.attr("class"),g="",f="",h="",k="";switch(c.attr("id")){case "wp-admin-bar-tdb_template_single":g=
"single";f="tdb_assign_single_template_to_post";h="tdb_assign_single_template_global";k=e.replace(g+"id-","");break;case "wp-admin-bar-tdb_template_category":g="category";f="tdb_assign_cat_template_to_cat";h="tdb_assign_cat_template_global";k=e.replace(g+"id-","");break;case "wp-admin-bar-tdb_template_404":g="404";f="tdb_assign_404_template_global";h="";k=e.replace("templateid-","");break;case "wp-admin-bar-tdb_template_date":g="date";f="tdb_assign_date_template_global";h="";k=e.replace("templateid-",
"");break;case "wp-admin-bar-tdb_template_search":g="search";f="tdb_assign_search_template_global";h="";k=e.replace("templateid-","");break;case "wp-admin-bar-tdb_template_attachment":g="attachment";f="tdb_assign_attachment_template_global";h="";k=e.replace("templateid-","");break;case "wp-admin-bar-tdb_template_author":g="author";f="tdb_assign_author_template_to_author";h="tdb_assign_author_template_global";k=e.replace(g+"id-","");break;case "wp-admin-bar-tdb_template_tag":g="tag",f="tdb_assign_tag_template_to_tag",
h="tdb_assign_tag_template_global",k=e.replace(g+"id-","")}c=jQuery(".tdb-"+g+"-templates");c.length?b.currentTarget===this&&jQuery(b.target).parent().attr("id")==="wp-admin-bar-tdb_template_"+g&&(c.toggle(),d.toggleClass("tdb-templates-open"),d.toggleClass("tdb-templates-close")):(d.addClass("tdb-templates-loading"),c=jQuery('<div class="tdb-templates tdb-'+g+'-templates" data-type="'+g+'"></div>'),c.insertAfter(d),c.show());a(g,k,f,""===h?!1:!0,h,void 0,function(){d.removeClass("tdb-templates-loading");
d.addClass("tdb-templates-open")})}).on("click","#wp-admin-bar-tdc_page_mobile_template > a",function(b){b.preventDefault();var a=jQuery(this);b=a.parent().attr("class").replace("pageid-","");var c=jQuery("#tdb-mobile-templates");c.length?(c.toggle(),a.toggleClass("tdb-templates-open"),a.toggleClass("tdb-templates-close")):(a.addClass("tdb-templates-loading"),a.addClass("tdb-templates-open"),tdbGetMobileTemplates("page",b,a,void 0,function(){a.removeClass("tdb-templates-loading");jQuery("#tdb-mobile-templates").show()}))}).on("click",
"#wp-admin-bar-tdc_create_mobile_page",function(a){var b=jQuery(this).attr("class").split(" ")[0].replace("pageid-","");tdConfirm.modal({caption:"Create Mobile Page",objectContext:window,callbackYes:function(){var a=jQuery("#tdb-new-template-name"),d=jQuery("#tdb-copy-content");jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_create_mobile_template",template_id:b,template_title:a.val(),template_type:"page",copyContent:d.is(":checked")?"1":"0",_nonce:window.tdb_globals.wpRestNonce},success:function(d,
c,e){"undefined"!==typeof jQuery.parseJSON(d).mobile_template_id&&(tdConfirm.close(),d=jQuery("#wp-admin-bar-tdc_page_mobile_template"),d.length&&d.find("a:first").html(a.val()),tdbGetMobileTemplates("page",b))},error:function(a,b,d){}})},htmlInfoContent:'Enter the mobile page name: <input id="tdb-new-template-name" type="text" value="" onfocus="(function(e){ jQuery( e.target ).siblings(\'#tdb-modal-notice\').fadeOut(50); })(event)"/><em id="tdb-modal-notice"></em><div class="tdb-form-check"><input type="checkbox" class="form-check-input" id="tdb-copy-content"><label class="form-check-label" for="tdb-copy-content"><span class="tdb-check"></span><span class="tdb-check-title">Copy content</span></label></div>',
textYes:"Create",textNo:"Cancel"})}).on("click",".tdb-single-template-global label, .tdb-category-template-global label, .tdb-author-template-global label, .tdb-tag-template-global label",function(a){a.preventDefault();a=jQuery(this);var b=a.closest(".tdb-template-el-global"),c=b.data("type"),e=b.data("global-action");b=a.parent().data(c+"-id");var g=a.parent().data("template-id"),f=jQuery(".tdb-templates");a={action:e,template_id:g,_nonce:window.tdb_globals.wpRestNonce};switch(c){case "single":a.single_id=
b;break;case "category":a.category_id=b;break;case "tag":a.tag_id=b;break;case "author":a.author_id=b}jQuery.ajax({type:"POST",url:td_ajax_url,data:a,success:function(a,b,d){a=jQuery.parseJSON(a);"undefined"!==typeof a.reload&&window.location.reload();"undefined"!==typeof a.global_template_id&&(f.find(".tdb-"+c+'-template-global > input[type="checkbox"]').removeAttr("checked"),f.find(".tdb-"+c+'-template-global[data-template-id="'+g+'"] > input[type="checkbox"]').attr("checked",!0))},error:function(a,
b,d){}});return!1}).on("click",".tdb-template-el-title",function(a){a.preventDefault();if(a.target===a.currentTarget){var b=jQuery(this),c=b.data("action");a=b.data("type");var e=b.data(a+"-id");b=b.data("template-id");c={action:c,template_id:b,_nonce:window.tdb_globals.wpRestNonce};switch(a){case "single":c.single_id=e;break;case "category":c.category_id=e;break;case "author":c.author_id=e;break;case "tag":c.tag_id=e}jQuery.ajax({type:"POST",url:td_ajax_url,data:c,success:function(a,b,d){"undefined"!==
typeof jQuery.parseJSON(a).reload&&window.location.reload()},error:function(a,b,d){}});return!1}}).on("change",".tdb-template-el-title-input",function(a){a.preventDefault();a=jQuery(this);var b=a.closest(".tdb-templates"),c=a.closest(".tdb-template-el"),e=c.find(".tdb-template-el-title:first");b.data("type");b=c.data("template-id");e.html();jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_change_template_name",template_id:b,template_title:a.val(),_nonce:window.tdb_globals.wpRestNonce},success:function(a,
b,d){a=jQuery.parseJSON(a);"undefined"!==typeof a.template_id&&(e.html(a.template_title),e.removeData("title"))},error:function(a,b,d){}})}).on("click",".tdb-template-el-edit",function(a){a.preventDefault();var b=jQuery(this);a=b.closest(".tdb-templates");var c=b.closest(".tdb-template-el");b=c.find(".tdb-template-el-title:first");a.data("type");c.data("template-id");c=b.html();"undefined"===typeof b.data("title")&&(a.find(".tdb-template-el-title").each(function(a,b){a=jQuery(b);b=a.data("title");
"undefined"!==typeof b&&(a.html(b),a.removeData("title"))}),b.data("title",b.html()),b.html('<input class="tdb-template-el-title-input" type="text" value="'+c+'">'),b.find("input").focus().select())}).on("click",".tdb-template-el-duplicate",function(b){b.preventDefault();b=jQuery(this);var d=b.closest(".tdb-templates"),c=b.closest(".tdb-template-el"),e=c.find(".tdb-template-el-title:first"),g=d.data("type");b=c.data("template-id");var f=e.html(),h=e.data(g+"-id"),k=e.data("action"),l="";0<=["single",
"category","tag","author"].indexOf(g)&&(c=c.find(".tdb-template-el-global:first"),c.length&&(l=c.data("global-action")));tdbApi.run({wpNonce:window.tdb_globals.wpRestNonce,cloudEndPoint:"td-cloud-library/new_template",post:{postId:b,templateType:g,templateName:f,duplicateTemplate:!0},done:function(b){d.removeData("tdb-templates");a(g,0<=["single","category","tag","author"].indexOf(g)?h:"",k,""===l?!1:!0,l)},error:function(a){console.log("td-cloud-library/new_template ( duplicate template ) - ERROR",
a)}});jQuery(".tdb-template-el-title-input").trigger("change")}).on("keyup",".tdb-template-el-title-input",function(a){27===a.keyCode&&jQuery(this).trigger("change")}).on("click",".tdb-template-el-delete",function(a){a=jQuery(this);a.closest(".tdb-templates");var b=a.closest(".tdb-template-el");a=b.data("template-id");jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_delete_template",template_id:a,_nonce:window.tdb_globals.wpRestNonce},success:function(a,d,g){a=jQuery.parseJSON(a);"undefined"!==
typeof a.reload&&window.location.reload();"undefined"!==typeof a.template_id&&b.remove()},error:function(a,b,d){}});jQuery(".tdb-template-el-title-input").trigger("change")}).on("click",function(a){a=jQuery(a.target);a.closest("#wp-admin-bar-tdb_template_single").length||a.closest("#wp-admin-bar-tdb_template_category").length||a.closest("#wp-admin-bar-tdb_template_404").length||a.closest("#wp-admin-bar-tdb_template_date").length||a.closest("#wp-admin-bar-tdb_template_search").length||a.closest("#wp-admin-bar-tdb_template_attachment").length||
a.closest("#wp-admin-bar-tdb_template_author").length||a.closest("#wp-admin-bar-tdb_template_tag").length||a.closest("#wp-admin-bar-tdc_page_mobile_template").length||(a=jQuery(".tdb-templates"),a.length&&(a.hide(),a.prev("a").removeClass("tdb-templates-open").addClass("tdb-templates-close"),jQuery(".tdb-template-el-title-input").trigger("change")),a=jQuery("#tdb-mobile-templates"),a.length&&(a.hide(),a.prev("a").removeClass("tdb-templates-open").addClass("tdb-templates-close")))}).on("click","#tdb-mobile-templates .tdb-template-el-mobile-list-el",
function(a){var b=jQuery(this),c=jQuery("#tdb-mobile-templates");a=b.data("template-id");var e=b.data("mobile-template-id"),g=c.closest(".tdb-template-el-mobile-btns"),f=b.closest(".tdb-template-el-mobile-wrap"),h=b.closest("#wp-admin-bar-tdc_page_mobile_template");jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"tdb_set_mobile_template",template_id:a,mobile_template_id:e,_nonce:window.tdb_globals.wpRestNonce},success:function(a,d,m){a=jQuery.parseJSON(a);_.isObject(a)&&!_.isUndefined(a.result)&&
1===a.result&&(g.data("mobile-template-id",e),c.find(".tdb-template-el-mobile-list-el").removeClass("tdb-current"),c.find('.tdb-template-el-mobile-list-el[data-mobile-template-id="'+e+'"]').addClass("tdb-current"),f.length&&(a=f.find(".tdb-template-el-mobile:first"),""===e?a.html("-"):a.html('<span class="tdb-template-el-mobile-active">Yes</span>')),h.length&&h.find("a:first").html("<span>Mobile page</span>"+b.find(".tdb-template-el-mobile-list-title:first").html()))}})}).on("click","#tdb-mobile-templates .tdb-template-el-mobile-list-edit",
function(a){a.stopPropagation()}).on("mouseenter",".tdb-template-el-mobile-btns",function(a){a=jQuery(this);var b=a.data("mobile-template-id"),c=a.data("template-id"),e=jQuery("#tdb-mobile-templates");e.find(".tdb-template-el-mobile-list-inner").is(":empty")||(e.appendTo(a).show(),e.find(".tdb-template-el-mobile-list-el").removeClass("tdb-current"),e.find(".tdb-template-el-mobile-list-el").data("template-id",c),e.find('.tdb-template-el-mobile-list-el[data-mobile-template-id="'+b+'"]').addClass("tdb-current"))}).on("mouseleave",
".tdb-template-el-mobile-btns",function(a){a=jQuery(".tdb-templates");var b=jQuery("#tdb-mobile-templates");b.hide();b.insertBefore(a);b.find(".tdb-template-el-mobile-list-el").removeClass("tdb-current")});window.tdbGetMobileTemplates=function(a,d,c,e,g,f,h){var b=jQuery("#tdb-mobile-templates",f);b.length||(b=jQuery('<div id="tdb-mobile-templates" class="tdb-template-el-mobile-list"><div class="tdb-template-el-mobile-list-inner"></div></div>'),b.hide());"undefined"!==typeof c&&b.insertAfter(c);c=
{action:"tdb_get_"+a+"_mobile_templates",_nonce:window.tdb_globals.wpRestNonce};c[a+"_id"]=d;"undefined"!==typeof e&&e.call();jQuery.ajax({type:"POST",url:td_ajax_url,data:c,success:function(c,f,e){var k="";c=jQuery.parseJSON(c);if(_.isArray(c)&&c.length){var l=!1,m="template";"page"===a&&(m="page");_.each(c,function(a,b,c){b="";_.isUndefined(a.is_current)||(b="tdb-current",l=!0);k+='<div class="tdb-template-el-mobile-list-el '+b+'" data-mobile-template-id="'+a.template_id+'" data-template-id="'+
d+'"><div class="tdb-template-el-mobile-list-title" title="'+a.template_title+'">'+a.template_title+'</div><a class="tdb-template-el-mobile-list-edit" title="Edit mobile '+m+' with tagDiv Composer" href="'+a.template_url+'" target="_blank"></a></div>'});""!==k&&(c="",l||(c="tdb-current",l=!0),k='<div class="tdb-template-el-mobile-list-el '+c+'" data-mobile-template-id="" data-template-id="'+d+'"><div class="tdb-template-el-mobile-list-title">No mobile '+m+"</div></div>"+k);""!==k&&(b.html('<div class="tdb-template-el-mobile-list-inner">'+
k+"</div>"),c=b.parent(".tdb-template-el-mobile-btns"),!_.isUndefined(h)&&c.length&&(b.find(".tdb-template-el-mobile-list-el").removeClass("tdb-current"),b.find(".tdb-template-el-mobile-list-el").data("template-id",d),b.find('.tdb-template-el-mobile-list-el[data-mobile-template-id="'+h+'"]').addClass("tdb-current")),b.is(":visible")&&c.length?b.show():b.hide())}""===k&&"page"===a&&b.html('<div class="tdb-template-el-mobile-list-inner"><div class="tdb-template-el-mobile-list-no-el">No mobile page, please import or create a new mobile page.</div></div>');
"undefined"!==typeof g&&g.call()}})}})();var tdbMenu={};
(function(){tdbMenu={items:[],item:function(){this.blockUid="";this._outsideClickArea=this._mainMenu=this._itemsWithSubmenu=null;this._outsideClickExcludedAreas="";this._openMenuClass="tdb-hover";this._openMenuBodyClass="tdb-open-menu";this._is_initialized=this.isMegaMenuParentPos=this.isMegaMenuFull=this.inComposer=!1},init:function(){tdbMenu.items=[]},_initialize_item:function(a){if(!0!==a._is_initialized){tdbMenu._setHover(a);var b=0<jQuery("."+a.blockUid).parents(".td-header-template-wrap").length;
0<a.jqueryObj.find(".tdb-menu .tdb-mega-menu .sub-menu").length&&(window.tdb_globals.isAjax?b||(a.isMegaMenuFull&&tdbMenu.megaMenuFull(a,a.inComposer),a.isMegaMenuParentPos&&tdbMenu.megaMenuParentPos(a,a.inComposer)):(a.isMegaMenuFull&&tdbMenu.megaMenuFull(a,a.inComposer),a.isMegaMenuParentPos&&tdbMenu.megaMenuParentPos(a,a.inComposer)));a._is_initialized=!0}},addItem:function(a){if("undefined"===typeof a.blockUid)throw"item.blockUid is not defined";tdbMenu.items.push(a);tdbMenu._initialize_item(a)},
deleteItem:function(a){for(var b=0;b<tdbMenu.items.length;b++)if(tdbMenu.items[b].blockUid===a)return tdbMenu.items.splice(b,1),!0;return!1},megaMenuFull:function(a,b){function d(){h=c.find(".tdb-menu .tdb-mega-menu .sub-menu");ezoicSiteSpeed({objOrFunction:h.each, object:h, function: "each"}, String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-ready/).substring(1).slice(0,-1), function(){f=-e.left+"px";jQuery(this).attr("style","left:"+f+"; width: "+jQuery("body").outerWidth()+"px !important")});k||(c.find(".tdb-mega-menu-inactive").removeClass("tdb-mega-menu-inactive"),k=!0)}var c=a.jqueryObj,e,g,f,h,k=!1;jQuery(window).resize(function(){setTimeout(function(){e=
c.offset();g=e.left;d();b&&ezoicSiteSpeed(setInterval, String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-ready/).substring(1).slice(0,-1), function(){e=c.offset();e.left!==g&&(d(),g=e.left)},1E3)},1500)});jQuery(window).resize()},megaMenuParentPos:function(a,b){function d(){f=c.find(".tdb-menu .tdb-mega-menu ul");f.show();ezoicSiteSpeed({objOrFunction:f.each, object:f, function: "each"}, String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-ready/).substring(1).slice(0,-1), function(){jQuery(this).css("left","");h=jQuery(this).offset();k=h.left;0>k?jQuery(this).offset({left:0}):(l=jQuery(window).width()-(k+jQuery(this).outerWidth()),0>l&&jQuery(this).offset({left:jQuery(window).width()-jQuery(this).outerWidth()}))});m||(c.find(".tdb-mega-menu-inactive").removeClass("tdb-mega-menu-inactive"),
m=!0);f.hide()}var c=a.jqueryObj,e,g,f,h,k,l,m=!1;setTimeout(function(){jQuery(window).resize(function(){e=c.offset();g=e.left;d();b&&ezoicSiteSpeed(setInterval, String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-ready/).substring(1).slice(0,-1), function(){e=c.offset();e.left!==g&&(d(),g=e.left)},1E3)});jQuery(window).resize()},60)},_getSubmenuPosition:function(a){var b=jQuery(window).width();a=a.children(".sub-menu").first();if(0<a.length){var d=a.offset().left+a.width();d>b&&(a.parent().parent().hasClass("tdb-menu")?a.css("left","-"+(d-b)+"px"):a.addClass("reversed").css("left","-"+(a.width()+
0)+"px"))}},_getMouseAngleDirection:function(a,b,d,c){return Math.atan2(d-a,c-b)/Math.PI*180},_setHover:function(a){var b=a.jqueryObj.find(".tdb-menu");b.supersubs({minWidth:10,maxWidth:20,extraWidth:1,applyMin:!0});var d=b.find(".menu-item-has-children > a, .tdb-mega-menu > a");d.parent().find(".sub-menu").first().css("display","none");if(tdDetect.isTouchDevice)jQuery(document).on("touchstart","body",function(b){var c=d.parent(),f=jQuery("body");f.hasClass(a._openMenuBodyClass)&&!c.is(b.target)&&
0===c.has(b.target).length&&(c.removeClass(a._openMenuClass),c.children(".sub-menu").hide(),f.removeClass(a._openMenuBodyClass))}),d.on("touchstart",function(b){b.preventDefault();b.stopPropagation();var c=jQuery(this);b=c.parent();var e=jQuery("body");b.hasClass(a._openMenuClass)?null!==c.attr("href")&&"#"!==c.attr("href")?window.location.href=c.attr("href"):((b.parent().hasClass("tdb-menu")||b.parent().hasClass("top-header-menu"))&&e.removeClass(a._openMenuBodyClass),b.removeClass(a._openMenuClass),
b.find(".sub-menu").hide(),b.find("li").removeClass(a._openMenuClass)):(b.parent().hasClass("tdb-menu")||b.parent().hasClass("top-header-menu")?(d.parent().removeClass(a._openMenuClass),d.parent().children(".sub-menu").hide()):(c=b.siblings(),c.removeClass(a._openMenuClass),c.find(".sub-menu").hide(),c.find("li").removeClass(a._openMenuClass)),b.addClass(a._openMenuClass),b.children(".sub-menu").show(),tdbMenu._getSubmenuPosition(b),e.addClass(a._openMenuBodyClass))});else{var c={},e,g=!0;b.on("mouseleave",
function(){d.parent().removeClass(a._openMenuClass);d.parent().children(".sub-menu").hide();c={}});b.find(".menu-item").hover(function(){var b=jQuery(this),h="",k,l;if(b.hasClass("menu-item-has-children")||b.hasClass("tdb-mega-menu"))if(b.parent().hasClass("tdb-menu"))if(jQuery.isEmptyObject(c))b.addClass(a._openMenuClass),b.children(".sub-menu").show(),c=b;else{if(b[0]!==c[0]){var m=l=k=0;var n=null;!0===g&&(g=!1,e=setTimeout(function(){d.parent().removeClass(a._openMenuClass);d.parent().children(".sub-menu").hide();
b.addClass(a._openMenuClass);b.children(".sub-menu").show();c=b},400));b.on("mousemove",function(f){5<=k?(k=0,n=tdbMenu._getMouseAngleDirection(l,m,f.pageX,f.pageY),l=f.pageX,m=f.pageY):(k++,0===l&&0===m&&(l=f.pageX,m=f.pageY));null!==n&&(85<n||-85>n)&&(d.parent().removeClass(a._openMenuClass),d.parent().children(".sub-menu").hide(),b.addClass(a._openMenuClass),b.children(".sub-menu").show(),b.off("mousemove"),clearTimeout(e),g=!0,c=b)})}}else h=b.siblings(),h.removeClass(a._openMenuClass),h.find(".sub-menu").hide(),
h.find("li").removeClass(a._openMenuClass),b.addClass(a._openMenuClass),b.children(".sub-menu").show(),tdbMenu._getSubmenuPosition(b);else b.parent().hasClass("tdb-menu")?jQuery.isEmptyObject(c)||(m=l=k=0,n=null,!0===g&&(g=!1,e=setTimeout(function(){d.parent().removeClass(a._openMenuClass);d.parent().children(".sub-menu").hide();c={}},400)),b.on("mousemove",function(f){5<=k?(k=0,n=tdbMenu._getMouseAngleDirection(l,m,f.pageX,f.pageY),l=f.pageX,m=f.pageY):(k++,0===l&&0===m&&(l=f.pageX,m=f.pageY));null!==
n&&(85<n||-85>n)&&(d.parent().removeClass(a._openMenuClass),d.parent().children(".sub-menu").hide(),b.off("mousemove"),clearTimeout(e),g=!0,c={})})):(c=b.parent(),h=b.siblings(),h.removeClass(a._openMenuClass),h.find(".sub-menu").hide(),h.find("li").removeClass(a._openMenuClass))},function(){var a=jQuery(this);!1===g&&(clearTimeout(e),g=!0);a.off("mousemove")})}},unsetHover:function(a){null!==a._itemsWithSubmenu&&a._itemsWithSubmenu.off();null!==a._outsideClickArea&&a._outsideClickArea.off()}}})();
var tdbMenuItemPullDown={};
(function(){tdbMenuItemPullDown={init:function(){setTimeout(function(){jQuery(".tdb-menu-items-pulldown").each(function(a,b){a=jQuery(b);var d=a.parent().attr("id"),c=jQuery("."+d);b="";"none"!==c.css("max-width")&&(b=c.css("max-width"));if(c.hasClass("tdb-menu-items-in-more")){var e=a.find(".tdb-menu:first"),g=e.parents(".tdb-menu-items-pulldown:first"),f=[],h=new tdPullDown.item;if(void 0!==c.css("display")&&"inline-block"===c.css("display")){var k=c.closest(".vc_column_container");g=k;c="";c=0!==
k.find(".tdc-elements").length?".tdc-elements":".wpb_wrapper";k.find(c+" > .td_block_wrap").each(function(){var a=.9*k.outerWidth(!0),b=jQuery(this).outerWidth(!0);if(jQuery(this).data("td-block-uid")!==d)if(b<a)f.push(jQuery(this));else return!1})}h.blockUid=d;h.horizontal_jquery_obj=e;h.vertical_jquery_obj=a.find(".tdb-menu-items-dropdown:first");h.horizontal_element_css_class="tdb-menu-item-button";h.horizontal_no_items_css_class="tdb-menu-items-empty";h.container_jquery_obj=g;h.horizontal_max_width=
b;h.excluded_jquery_elements=f;tdPullDown.add_item(h)}e.parents(".tdb-menu-items-pulldown:first").hasClass("tdb-menu-items-pulldown-inactive")&&e.parents(".tdb-menu-items-pulldown:first").removeClass("tdb-menu-items-pulldown-inactive")})},50)}}})();ezoicSiteSpeed(jQuery(), String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-dot-ready/).substring(1).slice(0,-1), function(){tdbMenu.init()});ezoicSiteSpeed(null, String(/windowLoad/).substring(1).slice(0,-1), String(/jQuery-window-load/).substring(1).slice(0,-1), function(){tdbMenuItemPullDown.init()});var tdbSearch={};
(function(){tdbSearch={items:[],init:function(){tdbSearch.items=[]},item:function(){this.jqueryObj=this.blockAtts=this.blockUid=void 0;this._is_search_open=!1;this._last_request_results_count=this._current_selection_index=0;this._first_down_up=!0;this._resultsLimit=void 0;this._openSearchFormClass="";this._is_initialized=this.isSearchFormFull=this.inComposer=!1},_initialize_item:function(a){if(!0!==a._is_initialized){jQuery(document).on("click",function(b){jQuery("."+a.blockUid+" .tdb-head-search-form-input").get(0)!==
b.target&&!0===a._is_search_open&&tdbSearch.hide_search_box(a)});a.jqueryObj.find(".tdb-head-search-btn").on("click",function(b){b.preventDefault();b.stopPropagation();!0===a._is_search_open?tdbSearch.hide_search_box(a):tdbSearch.show_search_box(a)});a.jqueryObj.find(".tdb-head-search-form-input").keydown(function(b){if(b.which&&39===b.which||b.keyCode&&39===b.keyCode||b.which&&37===b.which||b.keyCode&&37===b.keyCode)tdbSearch.set_input_focus(a);else{if(b.which&&13===b.which||b.keyCode&&13===b.keyCode)return b=
a.jqueryObj.find(".tdb-aj-cur-element"),0<b.length?window.location=b.find(".entry-title a").attr("href"):jQuery(this).parent().parent().submit(),!1;if(b.which&&40===b.which||b.keyCode&&40===b.keyCode)return tdbSearch.move_prompt_down(a),!1;if(b.which&&38===b.which||b.keyCode&&38===b.keyCode)return tdbSearch.move_prompt_up(a),!1;(b.which&&8===b.which||b.keyCode&&8===b.keyCode)&&1===jQuery(this).val().length&&a.jqueryObj.find(".tdb-aj-search").empty();tdbSearch.set_input_focus(a);setTimeout(function(){tdbSearch.do_ajax_call(a)},
100);return!0}});var b=0<jQuery("."+a.blockUid).parents(".td-header-template-wrap").length;window.tdb_globals.isAjax?b||(a.isSearchFormFull?tdbSearch.searchFormWidth(a,!0,a.inComposer):tdbSearch.searchFormWidth(a,!1,a.inComposer)):a.isSearchFormFull?tdbSearch.searchFormWidth(a,!0,a.inComposer):tdbSearch.searchFormWidth(a,!1,a.inComposer);a._is_initialized=!0}},addItem:function(a){if("undefined"===typeof a.blockUid)throw"item.blockUid is not defined";tdbSearch.items.push(a);tdbSearch._initialize_item(a)},
deleteItem:function(a){for(var b=0;b<tdbSearch.items.length;b++)if(tdbSearch.items[b].blockUid===a)return tdbSearch.items.splice(b,1),!0;return!1},searchFormWidth:function(a,b,d){function c(){h=-g.left+"px";k.attr("style",k.attr("style")+";left:"+h)}var e=a.jqueryObj,g,f,h,k=e.find(".tdb-drop-down-search");jQuery(window).resize(function(){k.attr("style","width: "+jQuery("body").outerWidth()+"px !important");b&&setTimeout(function(){g=e.offset();f=g.left;c();d&&ezoicSiteSpeed(setInterval, String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-ready/).substring(1).slice(0,-1), function(){g=e.offset();
g.left!==f&&(c(),f=g.left)},1E3)},500)});jQuery(window).resize()},show_search_box:function(a){a.jqueryObj.find(".tdb-drop-down-search").addClass(a._openSearchFormClass);!0!==tdDetect.isIos&&setTimeout(function(){document.querySelector("."+a.blockUid+" .tdb-head-search-form-input").focus()},200);a._is_search_open=!0},hide_search_box:function(a){a.jqueryObj.find(".tdb-drop-down-search").removeClass(a._openSearchFormClass);a._is_search_open=!1},move_prompt_up:function(a){!0===a._first_down_up?(a._first_down_up=
!1,0===a._current_selection_index?a._current_selection_index=a._last_request_results_count-1:a._current_selection_index--):0===a._current_selection_index?a._current_selection_index=a._last_request_results_count:a._current_selection_index--;tdbSearch._repaintCurrentElement(a)},move_prompt_down:function(a){!0===a._first_down_up?a._first_down_up=!1:a._current_selection_index===a._last_request_results_count?a._current_selection_index=0:a._current_selection_index++;tdbSearch._repaintCurrentElement(a)},
set_input_focus:function(a){a._current_selection_index=0;a._first_down_up=!0;a.jqueryObj.find(".tdb-search-form").fadeTo(100,1);a.jqueryObj.find(".td_module_wrap").removeClass("tdb-aj-cur-element")},remove_input_focus:function(a){0!==a._last_request_results_count&&a.jqueryObj.find(".tdb-head-search-form-input").addClass("tdb-head-search-nofocus")},_repaintCurrentElement:function(a){a.jqueryObj.find(".td_module_wrap").removeClass("tdb-aj-cur-element");a._current_selection_index>a._last_request_results_count-
1?(a.jqueryObj.find(".tdb-search-form").fadeTo(100,1),a.jqueryObj.find(".tdb-head-search-form-input").removeClass("tdb-head-search-nofocus")):(tdbSearch.remove_input_focus(a),a.jqueryObj.find(".td_module_wrap").eq(a._current_selection_index).addClass("tdb-aj-cur-element"))},do_ajax_call:function(a){var b=a.jqueryObj.find(".tdb-head-search-form-input").val();""===b?tdbSearch.set_input_focus(a):tdLocalCache.exist("tdb-"+b)?tdbSearch.process_ajax_response(tdLocalCache.get("tdb-"+b),a):jQuery.ajax({type:"POST",
url:td_ajax_url,data:{action:"td_ajax_search",module:"tdb_module_search",atts:a.blockAtts,td_string:b,limit:a._resultsLimit},success:function(d,c,e){tdLocalCache.set("tdb-"+b,d);tdbSearch.process_ajax_response(d,a)},error:function(a,b,e){window.console.log(e)}})},process_ajax_response:function(a,b){var d=b.jqueryObj.find(".tdb-head-search-form-input").val(),c=b.jqueryObj.find(".tdb-aj-search");""===d?c.empty():(a=jQuery.parseJSON(a),a.td_search_query===d&&(b._current_selection_index=0,b._last_request_results_count=
a.td_total_in_list,b._first_down_up=!0,c.html(a.td_data),"undefined"!==typeof window.tdAnimationStack&&!0===window.tdAnimationStack.activated&&(window.tdAnimationStack.check_for_new_items(".tdb-aj-search .td-animation-stack",window.tdAnimationStack.SORTED_METHOD.sort_left_to_right,!0,!1),window.tdAnimationStack.compute_items(!1))))},hideAllItems:function(){tdbSearch.items.forEach(function(a){tdbSearch.hide_search_box(a)})}}})();ezoicSiteSpeed(jQuery(), String(/documentReady/).substring(1).slice(0,-1), String(/jQuery-document-dot-ready/).substring(1).slice(0,-1), function(){tdbSearch.init()});
