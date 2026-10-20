import React from 'react';
import { BookOpen, Download, ArrowUpRight, Code2 } from 'lucide-react';
import { BIM_ASSETS, BIM_PORTFOLIO_PDF, getBimCopy } from '../data/bimCoordination';
import { LanguageCode } from '../utils/i18n';

export const BimCoordinatorPortfolioSection: React.FC<{
  language: LanguageCode;
  onOpenPortfolio: () => void;
  onContact: (message?: string) => void;
}> = ({ language, onOpenPortfolio, onContact }) => {
  const c = getBimCopy(language);
  return (
    <section id="bim-coordinator-portfolio" className="scroll-mt-24 mb-12 rounded-3xl bg-white border border-slate-200 shadow-clay-sm overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="p-6 sm:p-10 flex flex-col justify-center">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3">{c.projectTitle.split(' / ')[0]} / {c.category}</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">{c.portfolioTitle}</h2>
          <p className="text-slate-600 leading-7 mb-6">{c.projectIntro}</p>
          <p className="text-xs text-slate-500 mb-5">{c.meta}</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={onOpenPortfolio} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors"><BookOpen size={17} />{c.archive}</button>
            <a href={BIM_PORTFOLIO_PDF} download className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-bold transition-colors"><Download size={17} />{c.download}</a>
          </div>
        </div>
        <button onClick={onOpenPortfolio} className="bg-slate-950 relative group min-h-64" aria-label={c.portfolioTitle}>
          <img src={BIM_ASSETS + 'romania-model.webp'} alt={c.imageLabels[0]} width={2000} height={1381} className="w-full h-full max-h-[430px] object-contain" loading="lazy" />
          <span className="absolute bottom-4 left-4 right-4 rounded-xl bg-slate-900/90 text-white text-xs px-4 py-3 flex items-center justify-between">{c.galleryTitle}<ArrowUpRight size={17} /></span>
        </button>
      </div>
      <div className="border-t border-slate-100 p-6 sm:p-10">
        <h3 className="font-bold text-lg mb-5">{c.servicesTitle}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.services.map(([title, description]) => <div key={title}><h4 className="text-sm font-bold text-slate-900 mb-2">{title}</h4><p className="text-sm leading-7 text-slate-500">{description}</p></div>)}
        </div>
        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-100 p-5 sm:p-6">
          <h3 className="flex items-center gap-2 font-bold mb-4"><Code2 size={20} className="text-blue-600" />{c.skillsTitle}</h3>
          <div className="flex flex-wrap gap-2" dir="ltr">{c.skillsIntro.split(' · ').map(skill => <span key={skill} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700">{skill}</span>)}</div>
          <p className="text-sm text-slate-500 leading-7 mt-4">{c.evidence}</p>
        </div>
        <p className="text-xs leading-7 text-slate-500 mt-6">{c.review}</p>
        <button onClick={() => onContact(c.projectTitle)} className="inline-flex gap-2 items-center text-blue-600 font-bold text-sm mt-5">{c.contact}<ArrowUpRight size={16} /></button>
      </div>
    </section>
  );
};
