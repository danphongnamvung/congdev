//<![CDATA[
	var sidebarcontainer = $("#sidebar-wrapper"),sidebarbutton = $("#sidebar-button");snip = $('.index .post-snip,.index .post-cmt,#main-wrapper,.index .post-outer,.block-image,.index .post,.index .post h2,#show-ga');$(function (){sidebarbutton.click(function (){if (sidebarcontainer.is(":hidden")){sidebarcontainer.slideDown(150);snip.removeAttr('style');$('.index .post-snip').css({'margin-bottom':'5px'})}else{sidebarcontainer.fadeOut(100);$('#main-wrapper').css({'width':'100%'});$('.index .post-outer').css({'width':'25%','float':'left'});$('.block-image').css({'width':'100%'});$('.index .post').css({'padding':'5px','margin':'5px','margin-bottom':'25px'});$('.index .post h2').css({'font-size':'17px','white-space':'inherit','height':'55px'});$('.index .post-snip,.index .post-cmt,#show-ga').css({'display':'none'})}})});
//]]>
