import { ContactInfo } from './types';

export const USER_DATA: ContactInfo = {
  name: "عمر أحمد موسى",
  title: "مهندس مدني - بنية تحتية",
  company: "مجموعة العمرو للاستشارات الهندسية",
  phone: "0564095676",
  email: "omarahmedm20@gmail.com",
  location: "جدة - السعودية",
  // ملاحظة: قم باستبدال الرابط أدناه برابط صورتك الشخصية الحقيقي
  // Note: Replace the URL below with the direct link to your actual photo
  avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=500&h=500&q=80"
};

export const VCARD_DATA = `BEGIN:VCARD
VERSION:3.0
FN:${USER_DATA.name}
N:موسى;عمر;أحمد;;
ORG:${USER_DATA.company}
TITLE:${USER_DATA.title}
TEL;TYPE=CELL:${USER_DATA.phone}
EMAIL;TYPE=WORK:${USER_DATA.email}
ADR;TYPE=WORK:;;${USER_DATA.location};;;;
END:VCARD`;