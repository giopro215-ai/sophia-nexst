'use client';
import { useState } from 'react';
import { QZ, QS, QD } from '../data/quiz';
export default function Quiz() {
  const [i, setI] = useState(0), [sc, setSc] = useState([0, 0, 0, 0]), done = i >= QZ.length, m = sc.indexOf(Math.max(...sc));
  return (<section id="quiz"><div className="w"><h2>რომელი სკოლა გიხდება?</h2>
    <p className="lead">ოთხი კითხვა, ერთი პასუხი. შედეგი იმას გვიჩვენებს, რომელი ფილოსოფიური სკოლა ესადაგება შენს აზროვნებას.</p>
    <div className="qz" aria-live="polite">{done ? <><h3>შენ ხარ: {QS[m]}</h3><p>{QD[m]}</p><button onClick={() => { setI(0); setSc([0, 0, 0, 0]) }}>თავიდან დაწყება</button></>
      : <><h3>{i + 1}/{QZ.length} · {QZ[i].q}</h3>{QZ[i].a.map((o, k) => <button key={k} onClick={() => { setSc(s => s.map((v, j) => j === o[1] ? v + 1 : v)); setI(i + 1) }}>{o[0]}</button>)}</>}</div></div></section>);
}
