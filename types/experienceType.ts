export interface experienceType {
  id: number;
  title: {
    en: string;
    ar: string;
  };
  period: {
    en: string;
    ar: string;
  };
  company: string;
  tools: string[];
  description: {
    en: string;
    ar: string;
  };
}
