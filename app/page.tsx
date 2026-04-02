"use client";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  HeartPulse,
  Droplets,
  Stethoscope,
  UtensilsCrossed,
  MessageCircle,
  UserPlus
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
    icon: <Stethoscope size={28} />,
    title: "Vías Respiratorias",
    desc: "Infecciones frecuentes, tos crónica y dificultad para respirar debido a la acumulación de moco espeso.",
  },
  {
    icon: <UtensilsCrossed size={28} />,
    title: "Sistema Digestivo",
    desc: "Obstrucción en el páncreas que impide la correcta absorción de nutrientes, causando desnutrición.",
  },
  {
    icon: <HeartPulse size={28} />,
    title: "Retos Diarios",
    desc: "Se requieren nebulizaciones continuas, fisioterapia respiratoria y enzimas pancreáticas en cada comida.",
  },
  {
    icon: <Droplets size={28} />,
    title: "El Sudor Salado",
    desc: "La prueba del sudor es el estándar de oro para el diagnóstico temprano de esta condición genética.",
  },
];

const CONVENIOS = [
  {
    logo: "/hvcm.png",
    name: "Hospital Vicente Corral Moscoso",
    desc: "Referencia para diagnóstico y tratamiento oportuno en la zona sur del Ecuador. Colaboramos estrechamente con el departamento de Neumología Pediátrica para asegurar la atención médica pública continua.",
    extra: "Cuidados médicos fundamentales y derivación.",
    link: "#",
  },
  {
    logo: "/bridge-of-hope.png",
    name: "CF Bridge of Hope",
    desc: "Organización internacional que colabora brindando esperanza y acceso a tratamientos o evaluaciones complejas en Estados Unidos, incluyendo posibles candidatos a trasplante pulmonar.",
    extra: "Alianza de apoyo internacional médico.",
    link: "#",
  },
];

const TESTIMONIOS = [
  {
    image: "/persona.jpg",
    name: "Andrés Villacís",
    age: "40",
    quote:
      "El diagnóstico temprano cambió mi vida. Llegar a FUNDAFIQ me dio la estructura médica y el apoyo emocional que necesitaba en mi adolescencia. Hoy lucho por transmitir esa esperanza.",
  },
  {
    image: "/persona.jpg",
    name: "Familia Cárdenas",
    age: "Padres de paciente",
    quote:
      "Sentíamos mucho miedo cuando diagnosticaron a nuestra hija. La fundación no solo nos guió en los trámites para las medicinas, sino que nos abrazó cuando más solos nos sentíamos.",
  },
];

