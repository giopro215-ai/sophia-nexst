'use client';
import { useState, useEffect } from 'react';
import { P } from '../data/thinkers';
export default function Quote() {
  const [i, setI] = useState(0);
  useEffect(() => setI(Math.floor(Date.now() / 864e5) % P.length), []);
  return (<section id="today"><div className="w"><h2>დღის ციტატა</h2><p className="lead">ახალი ფიქრი ყოველ დღე.</p>
    <div className="q">„{P[i][5]}“<small>{P[i][0]}</small></div>
    <button className="btn o" style={{ cursor: 'pointer', font: 'inherit', marginTop: 18 }} onClick={() => setI(Math.floor(Math.random() * P.length))}>სხვა ციტატა</button></div></section>);
}
