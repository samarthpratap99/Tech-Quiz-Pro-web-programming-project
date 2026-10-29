const defaultDB = {
python: [
{q:"Analyze: list = [1,2,3]; append([4,5]) vs extend([4,5])?",options:["[1,2,3,[4,5]] vs [1,2,3,4,5]","Both same","Same as extend","Error"],ans:0,bloom:"Analyze L4",exp:"append adds whole object as one element."},
{q:"Evaluate best for 1M freq count?",options:["list.count loop","nested loops","collections.Counter","manual dict"],ans:2,bloom:"Evaluate L5",exp:"Counter C-optimized O(n)."},
{q:"Analyze mutable default arg f(a=[]): risk?",options:["Syntax error","Slower","Shared list reused","No issue"],ans:2,bloom:"Analyze L4",exp:"Default evaluated once."},
{q:"Generator vs List for large file?",options:["List better","Both same","Generator memory efficient","Slower"],ans:2,bloom:"Evaluate L5",exp:"Yields lazily."},
{q:"x=5; y=x; x=10; print(y)?",options:["10","Error","5","None"],ans:2,bloom:"Analyze L4",exp:"Immutable int."},
{q:"Best exception handling?",options:["except: pass","bare except:","except Exception as e: with logging","No try"],ans:2,bloom:"Evaluate L5",exp:"Specific + logging."},
{q:"'if x in dict' vs list time?",options:["Both O(n)","Both O(log n)","O(1) vs O(n)","O(n) vs O(1)"],ans:2,bloom:"Analyze L4",exp:"dict hash O(1)."},
{q:"Python vs C for ACN sockets?",options:["Can't sockets","C always better","Same","Python rapid proto, C for kernel perf"],ans:3,bloom:"Evaluate L5",exp:"Tradeoff."},
{q:"GIL impact?",options:["Faster","True parallelism","Prevents CPU-bound thread parallelism","No effect"],ans:2,bloom:"Analyze L4",exp:"One thread bytecode."},
{q:"Handle 10GB CSV?",options:["Load list","pd.read_csv full","Excel","Read chunks/dask"],ans:3,bloom:"Evaluate L5",exp:"Chunking avoids crash."}
],
web: [
{q:"Why div inside p invalid?",options:["Allowed","Crash","p auto-closed before div","No effect"],ans:2,bloom:"Analyze L4",exp:"p cannot contain block."},
{q:"Inline vs External CSS large site?",options:["Inline best","Same","Inline faster","External caching + maintainability"],ans:3,bloom:"Evaluate L5",exp:"External cached."},
{q:"var vs let in loop setTimeout?",options:["var same last, let per iteration","Same","let error","var better"],ans:0,bloom:"Analyze L4",exp:"let block-scoped."},
{q:"API calls in React best?",options:["Direct body","Same","Direct optimized","useEffect with deps"],ans:3,bloom:"Evaluate L5",exp:"Prevents infinite loop."},
{q:"localStorage only string why?",options:["Bug","Security","Faster","Spec string only need JSON.stringify"],ans:3,bloom:"Analyze L4",exp:"String only."},
{q:"CORS solution?",options:["Disable security","alert","Server Access-Control-Allow-Origin","No solution"],ans:2,bloom:"Evaluate L5",exp:"Server header."},
{q:"== vs === diff?",options:["No diff","== safer","== coerces, === strict safer","Both unsafe"],ans:2,bloom:"Analyze L4",exp:"Coercion."},
{q:"Best for responsive?",options:["rem + %/flex layout","px always","% always","No diff"],ans:0,bloom:"Evaluate L5",exp:"rem scalable."},
{q:"Why key prop in React list?",options:["Loop","Styling","No need","Reconciliation identity"],ans:3,bloom:"Analyze L4",exp:"Diffing."},
{q:"SSR vs CSR for SEO blog?",options:["CSR better","Same","None","SSR better crawlable"],ans:3,bloom:"Evaluate L5",exp:"SSR rendered HTML."}
],
adbms: [
{q:"Why 3NF over 2NF?",options:["No need","Faster","Removes transitive dependency","More tables bad"],ans:2,bloom:"Analyze L4",exp:"2NF partial, 3NF transitive."},
{q:"Best isolation for bank transfer?",options:["Read Uncommitted","Read Committed enough","Serializable","No isolation"],ans:2,bloom:"Evaluate L5",exp:"Avoid phantom."},
{q:"Deadlock T1 locks A waits B, T2 locks B waits A?",options:["No deadlock","Livelock","Deadlock circular wait","Starvation"],ans:2,bloom:"Analyze L4",exp:"Circular wait."},
{q:"Index on every column good?",options:["Always faster","No, write slow selective","Small table yes","Always good"],ans:1,bloom:"Evaluate L5",exp:"Cost vs benefit."},
{q:"Vertical vs Horizontal fragmentation?",options:["Vertical cols, horizontal rows","Same","Both rows","Both cols"],ans:0,bloom:"Analyze L4",exp:"Cols vs rows."},
{q:"Recovery log for atomicity?",options:["No log","After commit","WAL","Only checkpoint"],ans:2,bloom:"Evaluate L5",exp:"WAL redo/undo."},
{q:"Why NoSQL for social feed?",options:["RDBMS better","No reason","Flexible schema + scale","NoSQL slower"],ans:2,bloom:"Analyze L4",exp:"Flexibility."},
{q:"Best join order optimization?",options:["Random","Nested loop always","Selectivity + cost-based","No need"],ans:2,bloom:"Evaluate L5",exp:"Cost-based."},
{q:"BCNF vs 3NF violation?",options:["BCNF looser","Same","X->Y where X not superkey","No diff"],ans:2,bloom:"Analyze L4",exp:"BCNF stricter."},
{q:"Replication Master-Slave vs Master-Master?",options:["No repl","Slave only","Master-slave read scale, master-master conflict","Master-master always"],ans:2,bloom:"Evaluate L5",exp:"Conflict risk."}
],
acn: [
{q:"Why TCP reliable but UDP not?",options:["TCP ACK retrans sequencing","No diff","UDP reliable","TCP unreliable"],ans:0,bloom:"Analyze L4",exp:"Reliability mechanisms."},
{q:"Best for live video lecture?",options:["FTP","UDP/RTP low latency","TCP","SMTP"],ans:1,bloom:"Evaluate L5",exp:"Low latency."},
{q:"Subnet /28 hosts?",options:["30","6","14 usable","254"],ans:2,bloom:"Analyze L4",exp:"16-2=14."},
{q:"IPv6 over IPv4 for IoT?",options:["IPv4 enough","IPv6 worse","IPv6 huge address auto-config","No diff"],ans:2,bloom:"Evaluate L5",exp:"Address space."},
{q:"Why 3-way handshake not 2-way?",options:["Faster","Waste","Prevents old duplicate half-open","No reason"],ans:2,bloom:"Analyze L4",exp:"Prevents stale SYN."},
{q:"Firewall vs IDS?",options:["Only firewall enough","Same","Firewall blocks, IDS detects both needed","Only IDS"],ans:2,bloom:"Evaluate L5",exp:"Defense depth."},
{q:"Why CSMA/CD not in WiFi?",options:["Used","No collision","Can't detect while TX so CSMA/CA","CD better"],ans:2,bloom:"Analyze L4",exp:"Can't detect."},
{q:"Best routing for dynamic WAN?",options:["Static","RIP only","OSPF/BGP dynamic","No routing"],ans:2,bloom:"Evaluate L5",exp:"Dynamic adaptive."},
{q:"DNS caching reduces latency why?",options:["Avoids recursive root query","No effect","Slower","Security only"],ans:0,bloom:"Analyze L4",exp:"Cache hit."},
{q:"QoS VoIP vs Email?",options:["Same","Email high","VoIP low jitter high priority","No QoS"],ans:2,bloom:"Evaluate L5",exp:"Real-time."}
],
aip: [
{q:"A* f=g+h, if h overestimates?",options:["Always optimal","Always faster","Overestimate loses optimality","No effect"],ans:2,bloom:"Analyze L4",exp:"Admissible needed."},
{q:"Best for spam detection?",options:["Only deep","No ML","Rule only","Naive Bayes TF-IDF"],ans:3,bloom:"Evaluate L5",exp:"Effective text."},
{q:"Overfitting vs Underfitting?",options:["Overfit good","Overfit high train low test, underfit low both","Same","Underfit good"],ans:1,bloom:"Analyze L4",exp:"Bias-variance."},
{q:"Clustering without labels?",options:["Supervised","Reinforcement","Unsupervised K-means","No ML"],ans:2,bloom:"Evaluate L5",exp:"No labels clustering."},
{q:"Why ReLU over Sigmoid hidden?",options:["No reason","Sigmoid faster","ReLU avoids vanishing gradient","Same"],ans:2,bloom:"Analyze L4",exp:"Gradient."},
{q:"AI decides scholarship alone?",options:["No use","Yes fully","No, AI assist + human oversight","Yes no check"],ans:2,bloom:"Evaluate L5",exp:"Human-in-loop."},
{q:"Minimax Tic-Tac-Toe optimal why?",options:["Random","Explores game tree opponent optimal","Guesses","Only loss"],ans:1,bloom:"Analyze L4",exp:"Adversarial."},
{q:"Best for UP crop prediction?",options:["Only rain","Rain+soil+temp+history+market","Only temp","Only soil"],ans:1,bloom:"Evaluate L5",exp:"Multi-factor."},
{q:"Why training bias unfair AI?",options:["No effect","Bias removed auto","Model learns bias from data","Only algo bias"],ans:2,bloom:"Analyze L4",exp:"Data bias propagation."},
{q:"BFS vs DFS shortest unweighted?",options:["DFS","DFS shorter","BFS guarantees shortest","Both same"],ans:2,bloom:"Evaluate L5",exp:"BFS level order."}
],
java: [
{q:"String s1='ab'; s2='ab'; s1==s2 vs equals?",options:["Both false","Both true","== true pool, equals true; new String() == false","== false"],ans:2,bloom:"Analyze L4",exp:"String pool."},
{q:"Abstract vs Interface payment gateway?",options:["Only abstract","Only interface bad","Interface contract, abstract shared state","Same"],ans:2,bloom:"Evaluate L5",exp:"Design."},
{q:"NullPointerException why?",options:["Syntax","Compiler bug","Dereferencing null","Memory full"],ans:2,bloom:"Analyze L4",exp:"Null deref."},
{q:"ArrayList vs LinkedList search?",options:["LinkedList","Both same","ArrayList O(1) get vs Linked O(n)","Linked faster search"],ans:2,bloom:"Evaluate L5",exp:"Access pattern."},
{q:"try{return 1;} finally{return 2;} returns?",options:["1","0","2 finally overrides","Error"],ans:2,bloom:"Analyze L4",exp:"Finally overrides."},
{q:"Checked vs Unchecked?",options:["Catch all unchecked","Ignore checked","Checked recoverable, unchecked programming","Same"],ans:2,bloom:"Evaluate L5",exp:"Exception design."},
{q:"synchronized needed when?",options:["Always","Single thread","Shared mutable multiple threads","Never"],ans:2,bloom:"Analyze L4",exp:"Race condition."},
{q:"Best Singleton multi-thread?",options:["New each time","No singleton","Enum / double-checked volatile","Synchronized whole best"],ans:2,bloom:"Evaluate L5",exp:"Thread-safe."},
{q:"Why Java platform independent?",options:["Direct same","No reason","Bytecode + JVM","Compiler exe all"],ans:2,bloom:"Analyze L4",exp:"JVM abstraction."},
{q:"HashMap vs TreeMap sorted roll no?",options:["HashMap sorted","Both unsorted","TreeMap sorted by key","HashMap sorted"],ans:2,bloom:"Evaluate L5",exp:"Sorting need."}
],
aptitude: [
{q:"All pens pencils, some pencils erasers => some pens erasers?",options:["Yes definitely","All pens erasers","No definite conclusion","No pens erasers"],ans:2,bloom:"Analyze L4",exp:"Syllogism no direct link."},
{q:"Find odd ball 9 balls 2 weighings?",options:["One by one","Divide 3 groups compare","Random","Impossible"],ans:1,bloom:"Evaluate L5",exp:"Optimal."},
{q:"Series 3,8,18,33,53,?",options:["68","58","78 diff +5,+10,+15,+20,+25","73"],ans:2,bloom:"Analyze L4",exp:"Diff +5."},
{q:"Two trains 100km speed 50 each meet when?",options:["2 hr","0.5 hr","1 hr relative 100","1.5 hr"],ans:2,bloom:"Evaluate L5",exp:"Relative speed."},
{q:"2 apples+3 bananas=20, 2 apples=10, banana?",options:["10","3.33","5","6.6"],ans:1,bloom:"Analyze L4",exp:"(20-10)/3."},
{q:"Job A 50k+10% vs B 60k flat 3y?",options:["B always","A always","A if growth sustained > B after 2y","No diff"],ans:2,bloom:"Evaluate L5",exp:"Growth projection."},
{q:"A left B, B left C middle?",options:["A","C","B","Cannot"],ans:2,bloom:"Analyze L4",exp:"Order."},
{q:"Dice sum 7 vs sum 2 prob?",options:["2 more likely","Same","7 has 6 combos, 2 has 1","Random"],ans:2,bloom:"Evaluate L5",exp:"Sample space."},
{q:"30% cricket,20% football,10% both only cricket?",options:["30%","10%","20% =30-10","20%"],ans:2,bloom:"Analyze L4",exp:"Venn."},
{q:"Best time management exam?",options:["Hard first always","Random","Easy high marks first then hard","Leave all"],ans:2,bloom:"Evaluate L5",exp:"Maximize score."}
],
cs: [
{q:"Why binary not decimal CPU?",options:["Easy humans","Decimal faster","2-state transistor reliable","No reason"],ans:2,bloom:"Analyze L4",exp:"Hardware reliable."},
{q:"SSD vs HDD OS?",options:["HDD faster","Both same","SSD fast boot random access","HDD better OS"],ans:2,bloom:"Evaluate L5",exp:"Performance."},
{q:"Why L1 smaller than L2 but faster?",options:["L1 slower","Random","Closer core + SRAM cost tradeoff","L2 faster"],ans:2,bloom:"Analyze L4",exp:"Memory hierarchy."},
{q:"1000 users Process vs Thread?",options:["Process per user","Both same","Thread lighter shares memory","Process lighter"],ans:2,bloom:"Evaluate L5",exp:"Resource."},
{q:"Deadlock necessary conditions?",options:["Only mutual","Only circular","All 4 conditions","One enough"],ans:2,bloom:"Analyze L4",exp:"Coffman."},
{q:"Best sorting almost sorted 10k?",options:["QuickSort","Bubble","Insertion Sort O(n)","Merge always"],ans:2,bloom:"Evaluate L5",exp:"Adaptive."},
{q:"Why MAC with IP?",options:["IP enough","MAC routing","IP logical routing, MAC physical LAN","No need MAC"],ans:2,bloom:"Analyze L4",exp:"L2 vs L3."},
{q:"Public vs Private cloud police data?",options:["Public always","No cloud","Private/Hybrid sensitive security","Public secure always"],ans:2,bloom:"Evaluate L5",exp:"Security eval."},
{q:"32-bit OS max RAM?",options:["Unlimited","64GB","4GB 2^32","8GB"],ans:2,bloom:"Analyze L4",exp:"Address bus."},
{q:"Best backup for college?",options:["No backup","1 copy enough","3-2-1 rule 3 copies 2 media 1 offsite","Only cloud"],ans:2,bloom:"Evaluate L5",exp:"Redundancy."}
]
};
let quizDB = JSON.parse(localStorage.getItem('customQuizDB')) || JSON.parse(JSON.stringify(defaultDB));
if(!localStorage.getItem('customQuizDB')) localStorage.setItem('customQuizDB', JSON.stringify(quizDB));
let curSub='', qs=[], idx=0, correct=0, wrong=0, timer, tLeft=45;
function toggleTheme(){ document.body.classList.toggle('light'); localStorage.setItem('theme', document.body.classList.contains('light')?'light':'dark'); }
if(localStorage.getItem('theme')==='light') document.body.classList.add('light');
function shuffleOptions(q){
  const opts = q.options.map((o,i)=>({text:o, orig:i}));
  for(let i=opts.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [opts[i],opts[j]]=[opts[j],opts[i]]; }
  const newAns = opts.findIndex(x=>x.orig===q.ans);
  return {...q, options: opts.map(x=>x.text), ans: newAns };
}
function openQuiz(sub){
  const name=document.getElementById('userName').value.trim();
  if(!name){ alert("Pehle naam likh bhai!"); return; }
  curSub=sub;
  const raw = [...quizDB[sub]].sort(()=>Math.random()-0.5).slice(0,10);
  qs = raw.map(shuffleOptions);
  idx=0; correct=0; wrong=0;
  document.getElementById('homePage').style.display='none';
  document.getElementById('quizPage').style.display='block';
  document.getElementById('resultPage').style.display='none';
  document.getElementById('subPill').textContent=sub.toUpperCase();
  document.getElementById('score').textContent=0;
  loadQ();
}
function goHome(){ clearInterval(timer); document.getElementById('homePage').style.display='block'; document.getElementById('quizPage').style.display='none'; document.getElementById('resultPage').style.display='none'; renderLeaderboard(); }
function loadQ(){
  if(idx>=10){ showRes(); return; }
  clearInterval(timer); tLeft=45; document.getElementById('timer').textContent=tLeft; startT();
  const d=qs[idx];
  document.getElementById('qCount').textContent=`Q ${idx+1}/10`;
  document.getElementById('bloom').textContent=d.bloom;
  document.getElementById('question').textContent=d.q;
  document.getElementById('progress').style.width=`${idx*10}%`;
  document.getElementById('explain').textContent='';
  document.getElementById('nextBtn').disabled=true;
  const box=document.getElementById('options'); box.innerHTML='';
  d.options.forEach((o,i)=>{ const div=document.createElement('div'); div.className='option'; div.textContent=o; div.onclick=()=>check(i); box.appendChild(div); });
}
function startT(){ timer=setInterval(()=>{ tLeft--; document.getElementById('timer').textContent=tLeft; if(tLeft<=0){ clearInterval(timer); check(-1); } },1000); }
function check(sel){
  clearInterval(timer);
  const cor=qs[idx].ans;
  document.querySelectorAll('.option').forEach((e,i)=>{ e.classList.add('disabled'); if(i===cor) e.classList.add('correct'); if(i===sel && sel!==cor) e.classList.add('wrong'); });
  if(sel===cor) correct++; else wrong++;
  const finalScore = (correct - wrong*0.25).toFixed(2);
  document.getElementById('score').textContent=finalScore;
  document.getElementById('explain').textContent='💡 '+qs[idx].exp;
  document.getElementById('nextBtn').disabled=false;
}
document.getElementById('nextBtn').onclick=()=>{ idx++; loadQ(); };
function showRes(){
  document.getElementById('quizPage').style.display='none';
  document.getElementById('resultPage').style.display='block';
  const name=document.getElementById('userName').value;
  const percRaw = Math.max(0, correct - wrong*0.25);
  const perc = Math.round((percRaw/10)*100);
  document.getElementById('rCorrect').textContent=correct;
  document.getElementById('rWrong').textContent=wrong;
  document.getElementById('rPerc').textContent=perc+'%';
  document.getElementById('certName').textContent=name;
  document.getElementById('certDesc').innerHTML=`For outstanding performance in <b>${curSub.toUpperCase()}</b> with Bloom's Level 4 & 5<br>Demonstrated excellent analytical & evaluation skills`;
  document.getElementById('certScore').textContent=`${correct}/10`;
  document.getElementById('certPerc').textContent=`${perc}%`;
  document.getElementById('certDate').textContent=new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  saveLeaderboard(name, curSub, percRaw);
  if(perc>=60) fireConfetti();
}
function saveLeaderboard(name, sub, sc){
  let board = JSON.parse(localStorage.getItem('leaderboard')||'[]');
  board.push({name, sub, score:sc, date: new Date().toLocaleDateString()});
  board.sort((a,b)=>b.score-a.score); board=board.slice(0,10);
  localStorage.setItem('leaderboard', JSON.stringify(board)); renderLeaderboard();
}
function renderLeaderboard(){
  const board = JSON.parse(localStorage.getItem('leaderboard')||'[]');
  const el=document.getElementById('leaderList');
  if(board.length===0){ el.innerHTML='No scores yet.'; return; }
  el.innerHTML = board.map((r,i)=>`${i+1}. <b>${r.name}</b> - ${r.sub.toUpperCase()} - ${r.score}/10`).join('<br>');
}
function clearLeaderboard(){ localStorage.removeItem('leaderboard'); renderLeaderboard(); }
renderLeaderboard();
function downloadCertificate(){
  const area=document.getElementById('certificateArea');
  html2canvas(area, {backgroundColor:'#ffffff', scale:3}).then(canvas=>{
    const link=document.createElement('a');
    link.download=`Certificate-${curSub}-${document.getElementById('userName').value}.png`;
    link.href=canvas.toDataURL('image/png'); link.click();
  });
}
function fireConfetti(){
  const c=document.getElementById('confetti'); const ctx=c.getContext('2d');
  c.width=window.innerWidth; c.height=window.innerHeight;
  const pieces=[]; for(let i=0;i<150;i++) pieces.push({x:Math.random()*c.width,y:Math.random()*c.height-c.height,r:Math.random()*6+4,color:`hsl(${Math.random()*360},100%,50%)`});
  (function draw(){ ctx.clearRect(0,0,c.width,c.height); pieces.forEach(p=>{ ctx.fillStyle=p.color; ctx.fillRect(p.x,p.y,p.r,p.r); p.y+=2; p.x+=Math.sin(p.y/20); }); if(pieces[0].y < c.height) requestAnimationFrame(draw); else ctx.clearRect(0,0,c.width,c.height); })();
}