'use client';
import { useState } from 'react';
import { G } from '../data/glossary';
export default function Glossary() {
  const [q, setQ] = useState(''), t = q.trim().toLowerCase(), r = G.filter(g => !t || (g[0] + ' ' + g[1]).toLowerCase().includes(t));
  return (<section id="gloss"><div className="w"><h2>ფილოსოფიური ლექსიკონი</h2><p className="lead">მიმდინარეობები და ცნებები მარტივად: რას ნიშნავს და ვინ უკავშირდება.</p>
    <input id="gs" type="search" placeholder="მოძებნე, მაგ.: სტოიციზმი" aria-label="ძებნა" value={q} onChange={e => setQ(e.target.value)} />
    <div id="gl">{r.length ? r.map(g => <details key={g[0]}><summary>{g[0]}</summary><p>{g[1]}</p></details>) : <p>ვერაფერი მოიძებნა.</p>}</div></div></section>);
}
