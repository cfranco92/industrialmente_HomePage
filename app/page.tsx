import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import styles from "./page.module.css";

const siteUrl = "https://www.industrialmente.co";

const businessLines = [
  {
    title: "Division de quimicos e hidrocarburos",
    description:
      "Representacion comercial y gestion comercial para hidrocarburos liquidos y operaciones relacionadas a nivel nacional.",
    image: "/images/sky.jpeg",
    href: "https://skyfuelsandminerals.com/",
    linkLabel: "Visitar sitio asociado",
    tone: "light",
  },
  {
    title: "Transmisiones industriales",
    description:
      "Distribucion de motores, motoreductores, motofrenos y variadores de velocidad para entornos industriales.",
    image: "/images/transmisiones.png",
    href: "/docs/TRAINCOL.pdf",
    linkLabel: "Abrir brochure PDF",
    tone: "dark",
  },
  {
    title: "Soldaduras y proyectos industriales",
    description:
      "Suministro de soldaduras y fabricacion de equipos como unidades hidraulicas, tanques y filtros.",
    image: "/images/Proyectos industriales.png",
    href: "/docs/MYM.pdf",
    linkLabel: "Consultar catalogo PDF",
    tone: "sand",
  },
  {
    title: "Linea de embotellado y plastico",
    description:
      "Venta y montaje de lineas completas de envasado para productos liquidos, pastosos y solidos.",
    image: "/images/mym.png",
    href: "/docs/MYM.pdf",
    linkLabel: "Ver documento tecnico",
    tone: "light",
  },
];

const pillars = [
  {
    title: "Quienes somos",
    text: "Somos una compania dedicada a la representacion comercial de empresas que suministran productos y equipos industriales.",
  },
  {
    title: "Mision",
    text: "Agregar valor a las companias representadas desarrollando soluciones efectivas para la industria.",
  },
  {
    title: "Vision",
    text: "Ser la mejor opcion para el desarrollo de las soluciones industriales.",
  },
];

const capabilities = [
  {
    title: "Representacion comercial",
    text: "Conectamos marcas y soluciones con oportunidades reales dentro del sector industrial.",
  },
  {
    title: "Suministro de equipos",
    text: "Articulamos productos, equipos y documentacion para acelerar decisiones tecnicas y comerciales.",
  },
  {
    title: "Acompanamiento de proyecto",
    text: "Abrimos una conversacion clara desde el requerimiento inicial hasta la identificacion de la solucion.",
  },
];

