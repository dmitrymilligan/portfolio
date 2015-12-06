String.prototype.printAddr = 
function (_hamper,_prefix,_postfix)
{
  _hamper=
  _prefix+
  "@"+
  this+
  (_postfix || '')
  return _hamper;
}

function getBrowserInfo() {
 var t,v = undefined;
 if (window.opera) t = 'Opera';
 else if (document.all) {
  t = 'IE';
  var nv = navigator.appVersion;
  var s = nv.indexOf('MSIE')+5;
  v = nv.substring(s,s+1);
 }
 else if (navigator.appName) t = 'Netscape';
 return {type:t,version:v};
}
 
function bookmark(a){
 var url = window.document.location;
 var title = window.document.title;
 var b = getBrowserInfo();
 if (b.type == 'IE' && 7 > b.version && b.version >= 4) window.external.AddFavorite(url,title);
 else if (b.type == 'Opera') {
  a.href = url;
  a.rel = "sidebar";
  a.title = url+','+title;
  return true;
 }
 else if (b.type == "Netscape") window.sidebar.addPanel(title,url,"");
 else alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
 return false;
}
function icon_text(){
var map_icon = document.getElementById('map');
var mail_icon = document.getElementById('mail');
var print_icon = document.getElementById('print');
var add_to_favorites_icon = document.getElementById('add_to_favorites');
var search_icon = document.getElementById('search');
var text_icon = document.getElementById('icon_text');
map_icon.onmouseover = function() {text_icon.innerHTML='Карта сайта';};
map_icon.onmouseout = function() {text_icon.innerHTML='';};
mail_icon.onmouseover = function() {text_icon.innerHTML="Написать письмо";};
mail_icon.onmouseout = function() {text_icon.innerHTML='';};
print_icon.onmouseover = function() {text_icon.innerHTML="Версия для печати";};
print_icon.onmouseout = function() {text_icon.innerHTML='';}; 
add_to_favorites_icon.onmouseover = function() {text_icon.innerHTML="Добавить в избранное";};
add_to_favorites_icon.onmouseout = function() {text_icon.innerHTML='';}; 
search_icon.onmouseover = function() {text_icon.innerHTML="Поиск по сайту";};
search_icon.onmouseout = function() {text_icon.innerHTML='';}; 
}


