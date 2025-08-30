import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl text-stone-900">Kawabata Ceramics</h3>
            <p className="mt-2 text-sm text-stone-600">Kyoto, Japan</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:studio@kawabata-ceramics.jp"
              className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900"
            >
              <Mail size={18} />
              <span className="text-sm">studio@kawabata-ceramics.jp</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900"
            >
              <Instagram size={18} />
              <span className="text-sm">Instagram</span>
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-stone-500">© {new Date().getFullYear()} Kawabata Ceramics. All rights reserved.</p>
      </div>
    </footer>
  );
}
