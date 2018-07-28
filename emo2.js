/**
 * BLOGGER EMOTICON GIF
 * ---------------------------------------------------
 * by CONGDEV
 * URL: http://congdev.blogspot.com/
 * ---------------------------------------------------
 */

/*

//<![CDATA[
var emoRange = "#comments p, div.emoWrap",
    putEmoAbove = "iframe#comment-editor",
    emoMessage = "Click vào biểu tượng sau đó copy xuống khung comment";
 Emoticon bar before comment-form
$(function() {
    $(putEmoAbove)
        .before('<div style="text-align:center" class="emoWrap"> :) :)) ;(( :-) =)) ;( ;-( :d :-d @-) :p :o :&gt;) (o) [-( :-? (p) :-s (m) 8-) :-t :-b  b-( :-# =p~  $-)  (b)  (f) x-)  (k)  (h)  (c)  cheer  (sm)  (fu)  (ku)  (bg)  (lol)<br/><b><a href="javascript:openup_parseHTML()" rel="nofollow" title="Mã hóa code trước khi đưa vào bình luận"><span class="text_style">Mã hóa code đưa vào comments</span></a></b></div>');
    var emo = function(emo, imgRep, emoKey) {
        $(emoRange)
            .each(function() {
            $(this)
                .html($(this)
                .html()
                .replace(/<br>:/g, "<br> :")
                .replace(/<br>;/g, "<br> ;")
                .replace(/<br>=/g, "<br> =")
                .replace(/<br>\^/g, "<br> ^")
                .replace(emo, " <img style='max-height:24px' src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
        });
    };
    emo(/\s:\)\)+/g, "http://3.bp.blogspot.com/-xHVZJoIJtRo/UMRDg_Lw1GI/AAAAAAAAD-8/FY1DAOhh1gc/s1600/38-namkna-blogspot-com.gif", ":))");
    emo(/\s;\(\(+/g, "http://1.bp.blogspot.com/-RvT7i2jKjXw/UMRDyYUopuI/AAAAAAAAD_E/LJPAl3paagU/s1600/39-namkna-blogspot-com.gif", ";((");
emo(/\s:\)+/g, "http://4.bp.blogspot.com/-dQxhGD8-aWs/UMQ7JOs33ZI/AAAAAAAAD6c/n7LcxzKTo4g/s1600/01-namkna.gif", ":)");
emo(/\s:-\)+/g, "http://1.bp.blogspot.com/-rwEklfTBgzE/UMQ7dn9SzqI/AAAAAAAAD6k/vrACHZyhtRU/s1600/02-namkna.gif", ":-)");
    emo(/\s=\)\)+/g, "http://1.bp.blogspot.com/-lBEAm0DUxH0/UMQ7rtQkkHI/AAAAAAAAD6s/Zh4qkORfOLw/s1600/03-namkna1.gif", "=))");
    emo(/\s;\(+/g, "http://3.bp.blogspot.com/-40bMIa-ZLvE/UMQ73x7M4VI/AAAAAAAAD60/-u4sy8S7Cm4/s1600/04-namkna.gif", ";(");
    emo(/\s;-\(+/g, "http://3.bp.blogspot.com/-SzLWz1VjNh4/UMQ8FMn3UeI/AAAAAAAAD68/-g4kjAoJU0U/s1600/05-namkna.gif", ";-(");
    emo(/\s:d/ig, "http://1.bp.blogspot.com/-hZnXYKPPopo/UMQ8U-0LU1I/AAAAAAAAD7E/IEZGkqLcUaY/s1600/07-namkna.gif", ":d");
    emo(/\s:-d/ig, "http://2.bp.blogspot.com/-OLkpgazlkoo/UMQ8x7kSutI/AAAAAAAAD7M/8fOLO-35lqM/s1600/08-namkna.gif", ":-d");
    emo(/\s@-\)+/g, "http://2.bp.blogspot.com/-5Q3NuLQKo9g/UMQ9CuKPFcI/AAAAAAAAD7U/Buq3OzvSJfU/s1600/09-namkna-blogspot-com.gif", "@-)");
    emo(/\s:p/ig, "http://4.bp.blogspot.com/-i6chk59H5Z4/UMQ9Tu7l1HI/AAAAAAAAD7c/qyM0dT4QKtc/s1600/10-namkna-blogspot-com.gif", ":p");
    emo(/\s:o/ig, "http://4.bp.blogspot.com/-RVTCTVecAYQ/UMQ9itoisRI/AAAAAAAAD7k/4XxLP1nhi2U/s1600/11-namkna-blogspot-com.gif", ":o");
    emo(/\s:&gt;\)+/g, "http://4.bp.blogspot.com/-8VUS4IlcYYQ/UMQ9wVVGItI/AAAAAAAAD7s/OqUKNZTWMrQ/s1600/12-namkna-blogspot-com.gif", ":&gt;)");
    emo(/\s\(o\)+/ig, "http://2.bp.blogspot.com/-k8u9L73z5As/UMQ99j0ueXI/AAAAAAAAD70/j0IU4A6fPmk/s1600/13-namkna-blogspot-com.gif", "(o)");
    emo(/\s\[-\(+/g, "http://1.bp.blogspot.com/-FdjQwxJjTCs/UMQ-NAAaZhI/AAAAAAAAD78/Bod79hb3QeA/s1600/14-namkna-blogspot-com.gif", "[-(");
    emo(/\s:-\?/g, "http://3.bp.blogspot.com/-FHFWEg4ZOhM/UMQ-Z_XAcsI/AAAAAAAAD8E/QMIof5vrjEc/s1600/15-namkna-blogspot-com.gif", ":-?");
    emo(/\s\(p\)+/ig, "http://4.bp.blogspot.com/-VzQC7CsVqkk/UMQ-zTdgCeI/AAAAAAAAD8M/r2GK5U07j_w/s1600/16-namkna-blogspot-com.gif", "(p)");
    emo(/\s:-s/ig, "http://2.bp.blogspot.com/-ClkSoaRN-dg/UMQ_AE-YNAI/AAAAAAAAD8U/nkEWDqftYe0/s1600/17-namkna-blogspot-com.gif", ":-s");
    emo(/\s\(m\)+/ig, "http://1.bp.blogspot.com/-xrQfUzMfQR0/UMQ_MO1TAqI/AAAAAAAAD8c/PIQkiUIORzg/s1600/18-namkna-blogspot-com.gif", "(m)");
    emo(/\s8-\)+/ig, "http://1.bp.blogspot.com/-AgM8SdCu3H8/UMQ_Zn-v7EI/AAAAAAAAD8k/tXBymTPA-9Y/s1600/19-namkna-blogspot-com.gif", "8-)");
    emo(/\s:-t/ig, "http://3.bp.blogspot.com/--i7nVu8FyCc/UMQ_kWE76SI/AAAAAAAAD8s/GR9iiu9zOYY/s1600/20-namkna-blogspot-com.gif", ":-t");
    emo(/\s:-b/ig, "http://4.bp.blogspot.com/-dMmJIaCvvQA/UMQ_xHnAjcI/AAAAAAAAD80/zkg8OmLaCbk/s1600/21-namkna-blogspot-com.gif", ":-b");
    emo(/\sb-\(+/ig, "http://2.bp.blogspot.com/-ETnB7-FeWP8/UMQ_9o_h1_I/AAAAAAAAD88/dLDbJW21f-Q/s1600/22-namkna-blogspot-com.gif", "b-(");
    emo(/\s:-#/ig, "http://4.bp.blogspot.com/-MWLMGQAIVyQ/UMRAKgWV_OI/AAAAAAAAD9E/cYYzvQN3kUM/s1600/23-namkna-blogspot-com.gif", ":-#");
    emo(/\s=p~/ig, "http://4.bp.blogspot.com/-3sKMTsRdxQ0/UMRAaM0CL1I/AAAAAAAAD9M/B2QnlpkEDO4/s1600/24-namkna-blogspot-com.gif", "=p~");
    emo(/\s\$-\)+/ig, "http://4.bp.blogspot.com/-I15O1_bJVME/UMRAqfh17HI/AAAAAAAAD9U/pV1uktTYu50/s1600/25-namkna-blogspot-com.gif", "$-)");
    emo(/\s\(b\)+/ig, "http://1.bp.blogspot.com/-fPRBbN354Sc/UMRA4rraSMI/AAAAAAAAD9c/l53RDPhh_FU/s1600/26-namkna-blogspot-com.gif", "(b)");
    emo(/\s\(f\)+/ig, "http://3.bp.blogspot.com/-UDhHGOBdbbg/UMRBFO6_xxI/AAAAAAAAD9k/oLKxCCm3GM0/s1600/27-namkna-blogspot-com.gif'", "(f)");
    emo(/\sx-\)+/ig, "http://3.bp.blogspot.com/-R5sL3xZ-4l8/UMRBSX0J2WI/AAAAAAAAD9s/1dbQE-AEeY8/s1600/28-namkna-blogspot-com.gif", "x-)");
    emo(/\s\(k\)+/ig, "http://3.bp.blogspot.com/-8t4Q5RkV0nI/UMRBi-WtjWI/AAAAAAAAD90/2uqHX9WPk0I/s1600/29-namkna-blogspot-com.gif", "(k)");
    emo(/\s\(h\)+/ig, "http://4.bp.blogspot.com/-4z2B9iLtTNs/UMRBwv3FVDI/AAAAAAAAD98/aD5Zl4bOxqo/s1600/30-namkna-blogspot-com.gif", "(h)");
    emo(/\s\(c\)+/ig, "http://1.bp.blogspot.com/-JcY3gJz5_n8/UMRB761KjRI/AAAAAAAAD-E/FhdbpxhhK4o/s1600/31-namkna-blogspot-com.gif", "(c)");
    emo(/\scheer/ig, "http://1.bp.blogspot.com/-FXqLxh2m30Q/UMRCIpES4OI/AAAAAAAAD-M/NtuPn7YRCEc/s1600/32-namkna-blogspot-com.gif", "cheer");
    emo(/\s\(s\m\)+/ig, "http://2.bp.blogspot.com/--um8m41mSe0/UMRCauqCMAI/AAAAAAAAD-U/xiGnL4g925E/s1600/33-namkna-blogspot-com.gif", "(sm)");
    emo(/\s\(f\u\)+/ig, "http://2.bp.blogspot.com/-CsrNdkKmI-0/UMRCooHXvwI/AAAAAAAAD-c/oGIiNzrSBa0/s1600/34-namkna-blogspot-com.gif", "(fu)");
    emo(/\s\(k\u\)+/ig, "http://2.bp.blogspot.com/-YfV02_JhzWk/UMRC0Kbny5I/AAAAAAAAD-k/CQhJQDN-x7Q/s1600/35-namkna-blogspot-com.gif", "(ku)");
    emo(/\s\(b\g\)+/ig, "http://3.bp.blogspot.com/-zfW0Ak0kC_E/UMRDDDhza8I/AAAAAAAAD-s/uhAufPRNdW0/s1600/36-namkna-blogspot-com.gif", "(bg)");
    emo(/\s\(l\o\l\)+/ig, "http://2.bp.blogspot.com/-ydXWgF_L_30/UMRDQcXXtcI/AAAAAAAAD-0/oB6YMm_3e1A/s1600/37-namkna-blogspot-com.gif", "(lol)");

// Show alert one times!
    $('div.emoWrap')
        .one("click", function() {
        if (emoMessage) {
            alert(emoMessage);
        }
    });
    // Click to show the code!
  $('.emo')
        .css('cursor', 'pointer')
        .live("click", function(e) {
        $('.emoKey')
            .remove();
        $(this)
            .after('<input class="emoKey" type="text" size="' + this.alt.length + '" value=" ' + this.alt + '" />');
$('.emoKey')
            .trigger("select");
e.stopPropagation();
    });
    $('.emoKey')
        .live("click", function() {
        $(this)
            .focus()
            .select();
    });
});
$(document).ready(function() {
 $('.separator a').attr({'class':'fancy','data-fancybox-group':'gallery'});
$('.fancy')
.fancybox({padding: 5, openEffect : 'elastic', openSpeed  : 400, closeEffect : 'elastic', closeSpeed  : 400, closeClick : true, helpers : {overlay : null}});
});
function openup_parseHTML() { window.open(&quot;http://namkna.blogspot.com/p/code-convert-for-blogspot-chuyen-doi.html&quot;, &quot;followblog&quot;, &quot;height=700, width=630, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no&quot; ); }

//]]>
