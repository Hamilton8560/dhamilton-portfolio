import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://dhamilton.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "David Hamilton | Software Developer El Salvador — AI, Websites & Videography",
    template: "%s | David Hamilton",
  },
  description:
    "Full-stack developer based in El Salvador building custom software, AI agents, websites, and videography for blue collar businesses and fitness brands. USMC veteran, Georgetown MS. $100–$300/mo. Book a free consultation.",
  keywords: [
    // Core identity
    "David Hamilton", "David Hamilton developer", "David Hamilton El Salvador",
    // Software services
    "software developer El Salvador", "custom software development",
    "full stack developer", "web developer El Salvador",
    "freelance developer El Salvador", "nearshore software development",
    // AI & automation
    "AI agents for business", "AI automation small business",
    "Telegram bot developer", "AI-powered business tools",
    "custom AI solutions", "business automation software",
    // Blue collar / industrial
    "software for trucking companies", "oil and gas software",
    "fleet management software", "manufacturing software",
    "blue collar business software", "dispatch software",
    "DOT compliance software", "field service management",
    "small business automation", "invoicing software blue collar",
    // Fitness & wellness
    "fitness app developer", "gym management software",
    "fitness brand app", "coaching platform developer",
    "fitness influencer app", "personal trainer software",
    "workout app development", "nutrition app developer",
    // Websites & SEO
    "website developer El Salvador", "SEO website small business",
    "sales funnel developer", "lead generation website",
    "small business website", "landing page developer",
    // Videography
    "videography El Salvador", "brand videography",
    "gym videography", "fitness content creation",
    "social media video production", "video marketing El Salvador",
    "brand content El Salvador", "professional video production Latin America",
    // Location
    "El Salvador developer", "El Salvador outsourcing",
    "nearshore development Central America", "American developer El Salvador",
    // Credentials
    "USMC veteran developer", "Georgetown developer",
    "veteran software engineer",
  ],
  authors: [{ name: "David Hamilton", url: siteUrl }],
  creator: "David Hamilton",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "David Hamilton — Developer & Product Builder",
    title: "David Hamilton | Software, AI & Videography — El Salvador",
    description:
      "I build custom software, AI agents, websites, and video content for blue collar businesses and fitness brands. Based in El Salvador. USMC veteran. Georgetown MS. From $100/mo.",
    images: [
      {
        url: "/images/americaniron-full.jpg",
        width: 1200,
        height: 630,
        alt: "David Hamilton — Full-Stack Developer & Product Builder based in El Salvador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Hamilton | Software, AI & Videography — El Salvador",
    description:
      "Custom software, AI agents, websites & video content for blue collar businesses and fitness brands. Based in El Salvador. From $100/mo.",
    images: ["/images/americaniron-full.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "David Hamilton",
      url: siteUrl,
      image: `${siteUrl}/images/david-ironlife.jpeg`,
      jobTitle: "Full-Stack Developer & Product Builder",
      description:
        "USMC veteran and Georgetown MS graduate building custom software, AI agents, and video content for blue collar businesses and fitness brands from El Salvador.",
      knowsAbout: [
        "Full-Stack Development", "AI Agents", "React", "Next.js", "Node.js",
        "Python", "TypeScript", "Telegram Bots", "SEO", "Videography",
        "Fleet Management Software", "Gym Management Software",
        "Oil & Gas Software", "Manufacturing Software",
        "Fitness App Development", "Business Automation",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Maryland",
          department: "Computer Science",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Georgetown University",
          department: "IT Management",
        },
      ],
      memberOf: {
        "@type": "Organization",
        name: "United States Marine Corps",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "SV",
        addressLocality: "El Salvador",
      },
      sameAs: [
        "https://github.com/Hamilton8560",
        "https://linkedin.com/in/davidhamilton",
        "https://www.instagram.com/americanironsv/",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "David Hamilton — Software Development & Videography",
      url: siteUrl,
      image: `${siteUrl}/images/americaniron-full.jpg`,
      description:
        "Custom software development, AI automation, website design, and professional videography for blue collar businesses and fitness brands. Based in El Salvador with US-quality work at competitive rates.",
      priceRange: "$100–$300/mo",
      address: {
        "@type": "PostalAddress",
        addressCountry: "SV",
        addressLocality: "El Salvador",
      },
      founder: { "@id": `${siteUrl}/#person` },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "El Salvador" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sales Funnel & SEO Website",
              description:
                "Professional SEO-optimized website with lead capture, mobile-friendly design, and analytics. Built for blue collar businesses and fitness brands.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "100",
              priceCurrency: "USD",
              unitText: "monthly",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Admin & Automation Platform",
              description:
                "Full admin panel with automated scheduling, dispatch, invoicing, payment processing, and client management.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "150",
              priceCurrency: "USD",
              unitText: "monthly",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full Agentic AI Platform",
              description:
                "AI agents for sales, support, tax, and leads. Telegram bot interface. Mobile app for you and your clients. Full-office capacity with zero full-time hires.",
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "200",
              priceCurrency: "USD",
              unitText: "monthly",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Professional Videography & Brand Content",
              description:
                "Professional gym, product, and lifestyle video shoots. Social media reels, ads, and brand content produced in El Salvador at a fraction of US costs.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "David Hamilton — Developer & Product Builder",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
