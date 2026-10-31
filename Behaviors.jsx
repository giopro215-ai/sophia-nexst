'use client';
import { useEffect } from 'react';
export default function Behaviors() {
  useEffect(() => {
    document.documentElement.classList.add('js');
    const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
    const click = e => { const f = e.target.closest('.fc'); if (f) f.classList.toggle('f') };
    const key = e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('fc')) { e.preventDefault(); e.target.classList.toggle('f') } };
    document.addEventListener('click', click); document.addEventListener('keydown', key);
    let io; if (!rm && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12 });
      document.querySelectorAll('.w>h2,.w>.lead,.g>*,.tl>div,.t,.q,.sm>div,.qz').forEach((n, i) => { n.classList.add('rv'); n.style.transitionDelay = (i % 4) * 90 + 'ms'; io.observe(n) });
    }
    const pg = document.getElementById('pg');
    const sc = () => { const d = document.documentElement; if (pg) pg.style.width = 100 * d.scrollTop / Math.max(1, d.scrollHeight - innerHeight) + '%' };
    addEventListener('scroll', sc, { passive: true });
    return () => { document.removeEventListener('click', click); document.removeEventListener('keydown', key); removeEventListener('scroll', sc); if (io) io.disconnect() };
  }, []);
  return null;
}