export default function LandingPage() {
  const WP_NUMBER = "593999121872";
  const WP_LINK = `https://wa.me/${WP_NUMBER}?text=Hola,%20busco%20informaci%C3%B3n%20y%20apoyo%20sobre%20Fibrosis%20Qu%C3%ADstica.`;

  return (
    <>
      {/* HERO SECTION - MEDICAL/TRUST */}
      <header className="hero">
        <div className="container">
          <div className="hero-content">
            <Image
              src="/logo.jpg"
              height={100}
              width={100}
              alt="Logo FUNDAFIQ"
              className="hero-logo"
              unoptimized={true}
            />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hero-title"
            >
              No estás solo frente a la Fibrosis Quística.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-subtitle"
            >
              <strong>FUNDAFIQ</strong> es tu guía y soporte en Cuenca, Ecuador. Trabajamos por el diagnóstico temprano, acceso a tratamientos y el bienestar integral de los pacientes del centro-sur del país.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <a href={WP_LINK} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={20} /> Orientación por WhatsApp
              </a>
              <a href="#como-te-ayudamos" className="btn" style={{ backgroundColor: "var(--c-white)", color: "var(--c-primary)", border: "1px solid #D1D5DB" }}>
                Conocer más
              </a>
            </motion.div>
          </div>
        </div>
        <div className="hero-bg-container">
          <Image
            src="/hero-medical.png"
            alt="Atención médica profesional y compasiva"
            width={1200}
            height={800}
            className="hero-img"
            priority={true}
            unoptimized={true}
          />
        </div>
      </header>

      {/* ESTADÍSTICAS RÁPIDAS (Confianza Institucional) */}
      <section className="bg-white" style={{ padding: "3rem 0", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container grid-3">
          <StatCard
            label="Pacientes Atendidos"
            value="45+"
            description="Llevando un control activo en articulación médica pública."
          />
          <StatCard
            label="Años en Ecuador"
            value="13"
            description="Más de una década educando e interviniendo asertivamente."
          />
          <StatCard
            label="Convenios de Salud"
            value="Alianzas"
            description="Nacionales e internacionales para optimizar recursos."
          />
        </div>
      </section>

      {/* SECCIÓN NUEVOS PACIENTES - ¿CÓMO TE AYUDAMOS? */}
      <section id="como-te-ayudamos" className="section bg-light-blue">
        <div className="container grid-2">
          <div>
            <h2 className="section-title" style={{ textAlign: "left" }}>¿Recibiste un diagnóstico reciente?</h2>
            <p className="hero-subtitle" style={{ color: "var(--text-main)", marginBottom: "2rem" }}>
              Entendemos el miedo y la incertidumbre. En Ecuador, lidiar con el acceso a exámenes (como la prueba de sudor) y medicinas de alto costo es un desafío inmenso, pero **esta fundación existe para acompañarte.**
            </p>
            <a href={WP_LINK} target="_blank" rel="noreferrer" className="btn btn-primary">
              <UserPlus size={20} /> Contáctanos como Nuevo Paciente
            </a>
          </div>
          
          <div className="step-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Contacto Inicial Breve</h3>
                <p>Escríbenos. Te escuchamos y analizamos en qué estado clínico o legal te encuentras respecto al diagnóstico de tu familiar.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Derivación al Especialista</h3>
                <p>Facilitamos el puente con el área de Neumología Pediátrica del <strong>Hospital Vicente Corral Moscoso</strong> para asegurar tu atención pública.</p>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Seguimiento y Red de Apoyo</h3>
                <p>Te unimos a nuestra comunidad, ayudándote en los trámites para medicamentos, enseñándote terapias respiratorias y blindando tus derechos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIBROSIS QUÍSTICA EN ECUADOR */}
      <section id="fibrosis-quistica" className="section bg-white">
        <div className="container">
          <h2 className="section-title">Sobre la Fibrosis Quística</h2>
          <p className="section-subtitle">
            La Fibrosis Quística (FQ) es una condición genética y crónica. Su temprano diagnóstico hace toda la diferencia en la calidad y expectativa de vida. En FUNDAFIQ, trabajamos incansablemente por visibilizar esta enfermedad en la salud pública ecuatoriana.
          </p>
          <div className="grid-2">
            {DISEASE_SYSTEMS.map((sys) => (
              <SystemCard key={sys.title} {...sys} />
            ))}
          </div>
        </div>
      </section>

      {/* CONVENIOS INSTITUCIONALES */}
      <section id="convenios" className="section bg-light-blue">
        <div className="container">
          <h2 className="section-title">Nuestra Red Médica</h2>
          <p className="section-subtitle">
            Articulamos esfuerzos con la red de salud pública en Cuenca y fundaciones del extranjero para proveer la plataforma de atención más completa posible para el paciente del sur del país.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: "900px", margin: "0 auto" }}>
            {CONVENIOS.map((c) => (
              <ConvenioCard key={c.name} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="section bg-white">
        <div className="container text-center">
          <h2 className="section-title">Nuestra Comunidad</h2>
          <p className="section-subtitle">Historias de familias que han recorrido este camino y viven hoy con fe.</p>
          <div className="grid-2" style={{ maxWidth: "1000px", margin: "0 auto" }}>
            {TESTIMONIOS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="section bg-light-blue">
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="section-title">Visítanos en Cuenca</h2>
          <p className="section-subtitle">Recuerda comunicarte previamente para agendar una entrevista con el paciente y confirmar disponibilidad médica en la zona.</p>
          <div className="map-container">
            <iframe
              title="Mapa FUNDAFIQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.51366961289!2d-79.00208889999999!3d-2.9001284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cce1819ba880f5%3A0x4a90f8427c6e1ca1!2sGran%20Colombia%2011-46%2C%20Cuenca%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1717989990000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <footer id="contacto" className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-col" style={{ maxWidth: "350px" }}>
              <Image src="/logo.jpg" alt="Logo FUNDAFIQ" width={60} height={60} style={{ borderRadius: "8px", marginBottom: "1rem" }} unoptimized={true} />
              <p>Tu familia de apoyo para la Fibrosis Quística en Cuenca, Ecuador.</p>
            </div>
            
            <div className="footer-col">
              <h3><Phone size={20} /> Canal Directo</h3>
              <ul>
                <li><strong>WhatsApp:</strong> +593 99 912 1872</li>
                <li><strong>Email:</strong> fundafiq.cuenca@hotmail.com</li>
              </ul>
              <a href={WP_LINK} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ marginTop: "1rem" }}>
                Enviar Mensaje Ahora
              </a>
            </div>

            <div className="footer-col">
              <h3><MapPin size={20}/> Dirección</h3>
              <ul>
                <li>Gran Colombia 11‑46</li>
                <li>y General Torres</li>
                <li>Cuenca – Ecuador</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Fundación FUNDAFIQ | Cuenca, Ecuador. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
