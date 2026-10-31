'use client';
import { useEffect, useRef, useState } from 'react';
const FORM_URL = process.env.NEXT_PUBLIC_FORM_URL || '';
export default function Register() {
  const ref = useRef(null), [plan, setPlan] = useState('Free'), [msg, setMsg] = useState('');
  useEffect(() => {
    const h = e => { const a = e.target.closest('[data-p]'); if (a) { e.preventDefault(); setPlan(a.dataset.p); setMsg(''); ref.current.showModal() } };
    document.addEventListener('click', h); return () => document.removeEventListener('click', h);
  }, []);
  const submit = e => {
    e.preventDefault(); const f = e.target;
    if (!FORM_URL) { setMsg('დემო რეჟიმი: მონაცემები ჯერ არსად ინახება. ფორმის დასაკავშირებლად საჭიროა მისამართი.'); return }
    fetch(FORM_URL, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(f) })
      .then(r => { setMsg(r.ok ? 'მადლობა! რეგისტრაცია მიღებულია.' : 'ვერ გაიგზავნა, სცადე ხელახლა.'); if (r.ok) f.reset() }).catch(() => setMsg('კავშირის შეცდომა.'));
  };
  return (<dialog id="reg" ref={ref} onClick={e => { if (e.target === ref.current) ref.current.close() }}>
    <button className="x" aria-label="დახურვა" onClick={() => ref.current.close()}>×</button><h2>რეგისტრაცია</h2>
    <p style={{ color: 'var(--mut)', fontSize: 15, margin: 0 }}>შემოგვიერთდი ადრეული წევრების სიაში.</p>
    <form onSubmit={submit}><label htmlFor="rn">სახელი</label><input id="rn" name="name" required autoComplete="name" />
      <label htmlFor="re">ელფოსტა</label><input id="re" name="email" type="email" required autoComplete="email" />
      <label htmlFor="rp">გეგმა</label><select id="rp" name="plan" value={plan} onChange={e => setPlan(e.target.value)}><option>Free</option><option>Member</option><option>Scholar</option></select>
      <label className="ck"><input type="checkbox" required /> ვეთანხმები, რომ ჩემი ელფოსტა გამოყენებული იქნება სიახლეების გასაგზავნად.</label>
      <button className="btn" type="submit" style={{ marginTop: 14, cursor: 'pointer', font: 'inherit' }}>რეგისტრაცია</button><div id="rmsg" aria-live="polite">{msg}</div></form></dialog>);
}
