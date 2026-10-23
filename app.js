const $ = s => document.querySelector(s);
const viewer=$('#viewer'), viewport=$('#viewport'), layer=$('#map-layer'), img=$('#map-image'), story=$('#story');
let current='iliad', activeStory=null, scale=1, minScale=1, tx=0, ty=0, pointers=new Map(), gesture=null, moved=false, previousFocus=null;
function draw(){layer.style.transform=`translate(${tx}px, ${ty}px) scale(${scale})`}
function clamp(){const w=layer.offsetWidth*scale,h=layer.offsetHeight*scale,vw=viewport.clientWidth,vh=viewport.clientHeight; tx=w<=vw?(vw-w)/2:Math.min(0,Math.max(vw-w,tx));ty=h<=vh?(vh-h)/2:Math.min(0,Math.max(vh-h,ty));}
function fit(){if(!img.naturalWidth)return;layer.style.width=img.naturalWidth+'px';minScale=Math.min(viewport.clientWidth/img.naturalWidth,viewport.clientHeight/img.naturalHeight);scale=minScale;tx=(viewport.clientWidth-img.naturalWidth*scale)/2;ty=(viewport.clientHeight-img.naturalHeight*scale)/2;draw()}
function zoomAt(factor,x,y){const next=Math.max(minScale,Math.min(minScale*8,scale*factor));tx=x-(x-tx)*next/scale;ty=y-(y-ty)*next/scale;scale=next;clamp();draw()}
function openMap(key){current=key;const map=MAPS[key];viewer.hidden=false;document.body.style.overflow='hidden';$('#viewer-name').textContent=map.title+' — '+map.subtitle;$('#viewer-kicker').textContent=map.kicker;$('#place-count').textContent=map.places.length;document.querySelectorAll('[data-map]').forEach(b=>{b.classList.toggle('active',b.dataset.map===key);b.setAttribute('aria-current',b.dataset.map===key?'page':'false')});$('#places').hidden=true;$('#hotspots').replaceChildren();$('#place-list').replaceChildren();map.places.forEach((p,i)=>{const b=document.createElement('button');b.className='hotspot';b.style.left=p[1]+'%';b.style.top=p[2]+'%';b.setAttribute('aria-label','Discover '+p[0]);b.addEventListener('click',e=>{if(moved && e.detail !== 0){e.preventDefault();return}openStory(i)});$('#hotspots').append(b);const item=document.createElement('button');item.textContent=p[0];const arrow=document.createElement('span');arrow.textContent='↗';item.append(arrow);item.addEventListener('click',()=>openStory(i));$('#place-list').append(item)});img.alt=map.title+' — '+map.subtitle+' illustrated map';img.onload=fit;img.src=map.image;if(img.complete&&img.naturalWidth)fit();applyLanguage()}
function openStory(i){activeStory=i;const p=MAPS[current].places[i];previousFocus=document.activeElement;$('#story-kicker').textContent=MAPS[current].title.toUpperCase()+' / PLACE '+String(i+1).padStart(2,'0');$('#story-title').textContent=p[0];$('#story-text').textContent=p[3];story.showModal();applyLanguage()}
function closeStory(){story.close();activeStory=null;previousFocus?.focus()}
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openMap(b.dataset.open)));document.querySelectorAll('[data-map]').forEach(b=>b.addEventListener('click',()=>openMap(b.dataset.map)));$('#back').addEventListener('click',()=>{viewer.hidden=true;document.body.style.overflow='';document.querySelector(`[data-open="${current}"]`).focus()});$('#list-toggle').addEventListener('click',()=>{$('#places').hidden=!$('#places').hidden});$('#close-places').addEventListener('click',()=>{$('#places').hidden=true;$('#list-toggle').focus()});$('#close-story').addEventListener('click',closeStory);$('#story-done').addEventListener('click',closeStory);story.addEventListener('click',e=>{if(e.target===story)closeStory()});$('#zoom-in').addEventListener('click',()=>zoomAt(1.5,viewport.clientWidth/2,viewport.clientHeight/2));$('#zoom-out').addEventListener('click',()=>zoomAt(1/1.5,viewport.clientWidth/2,viewport.clientHeight/2));$('#reset').addEventListener('click',fit);window.addEventListener('resize',()=>{if(!viewer.hidden)fit()});
function local(e){const r=viewport.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top}}
function begin(){const ps=[...pointers.values()];if(ps.length===1)gesture={type:'drag',x:ps[0].x,y:ps[0].y,tx,ty};else if(ps.length>=2){const [a,b]=ps;gesture={type:'pinch',distance:Math.hypot(a.x-b.x,a.y-b.y),scale,tx,ty,x:(a.x+b.x)/2,y:(a.y+b.y)/2}}}
viewport.addEventListener('pointerdown',e=>{pointers.set(e.pointerId,local(e));e.target.setPointerCapture(e.pointerId);if(pointers.size===1)moved=false;begin()});viewport.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,local(e));const ps=[...pointers.values()];if(!gesture)return;if(gesture.type==='drag'&&ps.length===1){const dx=ps[0].x-gesture.x,dy=ps[0].y-gesture.y;if(Math.hypot(dx,dy)>5)moved=true;tx=gesture.tx+dx;ty=gesture.ty+dy}else if(gesture.type==='pinch'&&ps.length>=2){moved=true;const [a,b]=ps;const cx=(a.x+b.x)/2,cy=(a.y+b.y)/2;scale=Math.max(minScale,Math.min(minScale*8,gesture.scale*Math.hypot(a.x-b.x,a.y-b.y)/gesture.distance));tx=cx-(gesture.x-gesture.tx)*scale/gesture.scale;ty=cy-(gesture.y-gesture.ty)*scale/gesture.scale}clamp();draw()});function end(e){pointers.delete(e.pointerId);if(pointers.size)begin();else gesture=null}viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);viewport.addEventListener('wheel',e=>{e.preventDefault();const p=local(e);zoomAt(Math.exp(-e.deltaY*.001),p.x,p.y)},{passive:false});

