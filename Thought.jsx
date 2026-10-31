'use client';
import { useState } from 'react';
export default function Thought() {
  const [a, setA] = useState('');
  return (<section id="exp"><div className="w"><h2>ფიქრის ექსპერიმენტი: თესევსის ხომალდი</h2>
    <p className="lead">ათენელებმა ძველ ხომალდს დაფები სათითაოდ შეუცვალეს, სანამ ყველა ახალი არ გახდა. იგივე ხომალდია?</p>
    <div className="qz"><button onClick={() => setA('შენთვის იდენტობა ფორმასა და უწყვეტობაშია, არა მასალაში. ეს არისტოტელეს ფორმის იდეას ახლოსაა.')}>დიახ, იგივეა</button>
      <button onClick={() => setA('შენთვის იდენტობა მასალაზეა დამოკიდებული. მაშინ ჩვენც სხვა ვართ, რადგან სხეულის უჯრედები მუდმივად იცვლება.')}>არა, სხვაა</button><p aria-live="polite">{a}</p></div></div></section>);
}
