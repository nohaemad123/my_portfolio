import React from "react";

export interface Translation {
  en: string;
  ar: string;
}

export interface ProjectType {
  id: number;

  name: Translation;
  image: string;
  type: Translation;

  short_description: Translation;
  description: Translation;

  slug: string;

  links: {
    demo?: string | null;
    github?: string | null;
  };

  info: {
    role: Translation;
    duration: Translation;
    client: Translation;
    status: Translation;
    year: string;
  };

  technologies: string[];

  features: {
    title: Translation;
    description: Translation;
    icon: React.ElementType;
  }[];

  framework: string;

  category: Translation;

  challenges: Translation[];

  solutions: Translation[];

  learned: {
    title: Translation;
    icon: React.ElementType;
  }[];

  scrollImage: boolean;

  full_date: Translation;
}
