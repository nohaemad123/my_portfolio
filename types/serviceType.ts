import { IconType } from "react-icons";

export type serviceType = {
  id: number;
  icon: IconType;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
};
