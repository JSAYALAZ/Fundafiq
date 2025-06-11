"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { JSX } from "react";

export function ConvenioCard({
  logo,
  name,
  desc,
  extra,
  link,
}: {
  logo: string;
  name: string;
  desc: string;
  extra: string;
  link: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row shadow-md"
    >
      <Image
        height={"100"}
        width={"100"}
        src={logo}
        alt={name}
        className="w-full md:w-48 object-contain bg-gray-50 p-4"
      />
      <div className="p-6 flex-1">
        <h3 className="text-xl font-semibold text-slate-800">{name}</h3>
        <p className="text-slate-600 mt-2 text-sm">{desc}</p>
        <p className="text-slate-500 mt-1 text-xs italic">{extra}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-teal-600 hover:underline mt-3 inline-block text-sm"
        >
          Conocer más
        </a>
      </div>
    </motion.div>
  );
}

export function StatCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-lg px-6 py-8 flex flex-col items-center"
    >
      <p className="text-4xl font-extrabold text-teal-600">{value}</p>
      <h4 className="mt-2 text-lg font-semibold text-slate-800">{label}</h4>
      <p className="mt-1 text-sm text-slate-500 text-center">{description}</p>
    </motion.div>
  );
}
export function SystemCard({
  icon,
  title,
  desc,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
      {icon}
      <div>
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        <p className="text-slate-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export function TestimonialCard({
  image,
  name,
  age,
  quote,
}: {
  image: string;
  name: string;
  age: string;
  quote: string;
}) {
  return (
    <motion.blockquote
      className="relative bg-white p-6 rounded-2xl shadow-md border-t-4 border-teal-500 text-left flex gap-4"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Image
        src={image}
        height={"100"}
        width={"100"}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
      />
      <div>
        <p className="text-slate-700 italic">“{quote}”</p>
        <footer className="mt-2 text-slate-600 font-medium">
          — {name}, {age} años
        </footer>
      </div>
    </motion.blockquote>
  );
}
