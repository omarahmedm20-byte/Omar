import React from 'react';
import { ContactInfo } from '../types';
import { Phone, Mail, MapPin, Building2, Globe } from 'lucide-react';

interface ContactDetailsProps {
  user: ContactInfo;
}

export const ContactDetails: React.FC<ContactDetailsProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4 p-2">
        <div className="mt-1 text-slate-400">
          <Phone size={20} />
        </div>
        <div className="flex-1">
          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-0.5">الجوال</p>
          <a href={`tel:${user.phone}`} className="text-slate-800 font-semibold hover:text-blue-600 block dir-ltr text-right" style={{ direction: 'ltr', textAlign: 'right' }}>
            {user.phone}
          </a>
        </div>
      </div>
      
      <div className="w-full h-px bg-slate-100"></div>

      <div className="flex items-start gap-4 p-2">
        <div className="mt-1 text-slate-400">
          <Mail size={20} />
        </div>
        <div className="flex-1 overflow-hidden">
           <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-0.5">البريد الإلكتروني</p>
          <a href={`mailto:${user.email}`} className="text-slate-800 font-semibold hover:text-blue-600 block truncate">
            {user.email}
          </a>
        </div>
      </div>

      <div className="w-full h-px bg-slate-100"></div>

      <div className="flex items-start gap-4 p-2">
        <div className="mt-1 text-slate-400">
          <Building2 size={20} />
        </div>
        <div className="flex-1">
          <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-0.5">الشركة</p>
          <p className="text-slate-800 font-semibold">
            {user.company}
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-slate-100"></div>

      <div className="flex items-start gap-4 p-2">
        <div className="mt-1 text-slate-400">
          <MapPin size={20} />
        </div>
        <div className="flex-1">
           <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-0.5">العنوان</p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(user.location)}`}
            target="_blank"
            rel="noreferrer" 
            className="text-slate-800 font-semibold hover:text-blue-600 leading-relaxed"
          >
            {user.location}
          </a>
        </div>
      </div>
    </div>
  );
};