// ==UserScript==
// @name autofill script
// @namespace Low
// @version 1.3
// @updateURL https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/obfuscated.users.js
// @downloadURL https://raw.githubusercontent.com/CryingHaru/The-secretcave/main/obfuscated.users.js
// @description autofiller
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.5/xlsx.full.min.js
// @author ASV
// @match https://simmow.salud.gob.sv/conrec.php*
// @match localhost
// @grant unsafeWindow
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==
var F=b;function b(c,d){var e=a();return b=function(f,g){f=f-0x137;var h=e[f];return h;},b(c,d);}(function(c,d){var E=b,e=c();while(!![]){try{var f=parseInt(E(0x182))/0x1*(-parseInt(E(0x164))/0x2)+-parseInt(E(0x148))/0x3+parseInt(E(0x15f))/0x4+-parseInt(E(0x192))/0x5*(parseInt(E(0x146))/0x6)+-parseInt(E(0x172))/0x7*(-parseInt(E(0x181))/0x8)+-parseInt(E(0x144))/0x9*(-parseInt(E(0x169))/0xa)+parseInt(E(0x176))/0xb*(parseInt(E(0x14a))/0xc);if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x3f87f));function a(){var W=['Content-Type','onclick','hasOwnProperty','\x20Coloca\x20el\x20token\x20de\x20Dropbox\x20\x0a\x20Esto\x20solo\x20lo\x20haras\x20una\x20vez','Seleccionar\x20base\x20de\x20datos\x20actualizada','362555KbqYdt','getFullYear','input','Archivo\x20subido\x20con\x20éxito','token','value','readyState','link','checked','POST','meses','Reiniciar\x20todo','dias','select[name=\x22p_dept\x22]','then','location','getMonth','[name=\x22expe\x22]','createElement','change','\x20Meses\x20','type','keyup','utils','https://content.dropboxapi.com/2/files/upload','appendChild','catch','Token\x20invalido\x20o\x20error\x20de\x20subida,\x20Reintenta\x20la\x20subida\x20o\x20Reinicia\x20todo','split','306FlsOKz','setRequestHeader','30ldmYqy','addEventListener','335025cFtOau','\x20Años\x20','84vZZeSE','open','abs',',\x20Fecha\x20de\x20nacimiento:','Masculino','No\x20hay\x20ninguna\x20base\x20de\x20datos','input[name=\x22sex\x22][value=\x223\x22]','URL\x20del\x20archivo:\x20','error','¿Seguro\x20quieres\x20eliminar\x20la\x20base\x20de\x20datos\x20y\x20el\x20token?','La\x20fecha\x20de\x20calculo\x20de\x20edad\x20es:','Bearer\x20','SheetNames','Tiene:','application/json','.xls,.xlsx','send','stringify','status','reload','undefined','1952332nZbApW','button','onload','Authorization','keys','9242VeKqcV','input[name=\x22sex\x22][value=\x221\x22]','Obtener\x20url',',\x20sexo:','Femenino','24720yRYGPp','input[name=\x22meses\x22]','No\x20hay\x20token\x20de\x20dropbox','select[name=\x22p_muni\x22]','Dropbox-API-Arg','responseText','parse','readAsBinaryString','forEach','5894JdYsWZ','Base\x20de\x20datos\x20cargada','binary','clear','592922dsbMRS','read','Token\x20invalido\x20o\x20archivo\x20no\x20encontrado','https://api.dropboxapi.com/2/files/get_temporary_link','innerHTML','El\x20usuario\x20cancelo\x20el\x20reinicio','getDate','body','url','log','onreadystatechange','416cVMRAC','56qeTiWB','querySelector','Sheets','/updated.svl','edad','sheet_to_json','onchange','application/octet-stream','file','input[name=\x22fecha\x22]','input[name=\x22edad\x22]'];a=function(){return W;};return a();}let expediente=document[F(0x183)](F(0x138));const departamento=document['querySelector'](F(0x19f)),municipio=document[F(0x183)](F(0x16c));let edadaños=document[F(0x183)](F(0x18c)),edadmeses=document['querySelector'](F(0x16a)),edaddias=document['querySelector']('input[name=\x22dias\x22]'),hombre=document['querySelector'](F(0x165)),mujer=document['querySelector']('input[name=\x22sex\x22][value=\x222\x22]'),sindefinido=document[F(0x183)](F(0x150)),hoyn=document[F(0x183)](F(0x18b))[F(0x197)],numerodeexpediente,consoleoutput,dropboxtoken=GM_getValue(F(0x196)),linkdatos=GM_getValue(F(0x17e));if(dropboxtoken==null||dropboxtoken==''){consoleoutput=F(0x16b);let tokens=prompt(F(0x190),'');tokens==null||tokens==''?console['log'](null):(GM_setValue('token',tokens),console[F(0x17f)](tokens),document[F(0x1a1)][F(0x15d)]());}else{if(linkdatos==null||linkdatos=='')consoleoutput=F(0x14f);else{consoleoutput=F(0x173);let database,datanumero;fetch(linkdatos)[F(0x1a0)](c=>{return c['json']();})['then'](c=>{var G=F;database=c,expediente[G(0x147)](G(0x13d),function(d){var H=G;console[H(0x175)](),numerodeexpediente=expediente[H(0x197)];const f=database[numerodeexpediente]['S'],g=database[numerodeexpediente]['F'],h=database[numerodeexpediente]['N'];let i=h[H(0x143)](','),j=i[0x0],k=i[0x1];hoyn=document[H(0x183)]('input[name=\x22fecha\x22]')[H(0x197)],departamento[H(0x197)]=0xb,departamento['dispatchEvent'](new Event('change')),setTimeout(l,0x3e8);function l(){var I=H;municipio[I(0x197)]=0xb6,municipio['dispatchEvent'](new Event(I(0x13a)));}function m(){var J=H,o=g[J(0x143)]('/'),p=parseInt(o[0x0]),q=parseInt(o[0x1]),r=parseInt(o[0x2]),s=hoyn[J(0x143)]('/'),t=parseInt(s[0x0]),u=parseInt(s[0x1]),v=parseInt(s[0x2]),w=new Date(v,u,-0x1,t),x=new Date(r,q-0x1,p),y=w['getFullYear']()-x[J(0x193)](),z=w[J(0x137)]()-x[J(0x137)]();(z<0x0||z===0x0&&w['getDate']()<x[J(0x17c)]())&&y--;var A=0x0;w[J(0x17c)]()<x[J(0x17c)]()?A=0xb:A=w['getMonth']();x['getDate']()>w['getDate']()&&A--;A=Math[J(0x14c)](A-x[J(0x137)]());var B=0x0;if(w[J(0x17c)]()>x[J(0x17c)]())B=w[J(0x17c)]()-x['getDate']();else{if(w['getDate']()<x[J(0x17c)]()){var C=new Date(w[J(0x193)](),w['getMonth']()+0x1,0x0);B=C[J(0x17c)]()-x['getDate']()+w[J(0x17c)]();}}w[J(0x137)]()===0x1&&x[J(0x137)]()===0x2&&w[J(0x17c)]()>x[J(0x17c)]()&&(y%0x4===0x0&&(y%0x64!==0x0||y%0x190===0x0)&&B--);var D={'edad':y,'meses':A,'dias':B};return D;}let n=m();n[H(0x186)]==0x0||n[H(0x186)]==undefined?(edadaños[H(0x197)]='',n[H(0x19c)]==0x0||n['meses']==undefined?(edadmeses['value']='',edaddias[H(0x197)]=n[H(0x19e)]):edadmeses[H(0x197)]=n[H(0x19c)]):edadaños[H(0x197)]=n[H(0x186)],console[H(0x17f)]('Nombre:'+h+H(0x14d)+g+H(0x167)+f),console[H(0x17f)](H(0x157)+n[H(0x186)]+H(0x149)+n[H(0x19c)]+H(0x13b)+n['dias']+'\x20Dias'),console['log'](H(0x154)+hoyn),f==H(0x14e)?hombre[H(0x19a)]=!![]:f==H(0x168)?mujer[H(0x19a)]=!![]:sindefinido[H(0x19a)]=!![];});})[F(0x141)](console[F(0x152)]);}console[F(0x17f)](consoleoutput);var button=document[F(0x139)](F(0x160));button['innerHTML']=F(0x191),button[F(0x18e)]=function(){var K=F,c=document['createElement'](K(0x194));c[K(0x13c)]=K(0x18a),c['accept']=K(0x159),c[K(0x188)]=function(){var L=K,d=c['files'][0x0],e=new FileReader();e[L(0x161)]=function(){var M=L,f=XLSX[M(0x177)](e['result'],{'type':M(0x174)});f[M(0x156)][M(0x171)](function(g){var N=M,h=f[N(0x184)][g],i=XLSX[N(0x13e)][N(0x187)](h),j={};i[N(0x171)](function(k){var O=N,l=k[Object['keys'](k)[0x0]];l===undefined&&(l=O(0x15e)),!j[O(0x18f)](l)&&(j[l]={}),Object[O(0x163)](k)[O(0x171)](function(m){j[l][m]=k[m];});}),console[N(0x17f)](JSON[N(0x15b)](j,null,0x4)),setTimeout(function(){var P=N,k=document['createElement'](P(0x160));k[P(0x17a)]='Subir\x20archivo',k['onclick']=function(){var Q=P,l=JSON[Q(0x15b)](j,null,0x4),m=new XMLHttpRequest();m[Q(0x14b)](Q(0x19b),Q(0x13f)),m[Q(0x145)](Q(0x162),Q(0x155)+dropboxtoken),m['setRequestHeader'](Q(0x18d),Q(0x189)),m[Q(0x145)](Q(0x16d),JSON[Q(0x15b)]({'path':'/updated.svl','mode':'overwrite'})),m['send'](l),m['onreadystatechange']=function(){var R=Q;if(m[R(0x198)]===0x4){if(m[R(0x15c)]===0xc8){console[R(0x17f)](R(0x195));var n=new XMLHttpRequest();n[R(0x14b)](R(0x19b),R(0x179)),n[R(0x145)](R(0x162),R(0x155)+dropboxtoken),n['setRequestHeader']('Content-Type',R(0x158)),n['send'](JSON[R(0x15b)]({'path':R(0x185)})),n['onreadystatechange']=function(){var S=R;if(n[S(0x198)]===0x4){if(n[S(0x15c)]===0xc8){var o=JSON['parse'](n['responseText']),p=o[S(0x199)];console['log'](S(0x151)+p),GM_setValue(S(0x17e),p),document[S(0x1a1)][S(0x15d)]();}else alert('Error\x20archivo\x20no\x20encontrado'),console[S(0x152)]('Error\x20al\x20obtener\x20la\x20URL\x20del\x20archivo:\x20'+m[S(0x16e)]);}};}else alert(R(0x142)),console[R(0x152)]('Error\x20al\x20subir\x20el\x20archivo:\x20'+m[R(0x16e)]);}};},document[P(0x17d)][P(0x140)](k);},0x1388);});},e[L(0x170)](d);},c['click']();},document[F(0x17d)][F(0x140)](button);var loadbutton=document[F(0x139)](F(0x160));loadbutton[F(0x17a)]=F(0x166),loadbutton['onclick']=function(){var T=F,c=new XMLHttpRequest();c[T(0x14b)](T(0x19b),T(0x179)),c[T(0x145)](T(0x162),T(0x155)+dropboxtoken),c['setRequestHeader']('Content-Type','application/json'),c[T(0x15a)](JSON[T(0x15b)]({'path':T(0x185)})),c[T(0x180)]=function(){var U=T;if(c['readyState']===0x4){if(c['status']===0xc8){var d=JSON[U(0x16f)](c[U(0x16e)]),e=d['link'];console[U(0x17f)](U(0x151)+e),GM_setValue(U(0x17e),e),document[U(0x1a1)]['reload']();}else alert(U(0x178)),console['error']('Error\x20al\x20obtener\x20la\x20URL\x20del\x20archivo:\x20'+c['responseText']);}};},document[F(0x17d)][F(0x140)](loadbutton);}var reset=document[F(0x139)]('button');reset['innerHTML']=F(0x19d),reset[F(0x18e)]=function(){var V=F;confirm(V(0x153))?(GM_setValue(V(0x17e),''),GM_setValue(V(0x196),''),document['location']['reload']()):console[V(0x17f)](V(0x17b));},document['body'][F(0x140)](reset);
