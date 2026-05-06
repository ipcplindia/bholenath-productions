import { siteConfig } from '@/config/site.config';

export default function Footer() {
  return (
    <footer className="bg-[#030305] border-t border-gold/10 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gold text-sm tracking-widest">{siteConfig.presentation}</p>
        <p className="mt-6 text-xs text-[#A7AAB4]">{siteConfig.founder}</p>
        <div className="flex justify-center gap-8 mt-12 text-xs">
          <a href={siteConfig.youtube} target="_blank" className="hover:text-gold">YOUTUBE</a>
          <a href={siteConfig.instagram} target="_blank" className="hover:text-gold">INSTAGRAM</a>
          <a href="#" className="hover:text-gold">CONTACT</a>
        </div>
        <p className="mt-16 text-[10px] text-[#A7AAB4]/70">© 2026 BHOLENATH PRODUCTIONS • SHIVAYONIC MUSIC • All Rights Reserved</p>
      </div>
    </footer>
  );
}
