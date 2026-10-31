import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Thinkers from '../components/Thinkers';
import Glossary from '../components/Glossary';
import Quiz from '../components/Quiz';
import Thought from '../components/Thought';
import Quote from '../components/Quote';
import Register from '../components/Register';
import { Free, Questions, Timeline, Premium, Plans, Sitemap, Footer } from '../components/Static';
export default function Home() {
  return (<><div className="w"><Nav /><Hero /></div><Marquee /><Free /><Questions /><Timeline /><Thinkers /><Glossary /><Quiz /><Thought /><Quote /><Premium /><Plans /><Sitemap /><Footer /><Register /></>);
}
