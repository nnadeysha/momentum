(()=>{const e=document.querySelector(".progress"),t=document.querySelector(".progress-volume"),n=document.querySelector(".buy-button"),r=document.querySelector(".form-close-button"),l=document.querySelector(".form-wrapper"),o=document.querySelector(".overlay"),i=document.querySelector(".booking-button");let c;e.addEventListener("input",(function(){const e=this.value;this.style.background=`linear-gradient(to right, #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, grey 100%)`})),t.addEventListener("input",(function(){const e=this.value;this.style.background=`linear-gradient(to right, #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, grey 100%)`})),n.addEventListener("click",(()=>{l.classList.toggle("active"),o.style.display="block"})),r.addEventListener("click",(()=>{l.classList.remove("active"),o.style.display="none"})),i.addEventListener("click",(e=>{const t=e.clientX-e.target.getBoundingClientRect().left,n=e.clientY-e.target.getBoundingClientRect().top;c=document.createElement("div"),c.classList.add("ripple"),c.style.left=`${t}px`,c.style.top=`${n}px`,i.prepend(c)})),i.addEventListener("mouseleave",(()=>{i.removeChild(c)}));const s=document.querySelector(".flex-inner-gallery");let a=[];for(let e=1;e<16;e++)image=`<img src="images/gallery/galery${e}.jpg" alt="gallery${e}">`,a.push(image);let u,d=[];for(;d.length<15;)u=Math.trunc(15*Math.random()+1),d.includes(u)||d.push(u);let g=[];for(let e=0;e<15;e++)g.push(a[d[e]-1]);s.innerHTML=g.join("")})();