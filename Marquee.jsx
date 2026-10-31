import { M } from '../data/words';
export default function Marquee() {
  const row = k => M.map((m, i) => <span key={k + i}><b>{m[0]}</b> — {m[1]}</span>);
  return <div className="mq" aria-hidden="true"><div>{row('a')}{row('b')}</div></div>;
}
