
const {analyticsProjects, creativeWorks, jobs, skills} = window.PortfolioData;

const AppRegistry = Object.freeze({
  finder:'winFinder', analytics:'winAnalytics', creative:'winCreative', about:'winAbout',
  contact:'winContact', terminal:'winTerminal', lab:'winLab', photos:'winPhotos',
  notes:'winNotes', safari:'winSafari'
});
const WindowManager = (() => {
  let topZ = 350;
  const get = id => document.getElementById(id);
  const focus = id => {
    const w=get(id); if(!w) return;
    w.style.zIndex=++topZ;
    document.getElementById('activeApp').textContent=appForWindow(id);
    document.getElementById('notchApp').textContent=appForWindow(id);
    document.querySelectorAll('.window').forEach(x=>x.classList.toggle('focus',x===w));
  };
  const open = id => { const w=get(id); if(!w)return; w.classList.remove('minimizing'); w.classList.add('show','focus'); focus(id); };
  const close = id => { const w=get(id); if(w) w.classList.remove('show','focus','full','minimizing'); };
  const minimize = id => {
    const w=get(id); if(!w)return;
    const dock=document.getElementById('dock');
    const target=dock?.getBoundingClientRect();
    if(target){ const r=w.getBoundingClientRect(); w.style.setProperty('--genie-x',(target.left+target.width/2-r.left-r.width/2)+'px'); w.style.setProperty('--genie-y',(target.top+target.height/2-r.top-r.height/2)+'px'); }
    w.classList.add('minimizing');
    setTimeout(()=>{w.classList.remove('show','focus','minimizing');w.style.removeProperty('--genie-x');w.style.removeProperty('--genie-y')},430);
  };
  const maximize = id => get(id)?.classList.toggle('full');
  return Object.freeze({get,focus,open,close,minimize,maximize});
})();

let z=350,workFilter='All';
const windows=[...document.querySelectorAll('.window')];
function appForWindow(id){return document.getElementById(id)?.dataset.app||'Finder'}
function openWindow(id){ WindowManager.open(id); if(id==='winFinder')finderView('home');if(id==='winAnalytics')renderAnalytics();if(id==='winCreative')renderCreative();if(id==='winPhotos')renderPhotos();if(id==='winAbout')renderAbout();if(id==='winLab')showCode('overview'); }
function closeWindow(id){WindowManager.close(id)}
function minimize(id){WindowManager.minimize(id)}
function toggleMax(id){WindowManager.maximize(id)}
function openFinder(){openWindow('winFinder')}
function openAnalytics(){openWindow('winAnalytics')}
function openCreative(){openWindow('winCreative')}
function openAbout(){openWindow('winAbout')}
function openContact(){openWindow('winContact')}
function openTerminal(){openWindow('winTerminal');setTimeout(()=>document.getElementById('termInput')?.focus(),80)}
function openLab(){openWindow('winLab')}
function openPhotos(){openWindow('winPhotos')}
function openNotes(){openWindow('winNotes')}
function openSafari(){openWindow('winSafari')}
function toggleNotch(){document.getElementById('notch').classList.toggle('open')}
function toggleLaunchpad(){document.getElementById('launchpad').classList.toggle('open');renderLaunchpad()}
function toggleControl(){document.getElementById('control').classList.toggle('open')}
function toggleSiri(){document.getElementById('siri').classList.toggle('open')}
function closeApple(){document.getElementById('appleMenu').classList.remove('open')}
function cycleWallpaper(){const names=['','warm','aurora','sunset'];const el=document.getElementById('wallpaper');const i=names.indexOf(el.className.replace('wallpaper','').trim());el.className='wallpaper '+names[(i+1+names.length)%names.length];toast('Wallpaper changed')}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),1700)}
function tick(){const d=new Date();document.getElementById('clock').textContent=d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});document.getElementById('notchStatus').textContent=d.toLocaleDateString([], {weekday:'short',month:'short',day:'numeric'})}
setInterval(tick,1000);tick();

