export interface ContactInfo {
  name: string;
  title: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  website?: string;
  avatarUrl?: string;
}

export enum SocialPlatform {
  WHATSAPP = 'whatsapp',
  LINKEDIN = 'linkedin',
  TWITTER = 'twitter',
  INSTAGRAM = 'instagram'
}