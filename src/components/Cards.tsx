"use client";
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
    <div className="convenio-card">
      <div className="convenio-img-wrap">
        <Image
          height={300}
          width={300}
          src={logo}
          alt={name}
          className="convenio-img"
        />
      </div>
      <div className="convenio-content">
        <h3>{name}</h3>
        <p style={{ color: "var(--text-main)", marginBottom: "1rem" }}>{desc}</p>
        <p style={{ fontSize: "0.875rem", fontStyle: "italic", color: "var(--text-muted)", marginBottom: "1rem" }}>{extra}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--c-primary)", fontWeight: "600", textDecoration: "none" }}
        >
          Conocer más institucionalmente →
        </a>
      </div>
    </div>
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
    <div className="clean-card" style={{ textAlign: "center" }}>
      <span className="stat-value">{value}</span>
      <h4 className="stat-label">{label}</h4>
      <p className="stat-desc">{description}</p>
    </div>
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
    <div className="clean-card">
      <div className="icon-box">
        {icon}
      </div>
      <h3 style={{ fontSize: "1.25rem", color: "var(--text-dark)", marginBottom: "0.75rem" }}>{title}</h3>
      <p style={{ color: "var(--text-main)", lineHeight: "1.6" }}>{desc}</p>
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
    <div className="testimonial-card">
      <p className="testimonial-quote">&quot;{quote}&quot;</p>
      <div className="testimonial-author">
        <Image
          src={image}
          height={100}
          width={100}
          alt={name}
          className="testimonial-img"
        />
        <div>
          <strong style={{ display: "block", color: "var(--c-primary)" }}>{name}</strong>
          <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{age}</span>
        </div>
      </div>
    </div>
  );
}
