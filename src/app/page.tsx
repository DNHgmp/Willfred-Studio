import {
  ArrowUpRight,
  AtSign,
  Camera,
  Mail,
  MessageCircle,
  Music2,
  Phone,
  UsersRound,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { contactLinks } from "@/data/portfolio";

const iconByName = {
  whatsapp: MessageCircle,
  instagram: Camera,
  facebook: UsersRound,
  tiktok: Music2,
  email: Mail,
  phone: Phone,
} as const;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <div className="page-content">
        <div className="content-wrap">
          <PortfolioGallery />
        </div>

        <div className="section-divider" aria-hidden="true">
          <span>W.</span>
          <i>SOBRE EL FOTÓGRAFO</i>
        </div>

        <section className="about-section" id="sobre-mi">
          <div className="content-wrap about-inner">
            <div className="about-portrait" role="img" aria-label="Espacio reservado para el retrato de Willfred">
              <span>W</span>
              <small>WILLFRED</small>
            </div>
            <div className="about-copy">
              <p className="eyebrow">UNA MIRADA PERSONAL</p>
              <h2>Sobre mí</h2>
              <p className="about-lead">La fotografía es mi forma de guardar lo que el tiempo no repite.</p>
              <p className="about-body">
                Soy Willfred. Me gusta trabajar con calma, observar la luz y encontrar esos
                gestos espontáneos que hacen única cada historia. Mi intención es que cada
                imagen se sienta cercana, honesta y hecha para durar.
              </p>
              <a className="text-link" href="#contacto">Conversemos sobre tu sesión <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="content-wrap contact-wrap">
            <div className="contact-heading">
              <p className="eyebrow">HABLEMOS DE TU HISTORIA</p>
              <h2>Un momento.<br /><span>Para siempre.</span></h2>
              <p className="contact-intro">Cuéntame qué tienes en mente. Me encantará ayudarte a crear imágenes que se sientan tuyas.</p>
              <a className="booking-button" href="mailto:hola@willfredstudio.com?subject=Quiero%20reservar%20una%20sesión">
                Reservar una sesión <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>

            <div className="contact-details">
              <p className="contact-details-label">ENCUÉNTRAME EN</p>
              <div className="contact-grid">
                {contactLinks.map(({ label, href, icon }) => {
                  const Icon = iconByName[icon];
                  const isExternal = href.startsWith("https://");
                  return (
                    <a
                      className="contact-item"
                      href={href}
                      key={label}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                    >
                      <span className="contact-icon"><Icon size={18} strokeWidth={1.5} aria-hidden="true" /></span>
                      <span>{label}</span>
                      <ArrowUpRight size={14} className="contact-arrow" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
              <a className="contact-email" href="mailto:hola@willfredstudio.com"><AtSign size={16} aria-hidden="true" /> hola@willfredstudio.com</a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="content-wrap footer-inner">
          <a className="footer-wordmark" href="#inicio">W<span>.</span> STUDIO</a>
          <p>© {new Date().getFullYear()} Willfred Studio Photography</p>
          <a href="#inicio" className="back-to-top">VOLVER ARRIBA ↑</a>
        </div>
      </footer>
    </main>
  );
}