const nav=document.getElementById('nav'),mb=document.getElementById('menu');
mb.onclick=()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.classList.remove('open');mb.setAttribute('aria-expanded',false)});
const links=[...nav.querySelectorAll('a')];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>io.observe(s));
document.getElementById('form').onsubmit=e=>{e.preventDefault();const f=e.target;location.href='mailto:aymen.akdim@uit.ac.ma?subject='+encodeURIComponent('Portfolio message from '+f.n.value)+'&body='+encodeURIComponent(f.m.value+'\n\n'+f.n.value+' ('+f.e.value+')');document.getElementById('note').textContent='Opening your email app to send the message.'};

(()=>{const M=[["Constantly ","improving","."],["Building what’s ","next","."],["Learning by ","doing","."],["Engineering with ","purpose","."]];
const el=document.getElementById('typed'),pic=document.getElementById('pic');
const render=(m,n)=>{let s=n,o='';m.forEach((x,i)=>{const c=x.slice(0,Math.max(0,s));s-=x.length;o+=i===1&&c?'<em>'+c+'</em>':c});el.innerHTML=o};
if(matchMedia('(prefers-reduced-motion: reduce)').matches){render(M[0],99)}
else{let k=0;const wait=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{await wait(2300);while(true){const m=M[k%M.length],L=m.join('').length;el.classList.remove('out');for(let i=1;i<=L;i++){render(m,i);await wait(70)}
await wait(2800);el.classList.add('out');await wait(800);el.innerHTML='';k++;await wait(250)}})()}
pic.addEventListener('keydown',e=>{if(e.key===' '){e.preventDefault();pic.click()}});
})();