function finderView(view,btn){
 document.querySelectorAll('.finder-side button').forEach(b=>b.classList.remove('active')); if(btn)btn.classList.add('active');
 const root=document.getElementById('finderMain');
 if(view==='analytics'){openAnalytics();return}
 if(view==='marketing'){root.innerHTML='<div class="kicker">Digital Marketing / Growth</div><h2>Growth Systems</h2><div class="sub">SEO · SEM · Social · CRM · automation · e-commerce</div><div class="folder-grid">'+[['⌁','SEO optimization','Opportunity analysis & page improvement','toast(\'SEO section\')'],['◌','Google Ads','Simulation / performance analysis','toast(\'Google Ads section\')'],['✦','Content systems','3-month content calendar','toast(\'Content systems\')'],['⌘','Automation','AI calling agent · API leads · workflows','openLab()'],['◎','Social media','Campaign and brand building','toast(\'Social media section\')'],['▣','CRM / Ops','Customer and operating systems','toast(\'CRM / Ops section\')']].map(x=>'<div class="folder" onclick="'+x[3]+'"><div class="fi">'+x[0]+'</div><b>'+x[1]+'</b><span>'+x[2]+'</span></div>').join('')+'</div>';return}
 if(view==='creative'){openCreative();return}
 const apps=[['▣','Analytics','07 independent data-analysis projects','openAnalytics()'],['✦','Creative Studio','Packaging, product visuals, campaigns','openCreative()'],['◉','About Saket','Experience, education, skills','openAbout()'],['>_','Terminal','Portfolio-safe commands','openTerminal()'],['⌘','Xcode Lab','Power BI, DAX, Python, SQL, automation','openLab()'],['◌','Safari','Verified links and public destinations','openSafari()'],['▥','Notes','Resume and profile notes','openNotes()'],['↗','Contact','Email and social links','openContact()']];
 root.innerHTML='<div class="kicker">Saket Portfolio</div><h2>Welcome Home</h2><div class="sub">Choose an app to explore the portfolio.</div><div class="folder-grid">'+apps.map(x=>'<div class="folder" onclick="'+x[3]+'"><div class="fi">'+x[0]+'</div><b>'+x[1]+'</b><span>'+x[2]+'</span></div>').join('')+'</div>'
}
function renderPills(container,items,active,onClick){
 container.innerHTML=items.map(x=>'<button class="pill '+(x===active?'active':'')+'" onclick="'+onClick+'(\''+x+'\')">'+x+'</button>').join('')
}
function renderAnalytics(){
 const cats=['All','Sales / BI','Customer / BI','Funnel / Growth','Finance / BI','HR / BI'];renderPills(document.getElementById('analyticsPills'),cats,workFilter,'setWorkFilter');
 const list=analyticsProjects.filter(p=>workFilter==='All'||p.cat===workFilter);
 document.getElementById('analyticsCards').innerHTML=list.map(p=>'<article class="project" onclick="openCase(\''+p.id+'\')"><div class="chart"><div class="bars"><i></i><i></i><i></i><i></i><i></i><i></i></div></div><small>'+p.id+' · '+p.cat+'</small><h3>'+p.title+'</h3><p>'+p.desc+'</p><div class="tagrow">'+p.tools.split(' · ').slice(0,3).map(t=>'<span class="tag">'+t+'</span>').join('')+'</div></article>').join('')
}
function setWorkFilter(f){workFilter=f;renderAnalytics()}
function renderCreative(){
 const cats=['All','Packaging','Product Visual','Festival Campaign','Campaign','Creator Branding'];const c=document.getElementById('creativePills');renderPills(c,cats,'All','setCreativeFilter');document.getElementById('creativeGrid').innerHTML=creativeWorks.map(w=>'<article class="creative-card" onclick="openCreativeModal(\''+w.id+'\')"><div class="thumb '+w.tone+'"><div class="poster"><b>'+w.title+'</b><span>'+w.type+'</span></div></div><div class="meta"><b>'+w.title+'</b><small>'+w.type+'</small><p>'+w.desc+'</p></div></article>').join('')
}
function setCreativeFilter(cat){renderCreativeCards(cat)}
function renderCreativeCards(cat){document.getElementById('creativeGrid').innerHTML=creativeWorks.filter(w=>cat==='All'||w.type===cat).map(w=>'<article class="creative-card" onclick="openCreativeModal(\''+w.id+'\')"><div class="thumb '+w.tone+'"><div class="poster"><b>'+w.title+'</b><span>'+w.type+'</span></div></div><div class="meta"><b>'+w.title+'</b><small>'+w.type+'</small><p>'+w.desc+'</p></div></article>').join('')}
function renderAbout(){document.getElementById('skills').innerHTML=skills.map(s=>'<span class="skill">'+s+'</span>').join('');document.getElementById('jobs').innerHTML=jobs.map(j=>'<div class="job"><small>'+j[0]+'</small><b>'+j[1]+'</b><span>'+j[2]+'</span></div>').join('')}
function renderPhotos(){document.getElementById('photoGrid').innerHTML=creativeWorks.map(w=>'<div class="photo" style="background:radial-gradient(circle at 70% 20%,rgba(130,170,255,.20),transparent 28%),linear-gradient(145deg,'+(w.tone==='green'?'#183323':w.tone==='orange'?'#34200d':w.tone==='violet'?'#2a163c':'#12233d')+',#0b0e14)" onclick="openCreativeModal(\''+w.id+'\')"><b>'+w.title+'</b></div>').join('')}
const code={
overview:['// Saket Analytics Lab','const portfolio = {','  identity: "Saket Dandekar",','  domains: ["Data & BI","Growth","Creative"],','  projects: 7,','  principle: "evidence → insight → action"','};'],
powerbi:['// DAX example','Revenue = SUM(Sales[Revenue])','Profit = [Revenue] - SUM(Sales[Cost])','Margin = DIVIDE([Profit],[Revenue])','Insight = IF([Margin] > [TargetMargin], "Above", "Review")'],
python:['# Python / Pandas workflow','df = pd.read_csv("portfolio_dataset.csv")','clean = df.dropna()','segment = clean.groupby("segment").agg({"revenue":"sum"})','segment.sort_values("revenue", ascending=False)'],
sql:['-- SQL KPI layer','SELECT','  segment,','  SUM(revenue) AS revenue,','  AVG(order_value) AS avg_order_value','FROM customer_orders','GROUP BY segment','ORDER BY revenue DESC;'],
n8n:['// Automation architecture','trigger("lead.created")','  -> validate()','  -> enrich()','  -> score(fit, intent)','  -> route("approved-workflow")','  -> log("outcome")']
};
function showCode(key){document.querySelectorAll('.lab-side button').forEach(b=>b.classList.remove('active'));const lines=code[key]||code.overview;document.getElementById('editor').innerHTML='<div class="code">'+lines.map((l,i)=>'<div class="code-line"><span class="ln">'+String(i+1).padStart(2,'0')+'</span><span>'+escapeHtml(l).replace(/(const|SELECT|FROM|GROUP BY|ORDER BY|SUM|AVG|IF)/g,'<span class="kw">$1</span>').replace(/(portfolio|Revenue|Profit|Margin|segment|trigger|validate|enrich|score|route|log)/g,'<span class="fn">$1</span>').replace(/("[^"]*")/g,'<span class="str">$1</span>')+'</span></div>').join('')+'</div>'}
function escapeHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function openCase(id){const p=analyticsProjects.find(x=>x.id===id);if(!p)return;document.getElementById('caseTitle').textContent=p.id+' · Analytics';document.getElementById('caseKind').textContent=p.cat+' / INDEPENDENT PORTFOLIO PROJECT';document.getElementById('caseName').textContent=p.title;document.getElementById('caseDesc').textContent=p.desc;document.getElementById('caseTools').textContent=p.tools;document.getElementById('caseMethod').innerHTML=p.method.map(x=>'<li>'+x+'</li>').join('');document.getElementById('caseInsights').innerHTML=p.insights.map(x=>'<li>'+x+'</li>').join('');document.getElementById('caseRepo').href=p.repo;document.getElementById('caseModal').classList.remove('hide')}
function closeCase(){document.getElementById('caseModal').classList.add('hide')}
function openCreativeModal(id){const w=creativeWorks.find(x=>x.id===id);if(!w)return;document.getElementById('creativeTitle').textContent=w.title;document.getElementById('creativeDesc').textContent=w.desc;document.getElementById('creativeBig').style.cssText='height:420px;border-radius:14px;background:radial-gradient(circle at 70% 20%,rgba(130,170,255,.12),transparent 30%),linear-gradient(145deg,#111720,#080b10);border:1px solid rgba(255,255,255,.08);display:grid;place-items:center;padding:20px';document.getElementById('creativeBig').innerHTML='<div style="text-align:center"><div style="font-size:42px;opacity:.8">⌁</div><b style="display:block;font-size:16px;margin-top:10px">'+w.title+'</b><span style="display:block;font-size:8px;color:#8b95a1;margin-top:6px">Original asset available from the supplied creative archive</span><a href="'+w.source+'" target="_blank" rel="noreferrer" style="display:inline-block;margin-top:14px;padding:8px 11px;border:1px solid rgba(255,255,255,.12);border-radius:9px;font-size:8px">Open source archive ↗</a></div>';document.getElementById('creativeModal').classList.remove('hide')}
function closeCreativeModal(){document.getElementById('creativeModal').classList.add('hide')}
function runTerminal(cmd){
 const c=cmd.trim().toLowerCase();if(!c)return;let out='';
 if(c==='help')out='about  skills  projects  analytics  creative  marketing  certificates  contact  github  linkedin  resume  ls  pwd  clear';
 else if(c==='about')out='Saket Dandekar — Digital Marketing & Growth Analyst.';
 else if(c==='skills')out='SEO · Power BI · Google Analytics · Excel · Python · Automation · Branding · Analytics';
 else if(c==='projects'||c==='analytics')out=analyticsProjects.map(p=>p.id+'  '+p.title).join('\n');
 else if(c==='creative')out=creativeWorks.map(w=>w.title).join('\n');
 else if(c==='marketing')out='SEO · SEM · Social Media · Affiliate Marketing · Content · E-Commerce · CRM · Automation';
 else if(c==='certificates')out='Verified: Google Analytics / UI-UX Basics / Power BI (Great Learning); AI-Powered Advertising (Google); Microsoft Copilot Studio; Content Marketing & SEO (HubSpot); Digital Marketing (Simplilearn); Business Analytics (Mind Luster); Python Basics (Scaler); WordPress Development (Edraak); and additional verified programs listed in Notes.';
 else if(c==='contact')out='b4u.iamsaket@gmail.com';
 else if(c==='github'){window.open('https://github.com/justsaket','_blank');out='Opening GitHub…'}
 else if(c==='linkedin'){window.open('https://www.linkedin.com/in/visitsaket','_blank');out='Opening LinkedIn…'}
 else if(c==='resume'){openNotes();out='Opening Resume note…'}
 else if(c==='ls')out='Applications  Analytics  Creative  Marketing  Resume  Links';
 else if(c==='pwd')out='/Users/saket/Portfolio';
 else if(c==='clear'){document.querySelectorAll('#termBody .term-line:not(:last-child)').forEach(x=>x.remove());return}
 else out='command not found: '+cmd;
 const row=document.createElement('div');row.className='term-line';row.textContent=out;document.getElementById('termBody').insertBefore(row,document.getElementById('termBody').lastElementChild)
}
function renderLaunchpad(){const apps=[['⌁','Finder',openFinder],['▣','Analytics',openAnalytics],['✦','Creative',openCreative],['▤','Photos',openPhotos],['▥','Notes',openNotes],['>_','Terminal',openTerminal],['⌘','Xcode',openLab],['◌','Safari',openSafari],['in','LinkedIn',()=>window.open('https://www.linkedin.com/in/visitsaket','_blank')],['◖','GitHub',()=>window.open('https://github.com/justsaket','_blank')],['◎','About',openAbout],['✉','Contact',openContact],['⌕','Spotlight',openSpotlight],['◈','Wallpaper',cycleWallpaper],['◉','Siri',toggleSiri]];window.__apps=apps;document.getElementById('launchGrid').innerHTML=apps.map((a,i)=>'<div class="launch-app"><button onclick="window.__apps['+i+'][2]()">'+a[0]+'</button><span>'+a[1]+'</span></div>').join('')}
function openSpotlight(){document.getElementById('spotlight').classList.remove('hide');const i=document.getElementById('spotInput');i.value='';search('');setTimeout(()=>i.focus(),25)}
function search(q){
 const t=(q||'').toLowerCase();
 const appMap={
  'Certificates':openNotes,'Experience':openAbout,'Education':openAbout,'Resume':openNotes,'About Saket':openAbout,
  'Finder':openFinder,'Launchpad':toggleLaunchpad,'Spotlight':openSpotlight,'Control Center':toggleControl,'Siri':toggleSiri,
  'Terminal':openTerminal,'Xcode Lab':openLab,'Photos':openPhotos,'Safari':openSafari,'Contact':openContact
 };
 const items=[
  ...analyticsProjects.map(p=>({name:p.title,type:'Analytics',fn:()=>openCase(p.id)})),
  ...creativeWorks.map(w=>({name:w.title,type:'Creative',fn:()=>openCreativeModal(w.id)})),
  ...['SEO','SEM','Power BI','Google Analytics','Python','Automation','Business Intelligence'].map(name=>({name,type:'Skill',fn:openAbout})),
  ...Object.keys(appMap).map(name=>({name,type:'Portfolio',fn:appMap[name]}))
 ].filter(x=>x.name.toLowerCase().includes(t));
 window.__results=items;
 document.getElementById('results').innerHTML=items.slice(0,10).map((x,i)=>"<button onclick=\"window.__results["+i+"].fn();document.getElementById('spotlight').classList.add('hide')\"><span>"+x.name+"</span><small>"+x.type+"</small></button>").join('');
}
function siriAsk(q){const t=q.toLowerCase();let answer='I can open sections of the portfolio. Try “show analytics”, “show creative”, “show experience”, “open resume”, or “contact”.';if(t.includes('analytics')||t.includes('data')){openAnalytics();answer='Opening Analytics — seven independent portfolio projects.'}else if(t.includes('creative')||t.includes('greenweld')||t.includes('magnarc')||t.includes('vishwakarma')||t.includes('raksha bandhan')||t.includes('antara')){openCreative();answer='Opening Creative Studio — the supplied creative archive, including GreenWeld, MAGNARC and campaign work.'}else if(t.includes('experience')){openAbout();answer='Opening verified experience and education.'}else if(t.includes('resume')){openNotes();answer='Opening the resume note.'}else if(t.includes('contact')){openContact();answer='Opening Contact.'}else if(t.includes('github')){window.open('https://github.com/justsaket','_blank');answer='Opening GitHub.'}else if(t.includes('linkedin')){window.open('https://www.linkedin.com/in/visitsaket','_blank');answer='Opening LinkedIn.'}else if(t.includes('terminal')){openTerminal();answer='Opening Terminal.'}else if(t.includes('wallpaper')){cycleWallpaper();answer='Changing wallpaper.'}document.getElementById('siriText').textContent=answer}
function mailTo(e){e.preventDefault();const body=encodeURIComponent('Hi Saket,\n\nName: '+document.getElementById('cname').value+'\nEmail: '+document.getElementById('cemail').value+'\nNeed: '+document.getElementById('cneed').value+'\n\nBrief:\n'+document.getElementById('cbrief').value);location.href='mailto:b4u.iamsaket@gmail.com?subject=Portfolio inquiry&body='+body}
function closeContext(){document.getElementById('context').classList.remove('open')}
function toggleApple(){document.getElementById('appleMenu').classList.toggle('open')}

let drag=null,resizeState=null;
document.querySelectorAll('.chrome').forEach(bar=>{
 bar.addEventListener('pointerdown',e=>{
   if(e.target.closest('.light')||e.target.closest('button'))return;
   const w=bar.parentElement;if(w.classList.contains('full'))return;
   const r=w.getBoundingClientRect();drag={w,sx:e.clientX,sy:e.clientY,l:r.left,t:r.top};w.style.zIndex=++z;bar.setPointerCapture(e.pointerId)
 });
 bar.addEventListener('pointermove',e=>{if(!drag||drag.w!==bar.parentElement)return;const w=drag.w;w.style.left=Math.max(8,drag.l+e.clientX-drag.sx)+'px';w.style.top=Math.max(36,drag.t+e.clientY-drag.sy)+'px'});
 bar.addEventListener('pointerup',()=>drag=null);bar.addEventListener('pointercancel',()=>drag=null);
});
document.querySelectorAll('.resize').forEach(r=>{
 const w=r.parentElement;
 r.addEventListener('pointerdown',e=>{if(w.classList.contains('full'))return;const b=w.getBoundingClientRect();resizeState={w,sx:e.clientX,sy:e.clientY,w:b.width,h:b.height};r.setPointerCapture(e.pointerId)});
 r.addEventListener('pointermove',e=>{if(!resizeState)return;w.style.width=Math.max(360,resizeState.w+e.clientX-resizeState.sx)+'px';w.style.height=Math.max(250,resizeState.h+e.clientY-resizeState.sy)+'px'});
 r.addEventListener('pointerup',()=>resizeState=null);r.addEventListener('pointercancel',()=>resizeState=null)
});
document.addEventListener('pointerdown',e=>{const w=e.target.closest('.window');if(w){w.style.zIndex=++z;w.classList.add('focus');document.getElementById('activeApp').textContent=appForWindow(w.id);document.getElementById('notchApp').textContent=appForWindow(w.id)}});
document.getElementById('dock').addEventListener('mousemove',e=>{
 const buttons=[...document.querySelectorAll('#dock button')];const x=e.clientX;buttons.forEach(b=>{const r=b.getBoundingClientRect();const d=Math.abs(x-(r.left+r.width/2));b.classList.toggle('mid',d<72);b.classList.toggle('near',d>=72&&d<125)})
});
document.getElementById('dock').addEventListener('mouseleave',()=>document.querySelectorAll('#dock button').forEach(b=>b.classList.remove('mid','near')));
document.addEventListener('mousemove',e=>{const c=document.getElementById('cursor');if(window.matchMedia('(pointer:fine)').matches){c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'}});
document.addEventListener('mouseover',e=>{if(e.target.closest('button,a,.project,.creative-card,.folder,.desktop-icon'))document.getElementById('cursor').classList.add('cursor-big')});
document.addEventListener('mouseout',e=>{if(e.target.closest('button,a,.project,.creative-card,.folder,.desktop-icon'))document.getElementById('cursor').classList.remove('cursor-big')});

document.getElementById('appleBtn').addEventListener('click',toggleApple);
document.addEventListener('click',e=>{if(!e.target.closest('#appleBtn')&&!e.target.closest('#appleMenu'))closeApple()});
document.getElementById('spotInput').addEventListener('input',e=>search(e.target.value));
document.addEventListener('keydown',e=>{
 if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSpotlight()}
 if(e.key==='Escape'){document.getElementById('spotlight').classList.add('hide');document.getElementById('launchpad').classList.remove('open');document.getElementById('notch').classList.remove('open');closeCase();closeCreativeModal()}
 if(e.key==='F4')toggleLaunchpad()
});
document.getElementById('desktop').addEventListener('contextmenu',e=>{if(e.target.closest('.window,.dock,.menu,.notch,.spotlight,.modal'))return;e.preventDefault();const m=document.getElementById('context');m.style.left=Math.min(e.clientX,innerWidth-200)+'px';m.style.top=Math.min(e.clientY,innerHeight-150)+'px';m.classList.add('open')});
document.addEventListener('click',e=>{if(!e.target.closest('#context'))closeContext()});
document.getElementById('desktop').addEventListener('dblclick',e=>{if(e.target.closest('.window,.dock,.menu,.notch,.desktop-icon'))return;cycleWallpaper()});
document.getElementById('termInput').addEventListener('keydown',e=>{if(e.key==='Enter'){const v=e.target.value;const row=document.createElement('div');row.className='term-line';row.textContent='saket@portfolio ~ % '+v;document.getElementById('termBody').insertBefore(row,document.getElementById('termBody').lastElementChild);runTerminal(v);e.target.value=''}});

renderFinderInitial();renderAnalytics();renderCreative();renderAbout();renderPhotos();showCode('overview');renderLaunchpad();
function renderFinderInitial(){finderView('home',document.querySelector('.finder-side button'))}
setTimeout(()=>{document.getElementById('boot').classList.add('hide');document.getElementById('desktop').classList.add('ready')},1600);
