import React from 'react';
import { ContactInfo } from '../types';
import { QRCodeSVG } from 'qrcode.react';
import { X } from 'lucide-react';

interface QrModalProps {
  user: ContactInfo;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ user, onClose }) => {
  // We use the vCard format for the QR code so scanning it adds the contact directly
  const qrData = `BEGIN:VCARD
VERSION:3.0
FN:${user.name}
ORG:${user.company}
TITLE:${user.title}
TEL;TYPE=CELL:${user.phone}
EMAIL:${user.email}
ADR;TYPE=WORK:;;${user.location};;;;
END:VCARD`;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl relative animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center pt-4">
          <h3 className="text-xl font-bold text-slate-800 mb-2">امسح الكود</h3>
          <p className="text-slate-500 text-sm mb-6 text-center">
            وجه الكاميرا لمسح الرمز وحفظ جهة الاتصال
          </p>
          
          <div className="p-4 bg-white border-2 border-slate-100 rounded-2xl shadow-inner">
            <QRCodeSVG 
              value={qrData} 
              size={200}
              level={"M"}
              includeMargin={true}
              imageSettings={{
                src: user.avatarUrl || "",
                x: undefined,
                y: undefined,
                height: 24,
                width: 24,
                excavate: true,
              }}
            />
          </div>
          
          <p className="mt-6 text-sm font-semibold text-blue-600 bg-blue-50 py-2 px-4 rounded-full">
            {user.company}
          </p>
        </div>
      </div>
    </div>
  );
};