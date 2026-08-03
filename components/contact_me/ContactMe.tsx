"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FiSend } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "../language-provider";

export default function ContactMe() {
  const { locale, t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.warning("Please fill all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.warning("Please enter a valid email.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#151515] w-full rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-8 flex flex-col">
      <h3 className="text-2xl font-extrabold">{t.contact.send_message}</h3>

      <form className="mt-5 flex flex-col gap-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 md:gap-x-10 gap-y-5">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-3">
            <label className="text-md font-bold">{t.contact.full_name}</label>

            <Input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t.contact.full_name_placeholder}
              className="h-10! px-5 w-full rounded-sm! border-gray-400! dark:border-[#444]! dark:bg-[#0f0f0f] dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-3">
            <label className="text-md font-bold">{t.contact.email}</label>

            <Input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder={t.contact.email_placeholder}
              className="h-10! px-5 w-full rounded-sm! border-gray-400! dark:border-[#444]! dark:bg-[#0f0f0f] dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-3">
            <label className="text-md font-bold">{t.contact.phone} </label>

            <Input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder={t.contact.phone_placeholder}
              className="h-10! px-5 w-full rounded-sm! border-gray-400! dark:border-[#444]! dark:bg-[#0f0f0f] dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-3">
            <label className="text-md font-bold">{t.contact.subject}</label>

            <Input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              type="text"
              placeholder={t.contact.subject_placeholder}
              className="h-10! px-5 w-full rounded-sm! border-gray-400! dark:border-[#444]! dark:bg-[#0f0f0f] dark:text-white dark:placeholder:text-gray-500"
            />
          </div>

          <div className="col-span-12 flex flex-col gap-y-3">
            <label className="text-md font-bold">{t.contact.message}</label>

            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.contact.message_placeholder}
              className="h-50! px-5 w-full rounded-sm! border-gray-400! dark:border-[#444]! dark:bg-[#0f0f0f] dark:text-white dark:placeholder:text-gray-500"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="py-8 text-xl font-bold flex gap-x-3 items-center"
        >
          {loading ? t.contact.sending : t.contact.send_message_button}
          <FiSend />
        </Button>

        <p className="text-center flex gap-x-3 items-center justify-center text-md leading-8 text-gray-600 dark:text-gray-400 ">
          <CiLock />
          {t.contact.note}
        </p>
      </form>
    </div>
  );
}