// Language selection changes text only; it never reopens or resets a map.
const uiTranslations = [
 ['.header-note','UN MONDE DE RÉCITS'],
 ['.intro-copy .eyebrow','<span>✦</span> UNE CRÉATION STUDIOLO'],
 ['h1','Le Cycle troyen<br><em>Atlas interactif</em>'],
 ['.lead','Trois cartes. Une histoire extraordinaire.<br>Explorez les lieux, les personnages et les voyages du Cycle troyen.'],
 ['.intro-copy .primary','Explorer l’atlas <span>↗</span>'],
 ['.image-caption span:last-child','LE MONDE DU CYCLE TROYEN'],
 ['.intro-index','UN COMPAGNON INTERACTIF <span>✦</span> POUR LES ESPRITS CURIEUX'],
 ['.section-heading .eyebrow','LA COLLECTION <span> /  01—03</span>'],
 ['.section-heading h2','Choisissez votre carte<span>.</span>'],
 ['.section-heading > p','Des rivages de Troie au long voyage du retour, découvrez l’épopée, étape par étape.'],
 ['[data-open="iliad"] .card-number','01 / LA GUERRE'],['[data-open="iliad"] strong','L’Iliade'],['[data-open="iliad"] .card-sub','Champ de bataille'],
 ['[data-open="troy"] .card-number','02 / LA CITÉ'],['[data-open="troy"] strong','La Chute de Troie'],['[data-open="troy"] .card-sub','Plan de la cité'],
 ['[data-open="odyssey"] .card-number','03 / LE VOYAGE'],['[data-open="odyssey"] strong','L’Odyssée'],['[data-open="odyssey"] .card-sub','Le voyage'],
 ['.book-promo .eyebrow','LE LIVRE QUI ACCOMPAGNE L’ATLAS'],['.book-promo h2','Le Cycle troyen'],
 ['.book-link','Découvrir le livre <span aria-hidden="true">↗</span><span class="sr-only"> (s’ouvre dans un nouvel onglet)</span>'],
 ['.closing p','Chaque carte a son histoire.<br><em>Par où commencerez-vous ?</em>'],['.closing a','RETOUR AUX CARTES ↑'],
 ['footer span:nth-of-type(1)','LE CYCLE TROYEN · ATLAS INTERACTIF'],['footer span:nth-of-type(2)','UNE INVITATION À L’EXPLORATION'],
 ['#back span','Toutes les cartes'],['[data-map="iliad"] span','L’Iliade'],['[data-map="troy"] span','La Chute de Troie'],['[data-map="odyssey"] span','L’Odyssée'],
 ['.map-help span','Déplacez la carte · Pincez pour zoomer · Touchez un symbole'],
 ['.places-head span','EXPLORER LA CARTE'],['.places-head h3','Lieux et récits'],
 ['.viewer-bottom > span:first-child','✦ STUDIOLO · ATLAS INTERACTIF'],['.viewer-bottom > span:nth-child(2)','TOUCHEZ UN SYMBOLE POUR EN SAVOIR PLUS'],
 ['.map-learn-more','En savoir plus <span aria-hidden="true">↗</span><span class="sr-only"> (s’ouvre dans un nouvel onglet)</span>'],
 ['#story-done','Continuer l’exploration <span>→</span>']
];
const uiOriginals=uiTranslations.map(([selector])=>document.querySelector(selector).innerHTML);
const attributes=[
 ['.brand','aria-label','Accueil de l’atlas Studiolo'],['.intro-image','aria-label','Détail de la carte originale du voyage d’Ulysse'],
 ['.map-cards','aria-label','Choisir une carte'],['.book-promo','aria-label','Découvrir le livre'],
 ['.book-promo img','alt','Le livre The Trojan Epic d’Adrian Solas'],['#viewer','aria-label','Carte interactive'],
 ['.viewer-tabs','aria-label','Navigation entre les cartes'],['#viewport','aria-label','Carte interactive. Faites glisser pour déplacer ; pincez ou utilisez les commandes pour zoomer.'],
 ['.zoom-controls','aria-label','Commandes de zoom de la carte'],['#zoom-in','aria-label','Zoom avant'],['#zoom-out','aria-label','Zoom arrière'],['#reset','aria-label','Réinitialiser la carte'],
 ['#close-places','aria-label','Fermer la liste des lieux'],['#close-story','aria-label','Fermer la fiche']
];
const attributeOriginals=attributes.map(([selector,attr])=>document.querySelector(selector).getAttribute(attr));
let language='en';
try { const saved=localStorage.getItem('studiolo-atlas-language'); language=saved==='fr'||saved==='en'?saved:((navigator.language||'').toLowerCase().startsWith('fr')?'fr':'en'); } catch { language=(navigator.language||'').toLowerCase().startsWith('fr')?'fr':'en'; }
function applyLanguage(){
 const fr=language==='fr', map=MAPS[current], translated=FRENCH_MAPS[current];
 document.documentElement.lang=language;
 document.title=fr?'Le Cycle troyen — Atlas interactif | Studiolo':'The Trojan Epic — Interactive Atlas | Studiolo';
 uiTranslations.forEach(([selector,value],i)=>{document.querySelector(selector).innerHTML=fr?value:uiOriginals[i]});
 attributes.forEach(([selector,attr,value],i)=>document.querySelector(selector).setAttribute(attr,fr?value:attributeOriginals[i]));
 document.querySelectorAll('.language-selector').forEach(el=>el.setAttribute('aria-label',fr?'Langue':'Language'));
 document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===language)));
 const title=fr?translated.title:map.title, subtitle=fr?translated.subtitle:map.subtitle;
 $('#viewer-name').textContent=title+' — '+subtitle;$('#viewer-kicker').textContent=fr?translated.kicker:map.kicker;
 $('#list-toggle').innerHTML=(fr?'Lieux':'Places')+' <span id="place-count">'+map.places.length+'</span> ☰';
 img.alt=fr?'Carte illustrée : '+title+' — '+subtitle:map.title+' — '+map.subtitle+' illustrated map';
 document.querySelectorAll('#hotspots .hotspot').forEach((b,i)=>b.setAttribute('aria-label',(fr?'Découvrir ':'Discover ')+(fr?translated.places[i][0]:map.places[i][0])));
 document.querySelectorAll('#place-list button').forEach((b,i)=>{b.firstChild.nodeValue=fr?translated.places[i][0]:map.places[i][0]});
 if(story.open && activeStory!==null){const p=map.places[activeStory], fp=translated.places[activeStory];$('#story-kicker').textContent=title.toUpperCase()+(fr?' / LIEU ':' / PLACE ')+String(activeStory+1).padStart(2,'0');$('#story-title').textContent=fr?fp[0]:p[0];$('#story-text').textContent=fr?fp[1]:p[3]}
}
document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>{language=b.dataset.language;try{localStorage.setItem('studiolo-atlas-language',language)}catch{}applyLanguage()}));
story.addEventListener('close',()=>{activeStory=null});
applyLanguage();
