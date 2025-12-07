import React from 'react';
import { ContactInfo } from '../types';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

interface ActionGridProps {
  user: ContactInfo;
}

export const ActionGrid: React.FC<ActionGridProps> = ({ user }) => {
  // Format phone number for WhatsApp (remove leading 0, add 966)
  const waNumber = user.phone.startsWith('0') 
    ? '966' + user.phone.substring(1) 
    : user.phone;

  const actions = [
    {
      icon: <Phone size={24} />,
      label: 'اتصال',
      href: `tel:${user.phone}`,
      color: 'bg-green-100 text-green-700 hover:bg-green-200',
    },
    {
      icon: <Mail size={24} />,
      label: 'إيميل',
      href: `mailto:${user.email}`,
      color: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'واتساب',
      href: `https://wa.me/${waNumber}`,
      color: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200',
    },
    {
      icon: <MapPin size={24} />,
      label: 'موقع',
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(user.location)}`,
      color: 'bg-red-100 text-red-700 hover:bg-red-200',
    },
  ];

  return (
    <div className="flex justify-between items-center px-2">
      {actions.map((action, index) => (
        <a
          key={index}
          href={action.href}
          target={action.label === 'اتصال' ? '_self' : '_blank'}
          rel="noreferrer"
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-sm ${action.color} group-active:scale-90`}>
            {action.icon}
          </div>
          <span className="text-xs font-semibold text-slate-500">{action.label}</span>
        </a>
      ))}
    </div>
  );
};