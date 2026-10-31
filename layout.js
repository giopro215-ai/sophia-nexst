import './globals.css';
import Background from '../components/Background';
import Behaviors from '../components/Behaviors';
export const metadata = { title: 'სოფია — ფილოსოფიის პლატფორმა', description: 'ფილოსოფიის ისტორია, მოაზროვნეები, მიმდინარეობები და სიღრმისეული კურსები.' };
export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };
export default function RootLayout({ children }) {
  return (<html lang="ka" suppressHydrationWarning><head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Serif+Georgian:wght@400;700&family=Noto+Sans+Georgian:wght@400;600&display=swap" /></head>
    <body><Background /><Behaviors /><div className="pg" id="pg" />{children}</body></html>);
}
