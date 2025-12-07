import React, { useState } from 'react';
import { CardHeader } from './components/CardHeader';
import { ActionGrid } from './components/ActionGrid';
import { ContactDetails } from './components/ContactDetails';
import { QrModal } from './components/QrModal';
import { Footer } from './components/Footer';
import { USER_DATA, VCARD_DATA } from './constants';
import { Download, Share2, QrCode } from 'lucide-react';

const App: React.FC = () => {
  const [showQr, setShowQr] = useState(false);

  const handleDownloadVCard = () => {
    const blob = new Blob([VCARD_DATA], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Omar_Ahmed_Musa.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: USER_DATA.name,
          text: `${USER_DATA.name} - ${USER_DATA.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Share failed', err);
      }
    } else {
      alert('المتصفح لا يدعم خاصية المشاركة المباشرة، يمكنك نسخ الرابط.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 relative">
        
        {/* Top Decorative Banner */}
        <div className="h-32 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 pb-8 relative">
            
          {/* Header Profile Section */}
          <div className="-mt-16 mb-6">
            <CardHeader user={USER_DATA} />
          </div>

          {/* Primary Call To Action */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <button 
              onClick={handleDownloadVCard}
              className="flex items-center justify-center gap-2 bg-slate-900 text-white py-3 px-4 rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all active:scale-95"
            >
              <Download size={20} />
              <span>حفظ جهة الاتصال</span>
            </button>
            <button 
              onClick={() => setShowQr(true)}
              className="flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-200 py-3 px-4 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95"
            >
              <QrCode size={20} />
              <span>رمز QR</span>
            </button>
          </div>

          {/* Quick Actions Grid */}
          <div className="mb-8">
             <ActionGrid user={USER_DATA} />
          </div>

          {/* Detailed List */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
             <ContactDetails user={USER_DATA} />
          </div>

          <div className="mt-8 flex justify-center">
             <button 
               onClick={handleShare}
               className="text-slate-400 hover:text-slate-600 flex items-center gap-2 text-sm transition-colors"
             >
               <Share2 size={16} />
               <span>مشاركة البطاقة</span>
             </button>
          </div>

        </div>
        
        <Footer />
        
        {/* Modals */}
        {showQr && <QrModal user={USER_DATA} onClose={() => setShowQr(false)} />}
        
      </div>
    </div>
  );
};

export default App;