"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

type Locale = "en" | "ar";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocale] = useState<Locale | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;

    const currentLocale = saved ?? "en";

    setLocale(currentLocale);

    document.documentElement.lang = currentLocale;
    document.documentElement.dir =
      currentLocale === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    if (!locale) return;

    localStorage.setItem("locale", locale);

    document.documentElement.lang = locale;
    document.documentElement.dir =
      locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(() => {
    if (!locale) return null;

    return {
      locale,
      setLocale,
      t: locale === "ar" ? ar : en,
    };
  }, [locale]);

  if (!value) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}