const focusAreas = [
  "Productos industriales",
  "Equipos industriales",
  "Medellin, Antioquia",
  "Soluciones para la industria",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Industrialmente",
  url: siteUrl,
  logo: `${siteUrl}/brand/logo-industrialmente.png`,
  email: "info@industrialmente.co",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cra 52 # 9 a 25",
    addressLocality: "Medellin",
    addressRegion: "Antioquia",
    addressCountry: "CO",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@industrialmente.co",
      telephone: "+57-4-322-5356",
      areaServed: "CO",
      availableLanguage: ["es"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@industrialmente.co",
      telephone: "+57-316-529-2704",
      areaServed: "CO",
      availableLanguage: ["es"],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroBackdrop} />
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.kicker}>Industrialmente</span>
                <h1 className={styles.heroTitle}>
                  Desarrollamos conexiones comerciales y soluciones para la
                  industria.
                </h1>
                <p className={styles.heroLead}>
                  Nueva propuesta digital para una compania enfocada en
                  representacion comercial, equipos industriales y lineas de
                  negocio con vocacion tecnica.
                </p>
                <div className={styles.tagRow}>
                  {focusAreas.map((item) => (
                    <span key={item} className={styles.tag}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className={styles.actions}>
                  <Link href="#contacto" className={styles.primaryAction}>
                    Iniciar conversacion
                  </Link>
                  <Link href="#lineas" className={styles.secondaryAction}>
                    Explorar lineas de negocio
                  </Link>
                </div>
              </div>

              <div className={styles.heroPanel}>
                <div className={styles.logoFrame}>
                  <Image
                    src="/brand/logo-industrialmente.png"
                    alt="Logo de Industrialmente"
                    width={900}
                    height={336}
                    priority
                    className={styles.logo}
                  />
                </div>

                <div className={styles.heroNotes}>
                  <article className={styles.noteCard}>
                    <span className={styles.noteLabel}>Base actual</span>
                    <p>
                      Se conserva el contenido disponible y se reorganiza en una
                      experiencia mas clara, contemporanea y preparada para
                      crecer.
                    </p>
                  </article>
                  <article className={styles.noteCardAccent}>
                    <span className={styles.noteLabel}>Contacto</span>
                    <p>
                      Formulario sin backend que prepara un correo completo en
                      la aplicacion del visitante y mantiene el sitio 100%
                      estatico.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.storySection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Perfil</span>
              <h2>Una base comercial con enfoque industrial.</h2>
              <p>
                Sin inventar una narrativa corporativa nueva, la propuesta
                ordena el mensaje de Industrialmente alrededor de tres ideas
                claras: quienes son, que buscan y como agregan valor.
              </p>
            </div>

            <div className={styles.storyGrid}>
              {pillars.map((pillar) => (
                <article key={pillar.title} className={styles.storyCard}>
                  <span className={styles.cardIndex}>{pillar.title}</span>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lineas" className={styles.businessSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeaderOnDark}>
              <span className={styles.sectionEyebrow}>Lineas de negocio</span>
              <h2>Cuatro frentes para conversar con la industria.</h2>
              <p>
                El sitio nuevo prioriza una lectura rapida: cada linea resume
                su alcance y mantiene acceso a los documentos ya existentes
                donde aplican.
              </p>
            </div>

            <div className={styles.businessGrid}>
              {businessLines.map((line) => (
                <article
                  key={line.title}
                  className={`${styles.businessCard} ${styles[`tone${line.tone.charAt(0).toUpperCase() + line.tone.slice(1)}`]}`}
                >
                  <div className={styles.businessImageWrap}>
                    <Image
                      src={line.image}
                      alt={line.title}
                      fill
                      className={styles.businessImage}
                      sizes="(max-width: 899px) 100vw, 50vw"
                    />
                  </div>
                  <div className={styles.businessBody}>
                    <h3>{line.title}</h3>
                    <p>{line.description}</p>
                    <Link
                      href={line.href}
                      className={styles.cardLink}
                      target={
                        line.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        line.href.startsWith("http")
                          ? "noreferrer noopener"
                          : undefined
                      }
                    >
                      {line.linkLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.capabilitiesSection}>
          <div className={styles.container}>
            <div className={styles.capabilitiesIntro}>
              <span className={styles.sectionEyebrow}>Como aportamos valor</span>
              <h2>
                La nueva interfaz deja de parecer una plantilla y pasa a
                explicar mejor el rol de la empresa.
              </h2>
            </div>

            <div className={styles.capabilitiesGrid}>
              {capabilities.map((item) => (
                <article key={item.title} className={styles.capabilityCard}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactLayout}>
              <div className={styles.contactCopy}>
                <span className={styles.sectionEyebrow}>Contacto</span>
                <h2>Cuente su necesidad y abrimos la conversacion.</h2>
                <p>
                  El sitio conserva una experiencia guiada para contacto, pero
                  ahora abre el correo del visitante con el mensaje ya armado
                  para mantener un despliegue gratuito en Firebase Hosting.
                </p>

                <div className={styles.contactMeta}>
                  <div>
                    <span className={styles.metaLabel}>Correo</span>
                    <a href="mailto:info@industrialmente.co">
                      info@industrialmente.co
                    </a>
                  </div>
                  <div>
                    <span className={styles.metaLabel}>Telefonos</span>
                    <a href="tel:+5743225356">+57 (4) 322 53 56</a>
                    <a href="tel:+573165292704">+57 (316) 529-2704</a>
                  </div>
                  <div>
                    <span className={styles.metaLabel}>Ubicacion</span>
                    <p>Cra 52 # 9 a 25, Medellin - Antioquia</p>
                  </div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.siteFooter}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              <div className={styles.footerBrand}>
                <span className={styles.footerKicker}>Industrialmente</span>
                <p className={styles.footerLead}>
                  Representacion comercial, equipos industriales y contacto
                  directo para conversaciones tecnicas y comerciales.
                </p>
              </div>

              <div className={styles.footerColumn}>
                <span className={styles.footerTitle}>Navegacion</span>
                <Link href="#lineas" className={styles.footerLink}>
                  Lineas de negocio
                </Link>
                <Link href="#contacto" className={styles.footerLink}>
                  Contacto
                </Link>
              </div>

              <div className={styles.footerColumn}>
                <span className={styles.footerTitle}>Documentos</span>
                <Link href="/docs/TRAINCOL.pdf" className={styles.footerLink}>
                  Brochure Traincol
                </Link>
                <Link href="/docs/MYM.pdf" className={styles.footerLink}>
                  Catalogo MYM
                </Link>
              </div>

              <div className={styles.footerColumn}>
                <span className={styles.footerTitle}>Contacto</span>
                <a
                  href="mailto:info@industrialmente.co"
                  className={styles.footerLink}
                >
                  info@industrialmente.co
                </a>
                <a href="tel:+5743225356" className={styles.footerLink}>
                  +57 (4) 322 53 56
                </a>
                <span className={styles.footerMeta}>
                  Cra 52 # 9 a 25, Medellin
                </span>
              </div>
            </div>

            <div className={styles.footerBottom}>
              <span>Industrialmente</span>
              <span>Base nueva en Next.js con despliegue estatico en Firebase</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
