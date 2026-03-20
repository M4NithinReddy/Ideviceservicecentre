import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: "website" | "article" | "product";
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  keywords?: string[];
  schema?: any[];
}

const SEO = ({
  title = "i Device Apple Service Centre | Expert Repairs in Hyderabad",
  description = "Premium Apple device service center in Hyderabad. Expert repairs for iPhone, MacBook, iPad, Apple Watch, and iMac with genuine parts and 6-month warranty. Visit our specialized micro-soldering lab today.",
  canonical = "https://ideviceservicecentre.vercel.app/",
  ogType = "website",
  ogImage = "/og-image.png",
  twitterCard = "summary_large_image",
  keywords = [
    "Apple Service Centre Hyderabad",
    "iPhone Repair Hyderabad",
    "MacBook Repair Hyderabad",
    "iPad Repair Hyderabad",
    "Apple Watch Repair Hyderabad",
    "iMac Repair Hyderabad",
    "Best Apple Service Hyderabad",
    "Punjagutta Apple Service",
    "Kompally Apple Service",
  ],
  schema = [],
}: SEOProps) => {
  const fullTitle = `${title}`;
  const keywordsString = keywords.join(", ");

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}

      {/* Global Local Business Schema (Always Present) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "i Device Apple Service Centre",
          "image": "https://ideviceservicecentre.vercel.app/og-image.png",
          "url": "https://ideviceservicecentre.vercel.app/",
          "telephone": "+91-XXXXXXXXXX", // Update with real phone
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Punjagutta & Kompally",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500082",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.4262,
            "longitude": 78.4522
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "20:00"
          },
          "sameAs": [
            "https://www.facebook.com/idevice",
            "https://www.instagram.com/idevice"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
