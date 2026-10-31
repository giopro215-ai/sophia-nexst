'use client';
export default function Nav() {
  const th = () => { const r = document.documentElement; r.dataset.theme = r.dataset.theme === 'light' ? 'dark' : 'light' };
  return (<nav><b>სოფია</b><span><a href="#free">უფასო</a><a href="#people">ფილოსოფოსები</a><a href="#gloss">ლექსიკონი</a><a href="#quiz">ქვიზი</a><a href="#premium">Premium</a><a href="#plans">გეგმები</a><a href="#sitemap">რუკა</a>
    <a href="#" className="rg" data-p="Free">რეგისტრაცია</a><button className="th" aria-label="თემის შეცვლა" onClick={th}>◐</button></span></nav>);
}
