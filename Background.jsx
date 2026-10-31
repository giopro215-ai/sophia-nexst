'use client';
import { useEffect, useRef } from 'react';
export default function Background() {
  const r = useRef(null);
  useEffect(() => {
    const c = r.current, x = c.getContext('2d'), rm = matchMedia('(prefers-reduced-motion:reduce)').matches, L = 'αβγδεζηθλμξπρσφψω∞'.split('');
    let W, H, raf; const rs = () => { W = c.width = innerWidth; H = c.height = innerHeight }; rs(); addEventListener('resize', rs);
    const P = Array.from({ length: 26 }, (_, i) => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25, l: L[i % L.length], s: 20 + Math.random() * 34 }));
    const S = Array.from({ length: 90 }, () => [Math.random(), Math.random()]), ph = (1 + Math.sqrt(5)) / 2;
    const V = [[0,1,ph],[0,-1,ph],[0,1,-ph],[0,-1,-ph],[1,ph,0],[-1,ph,0],[1,-ph,0],[-1,-ph,0],[ph,0,1],[-ph,0,1],[ph,0,-1],[-ph,0,-1]], ED = [];
    for (let u = 0; u < 12; u++) for (let w = u + 1; w < 12; w++) { const e = Math.hypot(V[u][0]-V[w][0], V[u][1]-V[w][1], V[u][2]-V[w][2]); if (e > 1.99 && e < 2.01) ED.push([u, w]) }
    const d = () => {
      x.clearRect(0, 0, W, H); x.fillStyle = x.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--sea').trim(); const t = Date.now() / 900;
      S.forEach((s, k) => { x.globalAlpha = .15 + .2 * Math.sin(t + k); x.fillRect(s[0] * W, s[1] * H, 1.6, 1.6) });
      const a = Date.now() / 6000, ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(a * .6), sb = Math.sin(a * .6), R = Math.min(W, H) * .2;
      const Q = V.map(v => { const x1 = v[0]*ca + v[2]*sa, z1 = -v[0]*sa + v[2]*ca; return [W * .74 + x1 * R, H * .42 + (v[1]*cb - z1*sb) * R] });
      x.globalAlpha = .22; x.lineWidth = 1; x.beginPath(); ED.forEach(e => { x.moveTo(Q[e[0]][0], Q[e[0]][1]); x.lineTo(Q[e[1]][0], Q[e[1]][1]) }); x.stroke();
      Q.forEach(q => { x.beginPath(); x.arc(q[0], q[1], 2.2, 0, 7); x.fill() });
      P.forEach((p, i) => {
        if (!rm) { p.x += p.vx; p.y += p.vy; if (p.x < -40) p.x = W + 40; if (p.x > W + 40) p.x = -40; if (p.y < -40) p.y = H + 40; if (p.y > H + 40) p.y = -40 }
        x.globalAlpha = .08; x.font = p.s + 'px serif'; x.fillText(p.l, p.x, p.y);
        for (let j = i + 1; j < P.length; j++) { const q = P[j], dx = p.x - q.x, dy = p.y - q.y, r2 = dx*dx + dy*dy; if (r2 < 24000) { x.globalAlpha = .09 * (1 - r2 / 24000); x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(q.x, q.y); x.stroke() } }
      });
      if (!rm) raf = requestAnimationFrame(d);
    };
    d(); return () => { cancelAnimationFrame(raf); removeEventListener('resize', rs) };
  }, []);
  return <canvas id="bg" ref={r} aria-hidden="true" />;
}
