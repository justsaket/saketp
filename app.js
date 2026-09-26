
const analyticsProjects=[
{id:'01',title:'Retail Sales Intelligence',cat:'Sales / BI',desc:'Executive analysis of revenue, profit, margin, region, category and product drivers using the supplied portfolio sample.',tools:'Python · Pandas · SQL · Power BI · DAX · Data Visualization',method:['Revenue & profit KPI layer','Margin, region, category and product analysis','Exception framing and action-oriented dashboard structure'],insights:['Electronics is the largest revenue contributor in the supplied sample','South is the largest regional profit contributor','West is the lowest regional profit contributor; the project frames mix/pricing as an investigation area rather than a causal conclusion'],repo:'https://github.com/justsaket/new-portfolio/tree/main/01-retail-sales'},
{id:'02',title:'Customer Retention Intelligence',cat:'Customer / BI',desc:'Independent customer-retention analysis covering churn, plan, tenure, engagement and support patterns.',tools:'Python · Pandas · SQL · Power BI · Customer Segmentation · Retention Analytics',method:['Customer-base and churn KPI layer','Plan, tenure, engagement and support segmentation','Observed-pattern vs interpretation separation'],insights:['Basic and Standard show higher churn rates than Premium in the supplied sample','Churned customers show different login/support patterns','These are descriptive sample patterns, not causal proof'],repo:'https://github.com/justsaket/new-portfolio/tree/main/02-customer-churn'},
{id:'03',title:'E-commerce Funnel Intelligence',cat:'Funnel / Growth',desc:'Acquisition-to-purchase funnel analysis focused on leakage, channel comparison and conversion economics.',tools:'Python · Pandas · SQL · Power BI · Funnel Analytics · Conversion Optimization',method:['Visits → engagement → cart → checkout → purchase mapping','Channel conversion comparison','Funnel leakage and growth-action framing'],insights:['Email has the strongest conversion rate in the supplied sample at 16.37%','Social is 2.80% despite significant traffic','The dashboard highlights Social landing-page/message fit as an investigation area'],repo:'https://github.com/justsaket/new-portfolio/tree/main/03-ecommerce-funnel'},
{id:'04',title:'Financial Performance Command Center',cat:'Finance / BI',desc:'Management-reporting analysis connecting revenue, COGS, gross profit, operating expenses and operating profit.',tools:'Python · Pandas · SQL · Power BI · DAX · Financial Analysis · Management Reporting',method:['P&L-style KPI model','Period and margin movement analysis','Cost structure and profitability-bridge thinking'],insights:['The supplied sample moves from ₹8.50L revenue in January to ₹13.40L in August','Operating profit moves from ₹0.65L to ₹2.22L over the same sample period','The project focuses on growth quality and margin sustainability'],repo:'https://github.com/justsaket/new-portfolio/tree/main/04-financial-performance'},
{id:'05',title:'Marketing & Automation Command Center',cat:'Automation / BI',desc:'End-to-end portfolio project combining LinkedIn publishing, AI calling, API lead generation and AI workflow agents.',tools:'n8n · APIs · Python · SQL · Webhooks · AI Agents · CRM concepts · Automation Analytics',method:['Sources/APIs → validation → normalization → deduplication','Lead scoring → automation router → approved action','Event logging and KPI layer'],insights:['LinkedIn publishing workflow includes validation and event logging','AI calling architecture separates lead context, conversation state, outcome and follow-up','API lead generation includes normalization, deduplication and scoring','Calling requires a connected provider plus appropriate consent/compliance controls'],repo:'https://github.com/justsaket/new-portfolio/tree/main/05-marketing-automation'},
{id:'06',title:'Analytics & Business Intelligence Command Center',cat:'Multi-domain BI',desc:'Four executive analytics use cases: Customer Segmentation & LTV, HR Attrition, Financial Performance and Mutual Fund Comparison.',tools:'Power BI · Python · Pandas · SQL · Excel · DAX concepts · Data Modeling · Business Intelligence',method:['Source data → data quality → model concepts','KPI measures → segmentation / variance / risk analysis','Drill-down → executive insight → action'],insights:['Customer work focuses on RFM-style thinking, segment profiling and LTV','HR work covers attrition by department, role, tenure, age, overtime and satisfaction','Finance work covers revenue, cost, profit and margin movement','Fund comparison covers return, volatility and drawdown; it is analytical research, not investment advice'],repo:'https://github.com/justsaket/new-portfolio/tree/main/06-analytics-business-intelligence'},
{id:'07',title:'Digital Marketing Intelligence',cat:'Marketing Analytics',desc:'Integrated SEO optimization, Google Ads simulation and a three-month content calendar as one measurable campaign system.',tools:'SEO · Google Ads concepts · Python · SQL · Analytics · Content Strategy · Campaign Measurement · Power BI',method:['SEO opportunity audit','Paid-search simulation with CTR, CPC, spend, conversions and ROAS','Content planning across pillars, formats, funnel stages and channels'],insights:['SEO analysis covers search intent, metadata, structure, internal links and keyword opportunities','Google Ads numbers are explicitly simulation data, not campaign claims','Content measurement follows awareness → traffic → engagement → conversion → revenue'],repo:'https://github.com/justsaket/new-portfolio/tree/main/07-digital-marketing-intelligence'}
];const creativeWorks=[
{id:'g1',title:'GreenWeld',type:'Creative Archive',tone:'green',desc:'Real creative-work archive entry. Original artwork is sourced from the supplied Google Drive archive; this UI does not fabricate a replacement asset.',source:'https://drive.google.com/drive/folders/158EhPqMiCwT8OOZFJHC-UC4k-ACSL-T6?usp=drive_link'},
{id:'g2',title:'MAGNARC',type:'Creative Archive',tone:'blue',desc:'Real creative-work archive entry. The supplied MAGNARC trademark artwork must be used unchanged; this UI does not redraw the mark.',source:'https://drive.google.com/drive/folders/158EhPqMiCwT8OOZFJHC-UC4k-ACSL-T6?usp=drive_link'},
{id:'g3',title:'Vishwakarma Puja',type:'Campaign Archive',tone:'orange',desc:'Creative archive entry for the supplied Vishwakarma Puja campaign work. Open the source archive for the original artwork.',source:'https://drive.google.com/drive/folders/158EhPqMiCwT8OOZFJHC-UC4k-ACSL-T6?usp=drive_link'},
{id:'g4',title:'Raksha Bandhan',type:'Campaign Archive',tone:'violet',desc:'Creative archive entry for the supplied Raksha Bandhan campaign work. Open the source archive for the original artwork.',source:'https://drive.google.com/drive/folders/158EhPqMiCwT8OOZFJHC-UC4k-ACSL-T6?usp=drive_link'},
{id:'g5',title:'Antara Edits',type:'Creator Archive',tone:'blue',desc:'Creative archive entry for the supplied short-form entertainment/creator work. Open the source archive for original assets.',source:'https://drive.google.com/drive/folders/158EhPqMiCwT8OOZFJHC-UC4k-ACSL-T6?usp=drive_link'},
{id:'g6',title:'Product Visuals',type:'Creative Archive',tone:'green',desc:'Real product-visual archive category. Original files are intentionally not replaced with generated mock artwork.',source:'https://drive.google.com/drive/folders/158EhPqMiCwT8OOZFJHC-UC4k-ACSL-T6?usp=drive_link'},
{id:'g7',title:'Social Creative',type:'Creative Archive',tone:'orange',desc:'Real social-creative archive category. Original files remain the source of truth.',source:'https://drive.google.com/drive/folders/158EhPqMiCwT8OOZFJHC-UC4k-ACSL-T6?usp=drive_link'},
{id:'g8',title:'Campaign Archive',type:'Creative Archive',tone:'violet',desc:'Additional campaign archive category sourced from the supplied creative archive.',source:'https://drive.google.com/drive/folders/158EhPqMiCwT8OOZFJHC-UC4k-ACSL-T6?usp=drive_link'}
];const jobs=[
['NOV 2025 — APR 2026','Social Media Executive','Rungta International Skills University'],
['NOV 2024 — PRESENT','Co-Founder / Operations & Growth Lead','Digital Finvest · Taste Plaza · Asketrulize'],
['JUL 2023 — MAR 2024','Business Development Executive','Chal Digital'],
['JUN 2022 — APR 2023','Network Marketing Associate','Forever Living Products']
];
const skills=['SEO','SEM','Social Media Marketing','Affiliate Marketing','Brand Building','Content Marketing','E-Commerce','Power BI','Google Analytics','Advanced Excel','Data Analytics','Business Intelligence','Python','C++','HTML','WordPress','Shopify','CRM','Automation','Canva','Adobe Creative Cloud','CorelDRAW','Tally Prime','Financial Accounting'];

let z=350,workFilter='All';
const windows=[...document.querySelectorAll('.window')];
function appForWindow(id){return document.getElementById(id)?.dataset.app||'Finder'}
function openWindow(id){
 const w=document.getElementById(id); if(!w)return;
 w.classList.add('show','focus');w.style.zIndex=++z;
 document.getElementById('activeApp').textContent=appForWindow(id);document.getElementById('notchApp').textContent=appForWindow(id);
 if(id==='winFinder')finderView('home');if(id==='winAnalytics')renderAnalytics();if(id==='winCreative')renderCreative();if(id==='winPhotos')renderPhotos();if(id==='winAbout')renderAbout();if(id==='winLab')showCode('overview');
}
function closeWindow(id){document.getElementById(id)?.classList.remove('show','focus','full')}
function minimize(id){const w=document.getElementById(id);if(!w)return;w.classList.add('minimizing');setTimeout(()=>{w.classList.remove('show','focus','minimizing')},380)}
function toggleMax(id){document.getElementById(id)?.classList.toggle('full')}
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
