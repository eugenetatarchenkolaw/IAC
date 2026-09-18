(() => {
  const qs=(s,r=document)=>r.querySelector(s); const qsa=(s,r=document)=>[...r.querySelectorAll(s)];
  qsa('[data-group]').forEach(group=>{
    const buttons=qsa('button[data-target]',group); const targets=qsa('[data-view]',group);
    const activate=(name)=>{buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.target===name)));targets.forEach(t=>t.hidden=t.dataset.view!==name)};
    buttons.forEach(b=>b.addEventListener('click',()=>activate(b.dataset.target)));
    group.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft'].includes(e.key))return; const active=buttons.findIndex(b=>b.getAttribute('aria-pressed')==='true'); const next=(active+(e.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length; buttons[next].focus();buttons[next].click();});
  });
  qsa('[data-detail-button]').forEach(b=>b.addEventListener('click',()=>{const out=qs(b.dataset.detailButton); if(out)out.innerHTML=b.dataset.detailHtml||'';}));
  document.addEventListener('visibilitychange',()=>document.documentElement.classList.toggle('paused',document.hidden));
})();