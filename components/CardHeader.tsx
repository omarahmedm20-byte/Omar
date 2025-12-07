import React from 'react';
import { ContactInfo } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface CardHeaderProps {
  user: ContactInfo;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        {/* Increased size from w-32/h-32 to w-40/h-40 for better visibility */}
        <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-200">
          <img 
            src={user.avatarUrl} 
            alt={user.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-2 right-2 bg-blue-500 text-white p-1.5 rounded-full border-4 border-white shadow-sm">
          <CheckCircle2 size={18} />
        </div>
      </div>
      
      <h1 className="mt-5 text-3xl font-extrabold text-slate-900 tracking-tight">
        {user.name}
      </h1>
      
      <p className="mt-2 text-slate-600 font-medium text-lg">
        {user.title}
      </p>
      
      <div className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold border border-slate-200">
        <span>{user.company}</span>
      </div>
    </div>
  );
};