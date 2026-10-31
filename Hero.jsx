'use client';
import { useState } from 'react';
import { N, E } from '../data/map';
export default function Hero() {
  const [i, setI] = useState(0), d = N[i];
  return (<div className="hero"><div>
    <h1>ფილოსოფია, რომელიც არ ჩერდება სახელმძღვანელოზე</h1>
    <p>ათასწლეულების ფიქრი ერთ რუკაზე. დაიწყე უფასოდ, გაიგე ვინ ვის უპასუხა, და გადადი სიღრმისეულ კურსებსა და ტრაქტატების ანალიზზე.</p>
    <a className="btn" href="#free">დაიწყე უფასოდ</a><a className="btn o" href="#plans">იხილე გეგმები</a></div>
    <div className="map"><svg viewBox="0 0 400 335" role="img" aria-label="ფილოსოფოსთა ინტერაქტიული რუკა">
      {E.map(([a, b], k) => <line key={k} x1={N[a].x} y1={N[a].y} x2={N[b].x} y2={N[b].y} />)}
      {N.map((n, k) => <g key={k} className={'nd' + (n.p ? ' p' : '') + (k === i ? ' on' : '')} tabIndex={0} role="button" aria-label={n.n} onClick={() => setI(k)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setI(k) } }}>
        <circle cx={n.x} cy={n.y} r="16" /><text x={n.x} y={n.y + 36}>{n.n}</text></g>)}
    </svg><div className="info" aria-live="polite"><h3>{d.n}</h3><div className="tag">{d.yr} — {d.p ? 'Premium' : 'უფასო'}</div><div>{d.t}</div></div></div></div>);
}
