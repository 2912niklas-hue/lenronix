document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.getElementById('menuBtn');
  const menu=document.getElementById('menu');
  if(btn&&menu) btn.addEventListener('click',()=>menu.classList.toggle('show'));
  const containers=document.querySelectorAll('[data-tabs]');
  containers.forEach(c=>{
    const buttons=c.querySelectorAll('.tabs button');
    const panels=c.querySelectorAll('[data-tab-panel]');
    buttons.forEach(b=>b.addEventListener('click',()=>{
      const id=b.getAttribute('data-tab');
      buttons.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      panels.forEach(p=>p.style.display=(p.getAttribute('data-tab-panel')===id?'block':'none'));
    }));
    if(buttons[0]) buttons[0].click();
  });
});