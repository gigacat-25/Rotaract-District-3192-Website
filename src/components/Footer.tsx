import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 px-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="text-lg font-black text-slate-900 dark:text-slate-100 uppercase tracking-tighter">
          Rotaract Portal
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="font-body text-sm uppercase tracking-widest text-slate-500 hover:text-violet-600 transition-colors" href="/privacy">Privacy Policy</Link>
          <Link className="font-body text-sm uppercase tracking-widest text-slate-500 hover:text-violet-600 transition-colors" href="/terms">Terms of Service</Link>
          <Link className="font-body text-sm uppercase tracking-widest text-slate-500 hover:text-violet-600 transition-colors" href="/cookies">Cookie Policy</Link>
          <a className="font-body text-sm uppercase tracking-widest text-slate-500 hover:text-violet-600 transition-colors" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="font-body text-sm uppercase tracking-widest text-slate-500 hover:text-violet-600 transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="font-body text-sm uppercase tracking-widest text-slate-500 text-center md:text-right">
          © {currentYear} Rotaract Portal. Architectural Excellence.
        </div>
      </div>
    </footer>
  );
}
