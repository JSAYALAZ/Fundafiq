"use client";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  HeartPulse,
  Droplets,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";

import {
  ConvenioCard,
  StatCard,
  SystemCard,
  TestimonialCard,
} from "@/src/components/Cards";
import Image from "next/image";

const DISEASE_SYSTEMS = [
  {
    icon: <Stethoscope className="w-6 h-6 text-teal-600" />,
    title: "Pulmones",
    desc: "Causa infecciones respiratorias frecuentes, tos crónica y daño pulmonar progresivo.",
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6 text-teal-600" />,
    title: "Sistema Digestivo",
    desc: "Dificulta la digestión de alimentos, causa malabsorción y desnutrición.",
  },
  {
    icon: <HeartPulse className="w-6 h-6 text-teal-600" />,
    title: "Sistema Endocrino",
    desc: "Puede generar diabetes relacionada con la FQ por daño pancreático progresivo.",
  },
  {
    icon: <Droplets className="w-6 h-6 text-teal-600" />,
    title: "Glándulas Sudoríparas",
    desc: "Produce sudor excesivamente salado; base del test diagnóstico.",
  },
];

const CONVENIOS = [
  {
    logo: "/hvcm.png",
    name: "Hospital Vicente Corral Moscoso",
    desc: "Clínica especializada en FQ en Cuenca, atención médica integral pediátrica.",
    extra: "Colaboración en equipamiento y terapias con apoyo institucional.",
    link: "#",
  },
  {
    logo: "/bridge-of-hope.png",
    name: "CF Bridge of Hope",
    desc: "Acceso a tratamientos avanzados en EE.UU., como trasplantes y moduladores CFTR.",
    extra: "Alianza internacional que extiende esperanza a pacientes críticos.",
    link: "#",
  },
];

const TESTIMONIOS = [
  {
    image: "/persona.jpg",
    name: "Andrés Villacís",
    age: "40",
    quote:
      "Me dijeron que no viviría más de 3 años tras mi diagnóstico. Han pasado 16. Lucho por motivar a otros con alegría y fe.",
  },
  {
    image: "/persona.jpg",
    name: "María Gracia",
    age: "15",
    quote:
      "La FQ me quitó dos hermanos, pero yo sigo adelante por ellos. Amo bailar y sueño con ser veterinaria.",
  },
];

export default function LandingPage() {
  return (
    <div className="font-sans text-slate-800 bg-gray-50 scroll-smooth">
      {/* HERO */}
      <header
        className="flex flex-col items-end justify-center bg-cover md:bg-auto bg-center md:bg-left bg-no-repeat h-screen relative transition-opacity"
        style={{ backgroundImage: "url('/font.png')" }}
      >
        <span className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-white pointer-events-none w-3/5" />

        <div className="flex flex-col items-center h-screen justify-center w-full md:w-2/5  bg-none md:bg-teal-50 text-center">
          <Image
            src="/logo.jpg"
            height={"100"}
            width={"100"}
            alt="Logo FUNDAFIQ"
            className="w-32 md:w-48 drop-shadow-xl"
          />
          <motion.h1
            className="mt-6 text-4xl md:text-5xl font-extrabold text-black tracking-tight"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Fundación FUNDAFIQ Ecuador
          </motion.h1>
          <p className="mt-3 text-lg md:text-xl text-slate-700 max-w-xl">
            Brindamos esperanza, atención médica y apoyo emocional a pacientes
            con Fibrosis Quística.
          </p>
          <motion.a
            href="#contacto"
            className="mt-6 px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-md"
            whileHover={{ y: -2 }}
          >
            ¡Únete como voluntario!
          </motion.a>
        </div>
      </header>

      {/* ESTADÍSTICAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-5xl">
          <StatCard
            label="Pacientes Activos"
            value="45"
            description="Niños y jóvenes diagnosticados con FQ reciben apoyo continuo."
          />
          <StatCard
            label="Años de Servicio"
            value="13"
            description="Desde 2012 mejorando vidas en el Austro del Ecuador."
          />
          <StatCard
            label="Voluntarios"
            value="28"
            description="Profesionales y estudiantes comprometidos con nuestra causa."
          />
        </div>
      </section>

      {/* FIBROSIS QUÍSTICA */}
      <section id="fibrosis-quistica" className="py-20 bg-teal-50">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-teal-700 text-center mb-8">
            ¿Qué es la Fibrosis Quística?
          </h2>
          <p className="text-lg text-slate-700 mb-6 text-justify">
            La Fibrosis Quística (FQ) es una enfermedad genética, crónica y
            potencialmente mortal que afecta principalmente a pulmones, sistema
            digestivo y glándulas sudoríparas. Es causada por mutaciones en el
            gen CFTR, lo que provoca secreciones espesas que obstruyen órganos
            vitales.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {DISEASE_SYSTEMS.map((sys) => (
              <SystemCard key={sys.title} {...sys} />
            ))}
          </div>
        </div>
      </section>

      {/* CONVENIOS */}
      <section id="convenios" className="py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-10">
            Nuestros Convenios
          </h2>
          <div className="space-y-6">
            {CONVENIOS.map((c) => (
              <ConvenioCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-20 bg-teal-50">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-10">
            Historias de Vida
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIOS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">
            ¿Dónde estamos?
          </h2>
          <div className="w-full h-64 overflow-hidden rounded-2xl shadow-md">
            <iframe
              title="Mapa FUNDAFIQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.51366961289!2d-79.00208889999999!3d-2.9001284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cce1819ba880f5%3A0x4a90f8427c6e1ca1!2sGran%20Colombia%2011-46%2C%20Cuenca%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1717989990000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          <p className="mt-4 flex justify-center items-center gap-2 text-slate-600">
            <MapPin className="w-5 h-5 text-teal-600" /> Gran Colombia 11‑46 y
            General Torres, Cuenca – Ecuador
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <footer id="contacto" className="py-16 bg-teal-700 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-semibold mb-6">Contáctanos</h2>
          <div className="flex flex-col md:flex-row justify-around items-start gap-8 text-left">
            <div>
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4" /> Datos de contacto
              </h3>
              <ul className="space-y-1">
                <li>Tel: +593 99 912 1872</li>
                <li>Email: fundafiq.cuenca@hotmail.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Síguenos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-sm text-white/80">
            © {new Date().getFullYear()} Fundación FUNDAFIQ | José Ayala. Todos
            los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
