'use client';
import { useState } from 'react';
import Link from 'next/link';
import { P } from '../data/thinkers';
const E = ['ყველა', 'ანტიკური', 'ახალი დრო', 'თანამედროვე'];
export default function Thinkers() {
  const [f, setF] = useState(0);
  return (<section id="people"><div className="w"><h2>ფილოსოფოსები და მათი ციტატები</h2>
    <p className="lead">ჯაჭვი: სოკრატე → პლატონი → არისტოტელე. გაფილტრე ეპოქით. ციტატები გადმოცემითი თარგმანია, ზუსტი წყარო გადაამოწმეთ.</p>
    <div className="chips">{E.map((n, i) => <button key={i} className={i === f ? 'on' : ''} onClick={() => setF(i)}>{n}</button>)}</div>
    <div className="g">{P.map((p, i) => (!f || p[2] + 1 === f) && <div className="pc" key={i}><h3><Link href={'/thinkers/' + i + '/'}>{p[0]}</Link></h3><small>{p[1]} · {p[3]}</small><p>{p[4]}</p><div className="qt">„{p[5]}“</div></div>)}</div></div></section>);
}
